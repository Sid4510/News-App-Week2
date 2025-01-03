// middleware/articleMiddleware.js

require("dotenv").config(); // Load environment variables from the .env file

const fetchArticle = async (req, res, next) => {
  try {
    if (!req.body.article) {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?apiKey=${process.env.NEWS_API_KEY}&country=us&pageSize=1`
      );
      const data = await response.json();

      if (response.ok && data.articles.length > 0) {
        req.article = data.articles[0]; // Attach the fetched article to the request
      } else {
        throw new Error("No article found.");
      }
    }
    next();
  } catch (err) {
    next(err); // Pass error to the error handler
  }
};

module.exports = fetchArticle;
