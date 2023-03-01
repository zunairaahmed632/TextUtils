import React, { useState } from "react";
import "../index.css";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let uppercase = text.toUpperCase();
    setText(uppercase);
    props.showAlert('Text has been successfully converted to Uppercase.','Success! ')

  };
  const handleLowClick = () => {
    let lowercase = text.toLowerCase();
    setText(lowercase);
    props.showAlert('Text has been successfully converted to Lowercase.','Success! ')
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert('Text has been successfully cleared.','Success! ')
  };
  const handleExtraSpaces = () => {
    let spaces = text.replace(/\s+/g, " ").trim();
    setText(spaces);
    props.showAlert('Extra spaces has been successfully removed.','Success! ')
  };
  const handleReverse = () => {
    let strArr = text.split("");
    strArr = strArr.reverse();
    let newText = strArr.join("");
    setText(newText);
    props.showAlert('Text has been successfully reversed.','Success! ')
  };
  const handleCopy = () => {
    var textCopied = document.getElementById("myBox");
    textCopied.select();
    //textCopied.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(textCopied.value);
    props.showAlert('Text has been successfully copied.','Success! ')
  };
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1>{props.title}</h1><br></br>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Enter your text ..."
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: props.mode === "dark" ? "white" : "black",
          }}
          onChange={handleOnChange}
          value={text}
          id="myBox"
          rows="8"
        ></textarea>
        <button
          className={`btn btn-${
            props.mode === "light" ? "dark" : "light"
          } mx-2 my-4`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "dark" : "light"
          } mx-2 my-2`}
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "dark" : "light"
          } mx-2 my-2`}
          onClick={handleExtraSpaces}
        >
          Remove extra Spaces
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "dark" : "light"
          } mx-2 my-2`}
          onClick={handleReverse}
        >
          Reverse Text
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "dark" : "light"
          } mx-2 my-2`}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className={`btn btn-${
            props.mode === "light" ? "dark" : "light"
          } mx-2 my-2`}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-7">
        <h2>Your Text Summary</h2>
        <p>
          Your entered text contains {text.split(" ").length} words and{" "}
          {text.length} characters.
        </p>
        <p>
          Your entered text took {0.008 * text.split(" ").length} Minutes to
          read.
        </p>
        {/* <h2>Preview</h2>
        <p>{text}</p> */}
      </div>
    </div>
  );
}
