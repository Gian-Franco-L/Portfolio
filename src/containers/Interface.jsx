import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import '../css/Interface.css'
import { FaCheck } from 'react-icons/fa';

function Interface ({ introInterfaceRef }){
  const tecToolsDataB = ["HTML", "CSS", "JavaScript", "Git/Github", "SASS", "TypeScript", "React", "NextJS", "Node", "MongoDB", "Express", "Rest API"]
  const [list, setList] = useState([])
  let desapearLoader = document.querySelector(".divLoader")
  let deseapearButton = useRef(null)
  let pipe = 0

function fillTecToolsDataB(){
  new Promise (() =>{
    if(pipe==0)
    {
      deseapearButton.current.style.display = "none"
      pipe=1
      for(let i=0; i<12; i++){
        setTimeout(()=>{
          setList(prev =>[tecToolsDataB[i], ...prev])
        }, ((i+1)*1000))
      }
    }
  })
  .then(() =>{
    pipe=0
    desapearLoader.style.opacity = "0"
  })
}

  return(
    <MainContainer ref={introInterfaceRef}>
      <div className='topLeftArrow'></div>
      <div className='topRightArrow'></div>
      <div className='bottomLeftArrow'></div>
      <div className='bottomRightArrow'></div>
      <div className='backgroundBlack'>
        {
          list[0]
          &&
          <div className='divLoader'>
            <div className='preloader'>
              <img src="https://i.imgur.com/cWGLRFJ.png" alt="" />
            </div>
          </div>
        }
        <div className='topRectangle'>
          <div className='image'></div>
          <div className='topRectangleContent'>
            <div className='topRectangleLetterStyle'>Nombre: Gian Franco Lombardini</div>
            <div className='topRectangleLetterStyle'>Pais: Argentina</div>
            <div className='topRectangleLetterStyle'>Provincia: Buenos Aires</div>
            <div className='topRectangleLetterStyle'>Edad: 25 años</div>
            <div className='topRectangleLetterStyle'>Delito: Nula experiencia laboral en TI</div>
            <div className='topRectangleLetterStyle'>Condena: Estudiar para siempre</div>
            <div className='topRectangleLetterStyle'>Objetivo: Frontend Developer</div>
            <div className='topRectangleLetterStyle'>Estado: Desempleado</div>
          </div>
        </div>
        <div className='midRectangle'>
          
        </div>
        <div className='bottomLeftRectangle'>
        </div>
        <div className='bottomRightRectangle'>
        </div>
        <div className='rightRectangle'>
          <div className='rectanglesApearAnimation'>
            <p className='rightRectangleTitle'>Conocimientos:</p>
            {list[0]==null && <button ref={deseapearButton} className='divButtons rightRectangleButton' onClick={fillTecToolsDataB}>Escanear</button>}
            {list[0] && <div className='flexWord'><div>{list[0]}</div><div className='completeWord'><FaCheck/></div></div>}
            {list[1] && <div className='flexWord'><div>{list[1]}</div><div className='completeWord'><FaCheck/></div></div>}
            {list[2] && <div className='flexWord'><div>{list[2]}</div><div className='completeWord'><FaCheck/></div></div>}
            {list[3] && <div className='flexWord'><div>{list[3]}</div><div className='completeWord'><FaCheck/></div></div>}
            {list[4] && <div className='flexWord'><div>{list[4]}</div><div className='completeWord'><FaCheck/></div></div>}
            {list[5] && <div className='flexWord'><div>{list[5]}</div><div className='completeWord'><FaCheck/></div></div>}
            {list[6] && <div className='flexWord'><div>{list[6]}</div><div className='completeWord'><FaCheck/></div></div>}
            {list[7] && <div className='flexWord'><div>{list[7]}</div><div className='completeWord'><FaCheck/></div></div>}
            {list[8] && <div className='flexWord'><div>{list[8]}</div><div className='completeWord'><FaCheck/></div></div>}
            {list[9] && <div className='flexWord'><div>{list[9]}</div><div className='completeWord'><FaCheck/></div></div>}
            {list[10] && <div className='flexWord'><div>{list[10]}</div><div className='completeWord'><FaCheck/></div></div>}
            {list[11] && <div className='flexWord'><div>{list[11]}</div><div className='completeWord'><FaCheck/></div></div>}
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