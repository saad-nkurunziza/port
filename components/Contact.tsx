import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";

function Contact({
  title,
  icon,
  link,
  className,
}: {
  title: string;
  icon: string;
  link: string;
  className?: string;
}) {
  return (
    <TooltipProvider key={title}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className={`rounded-full bg-transparent relative text-primary/70 ${className}`}
          >
            <Link className="absolute inset-0 z-10" href={`${link}`}>
              <span className="sr-only">{title}</span>
            </Link>
            <Image src={`/${icon}.svg`} width={28} height={28} alt="icon" />
            <span className="sr-only">{title}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default Contact;
