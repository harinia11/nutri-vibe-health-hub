
import React from 'react';
import { useCart } from '../contexts/CartContext';

const FoodCard = ({ food }) => {
  const { addItem } = useCart();
  const { name, image, benefits, price } = food;

  const handleAddToCart = () => {
    addItem(food);
    // Show notification
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.textContent = `${name} added to cart!`;
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  return (
    <div className="card food-card">
      <img src={image} alt={name} className="food-image" />
      <h3 className="food-title">{name}</h3>
      <p className="food-price">₹{price}</p>
      <p className="food-benefits">{benefits}</p>
      <button className="btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default FoodCard;
