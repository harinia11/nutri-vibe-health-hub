
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const { items, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Your Cart</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-muted-foreground">Your cart is empty</p>
            <Button asChild>
              <Link to="/shopping">Start Shopping</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
        
        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Items ({items.length}):</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>₹50.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>₹{(total * 0.05).toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>₹{(total + 50 + (total * 0.05)).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Button className="w-full" asChild>
                  <Link to="/payment">Proceed to Payment</Link>
                </Button>
                <Button variant="destructive" className="w-full" onClick={clearCart}>
                  Clear Cart
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/shopping">Continue Shopping</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
