import ReactGA from 'react-ga';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Project from './components/Projects/ProjectGrid/Project';



const App = () => {
  const TRACKING_ID = 'UA-163447962-1';
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
        <div style={{backgroundColor:'#0B192E'}}>
          <Header />
          <Hero />
          <About />
          <Project />
          <Experience />
          <Contact />
        </div>
    </>
  );
};

export default App;
