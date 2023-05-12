import React, {useState} from "react";

export default function TextForm(props) {
    const [text,setText] = useState('Enter your text here1');
    const myFunc = ()=>{
        let res = text.toUpperCase();
        setText(res);
    }
    const func = (event)=>{
       setText(event.target.value);
    }
  return (
    <>
    <div class = "container my-4">
      <label for="myBox" className="form-label">
        {props.text}
      </label>
      <textarea className="form-control" id="myBox" rows="7" value = {text} onChange={func}></textarea>
      <button className="btn btn-primary my-3" onClick = {myFunc}>Convert to UpperCase</button>
    </div>
    </>
  );
}
