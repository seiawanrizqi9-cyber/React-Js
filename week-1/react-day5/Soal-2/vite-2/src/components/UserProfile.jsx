import React, { useState } from "react";

function UserProfile() {
  const [name, setName] = useState("Bima Raka");
  const [age, setAge] = useState(30);
  const [isEditing, setIsEditing] = useState(false);

  // Style objects for better organization and reusability
  const containerStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "400px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    width: "calc(100% - 20px)",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  };

  const buttonStyle = {
    padding: "10px 20px",
    border: "none",
    backgroundColor: "#03c557f6",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const infoStyle = {
    textAlign: "left",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      <h2>Profil Pengguna</h2>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={inputStyle}
          />
          <button onClick={() => setIsEditing(false)} style={buttonStyle}>
            Simpan
          </button>
        </div>
      ) : (
        <div style={infoStyle}>
          <p>
            <strong>Nama:</strong> {name}
          </p>
          <p>
            <strong>Umur:</strong> {age}
          </p>
          <button onClick={() => setIsEditing(true)} style={buttonStyle}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
export default UserProfile;
