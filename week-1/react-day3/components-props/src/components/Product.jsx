import React from "react";

function product(props) {
    return (
        <div>
            <h2>{props.productName}</h2>
            <p>harga: ${props.price}</p>
            <p>Stok: {props.stock}</p>
            {props.isAvailable && <p style={{ color: "green"}}>Produk tersedia</p>}
        </div>
    );
}

export default product