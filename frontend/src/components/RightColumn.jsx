import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from React Router
import { UserContext } from '../context/userContext'; // Import your UserContext

const RightColumn = ({ articles }) => {
  const { user } = useContext(UserContext); // Access user state from context
  const navigate = useNavigate();
  const [showLoginDialog, setShowLoginDialog] = useState(false); // State to manage the LoginDialog visibility

  const handleReadMoreClick = (articleTitle) => {
    if (!user) {
      setShowLoginDialog(true); // If the user is not logged in, show LoginDialog
    } else {
      navigate(`/articles/${articleTitle.replace(/\s+/g, '-').toLowerCase()}`); // Navigate to the article page
    }
  };

  const handleCloseLoginDialog = () => {
    setShowLoginDialog(false); // Close the LoginDialog
  };

  return (
    <div className="space-y-6">
      {articles.map((article, index) => (
        <div key={index} className="flex items-start space-x-4 p-4 border-b border-gray-300">
          {/* Left Side: Article Information */}
          <div className="flex-1">
            {/* Clickable Article Title */}
            <button
              onClick={() => handleReadMoreClick(article.title)} // Trigger the login check on title click
              className="text-lg font-semibold text-gray-900 hover:text-sky-600 w-full text-left"
            >
              {article.title}
            </button>
            <p className="text-gray-700 mt-2">
              {article.description.length > 100
                ? `${article.description.substring(0, 50)}...`
                : article.description}
            </p>
            {/* "Read More" link */}
            <button
              onClick={() => handleReadMoreClick(article.title)} // Trigger the login check on "Read More" button click
              className="text-sky-600 hover:text-sky-800 mt-4 inline-block"
            >
              Read More
            </button>
          </div>

          {/* Right Side: Clickable Image */}
          <div className="w-40 h-auto flex-shrink-0">
            <button
              onClick={() => handleReadMoreClick(article.title)} // Trigger the login check on image click
              className="w-full h-full"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover rounded-md shadow-sm"
              />
            </button>
          </div>
        </div>
      ))}

      {/* Login Dialog - Modal to prompt user to log in */}
      {showLoginDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold text-gray-800">Login Required</h2>
            <p className="text-gray-700 mt-4">You need to be logged in to read the article.</p>
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleCloseLoginDialog}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Close
              </button>
              <Link
                to="/login"
                className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightColumn;
