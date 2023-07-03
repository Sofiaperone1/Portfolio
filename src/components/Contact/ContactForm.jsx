import React from 'react'
import "./Contact.css"
import TextField from '@mui/material/TextField';


const ContactForm = () => {
  return (
    <div className='form'>
      <form action="submit">
        <div className='names'>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Lastname" variant="outlined" />
        </div>
        <TextField className="email"id="outlined-basic" label="Email" variant="outlined" />
        <TextField
        className="subject"
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
         <div class="btnHcontainer">
        <a class="btn">
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
    </a>
    </div>

      </form>
    </div>
  )
}

export default ContactForm