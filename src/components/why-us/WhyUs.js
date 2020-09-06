import React from 'react'
import badge from './badge.svg'
import handshake from './handshake.svg'
import magnifyingGlass from './magnifying-glass.svg'
import stopwatch from './stopwatch.svg'

const WhyUs = () => {
  return (
    <div className='px-16 py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-secondary text-white'>
      <div className='flex flex-col items-center text-center p-4 mb-6'>
        <div className='h-48'>
          <img
            src={badge}
            className='object-scale-down h-full w-full'
            alt='badge'
          />
        </div>
        <div className='text-sm lg:text-why-us-description w-full max-w-xs mt-4'>
          No hidden costs. Ever. All the plans are in front of you. For custom
          requests, we'll provide you a proper breakup of the costs so that
          we're on the same page.
        </div>
      </div>
      <div className='flex flex-col items-center text-center p-4 mb-6'>
        <div className='h-48'>
          <img
            src={stopwatch}
            className='object-scale-down h-full w-full'
            alt='stopwatch'
          />
        </div>
        <div className='text-sm lg:text-why-us-description w-full max-w-xs mt-4'>
          We're committed to providing you nothing but the best. With the
          rapport we build over the quarter(s) you spend with us, we become a
          seamless extension of your team.
        </div>
      </div>
      <div className='flex flex-col items-center text-center p-4 mb-6'>
        <div className='h-48'>
          <img
            src={magnifyingGlass}
            className='object-scale-down h-full w-full'
            alt='magnifying-glass'
          />
        </div>
        <div className='text-sm lg:text-why-us-description w-full max-w-xs mt-4'>
          From the samples we share with you to the articles we provide you,
          quality is never compromised. We do whatever it takes to consistently
          provide the best quality possible.
        </div>
      </div>
      <div className='flex flex-col items-center text-center p-4'>
        <div className='h-48'>
          <img
            src={handshake}
            className='object-scale-down h-full w-full'
            alt='handshake'
          />
        </div>
        <div className='text-sm lg:text-why-us-description w-full max-w-xs mt-4'>
          To ensure maximum efficiency, we've set up a streamlined process that
          helps us deliver on time. And we're always working on making the
          process more efficient so that you get your content faster.
        </div>
      </div>
    </div>
  )
}

export default WhyUs
