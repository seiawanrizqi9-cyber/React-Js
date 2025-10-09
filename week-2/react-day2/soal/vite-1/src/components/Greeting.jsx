import React, { useState } from "react";

export default function LoginStatus() {
  const [isLogin, setIsLogin] = useState(false);

  return <div>
    <h2>Conditional Rendering ternary operator (Soal-2)</h2>
    <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
    </button>
    <h3>{isLogin ? "Selamat datang!" : "Silahkan login dulu" }</h3>
    {isLogin && <p>Anda berhasil login!</p> }
  </div>;
}
