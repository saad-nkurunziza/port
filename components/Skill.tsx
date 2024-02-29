import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

function Skill({
  title,
  icon,
  className,
}: {
  title: string;
  icon: string;
  className?: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className={`rounded-full bg-transparent relative text-primary/70 ${className}`}
          >
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

export default Skill;
