
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";

const FoodCard = ({ food }) => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const { name, image, benefits, price } = food;

  const handleAddToCart = () => {
    addItem(food);
    toast({
      title: "Added to cart!",
      description: `${name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-primary font-medium mb-2">₹{price}</p>
        <p className="text-muted-foreground text-sm mb-4">{benefits}</p>
        <Button 
          className="w-full" 
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
