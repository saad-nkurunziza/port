import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";
import ThemeSwitcher from "./ThemeSwitcher";

const NavMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bars2Icon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Menu Toggle button</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col gap-y-2 p-4">
        <DropdownMenuItem>
          <Link href="/projects">Projects</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/about_me">About Me</Link>
        </DropdownMenuItem>
        <Separator className="my-1" />
        <DropdownMenuItem>
          <ThemeSwitcher isSmall />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavMenu;
