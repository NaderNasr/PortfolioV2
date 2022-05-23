import React from 'react'
import { Badge, Card, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './styles.css'

const ProjectItem = ({ _ }) => {

  return (

    <div>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        transition={{ ease: "easeOut", duration: 1.2 }}
        animate={{ x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Card
          bg='dark'
          text='white'
          className="mb-2 project-card"
        >
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
            <div className='project-button'>
              {_.site ?
                <Button href={_.site} variant="light">Site</Button>
                :
                <Button href={_.video} variant="light">Video</Button>
              }
              <Button href={_.link} variant="warning">Github</Button>
            </div>
            <br />
          </Card.Footer>
        </Card>
        <br />
      </motion.div>
    </div>

  )
}

export default ProjectItem