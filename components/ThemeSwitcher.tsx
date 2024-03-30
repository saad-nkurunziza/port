"use client";

import * as React from "react";
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeSwitcher = ({ isSmall = false }: { isSmall?: boolean }) => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <div
        className=" gap-x-2 items-center flex dark:hidden md:cursor-pointer"
        onClick={() => setTheme("dark")}
      >
        <SunIcon
          className={`${
            isSmall ? "h-[1rem] w-[1rem]" : "h-[1.2rem] w-[1.2rem]"
          }`}
        />
        <h3 className={`${isSmall ? "block" : "hidden"}`}>Light theme</h3>
      </div>
      <div
        className="hidden gap-x-2 items-center dark:flex md:cursor-pointer"
        onClick={() => setTheme("light")}
      >
        <MoonIcon
          className={`${
            isSmall ? "h-[1rem] w-[1rem]" : "h-[1.2rem] w-[1.2rem]"
          }`}
        />
        <h3 className={`${isSmall ? "block" : "hidden"}`}>Dark theme</h3>
      </div>
    </>
  );
};
export default ThemeSwitcher;
