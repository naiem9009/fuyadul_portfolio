import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = ({portfolioImage, heading, content}) => {
  return (
    <div>
        <img className='' src={portfolioImage} alt="portfolio image"/>

        <div className='p-3'>
            <h1 className='text-xl font-bold'>{heading}</h1>
            <p className='text-sm text-gray-600/80 mb-4'>{content}</p>
            <Link className='border-b border-gray-500' to=''>View In Github</Link>
        </div>
    </div>  
  )
}

export default Portfolio