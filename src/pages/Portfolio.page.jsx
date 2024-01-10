

import React from 'react'
import AnimationWrapper from '../utils/AnimationWrapper'
import SectionWrapper from '../components/SectionWrapper.component'
import { portfolioData } from '../../data'
import Portfolio from '../components/Portfolio.component'

const PortfolioPage = () => {
  return (
    <AnimationWrapper className='pb-20 font-roboto'>
      
      <div className='pt-24 w-full md:px-5 lg:px-0 px-5'>
        <SectionWrapper>
          <div className='md:w-1/2 w-full mt-6 font-roboto'>
            <h1 className='text-4xl font-bold mb-5'>My Portfolio</h1>
          </div>

          <div className='mt-10 grid md:grid-cols-3 grid-cols md:gap-5 gap-3'>
              {portfolioData?.map((item, index) => (
                  <Portfolio key={index} portfolioImage={item.image} heading={item.heading} content={item.content} />
              ))}
          </div>
        </SectionWrapper>
      </div>

    </AnimationWrapper>
  )
}

export default PortfolioPage