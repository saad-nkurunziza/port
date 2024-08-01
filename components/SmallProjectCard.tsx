import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRightIcon, HashtagIcon } from "@heroicons/react/24/solid";
import { Card } from "./ui/card";
import { DatabaseIcon } from "./icons";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";
import GridPattern from "./ui/grid-pattern";
import {
  ArrowUpRight,
  GalleryThumbnails,
  Globe2Icon,
  GlobeIcon,
  WholeWordIcon,
} from "lucide-react";

interface Project {
  siteName: string;
  description: string;
  keywords: string[];
  tags: string[];
  // author: {
  //   name: string;
  // };
  to_live: {
    isLive: boolean;
    link_to_live: string;
  };
  to_repo: {
    isPublic: boolean;
    link_to_repo: string;
  };
  siteImagePath: string;
  index: number;
  hide?: boolean;
}

export default function SmallProjectCard({
  siteName,
  siteImagePath,
  tags,
  description,
  keywords,
  to_live,
  to_repo,
  hide = false,
  index,
}: Project) {
  return (
    <div
      className={`p-4 ${index === 1 || index === 6 ? "md:col-span-2" : ""}
 row-span-1 rounded-2xl  dark:shadow-[0_8px_16px_rgb(0_0_0/0.4)] shadow-[0_8px_16px_rgb(255_255_255/0.4)] bg-background border border-border group-hover:border-border transition duration-700 overflow-hidden`}
    >
      <div className=" relative z-40 ">
        <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2">
          <div className="flex  flex-1 w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>

          <div className="pt-4 flex flex-col space-y-2 md:space-y-3">
            <div className="flex gap-1">
              <Badge variant={"secondary"} className="text-xs">
                Next.js
              </Badge>
              <Badge variant={"secondary"} className="text-xs">
                Next.js
              </Badge>
              <Badge variant={"secondary"} className="text-xs">
                Next.js
              </Badge>
            </div>
            <div className="flex gap-2 items-center">
              <Link
                href={to_live.link_to_live}
                className="max-w-xs font-medium text-sm text-foreground"
              >
                {siteName}
              </Link>
              {/* <ArrowUpRight className="w-4 h-4" absoluteStrokeWidth /> */}
            </div>

            <div className=" font-normal">
              <span className="text-muted-foreground text-xs line-clamp-2 leading-5">
                {description}
              </span>
            </div>
            <div className="flex space-x-2">
              <div className="hidden underline underline-offset-4 md:flex gap-3 items-center w-fit text-xs">
                <WholeWordIcon className="w-2.5 h-2.5" />
                <span>Website</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
