import React from 'react';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import image12 from "../../images/image12.png";


const Reservation = () => {
  return (
    <div>
      <Navbar />
      <Hero img={image12} text="Reservations" />
    </div>
  );
}

export default Reservation;