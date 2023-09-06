import React from 'react';
import './styles.css';
import { motion } from 'framer-motion';
import isMobile from 'is-mobile';

const Hero = () => {

  return (
    <>

      <div className='hero-container'>
        <div className='text-container'>
          <p className='text'>Hi, my name is,</p>
          <div>
            <div className='hero-float' id='hero-circle-small' style={{
              right: '5vw',
              top: '12vh',
              zIndex: -99
            }}></div>
            <div className='hero-float3' id='hero-circle-small1' style={{
              right: '10vw',
              top: '15vh',
              zIndex: -99
            }}></div>
            <div className='hero-float2' id='hero-circle-small2' style={{
              right: '15vw',
              top: '10vh',
              zIndex: -99
            }}></div>
          </div>
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
              I’m a web developer specializing in building
              and designing exceptional digital experiences.
            </p>
          </motion.div>
        </div>
        <div className='blob_2 hero-circle' style={{zIndex: -99
        }}></div>
      </div>

    </>
  )
}

export default Hero