import React, { useState } from "react";
import './App.css';

function App() {
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [todos, setTodos] = useState([]);

  const inputChanged = (e) => {
    if (e.target.name === 'description') {
      setDesc(e.target.value);
    } else if (e.target.name === 'date') {
      setDate(e.target.value);
    }
  }

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {description: desc, date: date};
    setTodos([...todos, newTodo]);
    setDesc('');
    setDate('');
  }
  
  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <label>Description: </label>
        <input type = "text" name="description" value={desc} onChange={inputChanged} />
        <label> Date: </label>
        <input type="date" name="date" value={date} onChange={inputChanged} />
        <input type = "submit" value="Add" />
      </form>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo, index) => 
              <tr key = {index}>
                <td>{todo.description}</td>
                <td>{todo.date}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;