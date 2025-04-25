
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../hooks/use-toast';

const FoodCard = ({ food }) => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const { name, image, benefits, price } = food;

  const handleAddToCart = () => {
    addItem(food);
    
    // Show notification using shadcn toast
    toast({
      title: "Added to cart!",
      description: `${name} has been added to your cart.`,
      variant: "success",
      duration: 3000,
    });
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
