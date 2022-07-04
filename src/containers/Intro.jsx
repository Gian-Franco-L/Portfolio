import React, {useRef} from 'react'
import Typewriter from 'typewriter-effect';
import '../css/Intro.css'

function Intro ({ introInterfaceRef }){
  const date = new Date()
  const day = date.getDate()
  const month = date.getDay()
  const year = date.getFullYear()
  const containerRef = useRef(null)

  const containerDisabled =  () =>{
    containerRef.current.className = "disapearText"
    setTimeout(() => {
      containerRef.current.style.display = "none"
    }, 1500)
    setTimeout(() =>{
      introInterfaceRef.current.style.display = "inline"
    }, 3000)
  }

  return(
    <div className='mainContainer' ref={containerRef}>
      <button className='skipButton' onClick={containerDisabled}>Adelantar Introduccion</button>
      <Typewriter
        onInit={(tw) => {
          tw.changeDelay(30)
          .typeString(`Fecha [${day}/${month+6}/${year+1000}]`)
          .pauseFor(1500)
          .typeString('<br><br>Protocolo de diagnostico penitenciario ADX FLORENCE')
          .pauseFor(1500)
          .typeString('<br>Inicializando ')
          .changeDelay(400)
          .typeString('. . .')
          .pauseFor(400)
          .changeDelay(30)
          .typeString('<br><br><span class="red">¡ADVERTENCIA!</span>')
          .pauseFor(1000)
          .typeString('<br><br><span class="red">ANULACION MANUAL DETECTADA</span>')
          .pauseFor(1000)
          .typeString('<br><br><span class="red">SISTEMA DE SEGURIDAD CORRUPTO</span>')
          .pauseFor(1000)
          .typeString('<br><br><span class="red">INFORMANDO A FUERZAS ARMADAS </span>')
          .changeDelay(200)
          .typeString('<span class="red">. . .</span>')
          .pauseFor(400)
          .deleteChars(5)
          .typeString('<span class="red">. . .</span>')
          .pauseFor(400)
          .changeDelay(30)
          .typeString('<br><br><span class="red">NO HAY RESPUESTA</span>')
          .pauseFor(1500)
          .typeString('<br><br>Accediendo a la base de datos de la prision')
          .pauseFor(1500)
          .typeString('<br><br><span class="red">DETECTANDO INFORMACION DAÑADA</span>')
          .pauseFor(1500)
          .typeString('<br><br>Lista de reclusos parcialmente recuperada')
          .pauseFor(1500)
          .typeString('<br>Descomprimiendo ')
          .changeDelay(500)
          .typeString('. . .')
          .pauseFor(400)
          .changeDelay(30)
          .typeString('<br><br>Listando prisioneros:')
          .pauseFor(400)
          .changeDelay(1)
          .typeString('<br>Anthony Casso --------------------------------> <span class="red"> --ESTADO--</span> ID: 16802-050')
          .typeString('<br>Mutulu Shakur --------------------------------> <span class="red"> --ESTADO--</span> ID: 83205-012')
          .typeString('<br>Fares Khallafalla -----------------------------> <span class="red"> --ESTADO--</span> ID: 34856-054')
          .typeString('<br>Chevie Kehoe ---------------------------------> <span class="red"> --ESTADO--</span> ID: 21300-009')
          .typeString('<br>Abdul Murad ----------------------------------> <span class="red"> --ESTADO--</span> ID: 37437-054')
          .typeString('<br>Ali Al-Tamimi ----------------------------------> <span class="red"> --ESTADO--</span> ID: 48054-083')
          .typeString('<br>Khalid al-Fawwaz ----------------------------> <span class="red"> --ESTADO--</span> ID: 67497-054')
          .typeString('<br>Mohammed Al-Moayad ------------------> <span class="red"> --ESTADO--</span> ID: 62044-053')
          .typeString('<br>Gian Franco Lombardini ------------------> <span class="green"> ++ESTADO++</span> ID: 20081-997')
          .typeString('<br>Theodore Kaczynski -----------------------> <span class="red"> --ESTADO--</span> ID: 04475-046')
          .typeString('<br>Clement Hampton -------------------------> <span class="red"> --ESTADO--</span> ID: 34854-054')
          .typeString('<br>Salvador Magluta --------------------------> <span class="red"> --ESTADO--</span> ID: 26012-037')
          .pauseFor(400)
          .changeDelay(30)
          .typeString('<br><br>Seleccionando recluso ID: 20081-997 - NOMBRE: Gian Franco Lombardini')
          .pauseFor(1500)
          .typeString('<br>Iniciando interfaz grafica mas detallada... require reparacion.')
          .pauseFor(1500)
          .callFunction(containerDisabled)
          .start();
        }}/>
    </div>
  )
}

export default Intro
