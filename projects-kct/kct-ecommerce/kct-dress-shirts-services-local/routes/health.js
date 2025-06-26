// Health Check Route
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const healthData = {
    status: 'healthy',
    service: 'KCT Dress Shirts Microservice',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    inventory: {
      totalProducts: 20,
      fits: ['Regular', 'Slim'],
      colors: 10,
      sizes: ['S', 'M', 'L', 'XL']
    },
    database: {
      status: 'connected', // Will be updated when we add actual DB
      type: 'in-memory' // Will change to 'postgresql'
    }
  };

  res.json(healthData);
});

module.exports = router;