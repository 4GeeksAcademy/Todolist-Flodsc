import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]); // Estado para las tareas
  const [inputValue, setInputValue] = useState(""); // Estado para el input

  const addTask = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue(""); // Limpiar el input
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h1>todos</h1>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={addTask}
      />
      <ul>
        {tasks.length === 0 ? (
          <li>No hay tareas, añadir tareas</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index} onMouseEnter={() => console.log('hover')}>
              {task}
              <button onClick={() => deleteTask(index)}>❌</button>
            </li>
          ))
        )}
      </ul>
      <div>{tasks.length} item left</div>
    </div>
  );
}

export default App;
