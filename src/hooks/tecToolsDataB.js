import { useState } from 'react'

const Hook = () =>{
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
  return {
    tecToolsDataB,
    setTecToolsDataB
  }
}


export default Hook