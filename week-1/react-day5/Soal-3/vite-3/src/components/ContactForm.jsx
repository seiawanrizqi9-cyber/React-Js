import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data yang disubmit:", formData);
    alert(`Terima kasih, ${formData.firstName}! Data anda telah tersubmit.`);
  };

  // Style objects
  const formStyle = {
    maxWidth: "500px",
    margin: "2rem auto",
    padding: "2rem",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
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

  const inputStyle = {
    padding: "0.75rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
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

  const pStyle = {
    marginTop: "1.5rem",
    padding: "1rem",
    backgroundColor: "#f8f9fa",
    border: "1px dashed #a4a4a4ff",
    borderRadius: "5px",
    wordWrap: "break-word",
    fontSize: "0.9rem",
    color: "#666",
    lineHeight: "1.5",
  };

  return (
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
      <p style={pStyle}>
        <strong>Current Data:</strong> {JSON.stringify(formData, null, 2)}
      </p>
    </form>
  );
}

export default ContactForm;
