import React, { useRef } from "react"
import { BsTools } from 'react-icons/bs'
import './Journey.css'

const Journey = () =>{
  const errorInvisibleJourney = useRef(null)
  const toolsInvisibleJourney = useRef(null)
  const loaderVisibilityJourney = useRef(null)

  const invisibleErrors = () =>{
    loaderVisibilityJourney.current.style.display = "inline"
    toolsInvisibleJourney.current.style.display = "none"
    toolsInvisibleJourney.current.style.width = 0
    // errorInvisibleJourney.current.classList.add("disappearUndefinedWordd")
    setTimeout(() =>{
      loaderVisibilityJourney.current.style.opacity = 0
    }, 2000)
  }
  return(
    <div className='rectangles midRectangle'>
      <div className='midRectangleLetterStyle apearAnimation'>
        <b>Primer contacto con la programacion: [</b> Año: 2018 --- Facultad: UTN --- Carrera: Ingenieria Electronica --- Lenguaje: C --- Tiempo: 2 años <b>]</b>
      </div>
      <div className='midRectangleLetterStyle apearAnimation'>
        <b>Primer contacto con la programacion web: [</b> Año: 2021 --- Curso: Plataforma5 --- Lenguajes: HTML/CSS/Javascript --- Tiempo: 3 meses <b>]</b>
      </div>
      <div className='midRectangleLetterStyle apearAnimation'>
        <b>Experiencia y progreso actual: [</b> Forma: Autodidacta --- Fuentes: Platzi --- Actualmente: Perfeccionando React --- Tiempo: 1 año <b>]</b>
      </div>
      <div className='toolDivIconJourney' ref={toolsInvisibleJourney}>
        <BsTools className='toolIconJourney' onClick={invisibleErrors}/>
      </div>
      <div className='preloaderJourney' ref={loaderVisibilityJourney}>
          <img src="https://i.imgur.com/cWGLRFJ.png" alt="loader"/>
      </div>
    </div>
  )
}

export default Journey