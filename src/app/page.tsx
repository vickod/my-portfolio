import AboutHomePage from "@/components/global/AboutHomePage";
import Contact from "@/components/global/Contact";
import Hero from "@/components/global/Hero";
import ProjectsHomePage from "@/components/global/ProjectsHomePage";
import Services from "@/components/global/Services";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      {/* <AboutHomePage /> */}
      <Services />
      <ProjectsHomePage />

      <Contact />
    </div>
  );
}
