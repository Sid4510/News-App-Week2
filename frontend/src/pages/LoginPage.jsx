import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-200 via-sky-300 to-white">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-sky-600 mb-8">Welcome Back!</h2>
        <form onSubmit={handleLogin} className="space-y-6">
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

          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </div>

          <div>
            <button type="submit" className="w-full py-3 bg-sky-600 text-white rounded-md shadow-lg hover:bg-sky-700 focus:outline-none">
              Log In
            </button>
          </div>
          
          <div className="text-center mt-4">
            Don't have an account?
            <br></br>
            <a href="/signup" className="text-sky-600 hover:underline text-sm">
               Signup
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
