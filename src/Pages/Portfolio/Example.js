import React from 'react';
import IMG1 from '../../../assets/education/course1.jpg';
import useTitle from '../../../hooks/useTitle';

const Example = () => {
  useTitle('Example');

  return (
    <div className='max-w-[1440px] mx-auto mt-8'>
      <h3 className='text-2xl text-center text-green-500'>
        Welcome to Example project detail page
      </h3>
      <h1 className='text-center text-secondary'>Example Project</h1>

      <div className='p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <img src={IMG1} className='rounded-xl' alt='ImageBody' />
          
        </div>
        <div className='my-6'>
          <h3 className='text-xl'>Project Description:</h3>
          <p>
            ✔ 
          </p>
          <p>✔ Implement from scratch</p>
          <p>
            ✔ 
          </p>
          <p>✔ </p>
          <p>✔ Fully Responsive website</p>
          <p>✔ Deploy in Netlify</p>
        </div>
        <div className='my-6'>
          <a href='/' target='_blank' rel='noopener noreferrer' className='btn  capitalize mr-3 my-3'>Live Website</a>
          <a href='/' target='_blank' rel='noopener noreferrer' className='btn  capitalize mr-3 my-3'>Front-end Code</a>
          <a href='/' target='_blank' rel='noopener noreferrer' className='btn  capitalize mr-3 my-3'>Back-end Code</a>
        </div>
      </div>
    </div>
  );
};

export default Example;
// <a href='https://www.youtube.com/'  target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Video Preview</a>
