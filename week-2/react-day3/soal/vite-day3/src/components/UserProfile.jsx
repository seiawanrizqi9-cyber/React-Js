import { useEffect, useState } from "react";

export default function UserProfile(props) {
  const { userId } = props;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    console.log(`fetching use data for userId: ${userId}`);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data: ", data);
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <p>Memuat data pengguna...</p>;
  if (!user) return <p>Pengguna tidak ditemukan</p>;

  return (
    <>
      <div>
        <h2>Profil Pengguna (Soal 2)</h2>
        <p>Nama: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </>
  );
}
