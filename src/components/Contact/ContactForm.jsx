import React, {useRef} from 'react'
import "./Contact.css"
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactForm = () => {


  const alert = () => {

    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 900,
      iconColor:"#66269b"
  
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Message sent successfuly'
    })
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm('service_d2m3j1t', 'template_yruox9d', form.current, 'l5G4MjCJr0yI3D-6Z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  // send the message and get a callback with an error or details of the message that was sent


  return (
    <div className='form'>

    <form action="submit" ref={form} onSubmit={sendEmail}>
    
   <TextField className='name' id="outlined-basic" label="Name" variant="outlined" name="user_name"/>
   <TextField className="email"id="outlined-basic" label="Email" variant="outlined" name="user_email" />
   <TextField className="subject"id="outlined-basic" maxRows={4} multiline label="Message" variant="outlined" name="message" />

     <div class="btnHcontainer">
    <button class="btn" type="submit" value="Send" onClick={alert}> 
   <svg width="277" height="62"> 
    <defs>
    <linearGradient id="grad1">
        <stop offset="0%" stop-color="#b16ce6"/>
        <stop offset="100%" stop-color="#66269b" />
    </linearGradient>
   </defs>
 <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
     </svg>
  <span>Send message</span>
  </button>
</div>

  </form>  </div>
  )}
export default ContactForm

/*


 // send the message and get a callback with an error or details of the message that was sent

// <a class="btn" type="submit" value="Send">Send</a> */