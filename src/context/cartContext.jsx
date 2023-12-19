'use client'

import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
   
    const existingProduct = cart.find((product) => product.id === item.id);

    if (existingProduct) {

      const updatedCart = cart.map((product) =>
        product.id === item.id ? { ...product, qtd: product.qtd + item.qtd } : product
      );
      setCart(updatedCart);
    } else {
 
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((product) => product.id !== itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};