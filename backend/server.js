require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios"); // For making HTTP requests
const cheerio = require("cheerio"); // For parsing and extracting HTML content
const authRoutes = require("./routes/auth");
const newsRoute = require("./routes/news");
const articleRoutes = require("./routes/articleRoute");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoute);
app.use("/api/news", articleRoutes);


// Database connection
const mongoURI = process.env.MONGO_URI; // MongoDB URI from environment variable
if (!mongoURI) {
  console.error("MongoDB connection URI is missing. Add MONGO_URI in your .env file.");
  process.exit(1); // Exit the app if no URI is provided
}

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the app if connection fails
  });


// Start server
const PORT = process.env.PORT || 5000; // Use PORT from environment variables or default to 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// // Endpoint to fetch full article content
// app.get("/fetch-article", async (req, res) => {
//   const { url } = req.query; // Get the article URL from query parameters

//   if (!url) {
//     return res.status(400).json({ error: "URL is required." });
//   }

//   try {
//     // Fetch the article's HTML content
//     const response = await axios.get(url);
//     const html = response.data;

//     // Use cheerio to parse and extract content
//     const $ = cheerio.load(html);

//     // Extract article text - customize selectors as needed
//     const content = $("p")
//       .map((_, element) => $(element).text())
//       .get()
//       .join("\n\n");

//     if (!content) {
//       return res
//         .status(404)
//         .json({ error: "Unable to extract content from the provided URL." });
//     }

//     res.json({ content });
//   } catch (error) {
//     console.error("Error fetching article content:", error);
//     res
//       .status(500)
//       .json({ error: "Failed to fetch or parse article content. Please check the URL." });
//   }
// });
