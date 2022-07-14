import React from 'react'
import { v4 as uuidv4 } from "uuid"
import WordAndCheck from '../WordAndCheck/WordAndCheck'
import './Experience.css'

const Experience = () =>{
  
  const tecnologies = ["HTML", "CSS", "JavaScript", "Git/Github", "SASS", "TypeScript", "React", "NextJS", "Node", "MongoDB", "Express", "Rest API"]

  return(
    <div className='rectangles rightRectangle'>
      {tecnologies.map(name =>(
        <WordAndCheck
          name={name}
          key={uuidv4()}
        />
      ))}
    </div>
  )
}

export default Experience