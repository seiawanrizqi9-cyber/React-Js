import { useEffect, useState } from "react";

export default function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Memulai pengambilan data ...")

        const timer = setTimeout(() => {
            const dummyData = {
                name: "Muhammad Rizqi Setiawan",
                email: "St.One9@example.com"
            };

            setUser(dummyData);
            setLoading(false);
            console.log("Data berhasil diambil!");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) return <p>Memuat data pengguna...</p>
    if (!user) return <p>Pengguna tidak ditemukan</p>

    return (
        <>
            <div>
                <h2>Contoh Fetch Data (Soal 5)</h2>
                <p>Nama: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
        </>
    )
}