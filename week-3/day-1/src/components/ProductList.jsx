import React from 'react';
import { useCart } from '../hooks/useCart';

const ProductList = () => {
  const { addItem } = useCart();
  const products = [
    { id: 1, name: 'Laptop', price: 15000000 },
    { id: 2, name: 'Mouse', price: 250000 },
    { id: 3, name: 'Keyboard', price: 850000 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(p => (
        <div key={p.id} className="p-4 bg-white rounded shadow-md">
          <h3 className="font-bold mb-2">{p.name}</h3>
          <p className="mb-2">Rp {p.price.toLocaleString('id-ID')}</p>
          <button
            onClick={() => addItem(p)}
            className="px-2 py-1 bg-green-500 text-white rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
