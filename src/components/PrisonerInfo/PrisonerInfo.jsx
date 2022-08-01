import React, { useRef } from 'react'
import { BsTools } from 'react-icons/bs'
import './PrisonerInfo.css'

const PrisonerInfo = () =>{
  const errorInvisiblePrisoner = useRef(null)
  const toolsInvisiblePrisoner = useRef(null)
  const loaderVisibilityPrisoner = useRef(null)
  const imgAnimation = useRef(null)

  const invisibleErrors = () =>{
    loaderVisibilityPrisoner.current.style.display = "inline"
    toolsInvisiblePrisoner.current.style.display = "none"
    toolsInvisiblePrisoner.current.style.width = 0
    errorInvisiblePrisoner.current.classList.add("disappearError")
    setTimeout(() =>{
      loaderVisibilityPrisoner.current.style.opacity = 0
      imgAnimation.current.classList.add("imgAnimation")
    }, 2000)
  }
  return(
    <div className='rectangles topRectangle'>
      <div className='image' ref={imgAnimation}>
        <div className='imgError' ref={errorInvisiblePrisoner}>Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error</div>
        <div className=''></div>
      </div>
      <div className='contentDiv'>
        <div className='topRectangleContent apearAnimation'>
          <div className='topRectangleLetterStyle'><strong>Nombre:</strong><br/>Gian Franco Lombardini</div>
          <div className='topRectangleLetterStyle'><strong>Delito:</strong><br/>Sin experiencia laboral</div>
        </div>
        <div className='topRectangleContent apearAnimation'>
          <div className='topRectangleLetterStyle'><strong>Provincia:</strong><br/>Buenos Aires</div>
          <div className='topRectangleLetterStyle'><strong>Condena:</strong> <br/>Estudio permanente</div>
        </div>
        <div className='topRectangleContent apearAnimation'>
          <div className='topRectangleLetterStyle'><strong>Especializacion:</strong><br/>Frontend Developer</div>
          <div className='topRectangleLetterStyle'><strong>Estado:</strong><br/>Desempleado</div>
        </div>
      </div>
      <div className='toolDivIconPrisoner' ref={toolsInvisiblePrisoner}>
        <BsTools className='toolIconPrisoner' onClick={invisibleErrors}/>
      </div>
      <div className='preloaderPrisoner' ref={loaderVisibilityPrisoner}>
          <img src="https://i.imgur.com/cWGLRFJ.png" alt="loader"/>
      </div>
    </div>
  )
}

export default PrisonerInfo