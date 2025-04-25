
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Calculate total whenever cart items change
  useEffect(() => {
    const calculateTotal = () => {
      const newTotal = items.reduce((sum, item) => {
        const price = parseFloat(item.price.split('/')[0]);
        return sum + price * item.quantity;
      }, 0);
      setTotal(newTotal);
    };

    calculateTotal();
  }, [items]);

  const addItem = (item) => {
    setItems((prevItems) => {
      // Check if item already exists in cart
      const existingItem = prevItems.find((i) => i.name === item.name);
      
      if (existingItem) {
        // Increase quantity of existing item
        return prevItems.map((i) => 
          i.name === item.name 
            ? { ...i, quantity: i.quantity + 1 } 
            : i
        );
      } else {
        // Add new item to cart
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItem = (itemName) => {
    setItems((prevItems) => prevItems.filter((item) => item.name !== itemName));
  };

  const updateItemQuantity = (itemName, quantity) => {
    if (quantity <= 0) {
      removeItem(itemName);
      return;
    }

    setItems((prevItems) => 
      prevItems.map((item) => 
        item.name === itemName ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const value = {
    items,
    total,
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
