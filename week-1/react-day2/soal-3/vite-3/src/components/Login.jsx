import { useState } from "react";

export default function Login() {
  // State untuk data form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // State untuk status UI
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError(""); // Reset pesan error setiap kali submit

    // password sederhana: 1234
    if (password === "Admin#1234") {
      setIsLoggedIn(true);
    } else {
      // Menampilkan pesan error di dalam komponen, bukan alert
      setError("Username atau Password salah!");
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  }

  // --- Styling ---
  const containerStyle = {
    fontFamily: "sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "2rem",
    margin: "2rem auto",
    maxWidth: "400px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem", // Memberi jarak antar elemen form
  };

  const inputStyle = {
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "0.75rem",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#2873ff",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
  };
  // --- End of Styling ---

  return (
    <div style={containerStyle}>
      {/* CONDITIONAL RENDERING pakai TERNARY ? : */}
      {isLoggedIn ? (
        <div>
          <h2>Selamat datang, {username} 🎉</h2>
          <p>Kamu berhasil login.</p>
          <button
            onClick={handleLogout}
            style={{ ...buttonStyle, backgroundColor: "#dc3545" }}
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={formStyle}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
          {/* CONDITIONAL RENDERING pakai LOGICAL AND && untuk pesan error */}
          {error && <p style={{ color: "red", margin: 0 }}>{error}</p>}
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      )}
    </div>
  );
}
