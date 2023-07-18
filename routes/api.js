import express from 'express';

const router = express.Router();

// Example API endpoint
router.get('/', (req, res) => {
  res.send('Hello from the API route!');
});

export default router;
