import React from 'react';
import { Outlet } from 'react-router-dom';
import About from '../Pages/About/About';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
  return (
    <div className=''>
      <Navbar></Navbar>
      <About></About>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
// for dark/light theme class (bg-white text-black dark:bg-base-100 dark:text-white )
