import React, {useState} from 'react'

export default function TextForm(props) {

  const copyText=()=>{
    const text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const Clear =()=>{
    
    let newtext = '';
    setText(newtext);
  }
  const LowerCase =()=>{
    
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const Uppercase =()=>{
    
    console.log("Btn Clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    
    
  }
  const Handelonchange =(event)=>{
    console.log("Handelonchange");
    setText(event.target.value);
  }
  const [text,setText]=useState('Enter the text!!');
  
  return (
    
   <>
   
     
     <div className="mb-3" style={{color :props.mode==='light'?'black':'white'}}>
       <h1>{props.heading} </h1>
       <textarea rows={9} id="myBox" className="form-control" style={{backgroundColor :props.mode==='light'?'white':'#042743',color :props.mode==='light'?'#042743':'white'}}  value={text}  onChange={Handelonchange} typeof='text'></textarea>
       <button   className="btn btn-primary my-3 " onClick={Uppercase}>Convert To UpperCase</button>
       <button    className="btn btn-primary mx-3" onClick={LowerCase}>Convert To LowerCase</button>
       <button    className="btn btn-primary mx-2" onClick={Clear}>Clear</button>
       <button    className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
       
     </div  >
      <div className="container my-3" style={{color :props.mode==='light'?'black':'white'}} >
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length } Words and {text.length} Characters </p>
        <p>{0.008 * text.split(" ").length } Minute time required to read this document</p>
        <h3>Preview</h3>
        <p>{text.length > 0?text:"Enter the some text in textbox above to preview it here"}</p>
      </div>
     
       
     
     

 </>
  )
}
