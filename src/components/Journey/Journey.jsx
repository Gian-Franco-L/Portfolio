import React from "react"
import './Journey.css'

const Journey = () =>{
  return(
    <div className='rectangles midRectangle'>
      <div className='midRectangleLetterStyle apearAnimation'>
        <b>Primer contacto con la programacion: [</b> Año: 2018 --- Facultad: UTN --- Carrera: Ingenieria Electronica --- Lenguaje: C --- Tiempo: 2 años <b>]</b>
      </div>
      <div className='midRectangleLetterStyle apearAnimation'>
        <b>Primer contacto con la programacion web: [</b> Año: 2021 --- Curso: Plataforma5 --- Lenguajes: HTML/CSS/Javascript --- Tiempo: 3 meses <b>]</b>
      </div>
      <div className='midRectangleLetterStyle apearAnimation'>
        <b>Experiencia y progreso actual: [</b> Forma: Autodidacta --- Fuentes: Platzi --- Actualmente: Perfeccionando Frontend --- Tiempo: 1 año <b>]</b>
      </div>
    </div>
  )
}

export default Journey