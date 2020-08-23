import React from 'react';
import google from './google.svg'
import linkedin from './linkedin.svg'
import twitter from './twitter.svg'

const ContactUs = () => {
  return (
    <div className='bg-secondary text-primary'>
      <div className='text-center text-5xl font-heading'>Contact Us</div>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-20'>
        <div>
          <input className='border-primary placeholder-primary border-b-4 mb-3 bg-secondary w-full' placeholder='Name' type='text' id='name' />
          <input className='border-primary placeholder-primary border-b-4 mb-3 bg-secondary w-full' placeholder='E-mail' type='text' id='name' />
          <input className='border-primary placeholder-primary border-b-4 mb-3 bg-secondary w-full' placeholder='Phone' type='text' id='name' />
          <div className='mb-3'>Your Inquiry</div>
          <input className='border-primary placeholder-primary border-b-4 mb-3 bg-secondary w-full' placeholder='' type='text' id='name' />
          <div className='text-right'>
            <button className='bg-primary text-secondary py-1 px-2 rounded'>Submit</button>
          </div>
        </div>
        <div>
          <div className='text-sm'>Write to us</div>
          <div className='font-black text-lg sm:text-xl md:text-2xl font-heading'>shuja@thebstpcompany.com</div>
          <div>
            <div className='text-sm'>Follow us</div>
            <div className='flex'>
              <div className='rounded-full h-8 w-8 m-2'><img src={google} alt='Google +'/></div>
              <div className='rounded-full h-8 w-8 m-2'><img src={linkedin} alt='LinkedIn'/></div>
              <div className='rounded-full h-8 w-8 m-2'><img src={twitter} alt='Twitter'/></div>
            </div>
          </div>
          <div className='text-xs text-justify p-4 mx-10'>Copyright 2020 @Haya Abidi | 221b Baker Street | Suite 1106 | Blackpink in your area | 999-096-3975</div>
          <div className='text-xs text-justify px-4 mx-10 flex items-end w-100 justify-end'>
            <div>Made with <span role='img' aria-label='love'>❤️</span> by&nbsp;</div>
            <div>
              <a href='https://sdiot.io' rel='noreferrer noopener' target='_blank'><img className='h-3 mb-1' src='https://sdiot.io/static/media/sdiot-logo.6f56f3c3.svg' alt='sdiot' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;