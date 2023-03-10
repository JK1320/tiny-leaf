import React from 'react';
import "./Hero.css";

const Hero = ({img, text}) => {
  return (
    <div className='hero'>
        <img src={img} alt="" />
        <h1>{text}</h1>
    </div>
  )
}

export default Hero;