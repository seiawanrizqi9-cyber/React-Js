import React from "react";
import ProfileBox from "./components/ProfileBox";
import AlertBox from "./components/AlertBox"; 
import "./components/Profile.css";
import "./components/Button.css"; 
import "./App.css";

function App() {
  return (
    <div className="App">
      <ProfileBox
        name="Rizqi Setiawan"
        imageUrl="man.png"
        description="Saya adalah Programmer"
      />

      <div className="profile-2">
        <h2>Profile kedua</h2>
        <img src="man.png" />
        <h3>Rizqi Setiawan</h3>
        <p>Saya adalah Developer</p>
      </div>

      <button
        className="button"
        onClick={() => alert("Sudah Diklik")}
        type="button"
      >
        Klik Disini
      </button>
      <button
        className="button-2"
        onClick={() => alert("Tombol ke-2 Diklik")}
        type="button"
      >
        tombol kedua
      </button>

      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <AlertBox type="success" message="Berhasil disimpan!" />
        <AlertBox type="warning" message="Hati-hati, ada peringatan!" />
        <AlertBox type="error" message="Terjadi kesalahan!" />
      </div>
    </div>
  );
}

export default App;
