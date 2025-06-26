# 🚀 Railway S3 Environment Setup

## Required Environment Variables for S3 Integration

Add these environment variables in your Railway dashboard:

### 1. Go to Railway Dashboard
- Navigate to: https://railway.app/dashboard
- Select your `ecommerce-backend` project
- Go to Variables tab

### 2. Add AWS S3 Configuration

```bash
AWS_ACCESS_KEY_ID=your_aws_access_key_here
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key_here
AWS_S3_BUCKET=kct-product-images
AWS_REGION=us-east-2
```

### 3. Verify Existing Variables
Make sure these are already set:
```bash
KCT_IMAGES_BASE_URL=https://kct-product-images.s3.us-east-2.amazonaws.com
```

## 🔧 How to Get AWS Credentials

### Option 1: AWS IAM User (Recommended)
1. Go to AWS IAM Console
2. Create new user: `kct-ecommerce-s3-user`
3. Attach policy: `AmazonS3FullAccess` (or custom policy for kct-product-images bucket)
4. Generate Access Key & Secret Key
5. Copy to Railway environment variables

### Option 2: Use Existing KCT Microservice Credentials
If you have AWS credentials for the KCT microservices, use the same ones.

## 🧪 Testing S3 Integration

After setting environment variables:

1. **Check Configuration:**
   ```bash
   curl https://admin-x13e-production.up.railway.app/health
   ```
   Should show: `"hasAwsAccessKey": true`

2. **Test Image Upload:**
   - Create new product: "Test Product"
   - Add image in the upload area
   - Click "Create Product"
   - Check S3 bucket for: `native-products/{product-id}/`

## 📁 S3 Folder Structure

```
kct-product-images/
├── native-products/
│   ├── {product-uuid-1}/
│   │   ├── image-optimized-{timestamp}.webp
│   │   └── thumbnails/
│   │       └── image-thumb-{timestamp}.webp
│   └── {product-uuid-2}/
│       └── ...
├── suits/          # KCT microservice images
├── ties/           # KCT microservice images
└── ...
```

## 🔍 Troubleshooting

### Images Not Uploading
1. Check Railway logs for S3 configuration messages
2. Verify AWS credentials have S3 permissions
3. Ensure S3 bucket exists and is accessible

### Permission Errors
- Make sure IAM user has `s3:PutObject`, `s3:DeleteObject`, `s3:GetObject` permissions
- Bucket policy allows uploads from your AWS account

### CORS Issues
If uploading from browser, ensure S3 bucket has CORS policy:
```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": []
  }
]
```

## ✅ Success Indicators

When working correctly:
- Railway logs show: "✅ S3 configured for image storage"
- Health endpoint shows AWS credentials present
- New products upload images to S3
- Images display with CDN URLs

## 🆘 Fallback Mode

If S3 is not configured, the system automatically falls back to local storage:
- Images stored in Railway filesystem (temporary)
- Will work but not recommended for production
- Images may be lost during deployments