import React from "react";

function TodoItem({ task, toggleTask, deleteTask }) {
  return (
    <li
      style={{
        ...styles.listItem,
        textDecoration: task.completed ? "line-through" : "none",
        backgroundColor: task.completed ? "#d4edda" : "#f8f9fa",
      }}
    >
      <span
        onClick={() => toggleTask(task.id)}
        style={{ cursor: "pointer" }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} style={styles.deleteBtn}>
        🗑️
      </button>
    </li>
  );
}

const styles = {
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 10px",
    borderRadius: "6px",
    marginBottom: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  },
  deleteBtn: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default TodoItem;
