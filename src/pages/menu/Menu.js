import React from 'react';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import image9 from "../../images/image9.png";


const Menu = () => {
  return (
    <div>
      <Navbar />
      <Hero img={image9} text="Menu" />
    </div>
  );
}

export default Menu;