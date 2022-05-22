import React from 'react'
import Img from '../../assets/Circle.svg'
import './styles.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-text-container'>
        <p className='contact-text-header'>Get In Touch<hr /></p>
        <ul style={{marginTop:'90px'}}>
          <li>
            <span className='contact-button'>
              <a href='mailto:nadernasr7@gmail.com'>Say Hello</a>
            </span>
          </li>
        </ul>
        <img src={Img} alt='circleImages' className='contact-image'/>
      </div>
    </div>
  )
}

export default Contact