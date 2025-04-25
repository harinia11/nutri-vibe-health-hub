
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { total, clearCart } = useCart();
  
  const finalTotal = (total + 50 + (total * 0.05)).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (paymentMethod === 'card') {
      if (!cardNumber || !cardName || !expiryDate || !cvv) {
        return setError('Please fill in all card details');
      }
    } else if (paymentMethod === 'upi') {
      if (!upiId) {
        return setError('Please enter UPI ID');
      }
    }
    
    // Simulate payment processing
    setLoading(true);
    setTimeout(() => {
      clearCart();
      setLoading(false);
      
      // Show success message
      const notification = document.createElement('div');
      notification.className = 'notification success';
      notification.textContent = 'Payment successful!';
      document.body.appendChild(notification);
      
      // Navigate to home after 2 seconds
      setTimeout(() => {
        notification.remove();
        navigate('/');
      }, 2000);
    }, 2000);
  };

  return (
    <div className="container page-container">
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Payment</h1>
      
      <div className="payment-container">
        {error && (
          <div style={{ 
            padding: '10px', 
            backgroundColor: '#ffebee', 
            color: '#c62828',
            borderRadius: '4px',
            marginBottom: '15px'
          }}>
            {error}
          </div>
        )}
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Order Summary</h3>
          <div style={{ 
            padding: '15px', 
            backgroundColor: '#f9f9f9', 
            borderRadius: '4px',
            marginTop: '10px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Total Amount:</span>
              <span><strong>₹{finalTotal}</strong></span>
            </div>
          </div>
        </div>
        
        <h3>Payment Method</h3>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ 
            display: 'flex', 
            gap: '15px', 
            marginTop: '10px',
            marginBottom: '20px'
          }}>
            <label style={{ 
              flex: '1',
              padding: '15px',
              border: `2px solid ${paymentMethod === 'card' ? '#56ab2f' : '#ddd'}`,
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="card" 
                checked={paymentMethod === 'card'} 
                onChange={() => setPaymentMethod('card')}
                style={{ marginRight: '10px' }}
              />
              Credit/Debit Card
            </label>
            
            <label style={{ 
              flex: '1',
              padding: '15px',
              border: `2px solid ${paymentMethod === 'upi' ? '#56ab2f' : '#ddd'}`,
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              <input 
                type="radio" 
                name="paymentMethod" 
                value="upi" 
                checked={paymentMethod === 'upi'} 
                onChange={() => setPaymentMethod('upi')}
                style={{ marginRight: '10px' }}
              />
              UPI Payment
            </label>
          </div>
          
          <form onSubmit={handleSubmit}>
            {paymentMethod === 'card' && (
              <div>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    id="cardNumber"
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="cardName">Name on Card</label>
                  <input
                    id="cardName"
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="John Doe"
                  />
                </div>
                
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                      id="expiryDate"
                      type="text"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                  </div>
                  
                  <div className="form-group" style={{ flex: 1 }}>
                    <label htmlFor="cvv">CVV</label>
                    <input
                      id="cvv"
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="123"
                      maxLength="3"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {paymentMethod === 'upi' && (
              <div className="form-group">
                <label htmlFor="upiId">UPI ID</label>
                <input
                  id="upiId"
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="yourname@upi"
                />
              </div>
            )}
            
            <button 
              type="submit" 
              className="btn" 
              style={{ width: '100%', marginTop: '20px' }}
              disabled={loading}
            >
              {loading ? 'Processing...' : `Pay ₹${finalTotal}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
