import React, { useState } from "react";
import "./App.css";
import "./index.css";
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (input.trim() === "") return;
    const newTask = { id: Date.now(), text: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Complete") return task.completed;
    return true;
  });

  return (
    <div className="app">
      <div className="todo-container">
        <h2 className="title">📝 To-Do List</h2>

        <TodoForm input={input} setInput={setInput} addTask={addTask} />
        <TodoFilter filter={filter} setFilter={setFilter} />
        <TodoList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />

        {filteredTasks.length === 0 && (
          <p className="empty-text">Belum ada kegiatan</p>
        )}
      </div>
    </div>
  );
}

export default App;
