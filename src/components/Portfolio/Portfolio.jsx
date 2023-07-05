import React from 'react'
import "./Portfolio.css"
import WorkCard from "../../components/Card/WorkCard"
import gea from "../../Imgs/gea.png"
import dogs from "../../Imgs/dogs.png"
import foodland from"../../Imgs/foodland.png"

const Portfolio = () => {


const workCards = [
  {
    name:"Gea: Energy Store",
    category:"Frontend",
    img:gea,
    description:"Simple E-commerce for small shop, with independently managed firebase account ",
    link:"https://chic-toffee-93510a.netlify.app",
    skills:"React, MaterialUI, Firebase , Netifly"
  },
  {
    name:"API DOGS",
    category:"Full Stack",
    img:dogs,
    description:"Full stack application that allows users to search for dog races and view their information, they can also create their own races",
    link:"https://pi-dogs-front-ruby.vercel.app/",
    skills:"React, Node.js , Express, postgreSQL, Redux, Vercel"
  },
  {
    name:"FOODLAND",
    category:"Full Stack",
    img:foodland,
    description:"This application is an ecommerce where users can register, add products reviews , pay with paypal, recibe Email notifications .Also it has an administration panel to create and modifie all products, delete users, watch statistics.. "
    ,skills:"React, Node.js, Express, MongoDB, Redux"
  }
]

  return (
      <div className='portfolio'>

          <div className='portText'>
                <h1>My latest work</h1>
                <p>These are the projects I made from scratch, Below, you can see images of other freelance jobs that will be deployed soon</p>
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