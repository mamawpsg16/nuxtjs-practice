import express from 'express';
// import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const items = [1,2,3,4,5]
const port = process.env.PORT || 3000; // Access PORT from environment variables

// databaseConnection();
const app = express();

app.use((req, res, next) => {
  // Check if the Content-Type header is missing or incorrect
  if (!req.headers['content-type'] || req.headers['content-type'] !== 'application/json') {
      req.headers['content-type'] = 'application/json';
  }
  next();
});

app.use(cors({
  origin: ['http://localhost:3000']
}));
app.use(express.json());

// Define your routes
app.get('/api/items', async (req, res) => {
  
  res.status(200).json({items:items});
});

app.post('/api/items', async (req, res) => {
  items.push(req.body.item)
  res.json({ message: `${req.body.item} is succesfully pushed` });
});

app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:${port}`);
});
