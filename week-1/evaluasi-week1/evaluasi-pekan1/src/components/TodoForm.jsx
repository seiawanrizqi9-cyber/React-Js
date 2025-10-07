import React from "react";

function TodoForm({ input, setInput, addTask }) {
  return (
    <div style={styles.inputContainer}>
      <input
        type="text"
        placeholder="Tambah kegiatan..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={styles.input}
      />
      <button onClick={addTask} style={styles.addBtn}>
        Add List
      </button>
    </div>
  );
}

const styles = {
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "8px 10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
  addBtn: {
    padding: "8px 14px",
    backgroundColor: "#007bff",
    border: "none",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default TodoForm;
