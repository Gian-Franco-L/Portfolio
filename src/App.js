import React, { useRef } from 'react'
import Intro from './containers/Intro'
import Interfaz from './containers/Interface'

function App (){
  const introInterfaceRef = useRef(null)
  return (
    <div className="App">
      {/* <Intro
        introInterfaceRef={introInterfaceRef}
      /> */}
      <Interfaz
        introInterfaceRef={introInterfaceRef}
      />
    </div>
  );
}

export default App;
