import React from 'react';
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { BsReddit } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom';


const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer id='footer'>
            <Link to="/" className='footer_logo'>Nurul Islam</Link>

            <ul className='permalinks'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/testimonial">Testimonials</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="footer_socials">
            <a href="https://github.com/nurulcse7" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                <a href="https://www.linkedin.com/in/nurulbd75/" target="_blank" rel="noopener noreferrer"><BsLinkedin  /></a>
                <a href="https://twitter.com/nurulbd75" target="_blank" rel="noopener noreferrer"><IoLogoTwitter /></a>
                <a href="https://www.facebook.com/nurul.bd.775" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://www.instagram.com/nurulbd75/" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>             
                <a href="https://www.reddit.com/user/nurulbd75" target="_blank" rel="noopener noreferrer"><BsReddit /></a>   
            </div>

            <div className="footer_copyright">
                <small><i>Copyright © {year} Nurul Islam. All rights reserved.</i></small>
            </div>
        </footer>
    );
};

export default Footer;