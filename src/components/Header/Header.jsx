import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from '../../assets/Logo.svg'
import './styles.css'

const Header = () => {
  return (
    <>
      <Navbar className='backgroundColor'>
      <Container>
        <Navbar.Brand href="#home">
          <img className='logo' src={Logo} alt='home'/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <div className='navLink'>
          <Nav.Link>
          <p className='header-text-color'>About</p>
          </Nav.Link>
          <Nav.Link>
          <p className='header-text-color'>Work</p>
          </Nav.Link>
          <Nav.Link>
          <p className='header-text-color'>Contact</p>
          </Nav.Link>
          <Nav.Link>
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