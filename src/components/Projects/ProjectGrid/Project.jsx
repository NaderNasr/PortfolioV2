import React from 'react';
import ProjectItem from '../ProjectItem';
import { Col, Container, Row } from 'react-bootstrap';
import Data from '../../ProjectData/Data'
import '.././styles.css'

const Project = () => {

  return (
    <>
      <div className='projects-container'>
        <div className='projects-text-container'>
        <p className='projects-text-header'>Projects<hr /></p>
          <Container>
            <Row xs={1} md={3}>
              {Data.map((_, id) => (
                <Col key={id} >
                  <ProjectItem _={_} />
                </Col>
              )).reverse()}

            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Project;