import "./App.css";
import FooterContent from "./features/FooterContent";
import Display from "./sections/Display";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Section from "./sections/Section";
import Contact from "./features/Contact";
import ProjectDiv from "./sections/ProjectDiv";

function App() {
  return (
    <>
      <Display>
        <Section>
          <Home />
        </Section>
        <Section>
          <ProjectDiv />
        </Section>
        <Section></Section>
        <Section>
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
