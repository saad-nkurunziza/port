import React from "react";
import ProjectCard from "./ProjectCard";
import SmallProjectCard from "./SmallProjectCard";
import { projects } from "@/lib/constants";
import SectionContainer from "@/components/SectionContainer";
export default function Projects() {
  const lastElement = projects.slice(-1)[0];
  return (
    <SectionContainer title="Projects 've been working on" full>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 md:gap-24">
          <ProjectCard />
          <div className="px-1 md:px-4 w-full md:mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 min-h-full place-content-center">
            {projects.slice(1, -1).map((project) => (
              <SmallProjectCard
                key={project.siteName}
                siteName={project.siteName}
                tags={project.tags}
                siteImagePath={project.siteImagePath}
                description={project.description}
                keywords={project.keywords}
                to_live={project.to_live}
                to_repo={project.to_repo}
              />
            ))}
            {/* <div className="hidden lg:block px-1 md:px-4 w-full md:mx-auto min-h-full place-content-center"> */}
            <SmallProjectCard
              key={lastElement.siteName}
              siteName={lastElement.siteName}
              tags={lastElement.tags}
              siteImagePath={lastElement.siteImagePath}
              description={lastElement.description}
              keywords={lastElement.keywords}
              to_live={lastElement.to_live}
              to_repo={lastElement.to_repo}
              hide
            />
            {/* </div> */}
          </div>
        </div>
        {/* <div className="w-full flex justify-center">
          <Button
            className="mx-auto text-xs text-muted-foreground hover:text-primary"
            variant="link"
          >
            Show more
          </Button>
        </div> */}
      </div>
    </SectionContainer>
  );
}
