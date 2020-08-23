import React from 'react';
import badge from './badge.svg'
import handshake from './handshake.svg'
import magnifyingGlass from './magnifying-glass.svg'
import stopwatch from './stopwatch.svg'

const WhyUs = () => {
  return (
    <div className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-secondary text-white'>
      <div className='flex flex-col items-center text-center p-4 mb-6'>
        <div className='h-48'>
          <img src={badge} className='object-scale-down h-full w-full' alt='badge' />
        </div>
        <div className='text-xs w-full max-w-xs mt-4'>Nulla exercitation occaecat sint nulla laborum aliqua esse laborum incididunt adipisicing et sunt aute. Duis commodo magna mollit ex anim cillum. Nostrud exercitation laboris fugiat nulla laboris in sint ut ad magna ullamco sint. Lorem sint in exercitation duis consequat non qui irure consequat minim. Qui aute sunt labore ex sit amet non irure veniam ullamco. Id eiusmod id commodo occaecat do aute aliquip excepteur ea nostrud ea.</div>
      </div>
      <div className='flex flex-col items-center text-center p-4 mb-6'>
        <div className='h-48'>
          <img src={stopwatch} className='object-scale-down h-full w-full' alt='stopwatch' />
        </div>
        <div className='text-xs w-full max-w-xs mt-4'>Proident amet duis amet eiusmod aliquip quis. In ad qui sunt qui aliqua nisi enim commodo est magna magna irure. Pariatur labore consequat aliquip culpa sit qui nostrud id dolor dolor do officia reprehenderit Lorem. Officia quis adipisicing consectetur nulla dolore aute irure labore amet. Labore pariatur ea consequat dolore anim elit Lorem fugiat irure est minim proident. Deserunt sint cillum consectetur quis est enim non ut culpa.</div>
      </div>
      <div className='flex flex-col items-center text-center p-4 mb-6'>
        <div className='h-48'>
          <img src={magnifyingGlass} className='object-scale-down h-full w-full' alt='magnifying-glass' />
        </div>
        <div className='text-xs w-full max-w-xs mt-4'>Do cillum Lorem velit anim incididunt deserunt amet magna esse qui fugiat id laboris. Ut enim velit tempor ad aute dolor laborum consequat Lorem. Ipsum esse proident tempor enim pariatur reprehenderit laborum irure excepteur. Labore consequat aute ex aute ipsum tempor. Excepteur pariatur proident nisi culpa non voluptate consectetur.</div>
      </div>
      <div className='flex flex-col items-center text-center p-4'>
        <div className='h-48'>
          <img src={handshake} className='object-scale-down h-full w-full' alt='handshake' />
        </div>
        <div className='text-xs w-full max-w-xs mt-4'>Occaecat aliquip laborum sunt sit nisi reprehenderit proident amet. Adipisicing dolor enim ea ullamco dolore aliquip qui excepteur adipisicing in. Et quis adipisicing sunt in proident deserunt veniam aliqua sit. Minim minim adipisicing minim nostrud excepteur nostrud ex nulla aute est et. Eu magna est fugiat ut nisi ullamco quis voluptate id veniam ad dolore amet exercitation.</div>
      </div>
    </div>
  );
};

export default WhyUs;