import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  full?: boolean;
}

const SectionContainer: FC<Props> = ({ children, title, full = false }) => {
  return (
    <div
      className={`flex flex-col items-center py-4 md:p-4 w-full   ${
        full ? "min-h-screen" : ""
      } `}
    >
      <h3 className="text-xs font-bold text-center mb-8">{title}</h3>
      {children}
    </div>
  );
};

export default SectionContainer;
