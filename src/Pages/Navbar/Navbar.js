import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li> <Link to='/'>Home</Link></li>
      <li> <Link to='/portfolio'>Portfolio</Link></li>
      <li> <Link to='/experience'>Experience</Link></li>
      <li> <Link to='/services'>Services</Link></li>
      <li><Link to='/about'>About Me</Link></li>
      <li tabIndex={0}>
        <Link to='/contact' className='justify-between'>
          Contact
          <svg className='fill-current' xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'>
            <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
          </svg>
        </Link>
        <ul className='p-4 shadow bg-gray-700 dark:bg-base-200 rounded-box w-52 gap-1'>
          <li><Link to='/contact'>Contact Me</Link></li>   
          <li><Link to='/terms'>Terms & Conditions</Link></li>
        </ul>
      </li>
      <li> <Link to='/blog'>Blog</Link> </li>
    </React.Fragment>
  );

  return (
    <div className='navbar flex justify-between'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden mt-2 capitalize'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 22 22' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='4' d='M4 6h16M4 12h8m-8 6h16'/>
            </svg>
          </label>
          <ul
            tabIndex={1}
            className='menu menu-compact dropdown-content p-4 shadow bg-gray-700 dark:bg-base-200 rounded-box w-52 gap-1'
          >
            {menuItems}
          </ul>
        </div>
        <Link to='/' className='ml-3 text-2xl font-bold block' >Nurul Islam</Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0 text-lg font-bold'>
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// md:sticky top-0 z-50