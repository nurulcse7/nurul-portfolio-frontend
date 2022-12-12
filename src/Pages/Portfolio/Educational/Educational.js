import React from 'react';
import IMG1 from '../../../assets/education/course1.jpg';
import IMG2 from '../../../assets/education/course2.jpg';
import IMG3 from '../../../assets/education/course3.jpg';
import IMG4 from '../../../assets/education/course4.jpg';
import IMG5 from '../../../assets/education/course5.jpg';
import IMG6 from '../../../assets/education/course6.jpg';

import useTitle from '../../../hooks/useTitle';

const Educational = () => {
  useTitle('Education');

  return (
    <div className='max-w-[1440px] mx-auto mt-8'>
      <h3 className='text-2xl text-center text-green-500'>
        Welcome to Educational project detail page
      </h3>
      <h1 className='text-center text-secondary'>Educational Project</h1>

      <div className='p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <img src={IMG1} className='rounded-xl' alt='ImageBody' />
          <img src={IMG2} className='rounded-xl' alt='ImageBody' />
          <img src={IMG3} className='rounded-xl' alt='ImageBody' />
          <img src={IMG4} className='rounded-xl' alt='ImageBody' />
          <img src={IMG5} className='rounded-xl' alt='ImageBody' />
          <img src={IMG6} className='rounded-xl' alt='ImageBody' />
        </div>
        <div className='my-6'>
          <h3 className='text-xl'>Project Description:</h3>
          <p>
            ✔ A complete responsive multi-page education/school website using
            HTML, CSS, and javascript. This is a web development project for
            build a modern school or education website using html5, css3, and
            ES6 javascript.
          </p>
          <p>✔ Implement from scratch</p>
          <p>
            ✔ CSS Variables, Grid & Flex box, Transitions and Animations Media
            Queries
          </p>
          <p>✔ SwiperJS for slides</p>
          <p>✔ Fully Responsive website</p>
          <p>✔ Deploy in Netlify</p>
        </div>
        <div className='my-6'>
          <a
            href='https://education-landing-page.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='btn  capitalize mr-3 my-3'
          >
            Live Website
          </a>
          <a
            href='https://github.com/nurulcse7/educational-website-clone/'
            target='_blank'
            rel='noopener noreferrer'
            className='btn  capitalize mr-3 my-3'
          >
            Front-end Code
          </a>
          <a
            href='https://github.com/nurulcse7/educational-website-clone/'
            target='_blank'
            rel='noopener noreferrer'
            className='btn  capitalize mr-3 my-3'
          >
            Back-end Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Educational;
// <a href='https://www.youtube.com/'  target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Video Preview</a>
