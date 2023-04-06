import React, { useState } from 'react';
import classes from './Todo.module.css';

const Todo = () => {
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addItem = () => {
    if(!input) {
      alert("Enter a task!");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 50),
      input: input
    };

    setToDoList(prevList => [...prevList, item]);
    setInput("");
    console.log(toDoList);
  };

  return (
    <>
      <div>
        <label htmlFor="to-do-input">
          <span className={classes.circle} onClick={addItem}></span>
          <input
            className={classes.input}
            type="text"
            id="to-do-input"
            name="text"
            autoComplete="off"
            placeholder="Create a new to do..."
            value={input}
            onChange={handleInput}
          />
        </label>
      </div>
      <div className={classes.listHolder}>
        <div className={classes.tasksContainer}>
          <ul>
            {toDoList.map((entry) => {
              return (
                <div key={entry.id} className={classes.toDoItem}>
                  <li>{entry.input}</li>
                </div>
              )
            })}
          </ul>
        </div>
        <div className={classes.filterContainer}>
          <div>Items Left</div>
          <div>
            <button>All</button>
            <button>Active</button>
            <button>Complete</button>
          </div>
          <div>
            <button>Clear Completed</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;