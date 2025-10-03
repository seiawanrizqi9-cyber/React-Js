export default function Avatar({ user }) {
  return (
    <img
      src={user.avatarUrl}
      alt={user.name}
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        marginRight: "10px",
      }}
    />
  );
}
