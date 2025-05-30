import { BrowserRouter } from "react-router-dom";
import { AboutMe } from "./components/about-me/AboutMe";
import { Academics } from "./components/Academics/Academics";
import { Experience } from "./components/experience/Experience";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";
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

      <section id="about" className="bg-[#fbf9f6] pt-4 pb-8">
        <AboutMe />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="education" className="bg-[#f0f0f0] py-6">
        <Academics />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
