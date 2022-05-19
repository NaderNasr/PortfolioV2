import React from 'react';
// import TextLoop from "react-text-loop";
// import Circle from '../../assets/Circle.svg'
import './styles.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>

      <div className='hero-container'>
        <div className='text-container'>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 2 }}
            animate={{ x: 0 }}
          >
            <p className='text'>Hi, my name is,</p>
            <p className='text-name'>Nader Nasr.</p>
            <p className='text-desc'>I build things for the web.</p>
            <p className='text-summary'>
              I’m a software engineer specializing in building
              and designing exceptional digital experiences.
            </p>
          </motion.div>

          {/* <img className='circle-svg' src={Circle} alt='Circle' /> */}
        </div>
      </div>
    </>
  )
}

export default Hero