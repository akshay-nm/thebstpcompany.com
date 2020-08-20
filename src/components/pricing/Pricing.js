import React from 'react';

const Pricing = () => {
  return (
    <div className='py-10'>
      <div className='text-center text-5xl mb-5'>Pricing</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-5'>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col bg-gray-900 rounded-lg p-1 w-full max-w-xs'>
            <div className='py-16'></div>
            <div className='text-center rounded-lg bg-white p-4'>
              <div className='text-2xl'>Small</div>
              <div>Articles per Month - 4</div>
              <div>Articles per Week - 1</div>
              <div>Words per article - 300</div>
              <div>SEO Keyword Writing - Yes</div>
              <div>Content Stategy Included - Yes</div>
              <div>Plagarism Free - Yes</div>
              <div>Posting Included - No</div>
              <div className='text-lg'>$39.00 / month</div>
              <button className='bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-4 rounded-full'>Buy Now</button>
            </div>
          </div>
        </div>
        
        <div className='flex items-center justify-center'>
          <div className='flex flex-col bg-gray-900 rounded-lg p-1 w-full max-w-xs'>
            <div className='py-16'></div>
            <div className='text-center rounded-lg bg-white p-4'>
              <div className='text-2xl'>Medium</div>
              <div>Articles per Month - 4</div>
              <div>Articles per Week - 1</div>
              <div>Words per article - 300</div>
              <div>SEO Keyword Writing - Yes</div>
              <div>Content Stategy Included - Yes</div>
              <div>Plagarism Free - Yes</div>
              <div>Posting Included - No</div>
              <div className='text-lg'>$39.00 / month</div>
              <button className='bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-4 rounded-full'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col bg-gray-900 rounded-lg p-1 w-full max-w-xs'>
            <div className='py-16'></div>
            <div className='text-center rounded-lg bg-white p-4'>
              <div className='text-2xl'>Large</div>
              <div>Articles per Month - 4</div>
              <div>Articles per Week - 1</div>
              <div>Words per article - 300</div>
              <div>SEO Keyword Writing - Yes</div>
              <div>Content Stategy Included - Yes</div>
              <div>Plagarism Free - Yes</div>
              <div>Posting Included - No</div>
              <div className='text-lg'>$39.00 / month</div>
              <button className='bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-4 rounded-full'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;