import React, { useEffect } from "react";

export default function Message() {
    useEffect(() => {
        console.log("Komponen ini telah dimuat.");
    });

    return (
        <div>
            <h2>Contoh UseEffect (Soal 1)</h2>
            <p>Lihat di console browser anda!</p>
        </div>
    )
}