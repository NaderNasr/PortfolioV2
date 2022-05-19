import React from 'react'
import './styles.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-text-container'>
        <p className='about-text-header'>About Me <hr /></p>
        <div>
          <p className='about-text-desc'>
            Hello! My name is Nader and I enjoy creating things
            that live on the internet. My interest in web development
            started back in 2012 when I decided to try editing custom
            Tumblr themes — turns out hacking together a custom
            reblog button taught me a lot about HTML & CSS!
          </p>
        </div>
        <ul className='about-list'>
          <li>React</li>
          <li>Node.js</li>
          <li>JavaScript (ES6+)</li>
        </ul>
        <ul className='about-list'>
          <li>React</li>
          <li>Node.js</li>
          <li>JavaScript (ES6+)</li>
        </ul>
      </div>
    </div>
  )
}

export default About