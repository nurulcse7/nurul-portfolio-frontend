import React from 'react';
import { Outlet } from 'react-router-dom';
// import Nav from '../components/Nav/Nav';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';
import { ScrollToTop } from '../Pages/ScrollToTop/ScrollToTop';

const Main = () => {
  return (
    <div className=''>
      <Navbar></Navbar>
     
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollToTop/>
    </div>
  );
};

export default Main;
// for dark/light theme class (bg-white text-black dark:bg-base-100 dark:text-white )
//  <Nav></Nav> 