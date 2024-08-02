//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.title = "Texisus- DarkMode";
      //setInterval(() => {
      //document.title = "TextUtils  is Amazing";
      //}, 2000);
      //setInterval(() => {
      //document.title = "Install TextUtils";
      //}, 1500);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "#E8E0DE ";
      document.title = "Texisus- LightMode";
    }
  }
  const darkMode=()=>{
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    }
  }
  const lightMode=()=>{
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#E8E0DE";
    }
  }
  return (
    <>
      <Router>
        <Navbar title={<i class="fa-brands fa-react fa-1x">Texisus</i>} home="Home" about="About" mode={mode} toggleMode={toggleMode} lightMode={lightMode} darkMode={darkMode} />
        <Alert alert={alert} />
        <div className="container ml-3">
          <Routes>

            <Route path="/" element={<TextForms showAlert={showAlert} heading="Enter Your Text Analysis" mode={mode} />}></Route>

            <Route path="/About" element={<About mode={mode}/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>


  );
}

export default App;
