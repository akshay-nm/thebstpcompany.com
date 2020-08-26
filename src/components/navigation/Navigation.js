import React, { useState } from 'react';

const Navigation = ({ changeSection }) => {
  const [expanded, set] = useState(false)
  return (
    <nav className='w-full flex items-center justify-between px-10 py-5 fixed bg-primary'>
      <div>
        <button onClick={() => changeSection(1)} className='text-3xl tracking-wider focus:outline-none text-button-primary'>The BSTP Company</button>
        <div className={`block ${expanded? '' : 'hidden'} sm:hidden`}>
          <button onClick={() => changeSection(2)} className='text-button-primary focus:outline-none' >Why Us</button>
          <button onClick={() => changeSection(3)} className='text-button-primary focus:outline-none' >Pricing</button>
          <button onClick={() => changeSection(4)} className='text-button-primary focus:outline-none' >Contact Us</button>
        </div>
      </div>
      <div className="block sm:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-button-primary focus:outline-none" onClick={() => set(!expanded)}>
          <div className={`${expanded? 'hidden': ''}`}><svg className='fill-current h-3 w-3' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg></div>
          <div className={`${expanded? '': 'hidden'}`}>&#10005;</div>
        </button>
      </div>
      <div className='hidden sm:flex flex-row-reverse'>
        <button onClick={() => changeSection(4)} className='ml-10 p-2 text-button-primary focus:outline-none'>Contact Us</button>
        <button onClick={() => changeSection(3)} className='ml-10 p-2 text-button-primary focus:outline-none'>Pricing</button>
        <button onClick={() => changeSection(2)} className='ml-10 p-2 text-button-primary focus:outline-none'>Why Us</button>
      </div>
    </nav>
  );
};

export default Navigation;