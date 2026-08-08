import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import EducationExperience from "@/components/EducationalExperience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <Hero />

   <About />

   <EducationExperience />

      <Research />

      <Projects />

     <Skills />

      <Contact />

      <Footer />
    </main>
  );
}
