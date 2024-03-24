import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { navLinks } from "@/lib/constants";
import { Button } from "./ui/button";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <header
      className="px-4 py-2 fixed left-0 top-0 h-fit z-30 w-full dark:bg-glassmorphism
    backdrop-blur-lg shadow-sm dark:shadow-glassmorphism/75"
    >
      <div className="flex justify-between">
        <div className="flex gap-x-16 items-center w-full mx-auto">
          <Link href="/" className="text-xl uppercase font-black">
            Saad
          </Link>

          {/* <AsideBar /> */}
          <div className="sm:flex gap-x-6 items-center hidden">
            {navLinks.map((link) => (
              <Button
                key={link.link}
                asChild
                variant="ghost"
                className="text-sm font-bold h-fit self-center hover:bg-muted/60 hover:text-neutral-400 rounded-xl px-2.5 text-neutral-500"
              >
                <Link href={`/${link.path}`}>{link.link}</Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex space-x-8 items-center">
          <div className="hidden md:block">
            <ThemeSwitcher />
          </div>
          <div className="block md:hidden">
            <NavMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
