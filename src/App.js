import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import TextF from "./components/TexF";

function App() {
  const [mode,setMode] = useState('light');
 const  handleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2e6aa5';
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* <Navbar title="add title" about="add about"/> */}
      {/* <Navbar title="add title" /> */}
      <Navbar mode={mode} handleMode = {handleMode}/>
      <div className="container">
        <TextF heading="Add Heading" mode={mode} />
      </div>
    </>
  );
}

export default App;
