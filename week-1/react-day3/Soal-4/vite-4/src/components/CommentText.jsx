import UserInfo from "./UserInfo";

// Komponen kecil untuk teks komentar (langsung di sini, biar file cuma 3)
function CommentText({ text }) {
  return <p style={{ marginTop: "5px" }}>{text}</p>;
}

export default function Comment() {
  const user = {
    name: "Rizqi Setiawan",
    avatarUrl: "man.png",
  };

  const text = "React dengan Vite itu cepat, ringan, dan enak dipelajari 🚀";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        maxWidth: "350px",
        margin: "20px auto",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <UserInfo user={user} />
      <CommentText text={text} />
    </div>
  );
}
