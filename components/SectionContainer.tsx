import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  id: string;
  full?: boolean;
  wide?: boolean;
}

const SectionContainer: FC<Props> = ({
  children,
  title,
  id,
  full = false,
  wide = false,
}) => {
  return (
    <div
      id={id}
      className={`flex flex-col items-center py-4 md:p-4 w-full  ${
        full ? "min-h-screen" : ""
      } ${wide ? "" : "px-3"}`}
    >
      <h3 className="text-xs font-medium text-center mb-8">{title}</h3>
      {children}
    </div>
  );
};

export default SectionContainer;
