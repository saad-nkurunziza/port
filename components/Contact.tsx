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
  Icon: SVGIcon,
  link,
  className,
}: {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
  className?: string;
}) {
  return (
    <TooltipProvider key={title}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className={`rounded-xl px-2 bg-transparent relative ${className}`}
          >
            <Link
              target="_blank"
              className="absolute inset-0 z-10"
              href={`${link}`}
            >
              <span className="sr-only">{title}</span>
            </Link>
            <SVGIcon className="text-neutral-600 hover:text-neutral-400 text-2xl" />
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
