const axios = require('axios');

async function debugFrontendIssue() {
  try {
    // Login and get products
    const loginResponse = await axios.post('https://admin-x13e-production.up.railway.app/api/auth/login', {
      email: 'admin@example.com',
      password: 'admin123'
    });
    
    const token = loginResponse.data.token;
    const productsResponse = await axios.get('https://admin-x13e-production.up.railway.app/api/products?include=native,suits', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    const products = productsResponse.data.products;
    console.log('📊 Products Debug Analysis:');
    console.log('- Total products returned:', products.length);
    
    // Analyze product structure
    const sampleProduct = products[0];
    console.log('\n🔍 Sample Product Structure:');
    console.log('- id:', sampleProduct.id);
    console.log('- name:', sampleProduct.name);
    console.log('- source:', sampleProduct.source);
    console.log('- isActive:', sampleProduct.isActive);
    console.log('- basePrice:', sampleProduct.basePrice);
    console.log('- totalInventory:', sampleProduct.totalInventory);
    console.log('- categoryName:', sampleProduct.categoryName);
    console.log('- productType:', sampleProduct.productType);
    
    // Check for potential filter issues
    console.log('\n🧪 Filter Analysis:');
    
    // Price range check
    const outOfPriceRange = products.filter(p => p.basePrice < 0 || p.basePrice > 2000);
    console.log('- Products outside price range [0, 2000]:', outOfPriceRange.length);
    
    // Active status check
    const inactiveProducts = products.filter(p => !p.isActive);
    console.log('- Inactive products:', inactiveProducts.length);
    
    // Products by source
    const productsBySource = {
      native: products.filter(p => p.source === 'native').length,
      suits: products.filter(p => p.source === 'suits').length,
      ties: products.filter(p => p.source === 'ties').length
    };
    console.log('- Products by source:', productsBySource);
    
    // Check price distribution
    console.log('\n💰 Price Distribution:');
    products.forEach((p, i) => {
      if (i < 5) { // Show first 5
        console.log(`- ${p.name}: $${p.basePrice} (active: ${p.isActive})`);
      }
    });
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

debugFrontendIssue();