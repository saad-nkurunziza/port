import { ReactNode } from "react";

export default function PageContainer({
  children,
  header,
}: {
  children: ReactNode;
  header: string;
}) {
  return (
    <div className="md:container px-1.5 flex flex-col py-8 gap-2 min-h-screen">
      <h3 className="font-black text-primary_overall px-1 py-1 text-3xl md:text-4xl mt-20 md:mt-28 mb-8">
        {header}.
      </h3>
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
}
