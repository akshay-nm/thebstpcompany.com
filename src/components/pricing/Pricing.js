import React from 'react';
import smCat from './sm-cat.svg'
import mdCat from './md-cat.svg'
import lgCat from './lg-cat.svg'


const Pricing = () => {
  return (
    <div className='px-16 py-32 bg-primary'>
      <div className='text-center text-5xl mb-5 font-heading'>Pricing</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-5'>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col bg-secondary rounded-lg p-1 w-full max-w-xs'>
            <div className='h-32'>
              <img src={smCat} className='object-scale-down h-full w-full' alt='cat' />
            </div>
            <div className='text-center rounded-lg bg-primary p-4'>
              <div className='text-2xl font-heading'>Small</div>
              <div>Articles per Month - 4</div>
              <div>Articles per Week - 1</div>
              <div>Words per article - 300</div>
              <div>SEO Keyword Writing - Yes</div>
              <div>Content Stategy Included - Yes</div>
              <div>Plagarism Free - Yes</div>
              <div>Posting Included - No</div>
              <div className='text-lg'>$39.00 / month</div>
              <button className='bg-secondary hover:bg-gray-700 text-primary font-bold py-2 px-4 mt-4 rounded-full'>Buy Now</button>
            </div>
          </div>
        </div>
        
        <div className='flex items-center justify-center'>
          <div className='flex flex-col bg-secondary rounded-lg p-1 w-full max-w-xs'>
            <div className='h-32'>
              <img src={mdCat} className='object-scale-down h-full w-full' alt='cats' />
            </div>
            <div className='text-center rounded-lg bg-primary p-4'>
              <div className='text-2xl font-heading'>Medium</div>
              <div>Articles per Month - 4</div>
              <div>Articles per Week - 1</div>
              <div>Words per article - 300</div>
              <div>SEO Keyword Writing - Yes</div>
              <div>Content Stategy Included - Yes</div>
              <div>Plagarism Free - Yes</div>
              <div>Posting Included - No</div>
              <div className='text-lg'>$39.00 / month</div>
              <button className='bg-secondary hover:bg-gray-700 text-primary font-bold py-2 px-4 mt-4 rounded-full'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col bg-secondary rounded-lg p-1 w-full max-w-xs'>
            <div className='h-32'>
              <img src={lgCat} className='object-scale-down h-full w-full' alt='too many cats' />
            </div>
            <div className='text-center rounded-lg bg-primary p-4'>
              <div className='text-2xl font-heading'>Large</div>
              <div>Articles per Month - 4</div>
              <div>Articles per Week - 1</div>
              <div>Words per article - 300</div>
              <div>SEO Keyword Writing - Yes</div>
              <div>Content Stategy Included - Yes</div>
              <div>Plagarism Free - Yes</div>
              <div>Posting Included - No</div>
              <div className='text-lg'>$39.00 / month</div>
              <button className='bg-secondary hover:bg-gray-700 text-primary font-bold py-2 px-4 mt-4 rounded-full'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;