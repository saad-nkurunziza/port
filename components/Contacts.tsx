import SectionContainer from "@/components/SectionContainer";
import React from "react";
import Contact from "./Contact";

export default function Contacts() {
  const mailSubject = encodeURIComponent("Portofolio Email");
  const contactInfo = [
    {
      title: "Whatsapp",
      icon: "whatsapp",
      link: "https://wa.me/+250790963467",
    },
    {
      title: "Email",
      icon: "email",
      link: `mailto:saddynkurunziza8@gmail.com?subject=${mailSubject}`,
    },
    {
      title: "Instagram",
      icon: "instagram",
      link: "https://instagram.com/nkurunziza____?igshid=MzMyNGUyNmU2YQ==",
    },
  ];

  return (
    <SectionContainer title="Keep me on radar">
      <div className="flex">
        {contactInfo.map((contact) => (
          <Contact
            key={contact.title}
            title={contact.title}
            link={contact.link}
            icon={contact.icon}
            //   className="hover:bg-background"
          />
        ))}
      </div>
    </SectionContainer>
  );
}
