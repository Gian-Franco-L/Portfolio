import React from 'react'
import styled from 'styled-components'
import '../css/Interface.css'
import { FaCheck, FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

function Interface ({ introInterfaceRef }){
  const tecToolsDataB = ["HTML", "CSS", "JavaScript", "Git/Github", "SASS", "TypeScript", "React", "NextJS", "Node", "MongoDB", "Express", "Rest API"]
  let desapearLoader = document.querySelector(".divLoader")

  return(
    <MainContainer ref={introInterfaceRef}>
      <div className='backgroundBlack'>
        <div className='topLeftArrow'></div>
        <div className='topRightArrow'></div>
        <div className='bottomLeftArrow'></div>
        <div className='bottomRightArrow'></div>
        {/* {
          list[0]
          &&
          <div className='divLoader'>
            <div className='preloader'>
              <img src="https://i.imgur.com/cWGLRFJ.png" alt="" />
            </div>
          </div>
        } */}
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
        <div className='rectangles midRectangle'>
          <div className='midRectangleLetterStyle apearAnimation'><b>Primer contacto con la programacion: [</b> Año: 2018 --- Facultad: UTN --- Carrera: Ingenieria Electronica --- Lenguaje: C --- Tiempo: 2 años <b>]</b></div>
          <div className='midRectangleLetterStyle apearAnimation'><b>Primer contacto con la programacion web: [</b> Año: 2021 --- Curso: Plataforma5 --- Lenguajes: HTML/CSS/Javascript --- Tiempo: 3 meses <b>]</b></div>
          <div className='midRectangleLetterStyle apearAnimation'><b>Experiencia y progreso actual: [</b> Forma: Autodidacta --- Fuentes: Platzi --- Actualmente: Perfeccionando Frontend --- Tiempo: 1 año <b>]</b></div>
          <div className='midRectangleLetterStyle apearAnimation'></div>
        </div>
        <div className='rectangles bottomLeftRectangle'>
          <div className='projectsContainers firstProject apearAnimation'>
            <div className=' projectImg'></div>
            <div className='projectName'>Color Game</div>
          </div>
          <div className='projectsContainers secondProject apearAnimation'>
            <div className=' projectImg'></div>
            <div className='projectName'>Weather Chanel</div>
          </div>
          <div className='projectsContainers thirdProject apearAnimation'>
            <div className=' projectImg'></div>
            <div className='projectName'>Market</div>
          </div>
        </div>
        <div className='rectangles bottomRightRectangle'>
            <FaWhatsapp className='icon apearAnimation'/>
            <FaInstagram className='icon apearAnimation'/>
            <FaLinkedin className='icon apearAnimation'/>
            <FaGithub className='icon apearAnimation'/>
        </div>
        <div className='rectangles rightRectangle'>
          <div className='apearAnimation wordCheckContainer'>
            <div className='wordCheckContainer'>
              <div className='checkFlex'>
                <div className='WordCheck'>{tecToolsDataB[0]}</div>
                <div className='absoluteCheck'><FaCheck/></div>
              </div>
              <div className='checkFlex'>
                <div className='WordCheck'>{tecToolsDataB[1]}</div>
                <div className='absoluteCheck'><FaCheck/></div>
              </div>
              <div className='checkFlex'>
                <div className='WordCheck'>{tecToolsDataB[2]}</div>
                <div className='absoluteCheck'><FaCheck/></div>
              </div>
              <div className='checkFlex'>
                <div className='WordCheck'>{tecToolsDataB[3]}</div>
                <div className='absoluteCheck'><FaCheck/></div>
              </div>
              <div className='checkFlex'>
                <div className='WordCheck'>{tecToolsDataB[4]}</div>
                <div className='absoluteCheck'><FaCheck/></div>
              </div>
              <div className='checkFlex'>
                <div className='WordCheck'>{tecToolsDataB[5]}</div>
                <div className='absoluteCheck'><FaCheck/></div>
              </div>
              <div className='checkFlex'>
                <div className='WordCheck'>{tecToolsDataB[6]}</div>
                <div className='absoluteCheck'><FaCheck/></div>
              </div>
              <div className='checkFlex'>
                <div className='WordCheck'>{tecToolsDataB[7]}</div>
                <div className='absoluteCheck'><FaCheck/></div>
              </div>
              <div className='checkFlex'>
                <div className='WordCheck'>{tecToolsDataB[8]}</div>
                <div className='absoluteCheck'><FaCheck/></div>
              </div>
              <div className='checkFlex'>
                <div className='WordCheck'>{tecToolsDataB[9]}</div>
                <div className='absoluteCheck'><FaCheck/></div>
              </div>
              <div className='checkFlex'>
                <div className='WordCheck'>{tecToolsDataB[10]}</div>
                <div className='absoluteCheck'><FaCheck/></div>
              </div>
              <div className='checkFlex'>
                <div className='WordCheck'>{tecToolsDataB[11]}</div>
                <div className='absoluteCheck'><FaCheck/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='topRectangleQualities topRectangleTopLine'></div>
      <div className='topRectangleQualities topRectangleBottomLine'></div>
      <div className='topRectangleQualities topRectangleLeftLine'></div>
      <div className='topRectangleQualities topRectangleRightLine'></div>
      <div className='midRectangleQualities midRectangleTopLine'></div>
      <div className='midRectangleQualities midRectangleBottomLine'></div>
      <div className='midRectangleQualities midRectangleLeftLine'></div>
      <div className='midRectangleQualities midRectangleRightLine'></div>
      <div className='bottomLeftRectangleQualities bottomLeftRectangleTopLine'></div>
      <div className='bottomLeftRectangleQualities bottomLeftRectangleBottomLine'></div>
      <div className='bottomLeftRectangleQualities bottomLeftRectangleLeftLine'></div>
      <div className='bottomLeftRectangleQualities bottomLeftRectangleRightLine'></div>
      <div className='bottomRightRectangleQualities bottomRightRectangleTopLine'></div>
      <div className='bottomRightRectangleQualities bottomRightRectangleBottomLine'></div>
      <div className='bottomRightRectangleQualities bottomRightRectangleLeftLine'></div>
      <div className='bottomRightRectangleQualities bottomRightRectangleRightLine'></div>
      <div className='RightRectangleQualities RightRectangleTopLine'></div>
      <div className='RightRectangleQualities RightRectangleBottomLine'></div>
      <div className='RightRectangleQualities RightRectangleLeftLine'></div>
      <div className='RightRectangleQualities RightRectangleRightLine'></div>
    </MainContainer>
  )
}

const MainContainer = styled.div`
 display: flex;
`

export default Interface