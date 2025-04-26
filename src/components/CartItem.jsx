
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";

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
    <div className="flex items-start gap-4 border rounded-md p-4 mb-4">
      <img src={image} alt={name} className="w-24 h-24 object-cover rounded-md" />
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="font-semibold">₹{itemPrice.toFixed(2)}</p>
        </div>
        <p className="text-sm text-muted-foreground mb-3">Unit price: ₹{price}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={handleDecrease}>-</Button>
            <Badge variant="secondary">{quantity}</Badge>
            <Button size="sm" variant="outline" onClick={handleIncrease}>+</Button>
          </div>
          <Button 
            size="sm" 
            variant="destructive" 
            onClick={handleRemove}
            className="flex items-center gap-1"
          >
            <Trash2 size={16} />
            <span>Remove</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
