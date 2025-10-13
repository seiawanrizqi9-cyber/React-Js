import React from "react";

export default function InputComponent({ text, onTextChange }) {
  return (
    <div>
      <h3>Komponen Input</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Ketik sesuatu..."
      />
    </div>
  );
}
