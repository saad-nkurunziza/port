import React from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import SmallProjectCard from "./SmallProjectCard";
import { projects } from "@/lib/constants";
import Skill from "@/components/Skill";
import SectionContainer from "@/components/SectionContainer";
export default function Projects() {
  return (
    <SectionContainer title="Projects 've been working on" full>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-24">
          <ProjectCard />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2 min-h-full">
            {projects.slice(1).map((project) => (
              <SmallProjectCard
                key={project.siteName}
                siteName={project.siteName}
                siteImagePath={project.siteImagePath}
                description={project.description}
                keywords={project.keywords}
                to_live={project.to_live}
                to_repo={project.to_repo}
              />
            ))}
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
