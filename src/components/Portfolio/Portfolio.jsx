import React from 'react'
import "./Portfolio.css"
import WorkCard from "../../components/Card/WorkCard"

const Portfolio = () => {

  

const workCards = [
  {
    name:"Trabajo1",
    category:"Frontend",
    img:"https://thumbs.dreamstime.com/b/lupa-y-una-nota-con-la-palabra-ejemplos-ejemplo-de-concepto-marketing-empresarial-formaci%C3%B3n-paro-plano-222957926.jpg",
    description:"lorem lorem diiqodjwozmwsuwqpamdie3bwdxoamqbdu3bwofn3eu"
  },
  {
    name:"Trabajo2",
    category:"Frontend",
    img:"https://thumbs.dreamstime.com/b/lupa-y-una-nota-con-la-palabra-ejemplos-ejemplo-de-concepto-marketing-empresarial-formaci%C3%B3n-paro-plano-222957926.jpg",
    description:"lorem lorem diiqodjwozmwsuwqpamdie3bwdxoamqbdu3bwofn3eu"
  },
  {
    name:"Trabajo1",
    category:"Frontend",
    img:"",
    description:"lorem lorem diiqodjwozmwsuwqpamdie3bwdxoamqbdu3bwofn3eu"
  }
]

  return (
      <div className='portfolio'>

          <div className='portText'>
              <div className='sectionTitle'>
                  PORTFOLIO
              </div>
                <h1>My latest work</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloribus sint beatae. Ipsam nisi quod delectus pariatur laboriosam ratione, inventore at veniam suscipit, sunt non, voluptas nulla error perspiciatis ad.</p>
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
          />
        )
       })}
        </div>
      </div>
  )
  
}

export default Portfolio