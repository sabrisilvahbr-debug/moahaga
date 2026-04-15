const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Moahaga' });
});

// Example API endpoint
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Bem-vindo ao Moahaga API',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.listen(PORT, () => {
  console.log(`Moahaga server running on port ${PORT}`);
});
