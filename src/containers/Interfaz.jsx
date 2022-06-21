import React from 'react'
import styled from 'styled-components'
import '../css/Interfaz.css'

function Interfaz ({ introInterfazRef }){
  return(
    <MainContainer ref={introInterfazRef}>
      <div className='backgroundBlack'></div>
      <div className='topRectangle'></div>
      <div className='arrow1'></div>
      <div className='arrow2'></div>
      <div className='arrow3'></div>
      <div className='arrow4'></div>
    </MainContainer>
  )
}

const MainContainer = styled.div`
`

export default Interfaz