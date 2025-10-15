import React from 'react';
import { useCart } from '../hooks/useCart';

const CartDisplay = () => {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="font-bold mb-2">Keranjang</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Belum ada item</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            {cart.map(item => (
              <div key={item.id} className="p-2 bg-gray-100 rounded flex justify-between">
                <span>{item.name} x{item.quantity}</span>
                <button onClick={() => removeItem(item.id)} className="px-1 bg-red-500 text-white rounded">❌</button>
              </div>
            ))}
          </div>
          <p className="font-semibold mb-2">Total: Rp {totalPrice.toLocaleString('id-ID')}</p>
          <button onClick={clearCart} className="px-3 py-1 bg-red-500 text-white rounded">Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default CartDisplay;
