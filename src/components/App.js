
import React from "react";
import './../styles/App.css';

const App = () => {

  function greetings(e) {
    e.preventDefault();

    let greet = e.target.value;

    if(greet != "") {
      document.getElementById("greetings").innerHTML = `Hello ${greet}!`;
    }
    else {
      document.getElementById("greetings").innerHTML = "";
    }
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <form>
          <label for="name">Enter your name:</label>
          <br />
          <input id="name" type="text" onInput={greetings} />
          <p id="greetings"></p>
        </form>
    </div>
  );
}

export default App
