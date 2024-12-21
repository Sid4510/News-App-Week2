import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const LeftColumn = ({ articles }) => {
  return (
    <div className="space-y-6">
      {articles.map((article, index) => (
        <div key={index} className="flex items-start space-x-4 p-4 border-b border-gray-300">
          {/* Left Side: Article Information */}
          <div className="flex-1">
            {/* Clickable Article Title */}
            <Link
              to={`/articles/${article.title.replace(/\s+/g, '-').toLowerCase()}`} // Dynamically generate URL
              className="text-xl font-semibold text-gray-900 hover:text-sky-600"
            >
              {article.title}
            </Link>
            <p className="text-gray-700 mt-2">
              {article.description.length > 100
                ? `${article.description.substring(0, 300)}...`
                : article.description}
            </p>
            {/* "Read More" link */}
            <Link
              to={`/articles/${article.title.replace(/\s+/g, '-').toLowerCase()}`} // Link to article page
              className="text-sky-600 hover:text-sky-800 mt-4 inline-block"
            >
              Read More
            </Link>
          </div>

          {/* Right Side: Clickable Image */}
          <div className="flex-1 h-auto">
            <Link
              to={`/articles/${article.title.replace(/\s+/g, '-').toLowerCase()}`} // Link to article page
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover rounded-md shadow-sm"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftColumn;
