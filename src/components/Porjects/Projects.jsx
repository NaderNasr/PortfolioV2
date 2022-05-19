import React from 'react'
import { Card } from 'react-bootstrap'
import './styles.css'

const Projects = () => {
  return (
    <div className='projects-container'>
      <div className='projects-text-container'>
        <p className='projects-text-header'>Projects<hr /></p>
        <div>
          <Card
            bg='dark'
            text='white'
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>dark Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Projects