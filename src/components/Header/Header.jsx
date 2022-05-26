import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from '../../assets/Logo.svg'
import './styles.css'
import resume from '../../assets/Nader Nasr - Resume .pdf'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <Navbar className='backgroundColor'>

        <Container>
          <Navbar.Brand href="/">
            <img className='logo' src={Logo} alt='home' />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div className='navLink'>
              <Nav.Link
              href='https://github.com/NaderNasr'
              >
                <div  className='header-text-color'>
                <FaGithub size={20}/>
                </div>
              </Nav.Link>
              <Nav.Link
              href='https://www.linkedin.com/in/nnasr/'
              >
                <div className='header-text-color'>
                <FaLinkedin size={20}/>
                </div>
              </Nav.Link>
              <Nav.Link
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                download="Web_Dev_Nader_Nasr.pdf"
                variant="outline-primary"
              >
                <p className='resume'>Resume</p>
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </>
  )
}

export default Header