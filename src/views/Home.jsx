import React,{ useRef, useState } from 'react'
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Portfolio from "../components/Portfolio/Portfolio"
import "./Home.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Footer from "../components/Footer/Footer"
import Tools from '../components/Card/Tools'

const Home = () => {

    // ------- SPA
    //const inicioRef = useRef(null);
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    const handleClick = (event, ref) => {
        event.preventDefault();
        window.scrollTo({
          behavior: 'smooth',
          top: ref.current.offsetTop,
        });
      };


    // ------- NAVBAR 
    const [navbar, setNavbar] = useState (false);

    const changeBackground = () => {
      if (window.scrollY >= 80 ) 
         {setNavbar(true)}
    
      else {setNavbar(false)}
    }
    window.addEventListener ('scroll', changeBackground);

    
  return (
    <div>

        {/* ------------ Navbar --------- */}

         <div className={navbar ? 'nav-container active' : 'nav-container'}> 

         <h1 className='name'>SOFIA PERONE</h1>

         <div className= {navbar ? 'navbar active' : 'navbar'} >

            <a href="#about"onClick={(e) => handleClick(e, aboutRef)}>ABOUT</a>
            <a href="#contact"onClick={(e) => handleClick(e, contactRef)}>CONTACT</a>
            <a href="#portfolio"onClick={(e) => handleClick(e, portfolioRef)}>PORTFOLIO</a>
  
        </div>
        <div className='navbarIcons'>
        <GitHubIcon/>
        <LinkedInIcon/>
        </div>
        </div>

        <div>
        <div className='banner'>
          <div className='bannerText'>
          <h1>Full Stack 
          </h1>
          <h1>
          Developer
          </h1>
          <h2>
          I have background mostly in front-end development but I also
          have several Fullstack projects finished and deployed. I'am one of kind team player, and also, I love what I do : )
          </h2> 
                               
      <div class="btnHcontainer">
        <a class="btn" href='https://www.youtube.com/watch?v=h6CH3DG5trU&list=RDMM&index=10&ab_channel=CharlyGarcia-Topic'>
       <svg width="277" height="62"> 
        <defs>
        <linearGradient id="grad1">
            <stop offset="0%" stop-color="#b16ce6"/>
            <stop offset="100%" stop-color="#66269b" />
        </linearGradient>
       </defs>
     <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
         </svg>
      <span>Take a look</span>
    </a>
    </div>

        </div>
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div>
          <Tools/>
        </div>
        <div ref={portfolioRef}>
          <Portfolio />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Home