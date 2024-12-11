import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const App = () => {
  const [tasks, setTasks] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 

  const handleInputChange = (event) => {
    setInputValue(event.target.value); 
  };

  const handleAddTask = () => {
    if (inputValue.trim()) { 
      setTasks([...tasks, inputValue]); 
      setInputValue(''); 
    }                                                                                     
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">To-Do List</h1>
      <div className="input-group mb-3">
        <input 
          className="form-control" 
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button 
          onClick={handleAddTask} 
          className="btn btn-outline-secondary"
        >
          Add
        </button>
      </div>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input type="checkbox" className="form-check-input me-2" />
              <label className="form-check-label">{task}</label>
            </div>
            <div>
              <button className="btn btn-warning btn-sm me-2">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </div>
          </li> 
        ))}
      </ul>
    </div>
  );
};

export default App;