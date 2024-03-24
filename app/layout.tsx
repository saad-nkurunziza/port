import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import { Poppins } from "next/font/google";
export const metadata: Metadata = {
  title: "Saad",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`hide scroll select-none overflow-x-hidden ${poppins.className}`}
      >
        <Providers attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
