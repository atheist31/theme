import React, { useState } from "react";

const TexF = (props) => {
  const handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success")
  };
  const handleLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success")
  };
  const handleClear = () =>{
    let newText = "";
    setText(newText)
    props.showAlert("Text Clear","Success")
  }
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("Enter Text");
  return (
    <>
      <div
        className="container"
        style={{color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-info " onClick={handleUp}>
          Convert to Upper
        </button>
        <button className="btn btn-success mx-3" onClick={handleLow}>
          Convert to Lower
        </button>
        <button className="btn btn-success mx-3" onClick={handleClear}>
         Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "black" }}>
        <h1>Total Word</h1>
        <p>
          {text.split(" ").length}Word and {text.length}Characters
        </p>
        <p>
          {0.008 * text.split(" ").length} Minutes required to read this summery
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Please write something in the text area to preview here"}</p>
      </div>
    </>
  );
};

export default TexF;
