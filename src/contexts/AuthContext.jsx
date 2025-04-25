
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const user = localStorage.getItem('nutriVibeUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // In a real app, this would call an API
    const user = { email, name: email.split('@')[0] };
    localStorage.setItem('nutriVibeUser', JSON.stringify(user));
    setCurrentUser(user);
    return user;
  };

  const signup = (email, password, name) => {
    // In a real app, this would call an API
    const user = { email, name: name || email.split('@')[0] };
    localStorage.setItem('nutriVibeUser', JSON.stringify(user));
    setCurrentUser(user);
    return user;
  };

  const logout = () => {
    localStorage.removeItem('nutriVibeUser');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
