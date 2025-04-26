
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CartItem = ({ item }) => {
  const { updateItemQuantity, removeItem } = useCart();
  const { name, image, price, quantity } = item;
  
  const handleIncrease = () => updateItemQuantity(name, quantity + 1);
  const handleDecrease = () => updateItemQuantity(name, quantity - 1);
  const handleRemove = () => removeItem(name);
  const itemPrice = parseFloat(price.split('/')[0]) * quantity;

  return (
    <Card className="mb-4">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="w-24 h-24 flex-shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-md" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-medium truncate">{name}</h3>
            <p className="font-semibold whitespace-nowrap">₹{itemPrice.toFixed(2)}</p>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3">Unit price: ₹{price}</p>
          
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" onClick={handleDecrease} className="h-8 w-8 p-0">-</Button>
              <Badge variant="secondary">{quantity}</Badge>
              <Button size="sm" variant="outline" onClick={handleIncrease} className="h-8 w-8 p-0">+</Button>
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
      </CardContent>
    </Card>
  );
};

export default CartItem;
