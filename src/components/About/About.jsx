import React from 'react'
import './styles.css'
import { motion } from 'framer-motion'
import { Badge, Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (

    <>

      <div className='about-container'>
        <Container>
          <Row>
            <Col>
              <div className='about-text-container'>
                <p className='about-text-header'>About Me <hr /></p>
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  transition={{ ease: "easeOut", duration: 1.2 }}
                  animate={{ x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <div>
                    <p className='about-text-desc'>
                      Hello! My name is Nader and I enjoy creating things
                      that live on the internet. In my previous role as a technical project manager, my interest in web development started back in 2017 whilst overlooking developers work, I began playing with JavaScript, html and css in my free time.
                    </p>
                    <br />
                    <p className='about-text-desc'>
                      Below are the technologies I am currently working with:
                    </p>
                  </div>
                  <br />
                  <Container>
                    <Row>
                      <Col>
                        <p className='about-list-title'>FRONT-END:</p>
                        <ul className='about-list'>
                          <Badge>React</Badge>{' '}
                          <Badge>Axios</Badge>{' '}
                          <Badge>Webpack</Badge>{' '}
                          <Badge>CSS</Badge>{' '}
                          <Badge>HTML</Badge>{' '}
                          <Badge>Svelte</Badge>{' '}
                        </ul>

                        <p className='about-list-title'>BACK-END:</p>
                        <ul className='about-list'>
                          <Badge>Express</Badge>{' '}
                          <Badge>Node.js</Badge>{' '}
                          <Badge>PostgreSQL</Badge>{' '}
                          <Badge>AWS</Badge>{' '}
                        </ul>
                      </Col>
                      <Col>
                        <p className='about-list-title'>LANGUAGES:</p>
                        <ul className='about-list'>
                          <Badge>JavaScript (ES6+)</Badge>{' '}
                          <Badge>Ruby on Rails</Badge>{' '}
                          <Badge>Ruby</Badge>{' '}
                        </ul>

                        <p className='about-list-title'>TESTING:</p>
                        <ul className='about-list'>
                          <Badge>Jest</Badge>{' '}
                          <Badge>Cypress</Badge>{' '}
                          <Badge>Mocha/Chai</Badge>{' '}

                        </ul>

                      </Col>
                      <Col>
                        <p className='about-list-title'>DESIGN:</p>
                        <ul className='about-list'>
                          <Badge>Figma</Badge>{' '}
                          <Badge>StoryBook</Badge>{' '}
                          <Badge>AdobeXD / Adobe Suit</Badge>{' '}
                        </ul>

                        <p className='about-list-title'>TEAM WORK:</p>
                        <ul className='about-list'>
                          <Badge>Jira</Badge>{' '}
                          <Badge>Trello</Badge>{' '}
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