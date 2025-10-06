import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Belajar React Hooks", completed: false },
    { id: 2, text: "Membangun Aplikasi Todo", completed: false },
  ]);
  const [newTodoText, setNewTodoText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodoText.trim() === "") return;

    const newTodo = {
      id: Date.now(), // Menggunakan timestamp untuk ID yang lebih unik
      text: newTodoText,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]); // Tambahkan todo baru
    setNewTodoText("");
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); // Hapus todo
  };

  // Style objects
  const containerStyle = {
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#313131ff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  };

  const h2Style = {
    textAlign: "center",
    color: "#ffffffff",
  };

  const formStyle = {
    display: "flex",
    marginBottom: "1.5rem",
  };

  const inputStyle = {
    flex: "1",
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "4px 0 0 4px",
  };

  const addButtonStyle = {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    cursor: "pointer",
    borderRadius: "0 4px 4px 0",
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    backgroundColor: "#787878ff",
    border: "1px solid #ffffffff",
    borderRadius: "4px",
    marginBottom: "0.5rem",
  };

  const todoTextStyle = {
    cursor: "pointer",
    color: "#000000ff",
    flex: 1,
  };

  const completedTodoTextStyle = {
    ...todoTextStyle,
    textDecoration: "line-through",
    color: "#000000ff",
  };

  const deleteButtonStyle = {
    padding: "0.4rem 0.8rem",
    border: "none",
    backgroundColor: "#dc3545",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
    marginLeft: "1rem",
  };

  return (
    <div style={containerStyle}>
      <h2 style={h2Style}>Daftar Tugas</h2>
      <form onSubmit={addTodo} style={formStyle}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Tambahkan tugas baru..."
          style={inputStyle}
        />
        <button type="submit" style={addButtonStyle}>
          Tambah
        </button>
      </form>
      <ul style={listStyle}>
        {todos.map((todo) => (
          <li key={todo.id} style={listItemStyle}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={todo.completed ? completedTodoTextStyle : todoTextStyle}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={deleteButtonStyle}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
