import React from 'react'
import { Badge, Card, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './styles.css'
import AnimatedCursor from "react-animated-cursor"

const ProjectItem = ({ _ }) => {

  return (

    <div>
      <AnimatedCursor />
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        transition={{ ease: "easeOut", duration: 1.2 }}
        animate={{ x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div
          bg='dark'
          text='white'
          className="mb-2 project-card"
        >
          {/* <img src={_.image} className='card-image' alt={_.title}/> */}

          <Card.Body>
            <Card.Title>{_.title}</Card.Title>
            <Card.Text>
              {_.text}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <>
              {_.badge.map((b) => (
                <>
                  {' '} <Badge bg="primary">{b}</Badge> {' '}
                </>
              ))}
            </>
          </Card.Footer>
          <Card.Footer></Card.Footer>

          <Card.Footer>
            <div className="project-button-container">
              <div className='project-button'>
                {_.site ?
                  <Button href={_.site} variant="light">Live</Button>
                  :
                  <Button href={_.video} variant="light">Demo</Button>
                }
                <Button href={_.link} variant="warning" style={{marginLeft:'20px'}}>Github</Button>
              </div>
            </div>
          </Card.Footer>
          {/* <img src={_.image} className='card-image-bottom' alt={_.title} /> */}

        </div>
        <br />
      </motion.div>
    </div>

  )
}

export default ProjectItem