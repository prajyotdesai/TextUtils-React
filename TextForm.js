import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was clicked" + text)
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
        document.title='TextUtils - UpperCase';
        
    }

    const handleloClick=()=>{
        // console.log("UpperCase was clicked" + text)
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success")
        document.title='TextUtils - LowerCase';
    }
    
    

    const handleClearClick=()=>{
        setText("")
        props.showAlert("Data is clear succesfuly","success")
    }


    const handleOnChange=(event)=>{
        // console.log("On Change")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"  ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        
         
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{ text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} Minutes to read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
