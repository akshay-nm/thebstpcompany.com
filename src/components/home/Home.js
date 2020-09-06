import React from 'react'
import image from './3.svg'

const Home = () => {
  return (
    <div className='w-full flex flex-col p-10 mt-40 relative overflow-hidden bg-primary'>
      <div className='text-5xl md:text-6xl lg:text-hero font-heading text-button-primary '>
        Tell your story <br />
        the right way
      </div>
      <div className='w-full max-w-sm md:max-w-md'>
        People forget what they read, but they never forget how they feel
        reading something. We help you instill the right feelings in your
        audience. With our articles, we help you cut through the noise and drive
        results. We focus on doing what we do best (writing articles) so you can
        focus on what you do best (growing your business)!
      </div>
      <div className='pt-10'>
        <button className='bg-button-primary hover:bg-button-dark text-primary lg:text-home-button font-bold py-2 px-4 rounded-full'>
          Book your consultation now
        </button>
      </div>
      <div className='absolute h-full w-1/2 bottom-0 right-0 hidden md:block'>
        <img
          className='absolute h-full w-full object-contain object-right-bottom mt-5'
          src={image}
          alt='main'
        />
      </div>
    </div>
  )
}

export default Home
