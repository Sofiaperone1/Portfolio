import React from 'react'
import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='footer'>
    <span>
    <GitHubIcon/>
    </span>
    <span>
    <LinkedInIcon/>
    </span>
    </div>
  )
}

export default Footer