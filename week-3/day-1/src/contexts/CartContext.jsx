import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = product => {
    setCart(prev => {
      const exist = prev.find(item => item.id === product.id);
      if (exist) return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = id => setCart(prev => prev.filter(item => item.id !== id));
  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
