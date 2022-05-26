import React from 'react';
import ProjectItem from '../ProjectItem';
import { Col, Container, Row } from 'react-bootstrap';
import Data from '../../ProjectData/Data'
import '.././styles.css'
import isMobile from 'is-mobile';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Project = () => {

  return (
    <>
      <div className='projects-container'>
        <div className='projects-text-container'>
        <p className='projects-text-header'>Projects<hr /></p>
        {isMobile() ? <></> :
          <ParallaxProvider>

            <Parallax speed={50}>

              <div className='project-floating' id='project-circle-small' style={{
                left: '200px',
                bottom: '200px'
              }} />
            </Parallax>

            <Parallax speed={50}>

              <div className='project-floating2' id='project-circle-small2' style={{
                left: '150px',
                bottom: '400px'
              }} />
            </Parallax>

            <Parallax speed={10}>

              <div className='project-floating3' id='project-circle-small3' style={{
                left: '200px',
                bottom: '200px'
              }} />
            </Parallax>

          </ParallaxProvider>
        }
          <Container>
            <Row xs={1} md={2}>
              {Data.map((_, id) => (
                <>
                <Col key={id} >
                  <ProjectItem _={_} />
                </Col>
                </>
              )).reverse()}

            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Project;