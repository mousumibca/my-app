import React, { useState } from 'react'

export default function TextForms(props) {

  const handelupclickupper = () => {
    console.log("button was click in upper case");
    let newText = Text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "primary");
    document.title="Texisus-UpperCase";
  }
  const handelupclicklower = () => {
    console.log("button was click in lower case");
    let newText = Text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!","success");
    document.title="Texisus-LowerCase";
  }
  const handelupcaptalized = () => {
    console.log("button was click in lower case");
    let newText= Text.charAt(0).toUpperCase() + Text.slice(1);
    setText(newText)
    props.showAlert("Converted to First word capital!","success");
    document.title="Texisus-Capitalized";
  }
  const handelupclickclear = () => {
    console.log("button was click in clear");
    let newText = "";
    setText(newText);
    props.showAlert("Clear case", "danger");
    document.title="Texisus-clearCase";
  }
  const handelonchange = (event) => {
    console.log("text was changed");
    setText(event.target.value);
  }
  const [Text, setText] = useState("");
  return (

    <>
      <div className="mb-3 w-75" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} <span class="change_content"></span> </h1>
        <textarea className="form-control" value={Text} rows="8" spellCheck="true" onChange={handelonchange} style={{backgroundColor: props.mode==='dark'? '#4B4948 ': '#F0C0B5 ', color:props.mode=== 'dark'?'white': 'black'}} placeholder='Enter something to disable buttons'></textarea>
        <button className="btn btn-primary mt-1 ms-3" disabled={Text.length===0} onClick={handelupclickupper} >convert to upper case</button>
        <button className="btn btn-success mt-1 ms-3"disabled={Text.length===0} onClick={handelupclicklower} >convert to lower case</button>
        <button className="btn btn-warning mt-1 ms-3"disabled={Text.length===0} onClick={handelupcaptalized} >Capitalized word</button>
        <button className="btn btn-danger mt-1 ms-3"disabled={Text.length===0} onClick={handelupclickclear} >clear text area</button>
      </div>
      <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} word and {Text.length} characters</p>
      <p>{0.0008 * Text.split(" ").length - 0.0008}minutes read words</p>
      <h1>Preview Text</h1>
      <p>{Text.length>0?Text:"Nothing to preview"}</p>
      {/*<input type='file' capture="user" multiple></input>*/}
      </div>
    </>
  )
}
