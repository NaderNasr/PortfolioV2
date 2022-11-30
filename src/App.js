import ReactGA from 'react-ga';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Project from './components/Projects/ProjectGrid/Project';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';



const App = () => {
  const TRACKING_ID = 'UA-163447962-1';
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
      <div style={{ backgroundColor: '#0B192E', cursor:'none' }}>
        <CustomCursor
          targets={['.link', '.your-css-selector']}
          customClass='custom-cursor'
          dimensions={30}
          fill='#FF6900'
          smoothness={{
            movement: 0.2,
            scale: 0.2,
            opacity: 1,
          }}
          targetOpacity={1}
        />
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
