import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { navLinks } from "@/lib/constants";
import { Button } from "./ui/button";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <header className="px-4 py-1.5 fixed border-b left-0 top-0 h-fit z-50 w-full bg-background/50 backdrop-blur-sm">
      <div className="flex justify-between">
        <div className="flex gap-x-16 items-center w-full mx-auto">
          <Link href="/" className="text- uppercase font-medium">
            Saad
          </Link>

          <div className="sm:flex gap-x-8 items-center hidden">
            {navLinks.map((link) => (
              <Link
                key={link.link}
                href={`/${link.path}`}
                className="text-xs hover:text-emerald-500/70 text-muted-foreground"
              >
                {link.link}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex space-x-8 items-center">
          <div className="">
            <ThemeSwitcher />
          </div>
          {/* <div className="block md:hidden">
            <NavMenu />
          </div> */}
        </div>
      </div>
    </header>
  );
}
