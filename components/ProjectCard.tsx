import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { projects } from "@/lib/constants";

export default function ProjectCard() {
  return (
    <div className="overflow-hidden rounded-lg bg-card shadow">
      <div className="md:flex items-center h-full relative z-10 my-5">
        <div className="absolute md:top-0 -top-40 left-0 w-full -z-10 h-full bg-gradient-to-r from-background to-[rgba(0,0,0,0)]" />
        <div className="absolute w-full -z-30 h-full right-0 order-2">
          <div className="absolute right-0 md:top-0 -top-40 md:w-[50%] w-full h-full z-20">
            <div className="absolute md:top-0 -top-40 left-0 w-full -z-20 h-full bg-gradient-to-r from-background to-[rgba(0,0,0,0)]" />
            <Image
              alt="Project Image"
              className="w-full h-full"
              src="/screen.jpg"
              style={{
                objectFit: "contain",
              }}
              fill
            />
          </div>
        </div>

        <div className="py-4 md:py-8 order-1 z-20">
          <div>
            <h3 className="text-2xl font-semibold text-primary/80">
              {projects[0].siteName}
            </h3>
            <div className="mt-2 leading-6 text-sm text-muted-foreground/60">
              <div className="mt-2 text-sm max-w-full sm:max-w-[50%] text-primary/70">
                {projects[0].description}
              </div>
            </div>
          </div>
          <div className="flex items-center my-5">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=50&width=50" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-muted-foreground">
                {projects[0].author.name}
              </h3>
            </div>
          </div>
          <div className="">
            <div className=" flex flex-col gap-8 justify-start md:justify-between md:items-center w-full">
              <div className="flex gap-2 w-full">
                {projects[0].keywords.map((tag) => (
                  <Badge
                    key={tag}
                    variant={"secondary"}
                    className="text-[10px] text-muted-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex mt-2 md:mt-0 justify-start w-full items-center text-sm gap-x-5">
                <Button asChild variant={"link"}>
                  <Link className="text-xs" href="#">
                    Live Preview
                  </Link>
                </Button>
                <Button
                  className="text-white dark:text-black text-xs"
                  size="sm"
                >
                  Repositry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
