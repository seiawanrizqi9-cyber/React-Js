import React, { useState } from "react";
import InputComponent from "./InputComponent";
import DisplayComponent from "./DisplayComponent";

export default function ShareState() {
  const [text, setText] = useState("");

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", margin: "1rem", textAlign: "center" }}>
      <h2>Berbagi State Antar Komponen (Lifting State Up)</h2>
      <InputComponent text={text} onTextChange={setText} />
      <DisplayComponent text={text} />
    </div>
  );
}
