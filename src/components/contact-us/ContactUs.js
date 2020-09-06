import React from 'react'
import google from './google.svg'
import linkedin from './linkedin.svg'
import twitter from './twitter.svg'

const ContactUs = () => {
  return (
    <div className='bg-secondary text-primary pt-10 pb-5 px-5'>
      <div className='text-center text-contact-us-header font-heading'>
        Contact Us
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-20 text-contact-us-content'>
        <div className='flex items-center justify-center'>
          <div>
            <input
              className='border-primary placeholder-primary border-b-4 mb-3 bg-secondary w-full'
              placeholder='Name'
              type='text'
              id='name'
            />
            <input
              className='border-primary placeholder-primary border-b-4 mb-3 bg-secondary w-full'
              placeholder='E-mail'
              type='text'
              id='email'
            />
            <input
              className='border-primary placeholder-primary border-b-4 mb-3 bg-secondary w-full'
              placeholder='Phone'
              type='text'
              id='phone'
            />
            <div className='mb-3'>Your Inquiry</div>
            <input
              className='border-primary placeholder-primary border-b-4 mb-3 bg-secondary w-full'
              placeholder=''
              type='text'
              id='inquiry'
            />
            <div className='text-right'>
              <button className='bg-primary text-secondary py-1 px-2 rounded'>
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div>
            <div>Write to us</div>
            <div className='font-black text-lg sm:text-xl md:text-2xl lg:text-contact-us-email font-heading'>
              syed@thebstpcompany.com
            </div>
            <div>
              <div>Follow us</div>
              <div className='flex'>
                <div className='rounded-full h-8 w-8 m-2'>
                  <img src={google} className='w-12 h-12' alt='Google +' />
                </div>
                <div className='rounded-full h-8 w-8 m-2'>
                  <img src={linkedin} className='w-12 h-12' alt='LinkedIn' />
                </div>
                <div className='rounded-full h-8 w-8 m-2'>
                  <img src={twitter} className='w-12 h-12' alt='Twitter' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='text-xs text-center md:text-justify'>
          Copyright © 2020 The BSTP Company, Inc. All Rights Reserved.
        </div>
        <div className='text-xs text-justify flex items-end justify-center md:justify-end w-100'>
          <div>
            Made with{' '}
            <span role='img' aria-label='love'>
              ❤️
            </span>{' '}
            by&nbsp;
          </div>
          <div>
            <a
              href='https://sdiot.io'
              rel='noreferrer noopener'
              target='_blank'
            >
              <img
                className='h-3 mb-1'
                src='https://sdiot.io/static/media/sdiot-logo.6f56f3c3.svg'
                alt='sdiot'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
