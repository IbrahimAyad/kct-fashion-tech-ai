const axios = require('axios');

async function testAuthAndProducts() {
  try {
    // Step 1: Login to get token
    console.log('🔐 Step 1: Logging in...');
    const loginResponse = await axios.post('https://admin-x13e-production.up.railway.app/api/auth/login', {
      email: 'admin@example.com',
      password: 'admin123'
    });
    
    if (!loginResponse.data.token) {
      throw new Error('No token received from login');
    }
    
    const token = loginResponse.data.token;
    console.log('✅ Login successful, token received');
    
    // Step 2: Test products API with suits
    console.log('\n📦 Step 2: Fetching products with suits...');
    const productsResponse = await axios.get('https://admin-x13e-production.up.railway.app/api/products?include=native,suits', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log('✅ Products API Response:');
    console.log('- Total products:', productsResponse.data.products?.length || 0);
    console.log('- Sources:', JSON.stringify(productsResponse.data.sources, null, 2));
    
    // Check if we have suits products
    const suitsProducts = productsResponse.data.products?.filter(p => p.source === 'suits') || [];
    console.log('- Suits products:', suitsProducts.length);
    
    if (suitsProducts.length > 0) {
      console.log('- First suit:', suitsProducts[0].name);
    }
    
    // Step 3: Test suits service directly
    console.log('\n🎯 Step 3: Testing suits service directly...');
    const directSuitsResponse = await axios.get('https://kct-suits-services-production.up.railway.app/api/suits');
    console.log('- Direct suits service products:', directSuitsResponse.data.suits?.length || 0);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('- Status:', error.response.status);
      console.error('- Data:', error.response.data);
    }
  }
}

testAuthAndProducts();