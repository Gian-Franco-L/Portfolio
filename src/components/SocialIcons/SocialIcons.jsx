import React, { useRef } from 'react'
import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';
import { BsTools } from 'react-icons/bs';
import './SocialIcons.css'

const SocialIcons = () =>{
  const errorInvisible = useRef(null)
  const toolsInvisible = useRef(null)
  const loaderVisibility = useRef(null)

  const invisibleErrors = () =>{
    console.log("hola");
    loaderVisibility.current.style.display = "inline"
    toolsInvisible.current.style.display = "none"
    toolsInvisible.current.style.width = 0
    errorInvisible.current.classList.add("disappearUndefinedWordd")
    setTimeout(() =>{
      loaderVisibility.current.style.opacity = 0
    }, 2000)
  }
  return(
    <div className='rectangles bottomRightRectangle'>
      <div className='iconContainer apearAnimation'>
        <FaWhatsapp className='icon'/>
        <div className='socialName'>Whatsapp</div>
      </div>
      <div className='iconContainer apearAnimation'>
        <FaInstagram className='icon'/>
        <div className='socialName'>Instagram</div>
      </div>
      <div className='iconContainer apearAnimation middleIcon'>
        <FaLinkedin className='icon'/>
        <div className='socialName'>Linkedin</div>
      </div>
      <div className='iconContainer apearAnimation'>
        <FaGithub className='icon apearAnimation'/>
        <div className='socialName'>Github</div>
      </div>
      <div className='iconContainer apearAnimation'>
        <BsFillFileEarmarkPdfFill className='icon apearAnimation'/>
        <div className='undefinedCurriculumIcon' ref={errorInvisible}>
          <div>Error Error<br/>Error Error<br/>Error Error<br/>Error Error</div>
          <div ref={toolsInvisible}><BsTools className='toolIconCurriculum' onClick={invisibleErrors}/></div>
          <div className='preloaderCurriculum' ref={loaderVisibility}>
            <img src="https://i.imgur.com/cWGLRFJ.png" alt="loader"/></div>
          </div>
        <div className='socialName'>Curriculum</div>
      </div>
    </div>
  )
}

export default SocialIcons