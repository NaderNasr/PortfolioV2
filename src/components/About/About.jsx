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
                      Hey there, fellow internet enthusiasts! My name is Nader, and I'm addicted to creating awesome digital experiences. Back in 2017, while working as a technical project manager, I stumbled upon the world of web development and fell head over heels in love with it. I couldn't resist tinkering around with JavaScript, HTML, and CSS in my free time, and the rest is history! I'm absolutely stoked to keep honing my skills and ride the wave of innovation in this dynamic field. Let's create some seriously rad stuff together, shall we?
                    </p>
                    <br />
                    <p className='about-text-desc'>
                      Skills:
                    </p>
                  </div>
                  <br />
                  <Container>
                    <Row>
                      <Col>
                        <p className='about-list-title'>FRONT-END:</p>
                        <ul className='about-list'>
                          <Badge>React</Badge>{' '}
                          <Badge>React Native</Badge>{' '}
                          <Badge>Axios</Badge>{' '}
                          <Badge>Webpack</Badge>{' '}
                          <Badge>CSS</Badge>{' '}
                          <Badge>HTML</Badge>{' '}
                          <Badge>Svelte</Badge>{' '}
                          <Badge>SEO</Badge>{' '}
                        </ul>

                        <p className='about-list-title'>BACK-END:</p>
                        <ul className='about-list'>
                          <Badge>Express</Badge>{' '}
                          <Badge>Node.js</Badge>{' '}
                          <Badge>PostgreSQL</Badge>{' '}
                        </ul>
                      </Col>
                      <Col>
                        <p className='about-list-title'>LANGUAGES:</p>
                        <ul className='about-list'>
                          <Badge>JavaScript (ES6+)</Badge>{' '}
                          <Badge>TypeScript</Badge>{' '}
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
                          <Badge>Adobe Suit</Badge>{' '}
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