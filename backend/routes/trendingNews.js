const express = require('express');
const router = express.Router();

// Import the local JSON file or database logic
const trendingNews = require('./trendingNews.json'); // JSON file containing trending news data

// Route to fetch trending news
router.get('/trending', (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Get the page number from the query, default to 1
    const pageSize = 6; // Define how many articles per page
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedNews = trendingNews.articles.slice(startIndex, endIndex); // Paginate the articles

    // If no articles are found for the given page
    if (paginatedNews.length === 0) {
      return res.status(404).json({ message: 'No more articles available' });
    }

    res.json({
      page,
      pageSize,
      totalArticles: trendingNews.articles.length,
      articles: paginatedNews,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch trending news', error: error.message });
  }
});

module.exports = router;
