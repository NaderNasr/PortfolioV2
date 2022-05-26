import isMobile from 'is-mobile';
import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Img from '../../assets/Circle.svg';
import './styles.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-text-container">
        <p className="contact-text-header">Get In Touch</p>
        <div style={{ marginTop: '90px' }}>
          <a className="contact-button" href="mailto:nadernasr7@gmail.com">
            Say Hello
          </a>
        </div>
        {isMobile() ? (
          <></>
        ) : (
          <ParallaxProvider>
            <Parallax speed={50}>
              <div
                className="contact-floating"
                id="contact-circle-small"
                style={{
                  right: '100px',
                }}
              />
            </Parallax>

            <Parallax speed={50}>
              <div
                className="contact-floating2"
                id="contact-circle-small2"
                style={{
                  right: '150px',
                  bottom: '100px',
                }}
              />
            </Parallax>

            <Parallax speed={10}>
              <div
                className="contact-floating3"
                id="contact-circle-small3"
                style={{
                  right: '200px',
                }}
              />
            </Parallax>

            <Parallax speed={50}>
              <div
                className="contact-floating"
                id="contact-circle-small"
                style={{
                  left: '100px',
                }}
              />
            </Parallax>

            <Parallax speed={50}>
              <div
                className="contact-floating2"
                id="contact-circle-small2"
                style={{
                  left: '150px',
                  bottom: '100px',
                }}
              />
            </Parallax>

            <Parallax speed={10}>
              <div
                className="contact-floating3"
                id="contact-circle-small3"
                style={{
                  left: '200px',
                }}
              />
            </Parallax>
          </ParallaxProvider>
        )}
        <img src={Img} alt="circleImages" className="contact-image" />
      </div>
    </div>
  );
};

export default Contact;
