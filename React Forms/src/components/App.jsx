import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function handleInput(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        value={name}
        onChange={handleInput}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
