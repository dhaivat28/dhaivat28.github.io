import { BrowserRouter } from "react-router-dom";
import { AboutMe } from "./components/about-me/AboutMe";
import { Academics } from "./components/Academics/Academics";
import { Experience } from "./components/experience/Experience";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";
import { SectionFadeWrapper } from "./components/shared/sectionFadeWrapper/SectionFadeWrapper";
import { ViewportHelper } from "./components/ViewportHelper";

function App() {
  return (
    <BrowserRouter>
      <ViewportHelper visible={false} />
      <Header />

      <section
        id="home"
        className="min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center"
      >
        <Hero />
      </section>

      <SectionFadeWrapper sectionId="about">
        <AboutMe />
      </SectionFadeWrapper>

      <section id="projects" className="py-12">
        <Projects />
      </section>

      <SectionFadeWrapper sectionId="experience">
        <Experience />
      </SectionFadeWrapper>

      <section id="education" className="py-12">
        <Academics />
      </section>

      <SectionFadeWrapper sectionId="contact">
        <Footer />
      </SectionFadeWrapper>
    </BrowserRouter>
  );
}

export default App;
