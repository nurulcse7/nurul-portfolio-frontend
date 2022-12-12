import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Simply Recipes',
    frontend: 'https://github.com/nurulcse7/html-css-simply-recipes-clone',
    backend: 'https://github.com/nurulcse7/html-css-simply-recipes-clone',
    demo: 'https://simply-recipes-html-css-only.netlify.app/',
    details: '/recipe',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Educational Website',
    frontend: 'https://github.com/nurulcse7/educational-website-clone/',
    backend: 'https://github.com/nurulcse7/educational-website-clone/',
    demo: 'https://education-landing-page.netlify.app/',
    details: '/education',
  },
  {
    id: 3,
    image: IMG3,
    title: 'GPT-3 OpenAI',
    frontend: 'https://github.com/nurulcse7/gpt3_jsm-clone/',
    backend: 'https://github.com/nurulcse7/gpt3_jsm-clone/',
    demo: 'https://gpt3-jsm.web.app/',
    details: '/gpt',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Gym Exercises',
    frontend: 'https://github.com/nurulcse7/gym_exercises-clone',
    backend: 'https://github.com/nurulcse7/gym_exercises-clone',
    demo: 'https://gymexercises01.netlify.app/',
    details: '/gym',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Creative Coding - OOP',
    frontend: 'https://github.com/nurulcse7/creative-coding-oop ',
    backend: 'https://github.com/nurulcse7/creative-coding-oop ',
    demo: 'https://nurulcse7.github.io/creative-coding-oop/',
    details: '/oop',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Stopwatch',
    frontend: 'https://github.com/nurulcse7/stopwatch',
    backend: 'https://github.com/nurulcse7/stopwatch',
    demo: 'https://nurulcse7.github.io/stopwatch/ ',
    details: '',
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
