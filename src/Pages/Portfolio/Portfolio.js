import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio1.jpg';
import IMG3 from '../../assets/portfolio1.jpg';
import IMG4 from '../../assets/portfolio2.png';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Resale Furniture',
    frontend: 'https://github.com/nurulcse7/resale-furniture-frontend',
    backend: 'https://github.com/nurulcse7/resale-furniture-server',
    demo: 'https://resale-furniture-bd-com.web.app',
    details: '/resale',
  },
  {
    id: 2,
    image: IMG1,
    title: 'Dental Care',
    frontend: '',
    backend: '',
    demo: '',
    details: '/dental',
  },
  {
    id: 3,
    image: IMG1,
    title: 'Motor Mechanic',
    frontend: '',
    backend: '',
    demo: '',
    details: '/motor',
  },
  {
    id: 4,
    image: IMG2,
    title: 'Educational Website',
    frontend: 'https://github.com/nurulcse7/educational-website-clone/',
    backend: 'https://github.com/nurulcse7/educational-website-clone/',
    demo: 'https://education-landing-page.netlify.app/',
    details: '/education',
  },
  {
    id: 5,
    image: IMG3,
    title: 'GPT-3 OpenAI',
    frontend: 'https://github.com/nurulcse7/gpt3_jsm-clone/',
    backend: 'https://github.com/nurulcse7/gpt3_jsm-clone/',
    demo: 'https://gpt3-jsm.web.app/',
    details: '/gpt',
  },
  {
    id: 6,
    image: IMG4,
    title: 'Gym Exercises',
    frontend: 'https://github.com/nurulcse7/gym_exercises-clone',
    backend: 'https://github.com/nurulcse7/gym_exercises-clone',
    demo: 'https://gymexercises01.netlify.app/',
    details: '/gym',
  },
  
];

const Portfolio = () => {
  useTitle('Portfolio');

  return (
    <section id='portfolio'>
      <h3 className='sub-title'>My Recent Work</h3>
      <h1>Portfolio</h1>

      <div className='container portfolio_container'>
        {data.map(({ id, image, title, frontend, backend, demo, details }) => {
          return (
            <article key={id} className='portfolio_item'>
              <div className='portfolio_item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta'>
                <a href={demo} className='btn capitalize' target='_blank' rel='noopener noreferrer'>Live Demo</a>
                <a href={frontend} className='btn capitalize' target='_blank' rel='noopener noreferrer'>Code Front-end</a>
                <Link to={details} className='btn capitalize'>View Detail</Link>
                <a href={backend} className='btn capitalize' target='_blank' rel='noopener noreferrer'>Code Back-end</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
