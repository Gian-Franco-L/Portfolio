import React from 'react'
import './PrisonerInfo.css'

const PrisonerInfo = () =>{
  return(
    <div className='rectangles topRectangle'>
      <div className='image'></div>
      <div className='topRectangleContent apearAnimation'>
        <div className='topRectangleLetterStyle'>Nombre: Gian Franco Lombardini</div>
        <div className='topRectangleLetterStyle'>Pais: Argentina</div>
        <div className='topRectangleLetterStyle'>Provincia: Buenos Aires</div>
        <div className='topRectangleLetterStyle'>Edad: 25 años</div>
      </div>
      <div className='topRectangleContent apearAnimation'>
        <div className='topRectangleLetterStyle'>Delito: Sin experiencia laboral en TI</div>
        <div className='topRectangleLetterStyle'>Condena: Estudiar para siempre</div>
        <div className='topRectangleLetterStyle'>Especializacion: Frontend Developer</div>
        <div className='topRectangleLetterStyle'>Estado: Desempleado</div>
      </div>
    </div>
  )
}

export default PrisonerInfo