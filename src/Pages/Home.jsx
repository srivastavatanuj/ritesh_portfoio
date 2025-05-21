import Hero from "../Components/Hero";
import Skills from "../Components/Skills";
import AboutSection from "../Components/AboutSection";
import Services from "../Components/Services";
import Project from "../Components/Project";
import Contact from "../Components/Contectme";
import ContactSection from "../Components/ContectSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <AboutSection />
      <Services />
      <ContactSection />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
