import React, {useState} from 'react'

import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import{
  Browserrouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";
// import Alert from './Component/Alert';


function App() {
  // const [Alert, setAlert] = useState(null)
  // const showaleart=(message,type)=>{
  //   setAlert({msg: message,
  //     type : type})
  // }
  

  const [mode, setstate] = useState('light')
  const toggel=()=>{
   if (mode === 'dark' ) {
      setstate('light');
      document.body.style.backgroundColor='white';
      // showaleart("hii","Success");
     
   } else {
    setstate('dark');
    document.body.style.backgroundColor='#042743';
    // showaleart("by","Success");

   }
  }
  const [text, settext] = useState('Enable DarkMode');

  const ctext=()=>{
    if (text==='Enable DarkMode') {
      settext('Enable LightMode');
    } else {
      settext('Enable DarkMode');
    }
  }
  

  return (
    <>
      <Navbar mode={mode} toggel={toggel} changeText={text} ctext={ctext} />
      {/* <Alert alert={Alert}/> */}
      <div className='container'>
      <TextForm heading="Enter the Text to Analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;
