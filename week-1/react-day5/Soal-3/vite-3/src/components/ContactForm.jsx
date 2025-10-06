import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data yang disubmit:", formData);
    alert(`Terima kasih, ${formData.firstName}! Data anda telah tersubmit.`);
  };

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    maxWidth: "900px",
    margin: "10px auto",
    fontFamily: "Arial, sans-serif",
  };

  const formStyle = {
    flex: 1,
    padding: "20 px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    background: "#fff",
  };

  const h2Style = {
    textAlign: "center",
    color: "#333",
    marginBottom: "1.5rem",
  };

  const divStyle = {
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
  };

  const labelStyle = {
    marginBottom: "0.5rem",
    fontWeight: "bold",
    color: "#555",
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "1rem",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
    boxSizing: "border-box", // Pastikan padding tidak menambah lebar total
  };

  const resultStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    backgroundColor: "#f8f9fa",
    border: "1px dashed #a4a4a4ff",
    borderRadius: "5px",
    wordWrap: "break-word",
    fontSize: "0.9rem",
    color: "#666",
    lineHeight: "1.5",
  };

  const resultItemStyle = {
    display: "flex",
    marginBottom: "0.5rem",
  };

  const resultLabelStyle = {
    fontWeight: "bold",
    minWidth: "120px", // Memberi lebar minimum agar sejajar
    marginRight: "1rem",
  };

  const resultValueStyle = {
    wordBreak: "break-all", // Memastikan teks panjang tidak overflow
  };

  return (
    <div style={wrapperStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={h2Style}>Formulir Kontak</h2>
        <div style={divStyle}>
          <label style={labelStyle}>Nama Depan:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={divStyle}>
          <label style={labelStyle}>Nama Belakang:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={divStyle}>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
      <div style={resultStyle}>
        <strong>Current Data:</strong>
        <div style={resultItemStyle}>
          <span style={resultLabelStyle}>Nama Depan:</span>
          <span style={resultValueStyle}>{formData.firstName}</span>
        </div>
        <div style={resultItemStyle}>
          <span style={resultLabelStyle}>Nama Belakang:</span>
          <span style={resultValueStyle}>{formData.lastName}</span>
        </div>
        <div style={resultItemStyle}>
          <span style={resultLabelStyle}>Email:</span>
          <span style={resultValueStyle}>{formData.email}</span>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
