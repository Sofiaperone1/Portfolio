import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import poker1 from "../../Imgs/poker1.png"
import poker2 from "../../Imgs/poker2.png"
import poker3 from "../../Imgs/poker3.png"
import poker4 from "../../Imgs/poker4.png"
import gencero0 from "../../Imgs/gencero0.png"
import gencero1 from "../../Imgs/gencero1.png"
import gencero2 from "../../Imgs/gencero2.png"
import carrito from "../../Imgs/carrito.png"
import contactanos from "../../Imgs/contactanos.png"
import detalleProd from "../../Imgs/detalleProd.png"
import inicio from "../../Imgs/inicio.png"
import mercadoPago from "../../Imgs/mercadoPago.png"
const Carousel = () => {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
  
    };
  
    return (
      <div className="carrousel">
      <div className='text'>
        <h1>Wordpress Experience</h1>
        <p> Deployed websites maid from scratch, with integrated custom plugins and integrated custom styles for non-editable templates.  </p>        
      
      </div>
 
      <Slider {...settings}>
          <div>
            <img src={inicio} alt="" />
          </div>
          <div>
            <img src={detalleProd} alt=""/>
          </div>
          <div>
            <img src={mercadoPago} alt="" />
          </div>
          <div>
            <img src={contactanos} alt="" />
          </div>
          <div>
            <img src={carrito} alt="" />
          </div>
        </Slider>

        <Slider {...settings}>
          <div>
            <img src={poker1} alt="" />
          </div>
          <div>
            <img src={poker2} alt=""/>
          </div>
          <div>
            <img src={poker3} alt="" />
          </div>
          <div>
            <img src={poker4} alt="" />
          </div>
          <div>
            <img src={gencero0} alt="" />
          </div>
          <div>
            <img src={gencero1} alt="" />
          </div>
          <div>
            <img src={gencero2} alt="" />
          </div>
        </Slider>
      </div>
    );
  };
  
  export default Carousel;