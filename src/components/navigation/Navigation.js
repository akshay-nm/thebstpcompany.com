import React, { useState } from 'react';

const Navigation = () => {
  const [expanded, set] = useState(false)
  return (
    <nav className='w-full flex items-center justify-between p-10'>
      <div>
        <div className='text-3xl tracking-wider'>The BSTP Company</div>
        <div className={`block ${expanded? '' : 'hidden'} sm:hidden`}>
          <div>Why Us</div>
          <div>Pricing</div>
          <div>Contact Us</div>
        </div>
      </div>
      <div className="block sm:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-900 border-gray-400 hover:text-gray-700 hover:border-white" onClick={() => set(!expanded)}>
          <div className={`${expanded? 'hidden': ''}`}><svg className='fill-current h-3 w-3' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></div>
          <div className={`${expanded? '': 'hidden'}`}>x</div>
        </button>
      </div>
      <div className='hidden sm:flex flex-row-reverse'>
        <div className='ml-10'>Contact Us</div>
        <div className='ml-10'>Pricing</div>
        <div className='ml-10'>Why Us</div>
      </div>
    </nav>
  );
};

export default Navigation;