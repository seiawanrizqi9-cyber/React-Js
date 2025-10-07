import React from "react";

function TodoFilter({ filter, setFilter }) {
  const filters = ["All", "Active", "Complete"];

  return (
    <div style={styles.filterContainer}>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          style={{
            ...styles.filterBtn,
            backgroundColor: filter === f ? "#007bff" : "#e0e0e0",
            color: filter === f ? "white" : "#333",
          }}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

const styles = {
  filterContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginBottom: "15px",
  },
  filterBtn: {
    padding: "6px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.3s",
  },
};

export default TodoFilter;
