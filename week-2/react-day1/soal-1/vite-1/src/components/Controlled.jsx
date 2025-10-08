import React, { useState } from "react";

function FormInput() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert("Nama kamu: " + name);
    setName(""); 
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <h2>Controlled Component (Soal 3)</h2>

      <label>
        Nama:{" "}
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Ketik nama kamu..."
        />
      </label>

      <p>Anda mengetik: {name}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormInput;
