import React, { useRef } from 'react'
import { BsTools } from 'react-icons/bs'
import './Projects.css'

const Projects = () =>{
  const firstErrorInvisibleProjects = useRef(null)
  const secondErrorInvisibleProjects = useRef(null)
  const thirdErrorInvisibleProjects = useRef(null)
  const toolsInvisibleProjects = useRef(null)
  const loaderVisibilityProjects = useRef(null)

  const invisibleErrors = () =>{
    loaderVisibilityProjects.current.style.display = "inline"
    toolsInvisibleProjects.current.style.display = "none"
    toolsInvisibleProjects.current.style.width = 0
    firstErrorInvisibleProjects.current.classList.add("projectImgAnimation")
    secondErrorInvisibleProjects.current.classList.add("projectImgAnimation")
    thirdErrorInvisibleProjects.current.classList.add("projectImgAnimation")
    setTimeout(() =>{
      loaderVisibilityProjects.current.style.opacity = 0
      firstErrorInvisibleProjects.current.classList.add("projectImg")
      secondErrorInvisibleProjects.current.classList.add("projectImg")
      thirdErrorInvisibleProjects.current.classList.add("projectImg")
    }, 2000)
  }
  return(
    <div className='rectangles bottomLeftRectangle'>
      <div className='projectsContainers firstProject apearAnimation'>
        <div className='projectErrorContainer'>
          <div className='projectErrorGif' ref={firstErrorInvisibleProjects}></div>
        </div>
        <div className='projectName'>Color Game</div>
      </div>
      <div className='projectsContainers secondProject apearAnimation'>
        <div className='projectErrorContainer'>
          <div className='projectErrorGif' ref={secondErrorInvisibleProjects}></div>
        </div>
        <div className='projectName'>Weather Chanel</div>
      </div>
      <div className='projectsContainers thirdProject apearAnimation'>
        <div className='projectErrorContainer'>
          <div className='projectErrorGif' ref={thirdErrorInvisibleProjects}></div>
        </div>
        <div className='projectName'>Market</div>
      </div>
      <div className='toolDivIconProjects' ref={toolsInvisibleProjects}>
        <BsTools className='toolIconProjects' onClick={invisibleErrors}/>
      </div>
      <div className='preloaderProjects' ref={loaderVisibilityProjects}>
          <img src="https://i.imgur.com/cWGLRFJ.png" alt="loader"/>
      </div>
    </div>
  )
}

export default Projects