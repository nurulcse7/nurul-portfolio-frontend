import React from 'react';
import IMG1 from '../../../assets/gpt/blog01.png';
import IMG2 from '../../../assets/gpt/blog02.png';
import IMG3 from '../../../assets/gpt/blog03.png';
import useTitle from '../../../hooks/useTitle';

const Gpt = () => {
  useTitle('GPT');

  return (
    <div className='max-w-[1440px] mx-auto mt-8'>
      <h3 className='text-2xl text-center text-green-500'>
        Welcome to Gpt-3 OpenAai project detail page
      </h3>
      <h1 className='text-center text-secondary'>GPT-3 Project</h1>

      <div className='p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <img src={IMG1} className='rounded-xl' alt='ImageBody' />
          <img src={IMG2} className='rounded-xl' alt='ImageBody' />
          <img src={IMG3} className='rounded-xl' alt='ImageBody' />
          
        </div>
        <div className='my-6'>
          <h3 className='text-xl'>Project Description:</h3>
          <p>
            ✔ This is a GPT-3 web development project for build a responsive website using html5, css3, ES6 javascript and React.JS
          </p>
          <p>✔ Implement from scratch</p>
          <p>
            ✔ In the project first done create react app and Implement by figma file Click for Figma file.
          </p>
          <p>✔ Fully functioning website, improved CSS skills, and create modern and responsive #ReactJS websites</p>
          <p>✔ Deploy in Firebase</p>
        </div>
        <div className='my-6'>
          <a href='https://gpt3-jsm.web.app/' target='_blank' rel='noopener noreferrer' className='btn  capitalize mr-3 my-3'>Live Website</a>
          <a href='https://github.com/nurulcse7/gpt3_jsm-clone/' target='_blank' rel='noopener noreferrer' className='btn  capitalize mr-3 my-3'>Front-end Code</a>
          <a href='https://github.com/nurulcse7/gpt3_jsm-clone/' target='_blank' rel='noopener noreferrer' className='btn  capitalize mr-3 my-3'>Back-end Code</a>
        </div>
      </div>
    </div>
  );
};

export default Gpt;
// <a href='https://www.youtube.com/'  target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Video Preview</a>
