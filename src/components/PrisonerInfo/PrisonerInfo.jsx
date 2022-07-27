import React, { useRef } from 'react'
import { BsTools } from 'react-icons/bs'
import './PrisonerInfo.css'

const PrisonerInfo = () =>{
  const errorInvisiblePrisoner = useRef(null)
  const toolsInvisiblePrisoner = useRef(null)
  const loaderVisibilityPrisoner = useRef(null)

  const invisibleErrors = () =>{
    loaderVisibilityPrisoner.current.style.display = "inline"
    toolsInvisiblePrisoner.current.style.display = "none"
    toolsInvisiblePrisoner.current.style.width = 0
    // errorInvisiblePrisoner.current.classList.add("disappearUndefinedWordd")
    setTimeout(() =>{
      loaderVisibilityPrisoner.current.style.opacity = 0
    }, 2000)
  }
  return(
    <div className='rectangles topRectangle'>
      <div className='image imgAnimation'>
        <div className='imgError'>Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error</div>
        <div className=''></div>
      </div>
      <div className='topRectangleContent apearAnimation'>
        <div className='topRectangleLetterStyle'><strong>Nombre:</strong><br/>Gian Franco Lombardini</div>
        <div className='topRectangleLetterStyle'><strong>Pais:</strong><br/>Argentina</div>
      </div>
      <div className='topRectangleContent apearAnimation'>
        <div className='topRectangleLetterStyle'><strong>Delito:</strong><br/>Sin experiencia</div>
        <div className='topRectangleLetterStyle'><strong>Provincia:</strong><br/>Buenos Aires</div>
      </div>
      <div className='topRectangleContent apearAnimation'>
        <div className='topRectangleLetterStyle'><strong>Condena:</strong> <br/>Estudio permanente</div>
      <div className='topRectangleLetterStyle'><strong>Edad:</strong><br/>25 años</div>
      </div>
      <div className='topRectangleContent apearAnimation'>
        <div className='topRectangleLetterStyle'><strong>Especializacion:</strong><br/>Frontend Developer</div>
        <div className='topRectangleLetterStyle'><strong>Estado:</strong><br/>Desempleado</div>
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