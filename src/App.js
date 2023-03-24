import ReactGA from 'react-ga';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Project from './components/Projects/ProjectGrid/Project';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import { Helmet } from "react-helmet";
import './App.css'



const App = () => {

  const TRACKING_ID = 'UA-163447962-1';
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);



  return (
    <>
      <div style={{ backgroundColor: '#0B192E' }}>
        <Helmet>
          <title>Nader Developer Portfolio | Freelance, Full-time, Project Manager, Contract | Toronto</title>
          <meta name="description" content="As a dynamic and versatile React JS Developer based in Toronto, I deliver user-friendly web applications for freelance, full-time, project manager, and contract positions. With a proven track record of staying up-to-date with the latest technology and collaborating seamlessly with managers and senior developers." />
          <meta name="keywords" content="React JS Developer, Web Development, Freelance, Full-time, Project Manager, Contract, Toronto, User-Friendly Web Applications, JavaScript, Latest Techniques, Senior Developers, Dynamic, Versatile, Cutting-Edge Solutions" />
          <meta name="author" content="Nader Nasr" />
          <meta property="og:title" content="React JS Developer Portfolio | Freelance, Full-time, Project Manager, Contract | Toronto" />
          <meta property="og:description" content="Nader Nasr is a dynamic and versatile React JS Developer based in Toronto, Nader Nasr delivers user-friendly web applications for freelance, full-time, project manager, and contract positions. With a proven track record of staying up-to-date with the latest technology and collaborating seamlessly with managers and senior developers." />
          <meta property="og:url" content="https://nadernasr.ca" />
          <meta name="twitter:description" content="As a dynamic and versatile React JS Developer based in Toronto, I deliver user-friendly web applications for freelance, full-time, project manager, and contract positions. With a proven track record of staying up-to-date with the latest technology and collaborating seamlessly with managers and senior developers." />
        </Helmet>
        <CustomCursor
          targets={['Button']}
          customClass='custom-cursor'
          dimensions={30}
          fill='#0500ff'
          smoothness={{
            movement: 0.2,
            scale: 0.2,
            opacity: 0.4,
          }}
          targetOpacity={0.3}
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
