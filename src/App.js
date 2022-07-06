import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Project from './components/Projects/ProjectGrid/Project';
import Loading from './components/Loading/Loading';



const App = () => {
  const [loading, setLoading] = useState(3500);
  const TRACKING_ID = "UA-163447962-1";
  ReactGA.initialize(TRACKING_ID);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    setTimeout(() => {
      setLoading(0);
    }, loading);
  }, [loading]);



  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <Project />
          <Experience />
          <Contact />
        </>
      )}
    </>
  );
};

export default App;
