import React, { useRef } from 'react'
import Intro from '../containers/Intro'
import Interfaz from '../containers/Interfaz'

function App (){
  const introInterfazRef = useRef(null)
  return (
    <div className="App">
      {/* <Intro
        introInterfazRef={introInterfazRef}
      /> */}
      <Interfaz
        introInterfazRef={introInterfazRef}
      />
    </div>
  );
}

export default App;
