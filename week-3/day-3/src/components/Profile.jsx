export default function Profile() {
  const user = {
    name: "Bagus Muhammad",
    section: "Frontend Developer",
    umur: 27,
    joined: "2023-05-15"
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Profile</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <p><strong>Nama:</strong> {user.name}</p>
        <p><strong>Peran:</strong> {user.section}</p>
        <p><strong>Umur:</strong> {user.umur}</p>
        <p><strong>Bergabung:</strong> {user.joined}</p>
      </div>
    </div>
  );
}