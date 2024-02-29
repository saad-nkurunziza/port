import Home from "@/components/Home";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default async function Page() {
  return (
    <div className="flex flex-col gap-y-12 px-16 mx-auto">
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
