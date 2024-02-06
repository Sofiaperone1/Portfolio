import React from 'react'
import "../Portfolio/Portfolio.css"

const WorkCard = ({name, description,img, category, link, skills}) => {

  // const [isHovered, setIsHovered] = useState(false);

  


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

/* <div className='secondaryImgs'>
      <img  className={`zoom-effect ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} src={img2} alt="img2" />
      <img src={img3} alt="img3"  className={`zoom-effect ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}/> 
      <img src={img4} alt="img4"  className={`zoom-effect ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}/></div> */