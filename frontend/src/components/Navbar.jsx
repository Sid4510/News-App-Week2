// src/components/Navbar.js
import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");  // Redirect to login page after logout
  };

  return (
    <nav className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-4">
          <span>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <a href="#" className="underline hover:text-gray-800">
            Today's Paper
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-800">
            India
          </a>
          <a href="#" className="hover:text-gray-800">
            International
          </a>
          <a href="#" className="hover:text-gray-800">
            Hindi
          </a>
          <a href="#" className="hover:text-gray-800">
            Marathi
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b">
        <div className="container mx-auto px-4 pb-4 pt-2 flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-serif font-bold text-gray-800">
            <a href="/">The Daily News India</a>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 text-gray-700 font-medium px-5">
            <a href="#" className="hover:text-gray-900">
              India
            </a>
            <a href="#" className="hover:text-gray-900">
              World
            </a>
            <a href="#" className="hover:text-gray-900">
              Business
            </a>
            <a href="#" className="hover:text-gray-900">
              Arts
            </a>
            <a href="#" className="hover:text-gray-900">
              Lifestyle
            </a>
            <a href="#" className="hover:text-gray-900">
              Sports
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {!user ? (
              <>
                <a
                  href="/subscribe"
                  className="px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-700 rounded hover:bg-blue-100"
                >
                  Subscribe
                </a>
                <a
                  href="/login"
                  className="px-4 py-2 text-sm font-semibold text-white bg-blue-700 rounded hover:bg-blue-800"
                >
                  Log In
                </a>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-semibold text-white bg-red-700 rounded hover:bg-red-800"
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
