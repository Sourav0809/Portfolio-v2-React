import "./App.css";
import Wrapper from "./components/ui/Wrapper";
import Header from "./components/header/Header";
import HeroSection from "./components/herosection/HeroSection";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import ProjectsContainer from "./components/projects/ProjectsContainer";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Wrapper>
        <Header />
        <HeroSection />
        <About />
        <Skills />
        <Toaster />
        <ProjectsContainer />
        <Contact />
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
