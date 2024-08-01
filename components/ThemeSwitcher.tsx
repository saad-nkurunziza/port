"use client";
import { useTheme } from "next-themes";
import {
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import { Button } from "./ui/button";

const ThemeSwitcher = ({ isSmall = false }: { isSmall?: boolean }) => {
  const { setTheme, theme } = useTheme();
  if (isSmall)
    return (
      <>
        <div
          className=" gap-x-2 items-center hidden dark:flex md:cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <SunIcon className={"h-[1rem] w-[1rem]"} />
          <h3>Light theme</h3>
        </div>
        <div
          className="flex gap-x-2 items-center dark:hidden md:cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon className={"h-[1rem] w-[1rem]"} />
          <h3>Dark theme</h3>
        </div>
      </>
    );
  return (
    <div className="p-1 border transition-all duration-75 border-border/70 bg-muted/40 backdrop-blur-lg flex gap-1 rounded-xl">
      <Button
        variant="ghost"
        className={`${
          theme === "system" ? "bg-muted hover:bg-muted" : "hover:bg-muted/85"
        } rounded-xl`}
        size={"icon"}
        onClick={() => setTheme("system")}
      >
        <ComputerDesktopIcon className={"h-[0.8rem] w-[0.8rem]"} />
      </Button>
      <Button
        variant="ghost"
        className={`${
          theme === "light" ? "bg-muted hover:bg-muted" : "hover:bg-muted/85"
        } rounded-xl`}
        size={"icon"}
        onClick={() => setTheme("light")}
      >
        <SunIcon className={"h-[0.8rem] w-[0.8rem]"} />
      </Button>
      <Button
        variant={"ghost"}
        className={`${
          theme === "dark" ? "bg-muted hover:bg-muted" : "hover:bg-muted/85"
        } rounded-xl`}
        size={"icon"}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon className={"h-[0.8rem] w-[0.8rem]"} />
      </Button>
    </div>
  );
};
export default ThemeSwitcher;
