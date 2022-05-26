import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar';
import './styles.css'

const Loading = () => {

  return (
    <>
      <div className='loading-center'>
        <div
          className="app-floating"
          id="app-circle-small"
          style={{ right: '50vw' }}
        />
        <div
          className="app-floating3"
          id="app-circle-small3"
          style={{ bottom: '10vh' }}
        />
        <div
          className="app-floating2"
          id="app-circle-small2"
          style={{ right: '50vw' }}
        />


        <div
          className="app-floating"
          id="app-circle-small"
          style={{ left: '50vw' }}
        />
        <div
          className="app-floating3"
          id="app-circle-small3"
          style={{ top: '10vh' }}
        />
        <div
          className="app-floating2"
          id="app-circle-small2"
          style={{ left: '50vw' }}
        />
      </div>

    </>
  )
}

export default Loading