import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import image1 from '../images/image1.png';


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero img={image1} text="A flavour for all seasons"  />
        <div>
          <section></section>
        </div>
    </div>
  )
}

export default Home;