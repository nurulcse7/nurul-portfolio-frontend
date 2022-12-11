import React from 'react'
import Header from '../../components/Header/Header'
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
    <About></About>
    <Portfolio></Portfolio>
    <Experience></Experience>
    <Services></Services>
    <Testimonials></Testimonials>
    <Contact></Contact>
    </div>
  )
}

export default Home