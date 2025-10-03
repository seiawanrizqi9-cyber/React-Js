import Avatar from "./Avatar";

export default function UserInfo({ user }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Avatar user={user} />
      <span style={{ fontWeight: "bold" }}>{user.name}</span>
    </div>
  );
}
