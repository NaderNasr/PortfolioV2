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
  const TRACKING_ID = 'UA-163447962-1';
  ReactGA.initialize(TRACKING_ID);

  const [loading, setLoading] = useState(1000);

  useEffect(() => {
    setTimeout(() => {
      setLoading(0);
    }, loading);
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loading/>
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <Experience />
          <Project />
          <Contact />
        </>
      )}
    </>
  );
};

export default App;
