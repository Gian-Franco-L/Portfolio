import React from 'react'
import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';
import './SocialIcons.css'

const SocialIcons = () =>{
  return(
    <div className='rectangles bottomRightRectangle'>
      <FaWhatsapp className='icon apearAnimation'/>
      <FaInstagram className='icon apearAnimation'/>
      <FaLinkedin className='icon apearAnimation'/>
      <FaGithub className='icon apearAnimation'/>
      <BsFillFileEarmarkPdfFill className='icon apearAnimation'/>
    </div>
  )
}

export default SocialIcons