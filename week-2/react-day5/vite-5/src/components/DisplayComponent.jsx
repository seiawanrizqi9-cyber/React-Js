import React from "react";

export default function DisplayComponent({ text }) {
  return (
    <div>
      <h3>Komponen Display</h3>
      <p>Teks yang diketik: {text}</p>
    </div>
  );
}
