import React from 'react'
import { Rings } from 'react-loader-spinner'
import Header from '../Header/Header'
import './styles.css'

const Loading = () => {

  const word = [
    'Please wait while the minions do their work',
    'Patience is Virtue',
    'You are number 2843684714 in the queue',
    'TODO: Insert elevator music',
    'Updating Updater',
    'Whatever you do, don\'t look behind you',
    'Work, work...'
  ];

  let wrd = word[Math.floor(Math.random() * word.length)];


  return (
    <>
      <Header />
      <div className='loading-center'>
        <div className='loading-container'>
          <Rings ariaLabel="loading-indicator" color="#760c90" height="300" width="300" />
          <p className='loading-text'>{wrd}...</p>
        </div>
      </div>

    </>
  )
}

export default Loading