import React from 'react';
import image from './3.svg';

const Home = () => {
  return (
    <div className='w-full flex flex-col p-10 mt-40 relative'>
      <div className='text-5xl md:text-6xl font-heading'>Tell your story <br />the right way</div>
      <div className='w-full max-w-sm md:max-w-md'>Nisi nulla ut exercitation eu quis ex cillum et id. Id ea cupidatat elit commodo. Non eu qui nisi cillum nulla. Ad commodo do nostrud do. Duis Lorem ad ex ullamco id commodo culpa voluptate sunt non magna. Et enim dolor qui incididunt nulla voluptate nulla irure minim eu. Sint minim ad do non cupidatat tempor eu eu ea et qui.</div>
      <div className='pt-10'>
        <button className='bg-gray-900 hover:bg-button-dark text-primary font-bold py-2 px-4 rounded-full'>Book your consultation now</button>
      </div>
      <img className='absolute h-full bottom-0 right-0' src={image} alt='main' />
    </div>
  );
};

export default Home;