import React from 'react'
import "../Portfolio/Portfolio.css"

const WorkCard = ({name, description,img, category, link, skills}) => {
  return (
    <div className='workCard'>
      <img src={img} alt={name} />
      <h5>{category}</h5>
      <h1>{name}</h1>
      <p>{description}</p>
      <p><b> Deploy :</b> <a href={link}> {link}</a></p>
      <p><b> Technologies :</b>{skills}</p>

    </div>
  )
}

export default WorkCard