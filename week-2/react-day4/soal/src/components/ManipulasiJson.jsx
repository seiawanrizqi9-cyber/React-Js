import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserManipulation() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const processed = response.data
          .map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            city: user.address.city,
          }))
          .filter((user) => user.city === "Gwenborough");

        setUsers(processed);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "45vh",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "25px 0px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    width: "100%",
  };

  const titleStyle = {
    color: "#2b2b2b",
    marginBottom: "20px",
    textAlign: "center",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const itemStyle = {
    padding: "0px 40px",
    borderRadius: "8px",
    textAlign: "left",
    color: "black",
  };

  if (loading)
    return (
      <div style={containerStyle}>
        <p>Memuat data pengguna...</p>
      </div>
    );

  if (error)
    return (
      <div style={containerStyle}>
        <p style={{ color: "red" }}>Terjadi error: {error.message}</p>
      </div>
    );

  if (users.length === 0)
    return (
      <div style={containerStyle}>
        <p>Tidak ada data pengguna</p>
      </div>
    );

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Daftar Pengguna (Soal 5)</h2>
        <ul style={listStyle}>
          {users.map((user) => (
            <li key={user.id} style={itemStyle}>
              <strong>Name: {user.name}</strong> <br />
              Email: {user.email} <br />
              City: {user.city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
