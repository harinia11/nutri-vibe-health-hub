
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { items, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container page-container">
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Your Cart</h1>
        <div style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Your cart is empty</p>
          <Link to="/shopping" className="btn">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container page-container">
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Your Cart</h1>
      
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 600px' }}>
          {items.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
        
        <div style={{ flex: '1 1 300px' }}>
          <div className="cart-summary">
            <h2 style={{ marginBottom: '20px' }}>Summary</h2>
            
            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Items ({items.length}):</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Shipping:</span>
                <span>₹50.00</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Tax:</span>
                <span>₹{(total * 0.05).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="cart-total">
              <span>Total:</span>
              <span>₹{(total + 50 + (total * 0.05)).toFixed(2)}</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link to="/payment" className="btn">Proceed to Payment</Link>
              <button className="btn btn-accent" onClick={clearCart}>Clear Cart</button>
              <Link to="/shopping" className="btn btn-secondary">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
