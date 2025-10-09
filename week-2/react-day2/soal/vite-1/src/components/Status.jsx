import React from "react";

// Style untuk komponen ini
const cardStyle = {
  backgroundColor: "#757575",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "20px",
  width: "90%",
  maxWidth: "600px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const titleStyle = {
  color: "#333",
  paddingBottom: "10px",
  marginBottom: "20px",
};

export default function Status({ status }) {
  let content;

  switch (status) {
    case "loading":
      content = <p>Memuat data...</p>;
      break;
    case "success":
      content = <p>Data berhasil dimuat</p>;
      break;
    case "error":
      content = <p>Data Error</p>;
      break;
    default:
      content = <p>Status tidak diketahui</p>;
      break;
  }
  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>Soal 3: Switch Statement</h2>
      <h3>{content}</h3>
    </div>
  );
}
