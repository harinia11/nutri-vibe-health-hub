
import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const location = useLocation();
  
  const handleLogout = async () => {
    await logout();
    return <Navigate to="/login" replace />;
  };
  
  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🥑 NutriVibe
        </Link>
        
        <div className="nav-links">
          {currentUser ? (
            <>
              <Link to="/" className={isActive('/')}>Home</Link>
              <Link to="/meal-plans" className={isActive('/meal-plans')}>Meal Plans</Link>
              <Link to="/shopping" className={isActive('/shopping')}>Shopping</Link>
              <Link to="/nutrition-tips" className={isActive('/nutrition-tips')}>Nutrition Tips</Link>
              <Link to="/diet-tracking" className={isActive('/diet-tracking')}>Diet Tracking</Link>
              <Link to="/cart" className={isActive('/cart')}>Cart</Link>
              <a href="#" onClick={handleLogout} className="nav-link">Logout</a>
            </>
          ) : (
            <Link to="/login" className={isActive('/login')}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
