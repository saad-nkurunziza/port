import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CodeBracketSquareIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";

export const ToLiveButton = ({
  link,
  isLink = true,
}: {
  link: string;
  isLink?: boolean;
}) => {
  return (
    <Button
      variant={"link"}
      className={`${isLink ? "" : "hidden"} px-0 relative`}
    >
      <Link target="_blank" className="absolute inset-0 z-10" href={`${link}`}>
        <span className="sr-only">View</span>
      </Link>
      <div className="text-xs flex gap-x-2 items-center">
        <PlayCircleIcon className="h-5 w-5 text-primary/80" />
        <span className="text-primary/80">Live preview</span>
      </div>
    </Button>
  );
};
export const ToRepoButton = ({
  link,
  isLink = true,
}: {
  link: string;
  isLink?: boolean;
}) => {
  return (
    <Button
      variant={"outline"}
      className={`${
        isLink ? "flex" : "hidden"
      } px-3 text-xs gap-x-2 items-center relative`}
      size="sm"
    >
      <Link target="_blank" className="absolute inset-0 z-10" href={`${link}`}>
        <span className="sr-only">View</span>
      </Link>
      <div className="text-xs flex gap-x-2 items-center">
        <CodeBracketSquareIcon className="h-5 w-5 text-primary/80" />
        <span className="text-primary/80">Code repositry</span>
      </div>
    </Button>
  );
};
