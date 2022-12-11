import React from 'react'
import Header from '../../components/Header/Header'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Portfolio from '../Portfolio/Portfolio'
import Services from '../Services/Services'

const Home = () => {
  return (
    <div>
    <Header></Header>
    <About></About>
    <Portfolio></Portfolio>
    <Experience></Experience>
    <Services></Services>
    </div>
  )
}

export default Home