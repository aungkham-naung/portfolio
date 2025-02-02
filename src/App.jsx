import "./App.css";
import FooterContent from "./features/FooterContent";
import Display from "./sections/Display";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Section from "./sections/Section";

function App() {
  return (
    <>
      <Display>
        <Section>
          <Home />
        </Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
      </Display>
      <Footer>
        <FooterContent />
      </Footer>
    </>
  );
}

export default App;
