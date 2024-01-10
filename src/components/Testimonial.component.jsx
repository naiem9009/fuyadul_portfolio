

import React from 'react'

const Testimonial = ({rates=5, message, client = {name: "", degination: "", image: ""}}) => {


  const leftRates = 5 - rates;


  return (
    <div className='border border-[#006B6A] p-5 rounded-md'>
      <div className='flex flex-row gap-2 mb-2'>
          {/* <i className="fi fi-sr-star"></i> */}
          {/* <i className="fi fi-sr-star"></i>
          
          <i className="fi fi-sr-star"></i>
          <i className="fi fi-sr-star"></i> */}
          {[...Array(rates)]?.filter((rate, i) => i <= 5)?.map((rate, index) => {
            return (
              <i className="fi fi-sr-star"></i>
            )
            
          })}

          {[...Array(leftRates)]?.filter((rate, i) => i <= 5)?.map((rate, index) => {
         
            return (
              <i class="fi fi-rr-star"></i>
            )
            
          })}
          

              
      </div>
      <p className='mb-3 text-gray-600/60 text-sm'>{message}</p>
      <div className='flex flex-row gap-3 items-center'>
          <img className='w-16 h-16 rounded-full object-cover'
              src={client.image}
              alt=""/>

          <div>
              <h1>{client.name}</h1>
              <p>{client.degination}</p>
          </div>
      </div>
    </div>  
  )
}

export default Testimonial