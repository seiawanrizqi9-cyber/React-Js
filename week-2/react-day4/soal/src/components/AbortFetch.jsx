import React, { useState, useEffect } from "react";

export default function AbortFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1",
          { signal }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
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

  if (loading)
    return (
      <div style={containerStyle}>
        <p style={textStyle}>Mengambil data...</p>
      </div>
    );

  if (error)
    return (
      <div style={containerStyle}>
        <p style={{ ...textStyle, color: "red" }}>
          Error: {error.message}
        </p>
      </div>
    );

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Data dari Fetch API dengan AbortController</h2>
        <p style={textStyle}>
          <strong>Title:</strong> {data?.title}
        </p>
        <p style={textStyle}>
          <strong>Body:</strong> {data?.body}
        </p>
      </div>
    </div>
  );
}
