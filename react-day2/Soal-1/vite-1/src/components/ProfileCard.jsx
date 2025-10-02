import React from "react";

function ProfileCard({ name, photo, bio, skills }) {
  const skillsListStyle = {
    listStyleType: "none",
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    marginTop: "15px",
  };

  const skillStyle = {
    backgroundColor: "#2873ffff",
    padding: "6px 12px",
    borderRadius: "16px",
    fontSize: "0.9em",
    color: "#ffffffff",
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        maxWidth: "300px",
        textAlign: "center",
        margin: "20px auto",
        boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* Foto */}
      <img
        src={photo}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "unset",
          marginBottom: "12px",
        }}
      />

      {/* Nama */}
      <h2>{name}</h2>

      {/* Bio */}
      <p style={{ fontStyle: "italic", color: "#6d6d6dff" }}>{bio}</p>

      {/* Daftar Keahlian */}
      <ul style={skillsListStyle}>
        {skills.map((skill, index) => (
          <li key={index} style={skillStyle}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;
