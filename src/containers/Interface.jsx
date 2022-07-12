import React, { useState } from 'react'
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
  const [tecToolsDataB, setTecToolsDataB] = useState([
    {name: "HTML", state: 0},
    {name: "CSS", state: -1},
    {name: "JavaScript", state: 0},
    {name: "Git/Github", state: -1},
    {name: "SASS", state: 0},
    {name: "TypeScript", state: 0},
    {name: "React", state: -1},
    {name: "NextJS", state: 0},
    {name: "Node", state: 0},
    {name: "MongoDB", state: 0},
    {name: "Express", state: -1},
    {name: "Rest API", state: 0},
  ])

  const mouseEnter = () =>{
    setTecToolsDataB([
      {name: "HTML", state: 0},
      {name: "CSS", state: 0},
      {name: "JavaScript", state: 0},
      {name: "Git/Github", state: 0},
      {name: "SASS", state: 0},
      {name: "TypeScript", state: 0},
      {name: "React", state: 0},
      {name: "NextJS", state: 0},
      {name: "Node", state: 0},
      {name: "MongoDB", state: 0},
      {name: "Express", state: 0},
      {name: "Rest API", state: 0},
    ])
  }
  const mouseLeave = () =>{
    setTecToolsDataB([
      {name: "HTML", state: 0},
      {name: "CSS", state: -1},
      {name: "JavaScript", state: 0},
      {name: "Git/Github", state: -1},
      {name: "SASS", state: 0},
      {name: "TypeScript", state: 0},
      {name: "React", state: -1},
      {name: "NextJS", state: 0},
      {name: "Node", state: 0},
      {name: "MongoDB", state: 0},
      {name: "Express", state: -1},
      {name: "Rest API", state: 0},
    ])
  }

  return(
    <MainContainer ref={introInterfaceRef}>
      <Arrows />
      <div className='interfaceBlack'>
        <PrisonerInfo />
        <Journey />
        <Projects />
        <SocialIcons />
        <div className='rectangles rightRectangle'>
          {tecToolsDataB.map((item, position) =>(
            <Experience
              mouseEnter={mouseEnter}
              mouseLeave={mouseLeave}
              name={item.name}
              state={item.state}
              key={position}
            />
            ))}
        </div>
      </div>
      <RectanglesAnimation />
    </MainContainer>
  )
}

const MainContainer = styled.div`
 display: flex;
`

export default Interface