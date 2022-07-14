import React from 'react'
import styled from 'styled-components'
import Arrows from '../components/Arrows/Arrows'
import PrisonerInfo from '../components/PrisonerInfo/PrisonerInfo'
import Journey from '../components/Journey/Journey'
import Projects from '../components/Projects/Projects'
import SocialIcons from '../components/SocialIcons/SocialIcons'
import Experience from '../components/Experience/Experience'
import RectanglesAnimation from '../components/RectanglesAnimation/RectanglesAnimation'
import '../css/Interface.css'

function Interface ({ introInterfaceRef }){
  return(
    <MainContainer ref={introInterfaceRef}>
      <Arrows />
      <div className='interfaceBlack'>
        <PrisonerInfo />
        <Journey />
        <Projects />
        <SocialIcons />
        <Experience />
      </div>
      <RectanglesAnimation />
    </MainContainer>
  )
}

const MainContainer = styled.div`
 display: flex;
`

export default Interface