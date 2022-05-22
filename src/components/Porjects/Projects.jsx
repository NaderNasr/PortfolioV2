import React from 'react'
import { Badge, Card } from 'react-bootstrap'
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
            <Card.Body>
              <Card.Title>Twitter Clone</Card.Title>
              <Card.Text>
                A single page twitter clone application.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Badge bg="primary">React</Badge> {' '}
              <Badge bg="secondary">HTML</Badge> {' '}
              <Badge bg="primary">CSS</Badge> {' '}
              <Badge bg="secondary">PostgreSQL</Badge> {' '}
            </Card.Footer>
          </Card>

          <br />

          <Card
            bg='dark'
            text='white'
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Title>Twitter Clone</Card.Title>
              <Card.Text>
                A single page twitter clone application.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Badge bg="primary">React</Badge> {' '}
              <Badge bg="secondary">HTML</Badge> {' '}
              <Badge bg="primary">CSS</Badge> {' '}
              <Badge bg="secondary">PostgreSQL</Badge> {' '}
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Projects