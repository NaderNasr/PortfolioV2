import ReactGA from 'react-ga';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Project from './components/Projects/ProjectGrid/Project';



const App = () => {
  const TRACKING_ID = process.env.REACT_APP_UA;
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
        <>
          <Header />
          <Hero />
          <About />
          <Project />
          <Experience />
          <Contact />
        </>
    </>
  );
};

export default App;
