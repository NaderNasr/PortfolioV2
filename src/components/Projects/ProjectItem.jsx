import React from 'react'
import { Badge, Card, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './styles.css'


const ProjectItem = ({ _ }) => {

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        transition={{ ease: "easeOut", duration: 1.2 }}
        animate={{ x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="max-w-sm p-6 mb-8 mt-8 rounded-lg shadow bg-gray-800 border-gray-700 h-[90%] flex flex-col justify-between"
      >

        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{_.title}</h5>
          <p className="mb-3 font-normal text-gray-400">{_.text}</p>
        </div>
        <div>
        <div className='flex flex-wrap mb-4'>
          {_.badge.map((b) => (
            <>
              <span class="mb-2 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-purple-900 text-purple-300">{b}</span>
            </>
          ))}
        </div>
          {_.site ?
            <a href={_.site} target="_blank" rel="noopener noreferrer" className="mr-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
              Live
            </a>
            :
            <a href={_.video} target="_blank" rel="noopener noreferrer" className="mr-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
              Demo
            </a>
          }
          <a href={_.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
            Github
          </a>
        </div>
      </motion.div>
    </>
  )
}

export default ProjectItem