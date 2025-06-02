import { BrowserRouter } from "react-router-dom";
import { AboutMe } from "./components/about-me/AboutMe";
import { Academics } from "./components/Academics/Academics";
import { ExperienceStackDesktop } from "./components/experience/ExperienceStackDesktop";
import { ExperienceStackMobile } from "./components/experience/ExperienceStackMobile";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <section
        id="home"
        className="min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center"
      >
        <Hero />
      </section>

      <section id="about" className="py-12 bg-[#f8f7f1]">
        <AboutMe />
      </section>

      <section id="projects" className="py-6 xl:py-12">
        <Projects />
      </section>

      <section
        id="experience-desktop"
        className="py-6 xl:py-12 bg-[#f8f7f1] hidden xl:block"
      >
        <ExperienceStackDesktop />
      </section>

      <section
        id="experience-mobile"
        className="py-6 xl:py-12 bg-[#f8f7f1] xl:hidden"
      >
        <ExperienceStackMobile />
      </section>

      <section id="education" className="py-6 xl:py-12">
        <Academics />
      </section>

      <section id="contact" className="py-6 xl:py-12 bg-[#f8f7f1]">
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
