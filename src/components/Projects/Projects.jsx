import React from 'react'
import './Projects.css'

const Projects = () =>{
  return(
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
  )
}

export default Projects