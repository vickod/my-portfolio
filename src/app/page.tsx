import Contact from "@/components/global/Contact";
import Hero from "@/components/global/Hero";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="h-[600px] flex justify-center items-center">CONTENT</div>
      <Contact />
    </div>
  );
}
