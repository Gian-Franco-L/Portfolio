import React, { useRef } from 'react'
// import Intro from './containers/Intro'
import Interface from './containers/Interface'

function App (){
  const introInterfaceRef = useRef(null)
  return (
    <div className="App">
      {/* <Intro
        introInterfaceRef={introInterfaceRef}
      /> */}
      <Interface
        introInterfaceRef={introInterfaceRef}
      />
    </div>
  );
}

export default App;
