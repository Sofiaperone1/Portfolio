
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
const Tools = () => {
  return (
    <div className='tools'>
      <img src={react} alt="react"/>
      <img src={node} alt="node" />
      <img src={css} alt="css" />
      <img src={js} alt="js" />
      <img src={redux} alt="redux" />
      <img src={git} alt="git" />
      <img src={vercel} alt={vercel} />
      <img src={ts} alt="ts" />
      <img src={netifly} alt="netifly" />
      <img src={mysql} alt="mysql" />
      <img src={postgre} alt="postgre" />
    </div>
  )
}

export default Tools