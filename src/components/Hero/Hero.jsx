import React, { useState } from 'react';
// import TextLoop from "react-text-loop";
import './styles.css';
import { motion } from 'framer-motion';
import isMobile from 'is-mobile';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import intro from '../../assets/Intro.mp4'

const VideoModal = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose} centered className="video-modal">
        <video src={intro} controls autoPlay width="100%"/>
    </Modal>
  );
};

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleLearnMore = () => {
    setShowModal(true)
  };

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
            {/* <div style={{ marginBottom: '20px' }}>
              <Button onClick={handleLearnMore} style={{ marginBottom:'20px', marginTop:'20px' }}>Learn more</Button>
            </div> */}
            {isMobile() ?
              <></>
              :
              <>
                <p className='text-pronunciation'>TL:DR {'>>'} open console</p>
              </>

            }
          </motion.div>
        </div>
        <div className='blob_2 hero-circle' style={{zIndex: -99
        }}></div>
        <VideoModal showModal={showModal} handleClose={() => setShowModal(false)} />
      </div>

    </>
  )
}

export default Hero