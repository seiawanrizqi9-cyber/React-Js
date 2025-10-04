import React from "react";

// Komponen sekarang menerima props (name, imageUrl, description)
function ProfileBox({ name, imageUrl, description }) {
  // Style untuk container utama
  const profileBoxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "250px",
    height: "250px",
    backgroundColor: "#282c34",
    color: "white",
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px",
  };

  // Style untuk gambar profil
  const imageStyle = {
    width: "80px",
    height: "80px",
  };

  // Style untuk paragraf deskripsi
  const paragraphStyle = {
    fontSize: "13px",
    color: "#ccc",
  };

  return (
    <div style={profileBoxStyle}>
      <h2>Profile</h2>
      <img src={imageUrl} alt="Foto Profil" style={imageStyle} />
      <h3 style={{ color: "#61dafb", margin: "15px 0 5px 0" }}>{name}</h3>
      <p style={paragraphStyle}>{description}</p>
    </div>
  );
}

export default ProfileBox;
