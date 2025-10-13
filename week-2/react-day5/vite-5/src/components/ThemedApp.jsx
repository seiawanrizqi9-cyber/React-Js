import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemedApp() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fafafa" : "#222",
        color: theme === "light" ? "#111" : "#f1f1f1",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h2>Aplikasi Tema: {theme}</h2>
      <p>Ini contoh konten yang berubah sesuai tema.</p>
    </div>
  );
}
