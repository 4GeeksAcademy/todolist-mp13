import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <input
        type="text"
        placeholder="Añade una tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <ul>
        {tasks.length === 0 ? (
          <li className="empty">No hay tareas, añadir tareas</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index}>
              {task}
              <span className="delete" onClick={() => removeTask(index)}>
                X
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
