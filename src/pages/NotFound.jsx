
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container page-container" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>404</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Oops! Page not found</p>
      <Link to="/" className="btn">Return to Home</Link>
    </div>
  );
};

export default NotFound;
