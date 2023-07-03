import React from 'react'
import cv1 from "../../cv1.png"
import "./About.css"

const About = () => {
  return (
    <div className='about'>

      <div className='sectionTitle'> ABOUT </div>

        <div className='card'>
           <img src={cv1} alt="cv" />

           <div className='text'>
            <h1>Sofia Perone</h1> 
            <h3>Fullstack developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum repellendus doloribus distinctio sequi voluptates, modi itaque ducimus ipsum necessitatibus facilis architecto temporibus doloremque non, minus, dicta dolorum officiis labore., Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quidem repudiandae iure itaque, veritatis consectetur perspiciatis facere omnis illum vel sapiente error dignissimos unde illo expedita eaque quam eveniet ipsam.</p>
            <button>Contact me</button>
        </div>
        </div>

    </div>

  )
}

export default About;