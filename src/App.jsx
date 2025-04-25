
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MealPlans from './pages/MealPlans';
import Shopping from './pages/Shopping';
import NutritionTips from './pages/NutritionTips';
import DietTracking from './pages/DietTracking';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/meal-plans" element={<MealPlans />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/nutrition-tips" element={<NutritionTips />} />
            <Route path="/diet-tracking" element={<DietTracking />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          {/* Toast container for notifications */}
          <div id="toast-container" />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
