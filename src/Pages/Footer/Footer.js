import React from 'react';
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { BsReddit } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'


const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer id='footer'>
            <a href="/" className='footer_logo'>Nurul Islam</a>

            <ul className='permalinks'>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://www.linkedin.com/in/nurulbd75/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                <a href="https://www.facebook.com/nurul.bd.775" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://www.instagram.com/nurulbd75/" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
                <a href="https://twitter.com/nurulbd75" target="_blank" rel="noopener noreferrer"><IoLogoTwitter /></a>
                <a href="https://www.reddit.com/user/nurulbd75" target="_blank" rel="noopener noreferrer"><BsReddit /></a>
                <a href="https://github.com/nurulcse7" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
            </div>

            <div className="footer_copyright">
                <small><i>Copyright © {year} Nurul Islam. All rights reserved.</i></small>
            </div>
        </footer>
    );
};

export default Footer;