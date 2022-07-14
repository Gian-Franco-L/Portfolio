import React, { useRef } from 'react'
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import { BsTools } from 'react-icons/bs';
import './WordAndCheck.css'

const WordAndCheck = ({ name }) =>{
  let swtch = 0
  if(name === "CSS" || name === "Git/Github" || name === "NextJS" || name === "Express"){
    swtch = 1
  }
  const undefinedInvisible = useRef(null)
  const bsToolsInvisible = useRef(null)
  const loaderVisibility = useRef(null)

  const invisibleErrors = () =>{
    loaderVisibility.current.classList.remove("displayNone")
    undefinedInvisible.current.style.display = "none"
    bsToolsInvisible.current.style.opacity = 0
    bsToolsInvisible.current.style.width = 0
    console.log(loaderVisibility.current);
    // setTimeout(() =>{
    //   loaderVisibility.current.className.add("displayNone")
    // }, 3000)
  }

  return(
    <div className='checkFlex apearAnimation'>
      <div className='wordCheck'>
        {name}
        {swtch === 1
         ?
          <div className='undefinedName' ref={undefinedInvisible}>Undefined</div>
         :
          null
        }
      </div>
      <div className='absoluteCheck'>
        <MdOutlineCheckCircleOutline />
        {swtch === 1
         ?
          <div className='toolIconDiv' ref={bsToolsInvisible}>
            <BsTools className='toolIcon' onClick={invisibleErrors}/>
            <div className='preloader displayNone' ref={loaderVisibility}>
              <img src="https://i.imgur.com/cWGLRFJ.png" alt="" />
            </div>
          </div>
         :
          null
        }
      </div>
    </div>
    // {
    //   <div className='displayNone'>
    //     <img src="https://i.imgur.com/cWGLRFJ.png" alt="" />
    //   </div>
    // }
  )
}

export default WordAndCheck