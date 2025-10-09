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

export default function Greeting() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>Soal 2: Conditional Rendering (Ternary)</h2>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
      <h3>{isLogin ? "Selamat datang!" : "Silahkan login dulu"}</h3>
      {isLogin && <p>Anda berhasil login!</p>}
    </div>
  );
}
