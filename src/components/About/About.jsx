import React, { useState } from 'react'
import './styles.css'
import { motion } from 'framer-motion'
import { Badge, Col, Container, Row } from 'react-bootstrap'

const About = () => {

  const [open, isOpen] = useState(false)
  const toggleModal = () => isOpen(!isOpen);

  return (

    <>
      <div className='about-container'>
        <Container>
          <Row>
            <Col>
              <div className='about-text-container'>
                <p className='about-text-header'>Technical Skills <hr /></p>
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  transition={{ ease: "easeOut", duration: 1.2 }}
                  animate={{ x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <div>
                    <p className='about-text-desc'>
                      {/* Experience: Front-End Development | UI/UX Design | KBW | Village Wealth | Memory Jar

                      Responsibilities: User Analysis | Design Strategies | Wireframes | UX/UI Prototyping | Project Management

                      Impact: Transformed Concepts | Engaging Designs | User-Centric Web Apps | Effective Stakeholder Communication

                      Technical Skills: Adobe Suite | Figma | HTML | CSS | JavaScript | Frameworks & Libraries | Reusable Code

                      Non-Technical Skills: Stakeholder Alignment | Idea Translation | Concept to Launch

                      Commitment: Continuous Learning | Industry Trends | Adding Value

                      Ready to collaborate and innovate in the digital space. */}
                    </p>
                    {/* <br />
                    <p className='about-text-desc'>
                      Skills:
                    </p> */}
                  </div>
                  <br />
                  <Container>
                    <Row>
                      <Col>
                        <p className='about-list-title'>FRONT-END:</p>
                        <ul className='about-list'>
                          <Badge>React</Badge>{' '}
                          <Badge>React Native</Badge>{' '}
                          <Badge>NextJs</Badge>{' '}
                          <Badge>API</Badge>{' '}
                          <Badge>Webpack</Badge>{' '}
                          <Badge>CSS</Badge>{' '}
                          <Badge>HTML</Badge>{' '}
                          <Badge>SEO</Badge>{' '}
                          <Badge>NodeJs</Badge>{' '}
                          <Badge>Responsive Design</Badge>{' '}
                          <Badge>Bootstrap</Badge>{' '}
                          <Badge>Material UI</Badge>{' '}
                          <Badge>Styled Components</Badge>{' '}
                          <Badge>Tailwind</Badge>{' '}
                        </ul>

                        {/* <p className='about-list-title'>BACK-END:</p>
                        <ul className='about-list'>
                          <Badge>Express</Badge>{' '}
                          <Badge>Node.js</Badge>{' '}
                          <Badge>PostgreSQL</Badge>{' '}
                        </ul> */}
                      </Col>
                      <Col>
                        <p className='about-list-title'>LANGUAGES:</p>
                        <ul className='about-list'>
                          <Badge>JavaScript</Badge>{' '}
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