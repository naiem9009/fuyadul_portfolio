

import React from 'react'
// fi-rr-display-code
const Skills = ({icon, heading, content}) => {
  return (
    <div
    className='mt-10 section-color p-5 border-b-2 border-white hover:border-b-2 hover:border-[#5E3BEE] rounded-b-xl duration-100'>
        <i className={`fi ${icon} text-4xl mb-2`}></i>
        <h1 className='text-xl font-bold mb-2'>{heading}</h1>
        <p className='text-sm text-gray-500/60'>{content}</p>
    </div>
  )
}

export default Skills