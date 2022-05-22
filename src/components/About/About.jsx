import React from 'react'
import './styles.css'
import { motion } from 'framer-motion'
import { Col, Container, Row } from 'react-bootstrap'
import Dummy from '../../assets/about-dummy.jpg'

const About = () => {
  return (

    <>

      <div className='about-container'>
        <Container>
          <Row>
            <Col>
              <div className='about-text-container'>
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  transition={{ ease: "easeOut", duration: 1.2 }}
                  animate={{ x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <p className='about-text-header'>About Me <hr /></p>
                  <div>
                    <p className='about-text-desc'>
                      Hello! My name is Nader and I enjoy creating things
                      that live on the internet. As a technical project manager, my interest in web development started back in 2017 whilst overlooking developers work, I began playing with JavaScript, html and css in my free time.
                    </p>
                    <br />
                    <p className='about-text-desc'>
                      Below are the technologies I am currently working with (and growings!):
                    </p>
                  </div>
                  <br />
                  <Container>
                    <Row>
                      <Col>
                        <p className='about-list-title'>FRONT-END:</p>
                        <ul className='about-list'>
                          <li>React</li>
                          <li>Axios</li>
                          <li>Webpack</li>
                          <li>CSS</li>
                          <li>HTML</li>
                          <li>Svelte</li>
                        </ul>

                        <p className='about-list-title'>BACK-END:</p>
                        <ul className='about-list'>
                          <li>Express</li>
                          <li>Node.js</li>
                          <li>PostgreSQL</li>
                          <li>AWS</li>
                        </ul>
                      </Col>
                      <Col>
                        <p className='about-list-title'>LANGUAGES:</p>
                        <ul className='about-list'>
                          <li>JavaScript (ES6+)</li>
                          <li>Ruby on Rails</li>
                          <li>Ruby</li>
                        </ul>

                        <p className='about-list-title'>TESTING:</p>
                        <ul className='about-list'>
                          <li>Jest</li>
                          <li>Cypress</li>
                          <li>Mocha/Chai</li>
                        </ul>

                      </Col>
                    </Row>
                  </Container>
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About