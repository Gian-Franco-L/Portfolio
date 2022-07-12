import React from 'react'
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import { BsTools } from 'react-icons/bs';
import './Experience.css'

const Experience = ({name, state, mouseEnter, mouseLeave}) =>{
  return(
    <>
    {name === "HTML" ? <div className='experienceTitle'>Conocimientos: </div> : null}
     <div className='apearAnimation wordCheckContainer'>
        <div className='wordCheckContainer'>
          <div className='checkFlex'>
            <div className='WordCheck'>{state === 0 ? <div>{name}</div> : <div className='undefinedName'>undefined</div>}</div>
            <div className='absoluteCheck'>
              {state === 0 ? <MdOutlineCheckCircleOutline onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}/> : <BsTools className='toolIcon'/>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience