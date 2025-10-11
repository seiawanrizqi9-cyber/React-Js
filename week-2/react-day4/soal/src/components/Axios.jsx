import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/1`
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    FetchData();
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "white",
    padding: "25px 30px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    textAlign: "center",
  };

  const titleStyle = {
    color: "#2b2b2b",
    marginBottom: "10px",
  };

  const textStyle = {
    color: "black",
    fontSize: "16px",
    lineHeight: "1.5",
  };

  // --- Conditional Rendering ---
  if (loading)
    return (
      <div style={containerStyle}>
        <p style={textStyle}>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div style={containerStyle}>
        <p style={{ ...textStyle, color: "red" }}>
          Terjadi error: {error.message}
        </p>
      </div>
    );

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Data dengan Axios (Soal 2&3)</h2>
        <p style={textStyle}>
          <strong>ID:</strong> {data.id}
        </p>
        <p style={textStyle}>
          <strong>Title:</strong> {data.title}
        </p>
        <p style={textStyle}>
          <strong>Body:</strong> {data.body}
        </p>
      </div>
    </div>
  );
}
