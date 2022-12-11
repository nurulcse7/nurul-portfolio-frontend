import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
  // theme start here
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }; // theme stop here

  // const { user, logOut } = useContext(AuthContext);
  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => {})
  //     .catch((err) => console.log(err));
  // };

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to='/'>Home</Link>
      </li>
      
      <li tabIndex={0}>
        <Link to='/categories' className='justify-between'>
          Categories
          <svg
            className='fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
          </svg>
        </Link>
        <ul className='p-2  bg-gray-200 dark:bg-base-200'>
          
          <li>
            <Link to='/bmw'>BMW</Link>
          </li>
          <li>
            <Link to='/mercedes'>Mercedes</Link>
          </li>
          <li>
            <Link to='/toyota'>Toyota</Link>
          </li>
        </ul>
      </li>
      <li tabIndex={0}>
        <Link to='' className='justify-between'>
          Contact
          <svg
            className='fill-current'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
          </svg>
        </Link>
        <ul className='p-2  bg-gray-200 dark:bg-base-200'>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/privacy'>Privacy & Policy</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </li>
      
      


        <>
          
          <li>
            <button >Sign out</button>
          </li>
        </>
      
        <li tabIndex={0}>
          <Link to='/login' className='justify-between'>
            Login
            <svg
              className='fill-current'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
            </svg>
          </Link>
          <ul className='p-2  bg-gray-200 dark:bg-base-200'>
            <li>
              <Link to='/login'>SignIn</Link>
            </li>
            <li>
              <Link to='/signup'>SignUp</Link>
            </li>
            
          </ul>
        </li>
      )
      <li>
        <button onClick={handleThemeSwitch}>
          <input
            type='checkbox'
            className='toggle toggle-primary tooltip tooltip-left '
            data-tip='Light/Dark Mode'
            defaultChecked
            title='Themes Toggle'
          />
        </button>
      </li>
    </React.Fragment>
  );

  return (
    <div className='navbar flex justify-between sticky top-0 z-50'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label
            tabIndex={0}
            className='btn btn-secondary lg:hidden ml-12 mt-2 tooltip tooltip-top tooltip-open capitalize'
            data-tip='Navbar'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='4'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className='menu menu-compact dropdown-content  p-4 shadow bg-gray-200 dark:bg-base-200 rounded-box w-52 gap-1'
          >
            {menuItems}
          </ul>
        </div>
        <Link to='/'>Nurul Islam</Link>
        </div>
        <div className='navbar-center hidden lg:flex ml-12'>
          <ul className='menu menu-horizontal p-0 text-lg font-bold bg-gray-200 dark:bg-base-100'>
            {menuItems}
          </ul>
        </div>
        
      
    </div>
  );
};

export default Navbar;

// {user?.uid ? (
// onClick={handleLogOut}