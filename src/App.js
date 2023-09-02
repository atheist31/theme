import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import TextF from "./components/TexF";
import Alert from "./components/Alert";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
     setAlert(null)
    },1500)
  }
 const  handleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2e6aa5';
      showAlert("Dark mode is enabled","success");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","success")
    }
  }
  return (
    <>
      {/* <Navbar title="add title" about="add about"/> */}
      {/* <Navbar title="add title" /> */}
      <Navbar mode={mode} handleMode = {handleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextF heading="Add Heading" showAlert={showAlert} mode={mode} />
      </div>
    </>
  );
}

export default App;
