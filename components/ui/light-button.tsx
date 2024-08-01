import { cn } from "@/lib/utils";
import React from "react";

const ShimmerButton = ({children}:{children: React.ReactNode}) => {
  return (
    <button
        className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-2 text-white bg-black dark:text-black"
      >
        {children}
        <div
          className={cn(
            "insert-0 absolute h-full w-full",
            " px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
            "transform-gpu transition-all duration-300 ease-in-out",
          )}
        />
        <div
          className=
            "absolute -z-20 bg-black rounded "
        />
      </button>
  )
}

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;
