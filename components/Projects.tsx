import React from "react";
import ProjectCard from "./ProjectCard";
import SmallProjectCard from "./SmallProjectCard";
import projects from "@/data.json";
import SectionContainer from "@/components/SectionContainer";
export default function Projects() {
  return (
    <SectionContainer title="Projects 've been working on" id="projects">
      <div className="flex flex-col gap-6 py-2">
        <div className="flex flex-col gap-6 md:gap-24">
          {/* <ProjectCard /> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {projects.map((project, i) => (
              <SmallProjectCard
                key={project.siteName}
                siteName={project.siteName}
                tags={project.tags}
                siteImagePath={project.siteImagePath}
                description={project.description}
                keywords={project.keywords}
                to_live={project.to_live}
                to_repo={project.to_repo}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
