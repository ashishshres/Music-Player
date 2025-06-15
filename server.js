import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3000;
const API_KEY = "AIzaSyBbG_6gOqv3gJZhD98Pz8h6wbxzDziwrvU";

app.use(cors());
app.use(express.json());

app.get("/search", async (req, res) => {
  const q = req.query.q;
  if (!q) return res.status(400).json({ error: "Missing query" });

  try {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${encodeURIComponent(q)}&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    // Extract needed info
    const results = data.items.map(item => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.default.url,
    }));

    res.json({ results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "API error" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
