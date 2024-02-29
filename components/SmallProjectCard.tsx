import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Project {
  siteName: string;
  description: string;
  keywords: string[];
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
  description,
  keywords,
  to_live,
  to_repo,
}: Project) {
  return (
    <div className="overflow-hidden shrink-0 justify-start rounded-lg border bg-card text-card-foreground shadow flex flex-col min-h-[17rem] md:min-h-[18rem] group hover:*:transition-all hover:*:duration-300">
      <div className="w-full bg-neutral-100 dark:bg-neutral-900 relative h-[32%] ">
        <div className="flex justify-center items-center w-full h-full gap-x-6">
          <div className="absolute top-0 left-0 w-full -z-10 h-full bg-gradient-to-r from-background to-[rgba(0,0,0,0)]" />
          <Button
            variant="ghost"
            className="relative hover:bg-transparent text-primary/70"
          >
            <Image src={`/next.svg`} width={28} height={28} alt="icon" />
          </Button>
          <Button
            variant="ghost"
            className="relative hover:bg-transparent text-primary/70"
          >
            <Image src={`/react.svg`} width={28} height={28} alt="icon" />
          </Button>
          <Button
            variant="ghost"
            className="relative hover:bg-transparent text-primary/70"
          >
            <Image src={`/react.svg`} width={28} height={28} alt="icon" />
          </Button>
        </div>
        {/* <Image
          alt="Project Image"
          className="w-full"
          src={siteImagePath}
          fill
        /> */}
      </div>
      <div className="py-2 md:py-4 px-6 w-full group-hover:border-primary group-hover:text-primary">
        <div>
          <h3 className="text-sm text-muted-foreground/80 group-hover:text-primary/90 font-semibold">
            {siteName}
          </h3>
          <p className="mt-2 leading-5 text-xs text-muted-foreground/60 group-hover:text-muted-foreground/80 line-clamp-2 text-ellipsis">
            {description}
          </p>
        </div>
        <div className="mt-2 md:mt-6">
          <div className="flex flex-col gap-y-4 justify-start">
            <div className="flex gap-2 w-full h-auto">
              {keywords.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-[10px] text-muted-foreground/70 group-hover:text-muted-foreground/90"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center text-xs gap-x-2 md:gap-x-5">
              {to_live.isLive && (
                <Button
                  asChild
                  variant={"link"}
                  size="sm"
                  className="text-muted-foreground/80 group-hover:text-primary/70"
                >
                  <Link href={to_live.link_to_live}>Live Preview</Link>
                </Button>
              )}
              {to_repo.isPublic && (
                <Button
                  asChild
                  variant={"link"}
                  size="sm"
                  className="text-muted-foreground/80 group-hover:text-primary/70"
                >
                  <Link href={to_repo.link_to_repo}>Repo</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
