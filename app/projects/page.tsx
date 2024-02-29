import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import SmallProjectCard from "@/components/SmallProjectCard";
import { projects } from "@/lib/constants";
import PageContainer from "@/components/PageContainer";

export default function page() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-24">
        <ProjectCard />
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 my-2 min-h-full">
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
      <div className="w-full flex flex-col justify-center my-3">
        {/* <Button
          className="text-xs text-muted-foreground hover:bg-transparent"
          variant="ghost"
        >
          More projects
        </Button> */}
        <div className="mx-auto">
          <div className="flex flex-col gap-y-2">
            <h3 className="text-sm text-primary/80">Project Name</h3>
            <p className="text-muted text-xs">Brief Description</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
