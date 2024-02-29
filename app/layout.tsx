import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import { Providers } from "@/components/Providers";
export const metadata: Metadata = {
  title: "Saad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scrollbar-hidden select-none">
        <Providers attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
