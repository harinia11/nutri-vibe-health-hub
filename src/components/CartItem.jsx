
import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { updateItemQuantity, removeItem } = useCart();
  const { name, image, price, quantity } = item;
  
  const handleIncrease = () => {
    updateItemQuantity(name, quantity + 1);
  };
  
  const handleDecrease = () => {
    updateItemQuantity(name, quantity - 1);
  };
  
  const handleRemove = () => {
    removeItem(name);
  };

  const itemPrice = parseFloat(price.split('/')[0]) * quantity;

  return (
    <div className="cart-item">
      <img src={image} alt={name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{name}</h3>
        <p className="cart-item-price">₹{itemPrice.toFixed(2)}</p>
        <div className="cart-item-quantity">
          <button className="btn-sm" onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button className="btn-sm" onClick={handleIncrease}>+</button>
          <button className="btn-sm btn-accent" onClick={handleRemove} style={{ marginLeft: '10px' }}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
