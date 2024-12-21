import React, { useState } from "react";
import axios from "axios";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // New state for username

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", { email, password, username });
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-200 via-sky-300 to-white">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-sky-600 mb-8">Create an Account</h2>
        <form onSubmit={handleSignup} className="space-y-6">
          {/* Username field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </div>

          {/* Email field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </div>

          {/* Password field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </div>

          {/* Sign up button */}
          <div>
            <button type="submit" className="w-full py-3 bg-sky-600 text-white rounded-md shadow-lg hover:bg-sky-700 focus:outline-none">
              Sign Up
            </button>
          </div>

          {/* Sign in link */}
          <div className="text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-sky-600 hover:underline text-sm">
              Log In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
