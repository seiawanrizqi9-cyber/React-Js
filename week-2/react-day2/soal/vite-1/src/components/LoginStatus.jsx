import React, { useState } from "react";

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

export default function LoginStatus() {
  const [isLogin, setIsLogin] = useState(false);

  let message = "";
  let buttonText = "";

  if (isLogin) {
    message = "User telah login";
    buttonText = "Logout";
  } else {
    message = "User belum login";
    buttonText = "Login";
  }

  const handleClick = () => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>Soal 1: Conditional Rendering (if-else)</h2>
      <button onClick={handleClick}>{buttonText}</button>
      <p>{message}</p>
    </div>
  );
}
