import React, { useState } from 'react';

const Navigation = ({ changeSection }) => {
  const [expanded, set] = useState(false)
  return (
    <nav className='w-full fixed bg-primary'>
      <div className='relative flex items-center justify-between w-full'>
        <div className='py-6'>
          <button onClick={() => changeSection(1)} className='text-3xl tracking-wider focus:outline-none text-button-primary ml-10'>The BSTP Company</button>
          <div className={`block ${expanded? '' : 'hidden'} sm:hidden`}>
            <div><button onClick={() => changeSection(2)} className='text-button-primary lg:text-links focus:outline-none ml-10' >Why Us</button></div>
            <div><button onClick={() => changeSection(3)} className='text-button-primary lg:text-links focus:outline-none ml-10' >Pricing</button></div>
            <div><button onClick={() => changeSection(4)} className='text-button-primary lg:text-links focus:outline-none ml-10' >Contact Us</button></div>
          </div>
        </div>
        <div className="block sm:hidden absolute top-0 right-0 mt-8 mr-4">
          <button className="flex items-center border rounded text-button-primary lg:text-links focus:outline-none" onClick={() => set(!expanded)}>
            <div className={`${expanded? 'hidden': ''} px-3 py-2`}><svg className='fill-current h-3 w-3' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></div>
            <div className={`${expanded? '': 'hidden'} px-3 py-1`}>&#10005;</div>
          </button>
        </div>
        <div className='hidden sm:flex flex-row-reverse'>
          <button onClick={() => changeSection(4)} className='ml-10 p-2 text-button-primary lg:text-links focus:outline-none'>Contact Us</button>
          <button onClick={() => changeSection(3)} className='ml-10 p-2 text-button-primary lg:text-links focus:outline-none'>Pricing</button>
          <button onClick={() => changeSection(2)} className='ml-10 p-2 text-button-primary lg:text-links focus:outline-none'>Why Us</button>
        </div>
      </div>
      
    </nav>
  );
};

export default Navigation;