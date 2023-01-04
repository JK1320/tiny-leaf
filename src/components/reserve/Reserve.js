import React from 'react';
import './Reserve.css';

const Reserve = ({img, heading, text, button}) => {
  return (
    <div className='reserve-main'>
        <img src={img} />
        <h1>{heading}</h1>
        <p>{text}</p>
        <button>{button}</button>
    </div>
  )
}

export default Reserve;