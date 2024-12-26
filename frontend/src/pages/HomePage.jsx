import React, { useState, useEffect } from 'react';
import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InfiniteScroll from 'react-infinite-scroll-component';

const HomePage = () => {
  const [leftArticles, setLeftArticles] = useState([]);
  const [rightArticles, setRightArticles] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // For pagination
  const [hasMore, setHasMore] = useState(true); // For checking if there are more articles

  // Fetch data from NewsAPI
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?apiKey=c0bb3f50e6eb46d3abd4c165e6d5edcf&country=us&pageSize=6&page=${page}`
        );
        const data = await response.json();

        if (response.ok) {
          const articles = data.articles;

          // Separate articles for LeftColumn and RightColumn
          setLeftArticles((prevLeftArticles) => [
            ...prevLeftArticles,
            ...articles.slice(0, 3), // First 3 articles for LeftColumn
          ]);
          setRightArticles((prevRightArticles) => [
            ...prevRightArticles,
            ...articles.slice(3, 6), // Next 3 articles for RightColumn
          ]);

          // If less than 6 articles, stop infinite scroll
          if (articles.length < 6) {
            setHasMore(false);
          }
        } else {
          throw new Error(data.message || 'Failed to fetch articles');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchArticles();
  }, [page]); // Runs whenever the page changes

  const fetchData = () => {
    setPage((prevPage) => prevPage + 1); // Increase page number to fetch next set of data
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="bg-white p-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column - spans 2 columns on md and up */}
          <div className="md:col-span-2 space-y-6">
            {error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : leftArticles.length > 0 ? (
              <LeftColumn articles={leftArticles} />
            ) : (
              <p className="text-gray-500 text-center">Loading articles...</p>
            )}
          </div>

          {/* Right column with vertical border */}
          <div className="space-y-6 border-l border-gray-300 pl-6">
            {error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : rightArticles.length > 0 ? (
              <RightColumn articles={rightArticles} />
            ) : (
              <p className="text-gray-500 text-center">Loading articles...</p>
            )}
          </div>
        </div>

        {/* Infinite Scroll Component */}
        <InfiniteScroll
          dataLength={leftArticles.length + rightArticles.length} // Total length of articles
          next={fetchData} // Function to fetch more data
          hasMore={hasMore} // Condition to stop fetching more data
          loader={<p>Loading...</p>} // Loading message while fetching more data
          endMessage={<p className="text-center text-gray-500">No more articles to load</p>} // End message
        />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
