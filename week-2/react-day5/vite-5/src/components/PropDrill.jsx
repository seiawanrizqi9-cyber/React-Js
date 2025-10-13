import React from "react";

function Avatar({ user }) {
    return <p>Avatar untuk {user.name}</p>
}

function ThemeDisplay({ theme }) {
    return <p>Tema saat ini: {theme}</p>
}

function Profile({ user }) {
    return (
        <div>
            <Avatar user={user} />
            <ThemeDisplay theme={user.theme} />
        </div>
    )
}

function Toolbar({ user }) {
    return (
        <div>
            <Profile user={user} />
        </div>
    )
}

export default function PropDrill() {
    const user = { name: "Bagus", theme: "dark" }
    return (
        <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", margin: "1rem", textAlign: "center" }}>
            <h2>Contoh Prop Drilling (Soal 2)</h2>
            <Toolbar user={user} />
        </div>
    )
}