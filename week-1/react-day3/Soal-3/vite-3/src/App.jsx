import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div style={{display: "flex", justifyContent: "center", padding: "20px", gap: "20px"}}>
      <Card>
        <h2>Kartu Pertama</h2>
        <p>Ini adalah konten di dalam kartu pertama.</p>
        <button>Detail</button>
      </Card>

      <Card>
        <h2>Kartu Kedua</h2>
        <img src="background.png" style={{width: "200px", display: "block" }} />
        <button>Detail</button>
      </Card>
    </div>
  );
}

export default App