import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { projects } from "@/lib/constants";
import { UserIcon, HashtagIcon } from "@heroicons/react/24/solid";
import { ToLiveButton, ToRepoButton } from "./LinkButton";

export default function ProjectCard() {
  return (
    <div className="flex flex-col md:items-center gap-2 md:flex-row mb-20">
      <div className="overflow-hidden relative rounded-md order-1 bg-zinc-700 md:order-2 h-44 md:h-72 md:w-1/2 flex-shrink-0 z-0 backdrop-blur">
        <div className="absolute inset-0 z-10 bg-gradient-to-l from-transparent to-black/30" />
        <Image
          alt="Project Image"
          className="w-full h-full"
          src={`/snaps/${projects[0].siteImagePath}`}
          style={{
            objectFit: "cover",
          }}
          fill
        />
        {/* </div> */}
      </div>
      <div className="w-full md:order-1 order-2 px-1.5 h-fit z-20">
        <h3 className="text-2xl font-semibold text-primary/80">
          {projects[0].siteName}
        </h3>
        <div className="mt-2 leading-6 text-sm text-muted-foreground/60">
          <div className="mt-2 text-sm leading-6 text-primary/50">
            {projects[0].description}
          </div>
        </div>

        <div className="flex items-center my-5">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=50&width=50" />
            <AvatarFallback>
              <UserIcon className="h-5 w-5 text-primary/80" />
            </AvatarFallback>
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
                  <HashtagIcon className="h-3 w-3 text-muted-foreground" />
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex mt-2 md:mt-0 justify-start w-full items-center text-sm gap-x-5">
              <ToLiveButton
                link={projects[0].to_live.link_to_live}
                isLink={projects[0].to_live.isLive}
              />
              <ToRepoButton
                link={projects[0].to_repo.link_to_repo}
                isLink={projects[0].to_repo.isPublic}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
