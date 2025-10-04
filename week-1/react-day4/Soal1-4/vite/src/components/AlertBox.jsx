import React from "react";

function AlertBox({ type, message }) {
  // Styling dinamis berdasarkan props type
  const styles = {
    base: {
      padding: "12px 16px",
      borderRadius: "8px",
      margin: "10px 0",
      fontWeight: "bold",
      textAlign: "center",
    },
    success: {
      backgroundColor: "#d4edda",
      color: "#155724",
      border: "1px solid #c3e6cb",
    },
    warning: {
      backgroundColor: "#fff3cd",
      color: "#856404",
      border: "1px solid #ffeeba",
    },
    error: {
      backgroundColor: "#f8d7da",
      color: "#721c24",
      border: "1px solid #f5c6cb",
    },
  };

  // pilih style sesuai type
  const alertStyle = { ...styles.base, ...styles[type] };

  return <div style={alertStyle}>{message}</div>;
}

export default AlertBox;
