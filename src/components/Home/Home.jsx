import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Project from '../Projects/ProjectGrid/Project'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'
import AnimatedCursor from "react-animated-cursor"

import './Home.css'

const Home = () => {
  return (
    <div style={{ backgroundColor: '#0B192E' }}>
      <AnimatedCursor />
      <Header />
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
      <Hero />
      <About />
      <Project />
      <Experience />
      {/* <Contact /> */}
    </div>
  )
}

export default Home