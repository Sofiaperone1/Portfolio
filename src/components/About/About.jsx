import React, { useRef } from 'react';
import cv1 from "../../cv1.png";
import "./About.css";

const About = ({contactRef}) => {


  const scrollToContact = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: contactRef.current.offsetTop,
    });
  };

  return (
    <div className='about'>
      <div className='card'>
        <img src={cv1} alt="cv" />

        <div className='text'>
          <h1>Sofia Perone</h1> 
          <h3>Fullstack developer</h3>
          <p>
            I'm a just person trying to make up for the time I spend not programming.
            <br />
            The commitment and motivation is total, I seek to dedicate myself fully to the IT sector :)
            <br />
            I consider myself an excellent colleague, empathetic and positive. 
            Self-taught, results-oriented and effective communicator
          </p>
          <button onClick={scrollToContact}>Contact me</button>
        </div>
      </div>
    </div>
  );
};

export default About;