import React from 'react'
import Header from '../../components/Header/Header'
import Nav from '../../components/Nav/Nav'
import useTitle from '../../hooks/useTitle'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Experience from '../Experience/Experience'
import Portfolio from '../Portfolio/Portfolio'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  useTitle('Home');

  return (
    <div>
    <Header></Header>
    <div className='divider mb-12 mt-8 bg-gray-700 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
    <Nav></Nav>
    <About></About>
    <div className='divider mb-12 mt-8 bg-gray-700 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
    <Portfolio></Portfolio>
    <div className='divider mb-12 mt-8 bg-gray-700 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
    <Experience></Experience>
    <div className='divider mb-12 mt-8 bg-gray-700 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
    <Services></Services>
    <div className='divider mb-12 mt-8 bg-gray-700 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
    <Testimonials></Testimonials>
    <div className='divider mb-12 mt-8 bg-gray-700 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
    <Contact></Contact>
    <div className='divider mb-12 mt-8 bg-gray-700 h-1/6 dark:opacity-20 dark:bg-gray-500'></div>
    </div>
  )
}

export default Home