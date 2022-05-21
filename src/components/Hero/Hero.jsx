import React from 'react';
// import TextLoop from "react-text-loop";
import Circle from '../../assets/LineCircleOrange.svg'
import './styles.css';
import { motion } from 'framer-motion';
// import { FaReact } from 'react-icons/fa';

const Hero = () => {
  return (
    <>

      <div className='hero-container'>
        <div className='text-container'>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            transition={{ ease: "easeOut", duration: 1.2 }}
            animate={{ x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className='text'>Hi, my name is,</p>
            <p className='text-name'>Nader Nasr.</p>
            <p className='text-desc'>I build things for the web.</p>
            <p className='text-summary'>
              I’m a software engineer specializing in building
              and designing exceptional digital experiences.
            </p>
          </motion.div>
          {/* <div className='hero-icons'>
            <FaReact size={50}/>
          </div> */}
          {/* <div className='hero-circle'>
            <motion.div
              // initial={{ opacity: 0, x: 700 }}
              // transition={{ ease: "easeOut", duration: 2 }}
              // animate={{ x: 0 }}
              // whileInView={{ opacity: 1, x: 100 }}
            >
              <img className='circle-svg' src={Circle} alt='Circle' />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 700 }}
            transition={{ ease: "easeOut", duration: 2 }}
            animate={{ x: -240 }}
            whileInView={{ opacity: 1, x: 100 }}
            style={{ overflow: 'hidden' }}
          >
            <img className='circle-svg' src={Circle} alt='Circle' />
          </motion.div> */}
        </div>
      </div>
    </>
  )
}

export default Hero