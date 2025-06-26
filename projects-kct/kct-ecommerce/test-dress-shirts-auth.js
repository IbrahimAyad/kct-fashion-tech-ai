// Test dress shirts integration with authentication
// Script to verify dress shirts are appearing in backend API

const API_BASE_URL = 'https://admin-x13e-production.up.railway.app/api';

// Test login and get token
async function getAuthToken() {
  try {
    const loginResponse = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'admin@example.com',
        password: 'admin123'
      }),
    });

    if (loginResponse.ok) {
      const loginData = await loginResponse.json();
      console.log('✅ Login successful');
      return loginData.token;
    } else {
      console.error('❌ Login failed:', await loginResponse.text());
      return null;
    }
  } catch (error) {
    console.error('❌ Login error:', error.message);
    return null;
  }
}

// Test products API with dress shirts
async function testDressShirtsAPI(token) {
  try {
    console.log('\n🧪 Testing products API with dress shirts...');
    
    const response = await fetch(`${API_BASE_URL}/products?include=shirts`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✅ API Response received');
      console.log('📊 Source Status:', data.sourceStatus || data.sources);
      console.log('👕 Shirts Count:', data.products?.filter(p => p.source === 'shirts').length || 0);
      console.log('📦 Total Products:', data.products?.length || 0);
      
      if (data.products?.some(p => p.source === 'shirts')) {
        console.log('🎉 SUCCESS: Dress shirts found in API!');
        const shirtExample = data.products.find(p => p.source === 'shirts');
        console.log('📋 Example shirt:', {
          id: shirtExample.id,
          name: shirtExample.name,
          price: shirtExample.basePrice || shirtExample.price,
          source: shirtExample.source
        });
      } else {
        console.log('❌ ISSUE: No dress shirts found in response');
      }
    } else {
      console.error('❌ API call failed:', response.status, await response.text());
    }
  } catch (error) {
    console.error('❌ API error:', error.message);
  }
}

// Main test function
async function main() {
  console.log('🚀 Testing KCT Dress Shirts Integration\n');
  
  const token = await getAuthToken();
  if (!token) {
    console.log('❌ Cannot proceed without authentication token');
    return;
  }

  await testDressShirtsAPI(token);
}

main().catch(console.error);