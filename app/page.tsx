import Home from "@/components/Home";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
export default async function Page() {
  return (
    <div className="flex flex-col gap-y-12 md:px-16 mx-auto">
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}
