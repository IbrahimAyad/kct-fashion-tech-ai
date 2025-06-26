#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Dress shirts data from the microservice
const dressShirts = [
  // Regular Fit
  { slug: 'oxford-white-regular', color: 'White', colorCode: '#FFFFFF' },
  { slug: 'oxford-light-blue-regular', color: 'Light Blue', colorCode: '#ADD8E6' },
  { slug: 'oxford-navy-regular', color: 'Navy', colorCode: '#000080' },
  { slug: 'oxford-black-regular', color: 'Black', colorCode: '#000000' },
  { slug: 'oxford-gray-regular', color: 'Gray', colorCode: '#808080' },
  { slug: 'oxford-pink-regular', color: 'Pink', colorCode: '#FFC0CB' },
  { slug: 'oxford-lavender-regular', color: 'Lavender', colorCode: '#E6E6FA' },
  { slug: 'oxford-mint-regular', color: 'Mint', colorCode: '#98FB98' },
  { slug: 'oxford-cream-regular', color: 'Cream', colorCode: '#FFFDD0' },
  { slug: 'oxford-charcoal-regular', color: 'Charcoal', colorCode: '#36454F' },
  
  // Slim Fit
  { slug: 'oxford-white-slim', color: 'White', colorCode: '#FFFFFF' },
  { slug: 'oxford-light-blue-slim', color: 'Light Blue', colorCode: '#ADD8E6' },
  { slug: 'oxford-navy-slim', color: 'Navy', colorCode: '#000080' },
  { slug: 'oxford-black-slim', color: 'Black', colorCode: '#000000' },
  { slug: 'oxford-gray-slim', color: 'Gray', colorCode: '#808080' },
  { slug: 'oxford-pink-slim', color: 'Pink', colorCode: '#FFC0CB' },
  { slug: 'oxford-lavender-slim', color: 'Lavender', colorCode: '#E6E6FA' },
  { slug: 'oxford-mint-slim', color: 'Mint', colorCode: '#98FB98' },
  { slug: 'oxford-cream-slim', color: 'Cream', colorCode: '#FFFDD0' },
  { slug: 'oxford-charcoal-slim', color: 'Charcoal', colorCode: '#36454F' }
];

const bucket = 'kct-product-images';
const region = 'us-east-2';

console.log('🎨 Creating and uploading dress shirt images...');

// Create temp directory for images
const tempDir = '/tmp/dress-shirt-images';
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

dressShirts.forEach((shirt, index) => {
  console.log(`\n📷 Processing ${index + 1}/20: ${shirt.color} ${shirt.slug.includes('slim') ? 'Slim' : 'Regular'}`);
  
  const fit = shirt.slug.includes('slim') ? 'Slim' : 'Regular';
  const imagePath = path.join(tempDir, `${shirt.slug}.jpg`);
  
  // Create a simple colored rectangle image using ImageMagick
  // This creates a dress shirt silhouette with the appropriate color
  try {
    execSync(`convert -size 800x1000 xc:"${shirt.colorCode}" -fill white -gravity center -pointsize 40 -annotate +0-200 "KCT DRESS SHIRT" -pointsize 30 -annotate +0-150 "${shirt.color}" -pointsize 25 -annotate +0-100 "${fit} Fit" -pointsize 20 -annotate +0+400 "Classic Oxford Style" "${imagePath}"`, { stdio: 'inherit' });
    
    // Upload to S3
    const s3Key = `dress-shirts/${shirt.slug}/main.jpg`;
    console.log(`⬆️  Uploading to s3://${bucket}/${s3Key}`);
    
    execSync(`aws s3 cp "${imagePath}" s3://${bucket}/${s3Key} --region ${region} --content-type image/jpeg`, { stdio: 'inherit' });
    
    console.log(`✅ Uploaded: ${shirt.color} ${fit}`);
    
  } catch (error) {
    console.error(`❌ Error processing ${shirt.slug}:`, error.message);
  }
});

// Cleanup
try {
  execSync(`rm -rf ${tempDir}`);
  console.log('\n🧹 Cleaned up temporary files');
} catch (error) {
  console.log('⚠️  Could not clean up temp files');
}

console.log('\n🎉 Dress shirt image upload complete!');
console.log('\n🔗 Test URLs:');
console.log(`https://${bucket}.s3.${region}.amazonaws.com/dress-shirts/oxford-white-regular/main.jpg`);
console.log(`https://${bucket}.s3.${region}.amazonaws.com/dress-shirts/oxford-navy-slim/main.jpg`);