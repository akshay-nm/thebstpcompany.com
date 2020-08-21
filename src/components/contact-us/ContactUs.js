import React from 'react';

const ContactUs = () => {
  return (
    <div className='bg-gray-900 text-white'>
      <div className='text-center text-5xl'>Contact Us</div>
      <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-20'>
        <div>
          <input className='border-b-4 mb-3 bg-gray-900 w-full' placeholder='Name' type='text' id='name' />
          <input className='border-b-4 mb-3 bg-gray-900 w-full' placeholder='E-mail' type='text' id='name' />
          <input className='border-b-4 mb-3 bg-gray-900 w-full' placeholder='Phone' type='text' id='name' />
          <div className='mb-3'>Your Inquiry</div>
          <input className='border-b-4 mb-3 bg-gray-900 w-full' placeholder='' type='text' id='name' />
          <div className='text-right'>
            <button className='bg-white text-black py-1 px-2 rounded'>Submit</button>
          </div>
        </div>
        <div>
          <div className='text-sm'>Write to us</div>
          <div className='font-black text-lg sm:text-xl md:text-2xl'>shuja@thebstpcompany.com</div>
          <div>
            <div className='text-sm'>Follow us</div>
            <div className='flex'>
              <div className='rounded-full p-4 m-2 bg-gray-500'></div>
              <div className='rounded-full p-4 m-2 bg-gray-500'></div>
              <div className='rounded-full p-4 m-2 bg-gray-500'></div>
            </div>
          </div>
          <div className='text-xs text-justify p-4 mx-10'>Copyright 2020 @Haya Abidi | 221b Baker Street | Suite 1106 | Blackpink in your area | 999-096-3975</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;