import React from 'react'
import ContactForm from "./ContactForm"
import "./Contact.css"
import PlaceIcon from '@mui/icons-material/Place';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Contact = () => {
  return (
     <div className='contact'>
      <div className='sectionTitle'>
        CONTACT
      </div>
        <h1>
          Contact me
        </h1>
        <p style={{textAlign:"center"}}>Do you want to know more about me? Don't hesitate and contact me!</p>
      
      <div className='cc'>
        <div className='ccLogos'>
            
            <div className='question'>
            <MailOutlineIcon/>
            <div>
             <h3>Have a question?</h3>
             <p>I am here to help you</p>
             <p><span>Email me at sofiaperone62@gmail.com</span></p>
            </div>
            </div>
            
            <div className='question'>
            <PlaceIcon/>
            <div>
            <h3>Current Location</h3>
             <p>Buenos Aires, Argentina</p>
             <p><span>Serving clients worldwide</span></p>
            </div>
            </div>

            </div>
        <ContactForm/>
      </div>
      
      </div>
  )
}

export default Contact