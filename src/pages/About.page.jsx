

import React from 'react'
import AnimationWrapper from '../utils/AnimationWrapper'
import SectionWrapper from '../components/SectionWrapper.component'
import About from '../components/About.component'
import aboutMeImage from "../assets/image/About-Me.png"
import { Link } from 'react-router-dom'
import Skills from '../components/Skills.component'
import { skillsData } from '../../data'

const AboutPage = () => {
  return (
    <AnimationWrapper className='pb-20 font-roboto'>
      <div className='md:pt-0 pt-24 section-color w-full md:p-5 lg:p-0 px-5'>
        <About aboutImage={aboutMeImage} />
      </div>


      <div className='px-5'>
        <SectionWrapper>
          <div className='md:w-1/2 w-full mt-6 font-roboto'>
              <h1 className='text-xl font-semibold mb-2'>Education</h1>
              <h1 className='text-4xl font-bold mb-5'>Education Qualifications</h1>
          </div>


          <div className='mt-6 grid md:grid-cols-3 grid-cols gap-3 font-roboto w-full'>
            <div className='flex flex-row gap-3 items-center'>
              <h1 className='w-24 h-24 rounded-full bg-white shadow-md heading flex justify-center items-center font-xl font-bold'>
                SSC
              </h1>

              <div>
                <h1 className='font-semibold'>Ki jano School, Dhaka</h1>
                <h1 className='font-semibold text-sm uppercase text-gray-500'>Primary</h1>
                <p className='text-gray-600/60 text-xs'>2014-15</p>
              </div>
            </div>

            <div className='flex flex-row gap-3 items-center'>
              <h1 className='w-24 h-24 rounded-full bg-white shadow-md heading flex justify-center items-center font-xl font-bold'>
                Diploma
              </h1>

              <div>
                <h1 className='font-semibold'>Mangrove Institute Of Science & Technology</h1>
                <h1 className='font-semibold text-sm uppercase text-gray-500'>computer engineering</h1>
                <p className='text-gray-600/60 text-xs'>2014-15</p>
              </div>
            </div>


            <div className='flex flex-row gap-3 items-center'>
              <h1 className='w-24 h-24 rounded-full bg-white shadow-md heading flex justify-center items-center font-xl font-bold'>
                BSC
              </h1>

              <div>
                <h1 className='font-semibold'>Columbia University in the City of New York</h1>
                <h1 className='font-semibold text-sm uppercase text-gray-500'>software enginnering</h1>
                <p className='text-gray-600/60 text-xs'>2014-15</p>
              </div>
            </div>


            <div className='flex flex-row gap-3 items-center'>
              <h1 className='w-24 h-24 rounded-full bg-white shadow-md heading flex justify-center items-center font-xl font-bold'>
                PSC
              </h1>

              <div>
                <h1 className='font-semibold'>Khulna School</h1>
                <h1 className='font-semibold text-sm uppercase text-gray-500'>English</h1>
                <p className='text-gray-600/60 text-xs'>2014-15</p>
              </div>
            </div>


            <div className='flex flex-row gap-3 items-center'>
              <h1 className='w-24 h-24 rounded-full bg-white shadow-md heading flex justify-center items-center font-xl font-bold'>
                JSC
              </h1>

              <div>
                <h1 className='font-semibold'>Dhaka School</h1>
                <h1 className='font-semibold text-sm uppercase text-gray-500'>Physics</h1>
                <p className='text-gray-600/60 text-xs'>2014-15</p>
              </div>
            </div>


            <div className='flex flex-row gap-3 items-center'>
              <h1 className='w-24 h-24 rounded-full bg-white shadow-md heading flex justify-center items-center font-xl font-bold'>
                HSC
              </h1>

              <div>
                <h1 className='font-semibold'>Dhaka University</h1>
                <h1 className='font-semibold text-sm uppercase text-gray-500'>Chemistry</h1>
                <p className='text-gray-600/60 text-xs'>2014-15</p>
              </div>
            </div>
          </div>
        </SectionWrapper>


      
      <SectionWrapper>

      <div className='font-roboto mt-6'>
            <h1 className='text-sm font-semibold'>Explore my skills</h1>
            <h1 className='text-4xl font-bold'>My Skills</h1>
        </div>

        <div className='grid md:grid-cols-4 grid-cols md:gap-4 gap-2 font-roboto'>
            {skillsData?.filter((_item, index) => index < 4)?.map((item, index) => (
                <Skills key={index} icon={item.icon} heading={item.heading} content={item.content} />
            ))}
        </div>


        
        <div className='md:w-1/2 w-full mt-6 font-roboto'>
          <h1 className='text-xl font-semibold mb-2'>Photo</h1>
          <h1 className='text-4xl font-bold mb-5'>My Gallary</h1>
        </div>

        <div className='mt-6 grid md:grid-cols-6 grid-cols-2 gap-3 font-roboto'>
          <Link to="" before="Visit here" className="rounded-md relative w-full hover:before:content-[attr(before)] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-gray-500/60 hover:before:z-20 hover:before:top-0 before:duration-300 before:flex before:justify-center before:items-center before:text-white before:rounded-md before:underline">
            <img className='w-full h-1/2 object-cover rounded-md' src="https://static.vecteezy.com/system/resources/previews/001/223/998/large_2x/young-indian-boy-smiling-to-the-camera-free-photo.jpg" alt="" />

            <div className='p-3'>
              <h1 className='heading, text-2xl font-bold'>Heading</h1>
              <p className='text-gray-600/60 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ducimus nisi cupiditate, exercitationem fugit consequuntur facilis vel maiores! Quos, nihil!</p>
            </div>
          </Link>

          <Link to="" before="Visit here" className="rounded-md relative w-full hover:before:content-[attr(before)] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-gray-500/60 hover:before:z-20 hover:before:top-0 before:duration-300 before:flex before:justify-center before:items-center before:text-white before:rounded-md before:underline">
            <img className='w-full h-1/2 object-cover rounded-md' src="https://static.vecteezy.com/system/resources/previews/001/223/998/large_2x/young-indian-boy-smiling-to-the-camera-free-photo.jpg" alt="" />

            <div className='p-3'>
              <h1 className='heading, text-2xl font-bold'>Heading</h1>
              <p className='text-gray-600/60 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ducimus nisi cupiditate, exercitationem fugit consequuntur facilis vel maiores! Quos, nihil!</p>
            </div>
          </Link>

          <Link to="" before="Visit here" className="rounded-md relative w-full hover:before:content-[attr(before)] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-gray-500/60 hover:before:z-20 hover:before:top-0 before:duration-300 before:flex before:justify-center before:items-center before:text-white before:rounded-md before:underline">
            <img className='w-full h-1/2 object-cover rounded-md' src="https://static.vecteezy.com/system/resources/previews/001/223/998/large_2x/young-indian-boy-smiling-to-the-camera-free-photo.jpg" alt="" />

            <div className='p-3'>
              <h1 className='heading, text-2xl font-bold'>Heading</h1>
              <p className='text-gray-600/60 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ducimus nisi cupiditate, exercitationem fugit consequuntur facilis vel maiores! Quos, nihil!</p>
            </div>
          </Link>

          <Link to="" before="Visit here" className="rounded-md relative w-full hover:before:content-[attr(before)] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-gray-500/60 hover:before:z-20 hover:before:top-0 before:duration-300 before:flex before:justify-center before:items-center before:text-white before:rounded-md before:underline">
            <img className='w-full h-1/2 object-cover rounded-md' src="https://static.vecteezy.com/system/resources/previews/001/223/998/large_2x/young-indian-boy-smiling-to-the-camera-free-photo.jpg" alt="" />

            <div className='p-3'>
              <h1 className='heading, text-2xl font-bold'>Heading</h1>
              <p className='text-gray-600/60 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ducimus nisi cupiditate, exercitationem fugit consequuntur facilis vel maiores! Quos, nihil!</p>
            </div>
          </Link>

          <Link to="" before="Visit here" className="rounded-md relative w-full hover:before:content-[attr(before)] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-gray-500/60 hover:before:z-20 hover:before:top-0 before:duration-300 before:flex before:justify-center before:items-center before:text-white before:rounded-md before:underline">
            <img className='w-full h-1/2 object-cover rounded-md' src="https://static.vecteezy.com/system/resources/previews/001/223/998/large_2x/young-indian-boy-smiling-to-the-camera-free-photo.jpg" alt="" />

            <div className='p-3'>
              <h1 className='heading, text-2xl font-bold'>Heading</h1>
              <p className='text-gray-600/60 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ducimus nisi cupiditate, exercitationem fugit consequuntur facilis vel maiores! Quos, nihil!</p>
            </div>
          </Link>

          <Link to="" before="Visit here" className="rounded-md relative w-full hover:before:content-[attr(before)] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-gray-500/60 hover:before:z-20 hover:before:top-0 before:duration-300 before:flex before:justify-center before:items-center before:text-white before:rounded-md before:underline">
            <img className='w-full h-1/2 object-cover rounded-md' src="https://static.vecteezy.com/system/resources/previews/001/223/998/large_2x/young-indian-boy-smiling-to-the-camera-free-photo.jpg" alt="" />

            <div className='p-3'>
              <h1 className='heading, text-2xl font-bold'>Heading</h1>
              <p className='text-gray-600/60 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae ducimus nisi cupiditate, exercitationem fugit consequuntur facilis vel maiores! Quos, nihil!</p>
            </div>
          </Link>

        </div>



      </SectionWrapper>



      <SectionWrapper>
        <div className='md:w-1/2 w-full mt-6 font-roboto'>
          <h1 className='text-xl font-semibold mb-2'>Address</h1>
          <h1 className='text-4xl font-bold mb-5'>Location</h1>


          <div className='mt-6 w-full'>
            <div>
              <p>Khulna</p>

            </div>
          </div>
        </div>
      </SectionWrapper>
      </div>
    </AnimationWrapper>

  )
}

export default AboutPage