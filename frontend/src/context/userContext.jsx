// src/context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create a Context
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a user is logged in from localStorage
    const storedUser = localStorage.getItem('authToken');
    if (storedUser) {
      setUser(storedUser); // Set user from localStorage
    }
  }, []);

  const login = (token) => {
    setUser(token);
    localStorage.setItem('authToken', token); // Store token in localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken'); // Remove token from localStorage
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
