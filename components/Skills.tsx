import SectionContainer from "./SectionContainer";
import Skill from "./Skill";

export default function Skills() {
  const skills = [
    {
      title: "React",
      icon: "react",
    },
    {
      title: "Next.js",
      icon: "next",
    },
    {
      title: "Rust",
      icon: "rust",
    },
    {
      title: "PHP",
      icon: "php",
    },
  ];
  return (
    <SectionContainer title="Works seamlessly with 4+ frameworks">
      <div className="flex w-fit gap-x-5 items-center mt-2">
        <div className="flex justify-start gap-x-3">
          {skills.map((skill) => (
            <Skill
              key={skill.title}
              title={skill.title}
              icon={skill.icon}
              className="hover:bg-background"
            />
          ))}
        </div>
        {/* <h3 className="font-bold text-sm text-muted-foreground">+20</h3> */}
      </div>
    </SectionContainer>
  );
}
