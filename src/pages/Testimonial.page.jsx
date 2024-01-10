

import React from 'react'
import { testimonialData } from '../../data'
import Testimonial from '../components/Testimonial.component'
import AnimationWrapper from '../utils/AnimationWrapper'
import SectionWrapper from '../components/SectionWrapper.component'

const TestimonialPage = () => {
  return (
    <AnimationWrapper className='pb-20 font-roboto'>
      
      <div className='pt-24 w-full md:px-5 lg:px-0 px-5'>
        <SectionWrapper>
          <div className='md:w-1/2 w-full mt-6 font-roboto'>
            <h1 className='text-4xl font-bold mb-5'>Customer testimonials</h1>
          </div>

          <div className='mt-10 grid md:grid-cols-3 grid-cols md:gap-5 gap-3'>
              {testimonialData?.map((item, index) => (
                  <Testimonial key={index} rates={item.rates} message={item.message} client={item.client} />
              ))}
          </div>
          {!testimonialData?.length && <div className='w-full shadow-md py-5 text-center text-xl bg-gray-500/20 text-gray-800'>Dont have Testimonial</div>}
        </SectionWrapper>
      </div>

    </AnimationWrapper>
  )
}

export default TestimonialPage