import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NewsDescription = () => {
  const { newsId } = useParams(); // Get the news ID from the URL
  const [news, setNews] = useState(null);

  useEffect(() => {
    // Mock data for testing
    const mockNews = {
      title: "Breaking News: Major Tech Innovation Announced",
      author: "John Doe",
      publishedAt: "2024-12-25",
      urlToImage: "https://via.placeholder.com/800x400", // Placeholder image URL
      description:
        "A groundbreaking technology is set to revolutionize the industry.",
      content:
        "The full article content goes here, providing detailed insights into the event. Experts believe this innovation will change the way businesses operate in the tech sector, making workflows more efficient and scalable.",
      url: "https://example.com/full-article",
    };

    // Simulate fetching data with a delay
    setTimeout(() => setNews(mockNews), 1000);
  }, [newsId]);

  if (!news) {
    return <div className="text-center text-gray-500">Loading news...</div>;
  }

  return (
    <div>
      <Navbar/>
      <div className="bg-gray-100 min-h-screen">
        {/* Container */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-md overflow-hidden">
          {/* News Title */}
          <div className="p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {news.title}
            </h1>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-medium">
                {news.author || "Unknown Author"}
              </span>{" "}
              &bull; <span>{new Date(news.publishedAt).toDateString()}</span>
            </p>
          </div>

          {/* News Image */}
          <div className="relative">
            <img
              src={news.urlToImage}
              alt={news.title}
              className="w-full object-cover h-80"
            />
          </div>

          {/* News Content */}
          <div className="p-6">
            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-6">
              {news.description || "No description available."}
            </p>

            {/* Full Content */}
            <div className="prose max-w-none text-gray-800">
              <p>{news.content || "No additional content provided."}</p>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default NewsDescription;
