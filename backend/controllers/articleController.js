// controllers/articleController.js

const getArticle = (req, res) => {
    if (req.article) {
      res.json({ article: req.article }); // Send back the fetched article
    } else {
      res.status(404).json({ message: "Article not found." }); // If no article found
    }
  };
  
  module.exports = getArticle;
  