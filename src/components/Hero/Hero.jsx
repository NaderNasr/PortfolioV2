import React, { useRef, useState } from 'react';
import './styles.css';
import { motion } from 'framer-motion';
import { Modal, Button, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Hero = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ebnq70r', 'template_m2p9xzi', form.current, 'Hv5Qdu_UDJfL4qjNm')
      .then((result) => {
        console.log(result);
        handleModalClose(); // Close the modal on success
        toast("✅ Your message has been sent!");
      }, (error) => {
        console.error('EmailJS Error:', error);
        toast("🚫 There was an Error please try again");
      });
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
            <button onClick={handleModalShow} className="relative inline-flex items-center justify-center p-0.5 mt-5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus-none dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 text-white rounded-md group-hover:bg-opacity-0">
                Contact Me
              </span>
            </button>
          </motion.div>
        </div>
        <div className='blob_2 hero-circle' style={{
          zIndex: -99
        }}></div>
      </div>
      <Modal show={modalShow} onHide={handleModalClose} className='cursor-auto h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
        <Modal.Body className='cursor-auto bg-slate-800 text-white'>

          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label for="user_name" className="block mb-2 text-sm font-medium text-white dark:text-white">Name</label>
              <input type="text" id="user_name" name="user_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <div className="mb-6">
              <label for="user_email" className="block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
              <input type="email" id="user_email" name="user_email" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <div className="mb-6">
              <label for="message" className="block mb-2 text-sm font-medium text-white dark:text-white">Message</label>
              <textarea id="message" name="message" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" rows="4" required></textarea>
            </div>
            <input type="submit" value="Send" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
          </form>


        </Modal.Body>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default Hero