#!/usr/bin/env node

// Test script to verify dress shirts integration end-to-end

const testEndpoints = [
  {
    name: 'Dress Shirts Microservice Health',
    url: 'https://kct-dress-shirts-services-production.up.railway.app/health',
    expectAuth: false
  },
  {
    name: 'Dress Shirts API - All Products',
    url: 'https://kct-dress-shirts-services-production.up.railway.app/api/dress-shirts',
    expectAuth: false
  },
  {
    name: 'Backend Health Check',
    url: 'https://admin-x13e-production.up.railway.app/health',
    expectAuth: false
  },
  {
    name: 'Backend Products API (shirts only) - Should fail without auth',
    url: 'https://admin-x13e-production.up.railway.app/api/products?include=shirts',
    expectAuth: true
  }
];

async function testEndpoint(test) {
  try {
    console.log(`\n🧪 Testing: ${test.name}`);
    console.log(`📡 URL: ${test.url}`);
    
    const response = await fetch(test.url);
    const data = await response.json();
    
    console.log(`📊 Status: ${response.status}`);
    
    if (test.expectAuth && response.status === 401) {
      console.log('✅ Expected auth error - endpoint is properly protected');
      return true;
    }
    
    if (response.ok) {
      console.log('✅ Success!');
      
      // Show relevant data based on endpoint
      if (test.url.includes('/health')) {
        console.log(`   Service: ${data.service || 'Backend'}`);
        console.log(`   Status: ${data.status}`);
        if (data.inventory) {
          console.log(`   Inventory: ${data.inventory.totalProducts} products`);
        }
      } else if (test.url.includes('/dress-shirts')) {
        console.log(`   Count: ${data.count || 0} dress shirts`);
        if (data.dressShirts && data.dressShirts.length > 0) {
          const shirt = data.dressShirts[0];
          console.log(`   Sample: ${shirt.name} (${shirt.fit}, ${shirt.color})`);
        }
      } else if (test.url.includes('/products')) {
        console.log(`   Products: ${data.products?.length || 0}`);
        if (data.sources) {
          Object.entries(data.sources).forEach(([source, status]) => {
            if (status.enabled) {
              console.log(`   ${source}: ${status.success ? '✅' : '❌'} (${status.count || 0} products)`);
              if (status.error) console.log(`   Error: ${status.error}`);
            }
          });
        }
      }
      
      return true;
    } else {
      console.log(`❌ Failed: ${data.error || 'Unknown error'}`);
      return false;
    }
    
  } catch (error) {
    console.log(`❌ Network Error: ${error.message}`);
    return false;
  }
}

async function runTests() {
  console.log('🎯 KCT DRESS SHIRTS INTEGRATION TEST');
  console.log('=====================================');
  
  let passed = 0;
  let total = testEndpoints.length;
  
  for (const test of testEndpoints) {
    const success = await testEndpoint(test);
    if (success) passed++;
  }
  
  console.log('\n📋 SUMMARY');
  console.log('===========');
  console.log(`✅ Passed: ${passed}/${total}`);
  console.log(`❌ Failed: ${total - passed}/${total}`);
  
  if (passed === total) {
    console.log('\n🎉 ALL TESTS PASSED!');
    console.log('The dress shirts integration should be working.');
    console.log('\n🔗 Next step: Check admin panel at:');
    console.log('https://ecommerce-admin-beryl-one.vercel.app');
  } else {
    console.log('\n⚠️  Some tests failed. Check the errors above.');
  }
}

runTests().catch(console.error);