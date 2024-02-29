import { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex container flex-col gap-2 min-h-screen">
      <h3 className="font-black text-custom_primary text-2xl md:text-5xl mt-28 mb-4">
        Projects.
      </h3>
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
}
