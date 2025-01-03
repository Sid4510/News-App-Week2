const express = require("express");
const router = express.Router();
const fetchNewsMiddleware = require("../middleware/fetchNewsMiddleware");
const { getTrendingNews } = require("../controllers/newsController");

// Route for searching news
router.get("/search", fetchNewsMiddleware, (req, res) => {
  res.status(200).json(req.newsData);
});

// Route for trending news
router.get("/trending", getTrendingNews);

module.exports = router;
