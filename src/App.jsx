import { useState } from "react";

  export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div className="app-container">
      <div className="todo-box">
        <h1>✨ To-Do List ✨</h1>

        <div className="input-area">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="task-list">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`task-item ${task.completed ? "completed" : ""}`}
            >
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                />
                <span>{task.text}</span>
              </label>
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}