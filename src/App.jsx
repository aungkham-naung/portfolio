import "./App.css";
import FooterContent from "./features/FooterContent";
import Display from "./sections/Display";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Section from "./sections/Section";
import Contact from "./features/Contact";
import ProjectDiv from "./sections/ProjectDiv";
import Skills from "./features/Skills";
import DotNav from "./features/DotNav";

function App() {
  const sectionIds = ["home", "projects", "skills", "contact"];
  return (
    <>
      <DotNav sections={sectionIds} />
      <Display>
        <Section id="home" style="min-h-screen">
          <Home />
        </Section>
        <Section id="projects" style="min-h-screen">
          <ProjectDiv />
        </Section>
        <Section id="skills" style="min-h-screen">
          <Skills />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </Display>
      <Footer>
        <FooterContent />
      </Footer>
    </>
  );
}

export default App;
