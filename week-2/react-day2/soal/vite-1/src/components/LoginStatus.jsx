import React, { useState } from "react";

export default function LoginStatus() {
    const [isLogin, setIsLogin] = useState(false);


    let message = "";
    let buttonText = "";

    if (isLogin) {
        message = "User telah login";
        buttonText = "Logout";
    } else {
        message = "User belum login";
        buttonText = "Login";
    }

    const handleClick = () => {
        if (isLogin) {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    };

    return (
        <div>
           <h2>Conditional Rendering if-else (Soal-1)</h2>
           <button onClick={handleClick}>{buttonText}</button>
           <p>{message}</p>
        </div>
    );
}

