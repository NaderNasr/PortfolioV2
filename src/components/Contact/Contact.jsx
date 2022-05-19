import React from 'react'
import { Button } from 'react-bootstrap'
import './styles.css'

const Contact = () => {
  return (
    <div className='projects-container'>
      <div className='projects-text-container'>
        <p className='projects-text-header'>Get In Touch<hr /></p>
        <ul style={{marginTop:'90px'}}>
          <li>
            <span className='contact-button'>
              <a href='mailto:nadernasr7@gmail.com'>Say Hello</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact