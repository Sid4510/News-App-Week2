import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Tailwind styles should be included here
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SubscribePage from './pages/SubsribePage';

function App() {
  return (
    <Router>
      <div>
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/subscribe' element={<SubscribePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
