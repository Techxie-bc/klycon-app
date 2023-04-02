import React from 'react'
import Carousel from './Carousel'
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar'
import SecondPart from './SecondPart';
import Services from './Services';


const Homepage = () => {
    return (
      <>
      
      <Navbar/>
        <Carousel />
        <SecondPart />
        <Services />
        <Contact />
        <Footer />
        
      </>
  )
}

export default Homepage