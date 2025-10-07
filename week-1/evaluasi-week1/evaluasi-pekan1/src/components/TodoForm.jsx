import React from "react";

function TodoForm({ input, setInput, addTask }) {
  return (
    <div style={styles.formContainer}>
      <input
        type="text"
        placeholder="Tambahkan kegiatan..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={styles.input}
      />
      <button onClick={addTask} style={styles.addBtn}>
        Tambah
      </button>
    </div>
  );
}

const styles = {
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  addBtn: {
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },
};

export default TodoForm;
