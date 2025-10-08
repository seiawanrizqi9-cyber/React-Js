import React, { useState } from "react";

function SyntheticEvent() {
  const [value, setValue] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    console.log("Link diklik, tapi navigasi dicegah!");
    alert("Anda mengklik link, tapi dicegah!");
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>SyntheticEvent Objects (Soal 2) </h2>

      <a href="https://www.google.com" onClick={handleClick}>
        Klik link ke Google.com
      </a>

      <br />
      <br />

      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Ketik sesuatu..."
      />

      <p>Anda mengetik: {value}</p>
    </div>
  );
}

export default SyntheticEvent;
