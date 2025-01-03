// routes/articleRoutes.js

const express = require("express");
const fetchArticle = require("../middleware/articleMiddleware");
const getArticle = require("../controllers/articleController");

const router = express.Router();

router.get("/article", fetchArticle, getArticle); // Use middleware to fetch data, then use controller to send it

module.exports = router;
