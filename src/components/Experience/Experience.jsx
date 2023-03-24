import React, { useState } from 'react'
import { Badge, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './styles.css'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import isMobile from 'is-mobile'
import { Helmet } from 'react-helmet'



const Experience = () => {

  const [readMore, setReadMore] = useState(false);
  const [readMore2, setReadMore2] = useState(false);
  const [readMore3, setReadMore3] = useState(false);
  const [readMore4, setReadMore4] = useState(false);
  const [readMore5, setReadMore5] = useState(false);





  const toggleReadMore = () => {
    setReadMore(!readMore)
  }

  const toggleReadMore2 = () => {
    setReadMore2(!readMore2)
  }

  const toggleReadMore3 = () => {
    setReadMore3(!readMore3)
  }

  const toggleReadMore4 = () => {
    setReadMore4(!readMore4)
  }
  const toggleReadMore5 = () => {
    setReadMore5(!readMore5)
  }

  return (
    <div className='experience-container'>
      <Helmet>
        <title>Experience | Nader's Portfolio</title>
        <meta
          name="description"
          content="Discover Nader's experience as a front-end web developer with a track record of delivering impactful results. Check out the technologies and skills that he has mastered to create user-friendly web applications."
        />
        <meta name='keywords' content='experience, web development, front-end, React, Node.js, AWS, Three.js, Unity, VR, mobile app, SEO' />
        <meta name='author' content='Nader Nasr' />
        <meta property='og:title' content='Experience | Naders Portfolio' />
        <meta property='og:description' content='Discover Naders experience as a front-end web developer with a track record of delivering impactful results Check out the technologies and skills that he has mastered to create user-friendly web applications' />
      </Helmet>
      <div className='experience-text-container'>
        <p className='experience-text-header'>Experience<hr /></p>
        <div style={{ marginBottom: '40px' }}>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            transition={{ ease: "easeOut", duration: 1.2 }}
            animate={{ x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Card
              bg='dark'
              text='white'
              style={{ width: '100%' }}
              className="mb-2 experience-card"
            >
              <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Memory Jar - Toronto, Ontario</p>
                <p>Dec 2022 - Current</p>
              </Card.Header>
              <Card.Body>
                <Card.Title>Product Development - Front-End Developer</Card.Title>
                {readMore5 ?
                  <>
                    <Card.Text>
                      <ul>
                        <li>Collaborate closely and translate the founders' ideas into functional components in React Native.</li>
                        <li>Converting Figma UX/UI designs into mobile app components (iOS/Android).</li>
                        <li>Write efficient and maintainable code using HTML, CSS, and JavaScript.</li>
                        <li>Collaborate with back-end developers to connect API endpoints to the front end..</li>
                        <li>Implement SEO best practices to improve website visibility and search engine ranking</li>
                        <li>Documentation</li>
                      </ul>
                    </Card.Text>
                    <span onClick={toggleReadMore5} style={{ color: '#E200FF', cursor: 'pointer' }}>Read Less</span>
                  </>
                  :
                  <>
                    <span onClick={toggleReadMore5} style={{ color: 'orange', cursor: 'pointer' }}>Read More</span>
                  </>
                }
              </Card.Body>
              <Card.Footer>
                {' '} <Badge bg="primary">React Native</Badge> {' '}
                {' '} <Badge bg="primary">NodeJs</Badge> {' '}
                {' '} <Badge bg="primary">React</Badge> {' '}
                {' '} <Badge bg="primary">AWS</Badge> {' '}
                {' '} <Badge bg="primary">Axios</Badge> {' '}
                {' '} <Badge bg="primary">Postman</Badge> {' '}
                {' '} <Badge bg="primary">MongoDB</Badge> {' '}
                {' '} <Badge bg="primary">Figma</Badge> {' '}
                {' '} <Badge bg="primary">Jira</Badge> {' '}
                {' '} <Badge bg="primary">BitBucket</Badge> {' '}
                {' '} <Badge bg="primary">SEO</Badge> {' '}
              </Card.Footer>
            </Card>
          </motion.div>
        </div>
        <div style={{ marginBottom: '40px' }}>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            transition={{ ease: "easeOut", duration: 1.2 }}
            animate={{ x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Card
              bg='dark'
              text='white'
              style={{ width: '100%' }}
              className="mb-2 experience-card"
            >
              <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>New Idea Machine - Calgary, Alberta</p>
                <p>Sept 2022 - Dec 2022</p>
              </Card.Header>
              <Card.Body>
                <Card.Title>Front-End Web Developer</Card.Title>
                {readMore4 ?
                  <>
                    <Card.Text>
                      <ul>
                        <li>Stay up-to-date with emerging trends and technologies in web development.</li>
                        <li>Collaborate with the design team to create a visually appealing website layout and user interface.</li>
                        <li>Develop and maintain website features and functionality.</li>
                        <li>Optimize the website for maximum speed, scalability, and user experience.</li>
                        <li>Ensure website accessibility and compatibility across different browsers and devices.</li>
                        <li>Troubleshoot and debug website issues in a timely manner.</li>
                        <li>Work closely with back-end developers to seamlessly integrate front-end functionality with back-end systems.</li>
                      </ul>

                    </Card.Text>
                    <span onClick={toggleReadMore4} style={{ color: '#E200FF', cursor: 'pointer' }}>Read Less</span>
                  </>
                  :
                  <>
                    <span onClick={toggleReadMore4} style={{ color: 'orange', cursor: 'pointer' }}>Read More</span>
                  </>
                }
              </Card.Body>
              <Card.Footer>
                {' '} <Badge bg="primary">React</Badge> {' '}
                {' '} <Badge bg="primary">Firebase</Badge> {' '}
                {' '} <Badge bg="primary">NodeJs</Badge> {' '}
                {' '} <Badge bg="primary">Axios</Badge> {' '}
                {' '} <Badge bg="primary">Postman</Badge> {' '}
              </Card.Footer>
            </Card>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          transition={{ ease: "easeOut", duration: 1.2 }}
          animate={{ x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Card
            bg='dark'
            text='white'
            style={{ width: '100%' }}
            className="mb-2 experience-card"

          >
            <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>OjaBox - Dubai, UAE</p>
              <p>Jan 2019 - Dec 2019</p>
            </Card.Header>
            <Card.Body>
              <Card.Title>Front-End Web Developer</Card.Title>
              {readMore ?
                <>
                  <Card.Text>
                    Worked closely with client, product managers and designers to conceptualize new features with building the company website to create a new online platform that offers users the ability to create, share, purchase, and sell various 3D content and VR Assets for use within the augmented reality industry.
                    Designed, developed and launched the company website including a content library and 3D rendering tool using Three.js
                    <ul>
                      <br />
                      <p>Key Achievements:</p>
                      <li>Launched the OjaBox website using Reactjs, AWS, NodeJs, ThreeJs, Material UI</li>
                    </ul>
                  </Card.Text>
                  <span onClick={toggleReadMore} style={{ color: '#E200FF', cursor: 'pointer' }}>Read Less</span>
                </>
                :
                <>
                  <span onClick={toggleReadMore} style={{ color: 'orange', cursor: 'pointer' }}>Read More</span>
                </>
              }
            </Card.Body>
            <Card.Footer>
              {' '} <Badge bg="primary">React</Badge> {' '}
              {' '} <Badge bg="primary">AWS</Badge> {' '}
              {' '} <Badge bg="primary">NodeJs</Badge> {' '}
              {' '} <Badge bg="primary">ThreeJs</Badge> {' '}
              {' '} <Badge bg="primary"> Material UI</Badge> {' '}
            </Card.Footer>
          </Card>
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          transition={{ ease: "easeOut", duration: 1.2 }}
          animate={{ x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Card
            bg='dark'
            text='white'
            style={{ width: '100%' }}
            className="mb-2 experience-card"
          >
            <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>360VUZ - Dubai, UAE</p>
              <p>Aug 2016 - Jan 2018</p>
            </Card.Header>
            <Card.Body>
              <Card.Title>Technical Project Manager</Card.Title>

              {readMore2 ?
                <>
                  <Card.Text>
                    Managed 2 remote mobile development teams in India and a web development team in Ukraine in creation of the 360VUZ mobile application that broadcasts live concerts and events to the subscriber using the Oculus Gear VR.
                    Administered the project budget, tracked expenses, monitored performance, and ensured milestones were met.
                    Collaborated with the client to establish technical direction, introduce functions, and gain consensus on changes.
                    <ul>
                      <br />
                      <p>Key Achievements:</p>
                      <li>Achieved the original launch deadline date by overcoming various technical issues without affecting
                        performance and helped grow downloads from 50,000 in the first year to over 500,000 in the second year by optimizing the functionality</li>
                    </ul>
                  </Card.Text>
                  <span onClick={toggleReadMore2} style={{ color: '#E200FF', cursor: 'pointer' }}>Read Less</span>
                </>
                :
                <>
                  <span onClick={toggleReadMore2} style={{ color: 'orange', cursor: 'pointer' }}>Read More</span>
                </>
              }
            </Card.Body>
            <Card.Footer>
              {' '} <Badge bg="primary">Trello</Badge> {' '}
              {' '} <Badge bg="primary">AWS</Badge> {' '}
              {' '} <Badge bg="primary">UpWork</Badge> {' '}
              {' '} <Badge bg="primary">Skype</Badge> {' '}
            </Card.Footer>
          </Card>
        </motion.div>
        <br />

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          transition={{ ease: "easeOut", duration: 1.2 }}
          animate={{ x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >

          <Card
            bg='dark'
            text='white'
            style={{ width: '100%' }}
            className="mb-2 experience-card"
          >
            <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>Rubicon Group Holding - Amman, Jordan</p>
              <p>Aug 2014 - Jan 2016</p>
            </Card.Header>
            <Card.Body>
              <Card.Title>Junior Virtual Reality Unity3D Developer</Card.Title>
              {readMore3 ?
                <>
                  <Card.Text>
                    Developed applications and educational games for the Oculus Gear VR using Unity 5
                    Liaised with team members throughout the software development lifecycle to achieve established milestones.
                    <ul>
                      <br />
                      <p>Key Achievements:</p>
                      <li>Created an interactive digital comic book for kids using Unity 5 that could be played on their mobile devices.</li>
                    </ul>

                  </Card.Text>
                  <span onClick={toggleReadMore3} style={{ color: '#E200FF', cursor: 'pointer' }}>Read Less</span>
                </>
                :
                <>
                  <span onClick={toggleReadMore3} style={{ color: 'orange', cursor: 'pointer' }}>Read More</span>
                </>
              }
            </Card.Body>
            <Card.Footer>
              {' '} <Badge bg="primary">Unity</Badge> {' '}
              {' '} <Badge bg="primary">Gear VR</Badge> {' '}
              {' '} <Badge bg="primary">Trello</Badge> {' '}
            </Card.Footer>
          </Card>
        </motion.div>

      </div>

    </div>
  )
}

export default Experience