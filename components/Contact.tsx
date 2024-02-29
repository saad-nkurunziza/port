import Skill from "./Skill";
import SectionContainer from "@/components/SectionContainer";

export default function Contact() {
  const skills = [
    {
      title: "Whatsapp",
      icon: "react",
    },
    {
      title: "Email",
      icon: "react",
    },
    {
      title: "Instagram",
      icon: "react",
    },
    {
      title: "Telegram",
      icon: "react",
    },
    {
      title: "X",
      icon: "react",
    },
  ];
  return (
    <SectionContainer title="Keep me on radar">
      <div className="flex justify-start w-fit gap-x-5">
        {skills.map((skill) => (
          <Skill
            key={skill.title}
            title={skill.title}
            icon={skill.icon}
            className="hover:bg-background"
          />
        ))}
      </div>
    </SectionContainer>
  );
}
