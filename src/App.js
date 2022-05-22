import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Project from "./components/Projects/ProjectGrid/Project";


const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </>
  );
}

export default App;
