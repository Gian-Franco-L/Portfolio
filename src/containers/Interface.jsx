import React from 'react'
import styled from 'styled-components'
import '../css/Interface.css'

function Interface ({ introInterfaceRef }){
  return(
    <MainContainer ref={introInterfaceRef}>
      <div className='topLeftArrow'></div>
      <div className='topRightArrow'></div>
      <div className='bottomLeftArrow'></div>
      <div className='bottomRightArrow'></div>
      <div className='backgroundBlack'></div>
      <div className='topRectangleQualities topRectangleTopLine'></div>
      <div className='topRectangleQualities topRectangleLeftLine'></div>
      <div className='topRectangleQualities topRectangleBottomLine'></div>
      <div className='topRectangleQualities topRectangleRightLine'></div>
      <div className='midRectangleQualities midRectangleTopLine'></div>
      <div className='midRectangleQualities midRectangleLeftLine'></div>
      <div className='midRectangleQualities midRectangleBottomLine'></div>
      <div className='midRectangleQualities midRectangleRightLine'></div>
    </MainContainer>
  )
}

const MainContainer = styled.div`
`

export default Interface