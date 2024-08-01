import SectionContainer from "./SectionContainer";
import Skill from "./Skill";
import {
  NextIcon,
  PhpIcon,
  RustIcon,
  GitIcon,
  ReactIcon,
  ViteIcon,
  DatabaseIcon,
} from "@/components/icons";

export default function Skills() {
  const skills = [
    {
      title: "React",
      icon: ReactIcon,
    },
    {
      title: "Next.js",
      icon: NextIcon,
    },
    {
      title: "Rust",
      icon: RustIcon,
    },
    {
      title: "PHP",
      icon: PhpIcon,
    },
    {
      title: "Git",
      icon: GitIcon,
    },
    {
      title: "DB Containers",
      icon: DatabaseIcon,
    },
    {
      title: "Vite",
      icon: ViteIcon,
    },
  ];
  return (
    <SectionContainer title="Works seamlessly with 4+ frameworks" id="skills">
      <div className="flex gap-2">
        {skills.map((skill) => (
          <Skill
            key={skill.title}
            title={skill.title}
            Icon={skill.icon}
            className="hover:bg-background"
          />
        ))}
      </div>
      {/* <h3 className="font-semibold text-sm text-muted-foreground">+3</h3> */}
      {/* </div> */}
    </SectionContainer>
  );
}
