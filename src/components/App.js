import { useState } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {

  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  
  return (
    <div>
      <p>Enter your name:</p>
      <input value={text} onChange={handleChange} />
      <p>Hello {text}!</p>
    </div>
  );
}

export default App
