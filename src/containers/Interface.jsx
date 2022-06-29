import React, { useState } from 'react'
import styled from 'styled-components'
import '../css/Interface.css'

function Interface ({ introInterfaceRef }){
  const items = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node", "MongoDB", "Express"]
  const [list, setList] = useState([])

  function asd(){
    for(let i=0; i<7; i++){
      setTimeout(()=>{
        setList(prev =>[items[i], ...prev])
      }, ((i+1)*2000))
    }
  }
  function dsa(){
    console.log(list);
  }

  return(
    <MainContainer ref={introInterfaceRef}>
      <div className='topLeftArrow'></div>
      <div className='topRightArrow'></div>
      <div className='bottomLeftArrow'></div>
      <div className='bottomRightArrow'></div>
      <div className='backgroundBlack'>
        <div className='topRectangle'></div>
        <div className='midRectangle'></div>
        <div className='bottomLeftRectangle'></div>
        <div className='bottomRightRectangle'></div>
          <button onClick={asd}>fill</button>
          <button onClick={dsa}>see</button>
        <div className='rightRectangle'>
          {list}
          <div className='preloader'>
            <img src="https://i.imgur.com/cWGLRFJ.png" alt="" />
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