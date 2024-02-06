import React from 'react'
import "./Portfolio.css"
import WorkCard from "../../components/Card/WorkCard"
import gea from "../../Imgs/gea.png"
import gea2 from "../../Imgs/gea2.png"
import gea3 from "../../Imgs/gea3.png"
import gea4 from "../../Imgs/gea4.png"
import dogs from "../../Imgs/dogs.png"
import dogs2 from "../../Imgs/dogs2.png"
import dogs3 from "../../Imgs/dogs3.png"
import dogs4 from "../../Imgs/dogs4.png"
import foodland from "../../Imgs/foodland.png"
import smeet from "../../Imgs/smeet.png"
import smeet2 from "../../Imgs/smeet2.png"
import smeet3 from "../../Imgs/smeet3.png"
import smeet4 from "../../Imgs/smeet4.png"
import lm from "../../Imgs/lm.png"
import lm2 from "../../Imgs/lm2.png"
import lm3 from "../../Imgs/lm3.png"
import lm4 from "../../Imgs/lm4.png"

const Portfolio = () => {

const workCards = [
  {
    name:"Lideres Universales - Mandala economico",
    category:"Full Stack",
    img:lm,
    img2:lm2,
    img3:lm3,
    img4:lm4,
    colaboration:"Single developer",
    description:"MADE FROM SCRATCH - It is an application created for participants to invest money within a mandala structure, and then recover a greater percentage.",
    link:"https://lideres-univ-front.vercel.app/",
    skills:"HTML, CSS, JS, React, Next, Node, Express, MongoDB, Vercel"
  },
  {
    name:"Gea: Energy Store",
    category:"Frontend",
    img:gea,
    img2:gea2,
    img3:gea3,
    img4:gea4,
    colaboration:"Single developer",
    description:"MADE FROM SCRATCH - Simple E-commerce for small shop, with independently managed firebase account ",
    link:"https://chic-toffee-93510a.netlify.app",
    skills:"HTML, CSS, JS, React, MaterialUI, Firebase , Netifly"
  },
  {
    name:"API DOGS",
    category:"Full Stack",
    img:dogs,
    img2:dogs2,
    img3:dogs3,
    img4:dogs4,
    colaboration:"Single developer",
    description:"MADE FROM SCRATCH - Full stack application that allows users to search for dog races and view their information, they can also create their own races",
    link:"https://pi-dogs-front-ruby.vercel.app/",
    skills:"HTML, CSS, JS,React, Node.js , Express, postgreSQL, Redux, Vercel"
  },
  {
    name:"Smeet Makwana - Design Portfolio",
    category:"Frontend",
    img:smeet,
    img2:smeet2,
    img3:smeet3,
    img4:smeet4,
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
    img2:foodland,
    img3:foodland,
    img4:foodland,
    colaboration:"Collaboration",
    description:"MADE FROM SCRATCH - This application is an ecommerce where users can register, add products reviews , pay with paypal, recibe Email notifications .Also it has an administration panel to create and modifie all products, delete users, watch statistics.. "
    ,skills:"HTML, CSS, JS, React, Node, Express, MongoDB, Redux"
  }
]

  return (
      <div className='portfolio'>

          <div className='portText'>
                <h1>My latest work</h1>
                <p>These are the some of the projects I've worked with or made from scratch </p>
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
          img2={e.img2}
          img3={e.img3}
          img4={e.img4}
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