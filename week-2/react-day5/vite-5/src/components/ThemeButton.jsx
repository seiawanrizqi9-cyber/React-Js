import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: theme === "light" ? "#333" : "#ddd",
        color: theme === "light" ? "#fff" : "#000",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Ganti ke {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}
