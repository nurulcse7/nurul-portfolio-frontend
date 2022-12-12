import React from 'react';
import IMG1 from '../../../assets/recipes/Carne asada.jpg';
import IMG2 from '../../../assets/recipes/Greek-Ribs.jpg';
import IMG3 from '../../../assets/recipes/Vegetable-Soup.jpg';
import useTitle from '../../../hooks/useTitle';

const Recipes = () => {
  useTitle('Recipes');

  return (
    <div className='max-w-[1440px] mx-auto mt-8'>
      <h3 className='text-2xl text-center text-green-500'>
        Welcome to recipes project detail page
      </h3>
      <h1 className='text-center text-secondary'>Recipes Project</h1>

      <div className='p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <img src={IMG1} className='rounded-xl' alt='Recipe Asada'/>
          <img src={IMG2} className='rounded-xl' alt='Recipe Greek-Ribs' />
          <img src={IMG3} className='rounded-xl' alt='Recipe Vegetable-Soup'/>
        </div>
        <div className='my-6'>
        <h3 className='text-xl'>Project Description:</h3>
        <p>✔ In the project all components is pure HTML5, CSS3, Media Query and JavaScript</p>
        <p>✔ Implement from scratch</p>
        <p>✔ In this project I created some pages that's are Home, About me, Experience, Services, Contact me, etc</p>
        <p>✔ Improved CSS skills, and create modern and responsive websites.</p>
        <p>✔ Deploy in Netlify</p>
        </div>
        <div className='my-6'>
        <a href='https://simply-recipes-html-css-only.netlify.app/' target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Live Website</a>
        <a href='https://github.com/nurulcse7/html-css-simply-recipes-clone' target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Front-end Code</a>
        <a href='https://github.com/nurulcse7/html-css-simply-recipes-clone' target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Back-end Code</a>
        
        </div>
      </div>
    </div>
  );
};

export default Recipes;
// <a href='https://www.youtube.com/'  target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Video Preview</a>