// KCT Dress Shirts Microservice
// Simple inventory: 20 dress shirts (2 fits × 10 colors)

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://ecommerce-admin-beryl-one.vercel.app',
    'https://ecommerce-backend-production-5c5a.up.railway.app'
  ],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/dress-shirts', require('./routes/dressShirts'));
app.use('/health', require('./routes/health'));

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    service: 'KCT Dress Shirts Microservice',
    version: '1.0.0',
    status: 'active',
    inventory: '20 dress shirts',
    scope: '2 fits × 10 colors',
    endpoints: [
      'GET /api/dress-shirts',
      'GET /api/dress-shirts/:id',
      'GET /api/dress-shirts/fit/:fit',
      'GET /health'
    ]
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not found',
    message: `Route ${req.originalUrl} not found`
  });
});

app.listen(PORT, () => {
  console.log(`🎽 KCT Dress Shirts Service running on port ${PORT}`);
  console.log(`📊 Inventory: 20 dress shirts (2 fits × 10 colors)`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;