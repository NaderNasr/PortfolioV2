import React from 'react';
// import TextLoop from "react-text-loop";
import './styles.css';
import { motion } from 'framer-motion';
import Circle from '../../assets/CircleHero.svg'
import isMobile from 'is-mobile';

const Hero = () => {


  return (
    <>

      <div className='hero-container'>
        <div className='text-container'>
          <p className='text'>Hi, my name is,</p>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            animate={{ x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{ overflowX: 'hidden' }}
          >


            <p className='text-name'>Nader Nasr.</p>
            <p className='text-pronunciation'>Nah-der Nah-sr</p>


            <p className='text-desc'>I build things for the web.</p>
            <p className='text-summary'>
              I’m a software engineer specializing in building
              and designing exceptional digital experiences.
            </p>
            {isMobile() ?

              <></>
              :
              <p className='text-pronunciation'>TL:DR {'>>'} open console</p>

            }
          </motion.div>




        </div>
        <img src={Circle} className='hero-circle' alt='hero-circle' />
      </div>
    </>
  )
}

export default Hero