import React, { useState } from "react";

function EventHandler() {
  const [error, setError] = useState("");

  const handleClick = () => {
    alert("Tombol diklik!");
  };

  const handleMouseEnter = () => {
    setError("Mouse masuk ke area tombol!");
  };

  const handleMouseLeave = () => {
    setError("Mouse keluar dari area tombol!");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Event Handling Sederhana (Soal 1) </h2>
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ padding: "10px 20px", fontSize: "1em", cursor: "pointer" }}
      >
        Klik disini
      </button>
      <p>{error}</p>
    </div>
  );
}

export default EventHandler;
