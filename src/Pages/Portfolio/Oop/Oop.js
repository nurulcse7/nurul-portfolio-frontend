import React from 'react';
import IMG1 from '../../../assets/oop/oop1.png';
import IMG2 from '../../../assets/oop/oop2.png';
import IMG3 from '../../../assets/oop/oop3.png';
import IMG4 from '../../../assets/oop/oop4.png';
import IMG5 from '../../../assets/oop/oop5.png';
import IMG6 from '../../../assets/oop/oop6.png';

import useTitle from '../../../hooks/useTitle';

const Oop = () => {
  useTitle('OOP');

  return (
    <div className='max-w-[1440px] mx-auto mt-8'>
      <h3 className='text-2xl text-center text-green-500'>
        Welcome to Creative Coding - OOP project detail page
      </h3>
      <h1 className='text-center text-secondary'>OOP Project</h1>

      <div className='p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <img src={IMG1} className='rounded-xl' alt='ImageBody'/>
          <img src={IMG2} className='rounded-xl' alt='ImageBody'/>
          <img src={IMG3} className='rounded-xl' alt='ImageBody'/>
          <img src={IMG4} className='rounded-xl' alt='ImageBody'/>
          <img src={IMG5} className='rounded-xl' alt='ImageBody'/>
          <img src={IMG6} className='rounded-xl' alt='ImageBody'/>
        </div>
        <div className='my-6'>
        <h3 className='text-xl'>Project Description:</h3>
        <p>✔ This project I make art with code and learn object oriented programming with plain vanilla JavaScript in the process</p>
        <p>✔ Implement from scratch</p>
        <p>✔ Animation</p>
        <p>✔ Creative-coding-OOP</p>
        <p>✔ Deploy in GitHub</p>
        </div>
        <div className='my-6'>
        <a href='https://nurulcse7.github.io/creative-coding-oop/' target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Live Website</a>
        <a href='https://github.com/nurulcse7/creative-coding-oop' target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Front-end Code</a>
        <a href='https://github.com/nurulcse7/creative-coding-oop' target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Back-end Code</a>
        </div>
      </div>
    </div>
  );
};

export default Oop;
// <a href='https://www.youtube.com/'  target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Video Preview</a>