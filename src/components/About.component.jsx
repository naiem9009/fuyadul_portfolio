

import React from 'react'
import SectionWrapper from './SectionWrapper.component'

const About = ({aboutImage}) => {
  return (
    <div>
        <SectionWrapper>
            <section id="about_me" className='pt-20 flex md:flex-row flex-col justify-around items-center font-roboto md:gap-0 gap-4'>

                <div className='md:w-1/3 w-3/4'>
                    <img className='w-full h-full object-cover' src={aboutImage} alt="Fuyadul Islam"/>
                </div>

                <div className='md:w-1/2 w-full'>
                    <h1 className='text-xl font-semibold mb-2'>About</h1>
                    <h1 className='text-4xl font-bold mb-5'>About Me</h1>

                    <p className='text-sm text-gray-700/60 mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris
                        duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in
                        amet pellentesque.</p>

                    <p className='text-sm text-gray-700/60'>Sit turpis pretium eget maecenas. Vestibulum dolor
                        mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod
                        risus r.</p>

                </div>

            </section>
        </SectionWrapper>
    </div>
  )
}

export default About