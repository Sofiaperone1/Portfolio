import React from 'react'
import "./Portfolio.css"
import WorkCard from "../../components/Card/WorkCard"
import gea from "../../Imgs/gea.png"
import dogs from "../../Imgs/dogs.png"
import foodland from"../../Imgs/foodland.png"
import smeet from"../../Imgs/smeet.png"


const Portfolio = () => {

const workCards = [
  {
    name:"Gea: Energy Store",
    category:"Frontend",
    img:gea,
    colaboration:"Single developer",
    description:"Simple E-commerce for small shop, with independently managed firebase account ",
    link:"https://chic-toffee-93510a.netlify.app",
    skills:"HTML, CSS, JS, React, MaterialUI, Firebase , Netifly"
  },
  {
    name:"API DOGS",
    category:"Full Stack",
    img:dogs,
    colaboration:"Single developer",
    description:"Full stack application that allows users to search for dog races and view their information, they can also create their own races",
    link:"https://pi-dogs-front-ruby.vercel.app/",
    skills:"HTML, CSS, JS,React, Node.js , Express, postgreSQL, Redux, Vercel"
  },
  {
    name:"Smeet Makwana - Design Portfolio",
    category:"Frontend",
    img:smeet,
    colaboration:"Collaboration",
    description:`Full responsive design. 
    Transformation from fullstack project to frontend project. 
    Creation and configuration of new db in Firebase.
    `,
    link:"https://www.smeetmakwana.com",
    skills:"HTML, SASS, JS, React, Firebase, Digitalocean, Google search console"
  },
  {
    name:"FOODLAND",
    category:"Full Stack",
    img:foodland,
    colaboration:"Collaboration",
    description:"This application is an ecommerce where users can register, add products reviews , pay with paypal, recibe Email notifications .Also it has an administration panel to create and modifie all products, delete users, watch statistics.. "
    ,skills:"HTML, CSS, JS, React, Node.js, Express, MongoDB, Redux"
  }
]

  return (
      <div className='portfolio'>

          <div className='portText'>
                <h1>My latest work</h1>
                <p>These are the some of the projects I've worked with. Some I've made from scratch, in others </p>
          </div>

          <div className='filters'>
            <button>Full Stack</button>
            <button>Frontend</button>
            <button>Backend</button>
          </div>

        <div className='cards'>
       {workCards.map((e) => {
        return ( 
          <WorkCard
          name={e.name}
          category={e.category}
          img={e.img}
          description={e.description}
          link={e.link}
          skills={e.skills}
          />
        )
       })}
        </div>
      
      </div>
  )
  
}

export default Portfolio