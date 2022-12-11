import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
    {
        "id": 1,
        "image": IMG1,
        "title": "Simply Recipes",
        "github": "https://github.com/nurulcse7/html-css-simply-recipes-clone",
        "demo": "https://simply-recipes-html-css-only.netlify.app/"
    },
    {
        "id": 2,
        "image": IMG2,
        "title": "Educational Website",
        "github": "https://github.com/nurulcse7/educational-website-clone/",
        "demo": "https://education-landing-page.netlify.app/"
    },
    {
        "id": 3,
        "image": IMG3,
        "title": "GPT-3 OpenAI",
        "github": "https://github.com/nurulcse7/gpt3_jsm-clone/",
        "demo": "https://gpt3-jsm.web.app/"
    },
    {
        "id": 4,
        "image": IMG4,
        "title": "Gym Exercises",
        "github": "https://github.com/nurulcse7/gym_exercises-clone",
        "demo": "https://gymexercises01.netlify.app/"
    },
    {
        "id": 5,
        "image": IMG5,
        "title": "Creative Coding - OOP",
        "github": "https://github.com/nurulcse7/creative-coding-oop ",
        "demo": "https://nurulcse7.github.io/creative-coding-oop/"
    },
    {
        "id": 6,
        "image": IMG6,
        "title": "Stopwatch",
        "github": "https://github.com/nurulcse7/stopwatch",
        "demo": "https://nurulcse7.github.io/stopwatch/ "
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h3 className='sub-title'>My Recent Work</h3>
            <h1>Portfolio</h1>

            <div className="container portfolio_container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio_item-cta">
                                    <a href={github} className='btn' target='_blank' rel="noopener noreferrer">GitHub</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Portfolio;