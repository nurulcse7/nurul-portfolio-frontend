import React from 'react';
import './About.css';
import ME from '../../assets/profile-pic1.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
    return (
        <section id='about'>
            <h3 className='sub-title'>Get to Know</h3>
            <h1>About me</h1>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">

                        <article className='about_card'>
                            <FaAward className='about_icon' />
                            <h4>Experience</h4>
                            <small>2+ Years Working</small>

                        </article>

                        <article className='about_card'>
                            <FiUsers className='about_icon' />
                            <h4>Clients</h4>
                            <small>20+ Worldwide</small>

                        </article>

                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon' />
                            <h4>Projects</h4>
                            <small>50+ Completed</small>

                        </article>
                    </div>
                    <p>
                        Hi,
                        <br />
                        I am Nurul Islam, a web developer. Developing holds the focal point in my skillset in hand with business
                        development.I understand the importance of innovative websites in today's time and that brings my passion
                        to building cutting-edge and state-of-the-art websites for my clients.

                        <br />

                        I'm a full-stack developer in JavaScript/Node JS/MongoDB technologies.
                        I've 2+ years of experience in front-end development.
                        I can use any JavaScript framework (ReactJS, NextJS, ExpressJS, Redux) at its best.
                        If you need any work related to any JavaScript technology, I would be your best choice.
                        Feel free to contact me and discuss your requirements.

                        <br />

                        Looking for an expert developer with a diversified skill set, then you are at the right place.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
    );
};

export default About;