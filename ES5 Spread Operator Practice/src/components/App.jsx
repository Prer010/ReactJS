import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setTask(value);
  }

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, task];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={task} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
