import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { navLinks } from "@/lib/constants";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header
      className="px-4 py-2 fixed left-0 top-0 h-fit z-30 w-full dark:bg-glassmorphism
    backdrop-blur-lg shadow-sm dark:shadow-glassmorphism/75"
    >
      <div className="flex justify-beyween">
        <div className="flex gap-x-16 items-center w-full container mx-auto">
          <div className="flex gap-2 items-center">
            <h3 className="text-xl uppercase font-black">Saad</h3>
          </div>
          {/* <AsideBar /> */}
          {/*<div className="sm:flex gap-x-6 items-center hidden">
            {navLinks.map((link) => (
              <Button
                key={link.link}
                asChild
                variant="ghost"
                className="text-sm font-bold h-fit self-center hover:bg-muted/60 lowercase rounded-lg px-1.5 text-neutral-500"
              >
                <Link href={`#${link.path}`}>{link.link}</Link>
              </Button>
            ))}
          </div>*/}
        </div>
        <div className="flex space-x-8 items-center">
          <ThemeSwitcher />
          {/*<Button variant="ghost" size="icon" className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-languages"
            >
              <path d="m5 8 6 6" />
              <path d="m4 14 6-6 2-3" />
              <path d="M2 5h12" />
              <path d="M7 2h1" />
              <path d="m22 22-5-10-5 10" />
              <path d="M14 18h6" />
            </svg>
          </Button>*/}
        </div>
      </div>
    </header>
  );
}
