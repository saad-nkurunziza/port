import Home from "@/components/Home";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import { Blogs } from "@/components/Blogs";
export default async function Page() {
  return (
    <div className="flex flex-col gap-y-12 px-2 md:px-16 mx-auto">
      <Home />
      <Skills />
      <Projects />
      <Contacts />
      <Blogs />
    </div>
  );
}
