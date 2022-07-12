import React from 'react'
import './Projects.css'

const Projects = () =>{
  // let desapearLoader = document.querySelector(".divLoader")
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
      {/* {
          list[0]
          &&
          <div className='divLoader'>
            <div className='preloader'>
              <img src="https://i.imgur.com/cWGLRFJ.png" alt="" />
            </div>
          </div>
        } */}
    </div>
  )
}

export default Projects