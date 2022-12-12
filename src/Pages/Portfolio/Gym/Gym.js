import React from 'react';
import IMG1 from '../../../assets/gym/gym1.png';
import IMG2 from '../../../assets/gym/gym2.png';
import IMG3 from '../../../assets/gym/gym3.png';
import IMG4 from '../../../assets/gym/gym4.jpg';
import IMG5 from '../../../assets/gym/gym5.jpg';
import IMG6 from '../../../assets/gym/gym6.jpg';

import useTitle from '../../../hooks/useTitle';

const Gym = () => {
  useTitle('GYM');

  return (
    <div className='max-w-[1440px] mx-auto mt-8'>
      <h3 className='text-2xl text-center text-green-500'>
        Welcome to Gym Exercise project detail page
      </h3>
      <h1 className='text-center text-secondary'>Gym Project</h1>

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
        <p>✔ Creating the best and most modern Fitness Exercises App using two separate APIs</p>
        <p>✔ Implement from scratch</p>
        <p>✔ Technology are used HTML, CSS, JavaScript, React.JS react-horizontal-scrolling-menu, Material UI, RapidAPI, React Context, React-loader-spinner, etc</p>
        <p>✔ Browse more than 1000 exercises with practical examples</p>
        <p>✔ Pagination exercise</p>
        <p>✔ Deploy in Netlify</p>
        </div>
        <div className='my-6'>
        <a href='https://gymexercises01.netlify.app/' target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Live Website</a>
        <a href='https://github.com/nurulcse7/gym_exercises-clone' target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Front-end Code</a>
        <a href='https://github.com/nurulcse7/gym_exercises-clone' target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Back-end Code</a>
        </div>
      </div>
    </div>
  );
};

export default Gym;
// <a href='https://www.youtube.com/'  target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Video Preview</a>