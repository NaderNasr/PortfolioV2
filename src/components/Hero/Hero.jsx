import React from 'react'
// import TextLoop from "react-text-loop";
// import Circle from '../../assets/Circle.svg'
import './styles.css'

const Hero = () => {
  return (
    <>
      <div className='hero-container'>
        <div className='text-container'>
          <p className='text'>Hi, my name is,</p>
          <p className='text-name'>Nader Nasr.</p>
          <p className='text-desc'>I build things for the web.</p>
          <p className='text-summary'>
            I’m a software engineer specializing in building
            and designing exceptional digital experiences.
          </p>
          {/* <img className='circle-svg' src={Circle} alt='Circle' /> */}
        </div>
      </div>
    </>
  )
}

export default Hero