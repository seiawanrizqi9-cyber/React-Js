import React from "react";

export default function Product() {
    const ProductList = [
    {id: 1, name: 'Gas', price: 20000},
    {id: 2, name: 'Minyak Goreng', price: 18000},
    {id: 3, name: 'Minuman', price: 8000},
    {id: 4, name: 'Pulsa', price: 35000},
]

return (
    <div>
        <h2>Product List(Soal-4)</h2>
        <ul style={{ listStyle: "none"}}>
            {ProductList.map((ProductList) => (
                <li>
                    {ProductList.name} - ${ProductList.price}
                </li>
            ))}
        </ul>
    </div>
)}