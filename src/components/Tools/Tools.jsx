
import React from 'react'
import css from "../../Imgs/css.png";
import git from "../../Imgs/git.png";
import js from "../../Imgs/js.png";
import mysql from "../../Imgs/mysql.png";
import netifly from "../../Imgs/netifly.png";
import node from "../../Imgs/node.png";
import postgre from "../../Imgs/postgre.png";
import react from "../../Imgs/react.png";
import redux from "../../Imgs/redux.png";
import ts from "../../Imgs/ts.png";
import vercel from "../../Imgs/vercel.png";
import './Tools.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tools = () => {
  return (
    <div className='tools'>
      <img data-aos="flip-left" data-aos-duration="1000" src={react} alt="react"/>
      <img data-aos="flip-left" data-aos-duration="1000" src={node} alt="node" />
      <img data-aos="flip-left" data-aos-duration="1000" src={css} alt="css" />
      <img data-aos="flip-left" data-aos-duration="1000" src={js} alt="js" />
      <img data-aos="flip-left" data-aos-duration="1000" src={redux} alt="redux" />
      <img data-aos="flip-left" data-aos-duration="1000" src={git} alt="git" />
      <img data-aos="flip-left" data-aos-duration="1000" src={vercel} alt={vercel} />
      <img data-aos="flip-left" data-aos-duration="1000" src={ts} alt="ts" />
      <img data-aos="flip-left" data-aos-duration="1000" src={netifly} alt="netifly" />
      <img data-aos="flip-left" data-aos-duration="1000" src={mysql} alt="mysql" />
      <img data-aos="flip-left" data-aos-duration="1000" src={postgre} alt="postgre" />
    </div>
  )
}

export default Tools