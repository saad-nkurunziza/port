import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/constants";
import PageContainer from "@/components/PageContainer";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  HashtagIcon,
  CheckBadgeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { ToLiveButton, ToRepoButton } from "@/components/LinkButton";
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <PageContainer header="Projects">
      <ProjectCard />
      <div className="w-[60vw] px-2 md:w-1/4 rounded-lg bg-muted flex items-center mb-8">
        <MagnifyingGlassIcon className="h-4 w-4 mx-1" />
        <input
          placeholder="Find by name, tag, ..."
          className="w-full h-full placeholder:text-sm text-sm py-2 mx-1 px-1 bg-transparent outline-none text-muted-foreground focus:outline-none border-none focus:border-none"
        />
      </div>
      <div className="w-full flex flex-col gap-y-12">
        {projects.map((project, i) => {
          const lastElementIndex = projects.length - 1;
          return (
            <>
              <div
                className="flex flex-col md:flex-row md:gap-6 gap-2 px-1.5"
                key={project.siteName}
              >
                <div className="flex md:justify-between flex-col gap-y-3 order-1 md:order-2">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-x-0.5">
                      <h3 className="font-semibold">{project.siteName}</h3>
                      <CheckBadgeIcon className="h-3 w-3 mb-0.5" />
                    </div>

                    <p className="leading-6 max-w-xl text-muted-foreground text-sm">
                      {project.description}
                    </p>
                    <div className="flex gap-2 my-1 flex-wrap shrink-0 w-full">
                      {project.tags.map((tag) => (
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
                  </div>
                  <div className="md:flex mt-4 hidden md:mt-0 justify-start w-full items-center text-sm gap-x-5">
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
                <div className=" order-2 md:order-1 outline-4 outline-offset-2 outline-primary_overall/35 flex-shrink-0 relative h-32 md:h-48 w-3/4 md:w-1/3">
                  {/* <div className="absolute -bottom-36 left-0 w-full z-10 h-full bg-gradient-to-t from-background to-[rgba(0,0,0,0)]" /> */}
                  <Image
                    alt="Project Image"
                    // className="w-full h-full"
                    src="/screen.jpg"
                    style={{
                      objectFit: "cover",
                    }}
                    fill
                  />
                </div>
                <div className="flex order-3 md:hidden mt-4 md:mt-0 justify-start w-full items-center text-sm gap-x-5">
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
              {lastElementIndex !== i && (
                <Separator className="my-1 py-1 md:py-2 w-5 md:w-7 bg-primary_overall " />
              )}
            </>
          );
        })}
      </div>
    </PageContainer>
  );
}
