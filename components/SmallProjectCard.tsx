import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HashtagIcon } from "@heroicons/react/24/solid";

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
}

export default function SmallProjectCard({
  siteName,
  siteImagePath,
  tags,
  description,
  keywords,
  to_live,
  to_repo,
}: Project) {
  return (
    <div className="overflow-hidden justify-start rounded-lg border bg-card text-card-foreground shadow flex flex-col min-h-[13rem] md:min-h-[17rem] group hover:*:transition-all hover:*:duration-300">
      <div className="w-full flex-shrink-0 shadow-md bg-neutral-100 dark:bg-neutral-900 relative md:h-[32%] h-[31%] ">
        <div className="flex justify-evenly md:gap-x-5 md:justify-center items-center w-full h-full ">
          <div className="absolute top-0 left-0 w-full -z-10 h-full bg-gradient-to-r from-background to-[rgba(0,0,0,0)]" />
          {tags.map((tag) => (
            <Button
              key={tag}
              variant="ghost"
              className="relative hover:bg-transparent text-primary/70"
            >
              <Image src={`/${tag}.svg`} width={28} height={28} alt="icon" />
            </Button>
          ))}
        </div>
        {/* <Image
          alt="Project Image"
          className="w-full"
          src={siteImagePath}
          fill
        /> */}
      </div>
      <div className="py-2 md:py-4 px-2.5 md:px-6 w-full group-hover:border-primary group-hover:text-primary">
        <div>
          <h3 className="text-xs md:text-base text-muted-foreground/80 group-hover:text-primary/90 font-semibold">
            {siteName}
          </h3>
          <p className="mt-2 leading-5 md:text-xs text-[10px] text-muted-foreground/60 group-hover:text-muted-foreground/80 line-clamp-2 text-ellipsis">
            {description}
          </p>
        </div>
        <div className="mt-2 md:mt-6">
          <div className="flex flex-col gap-y-4 justify-start">
            <div className="flex gap-1 w-full overflow-x-auto scroll hide-scroll">
              {keywords.map((tag) => (
                <Badge
                  key={tag}
                  variant={"outline"}
                  className="md:text-[11px] text-[8px] px-1 md:px-2 text-muted-foreground/40 group-hover:text-muted-foreground/60"
                >
                  <HashtagIcon className="h-2 w-2" />
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-x-3 md:gap-x-5">
              {to_live.isLive && (
                <button className="text-muted-foreground/80 hover:underline group-hover:text-primary/70">
                  <Link
                    href={to_live.link_to_live}
                    className="text-[10px] md:text-xs"
                  >
                    Preview
                  </Link>
                </button>
              )}
              {to_repo.isPublic && (
                <button className="text-muted-foreground/80 hover:underline group-hover:text-primary/70">
                  <Link
                    href={to_repo.link_to_repo}
                    className="text-[10px] md:text-xs"
                  >
                    Code
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
