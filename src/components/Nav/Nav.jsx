import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { GiFilmProjector } from 'react-icons/gi';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('/');

  return (
    <nav>
      <Link
        title='Home'
        to='/'
        onClick={() => setActiveNav('/')}
        className={activeNav === '/' ? 'active' : ''}
      >
        <AiOutlineHome />
      </Link> 
      <Link
        title='About Me'
        to='/about'
        onClick={() => setActiveNav('/about')}
        className={activeNav === '/about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </Link> 
      <Link
        title='My Projects'
        to='/portfolio'
        onClick={() => setActiveNav('/portfolio')}
        className={activeNav === '/portfolio' ? 'active' : ''}
      >
        <GiFilmProjector />
      </Link> 
      <Link
        title='My Experience'
        to='/experience'
        onClick={() => setActiveNav('/experience')}
        className={activeNav === '/experience' ? 'active' : ''}
      >
        <BiBook />
      </Link> 
      <Link
        title='My Services'
        to='/services'
        onClick={() => setActiveNav('/services')}
        className={activeNav === '/services' ? 'active' : ''}
      >
        <RiServiceLine />
      </Link> 
      <Link
        title='Contact with me'
        to='/contact'
        onClick={() => setActiveNav('/contact')}
        className={activeNav === '/contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </Link> 
    </nav>
  );
};

export default Nav;
