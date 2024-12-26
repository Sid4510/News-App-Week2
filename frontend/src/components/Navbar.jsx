import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to login page after logout
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-4">
          <span>
            {new Date().toLocaleDateString("en-IN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
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
              <div className="relative">
                {/* User Avatar */}
                <div
                  onClick={toggleDropdown}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-lg font-semibold cursor-pointer"
                  title={user.username}
                >
                  {user.username[0].toUpperCase()}
                </div>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-md z-50">
                    <ul className="py-1 text-sm text-gray-700">
                      <li>
                        <a
                          href="/myaccount"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          My Account
                        </a>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
