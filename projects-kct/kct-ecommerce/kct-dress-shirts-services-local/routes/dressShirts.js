// Dress Shirts API Routes
const express = require('express');
const router = express.Router();
const { getDressShirts, getDressShirtById, getDressShirtsByFit } = require('../models/DressShirt');

// GET /api/dress-shirts - Get all dress shirts
router.get('/', async (req, res) => {
  try {
    const { fit, color, active = 'true' } = req.query;
    
    console.log(`[DressShirts API] Getting all dress shirts - fit: ${fit}, color: ${color}, active: ${active}`);
    
    let shirts = await getDressShirts();
    
    // Filter by active status
    if (active === 'true') {
      shirts = shirts.filter(shirt => shirt.isActive);
    }
    
    // Filter by fit if specified
    if (fit) {
      shirts = shirts.filter(shirt => 
        shirt.fit.toLowerCase() === fit.toLowerCase()
      );
    }
    
    // Filter by color if specified
    if (color) {
      shirts = shirts.filter(shirt => 
        shirt.color.toLowerCase().includes(color.toLowerCase())
      );
    }
    
    console.log(`[DressShirts API] Returning ${shirts.length} dress shirts`);
    
    res.json({
      success: true,
      count: shirts.length,
      dressShirts: shirts,
      filters: { fit, color, active },
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('[DressShirts API] Error getting dress shirts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve dress shirts',
      message: error.message
    });
  }
});

// GET /api/dress-shirts/:id - Get single dress shirt
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    console.log(`[DressShirts API] Getting dress shirt by ID: ${id}`);
    
    const shirt = await getDressShirtById(parseInt(id));
    
    if (!shirt) {
      return res.status(404).json({
        success: false,
        error: 'Dress shirt not found',
        id: parseInt(id)
      });
    }
    
    console.log(`[DressShirts API] Found dress shirt: ${shirt.name}`);
    
    res.json({
      success: true,
      dressShirt: shirt,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('[DressShirts API] Error getting dress shirt by ID:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve dress shirt',
      message: error.message
    });
  }
});

// GET /api/dress-shirts/fit/:fit - Get dress shirts by fit
router.get('/fit/:fit', async (req, res) => {
  try {
    const { fit } = req.params;
    const validFits = ['regular', 'slim'];
    
    if (!validFits.includes(fit.toLowerCase())) {
      return res.status(400).json({
        success: false,
        error: 'Invalid fit type',
        validFits: ['regular', 'slim'],
        provided: fit
      });
    }
    
    console.log(`[DressShirts API] Getting dress shirts by fit: ${fit}`);
    
    const shirts = await getDressShirtsByFit(fit);
    
    console.log(`[DressShirts API] Found ${shirts.length} ${fit} fit dress shirts`);
    
    res.json({
      success: true,
      count: shirts.length,
      fit: fit.toLowerCase(),
      dressShirts: shirts,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('[DressShirts API] Error getting dress shirts by fit:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve dress shirts by fit',
      message: error.message
    });
  }
});

module.exports = router;