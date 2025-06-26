# KCT Dress Shirts Microservice 👔

Simple, streamlined microservice for managing KCT dress shirts inventory.

## 📊 **Inventory Overview**
- **Total Products**: 20 dress shirts
- **Fits**: Regular, Slim (2 options)
- **Colors**: 10 colors per fit
- **Sizes**: S, M, L, XL (standard sizing)
- **Design**: Classic Oxford (uniform design)

## 🎯 **Simple Architecture**
```
20 Total Dress Shirts = 2 Fits × 10 Colors
├── Regular Fit (10 shirts)
│   ├── White, Light Blue, Navy, Black, Gray
│   └── Pink, Lavender, Mint, Cream, Charcoal
└── Slim Fit (10 shirts)
    ├── White, Light Blue, Navy, Black, Gray
    └── Pink, Lavender, Mint, Cream, Charcoal
```

## 🚀 **API Endpoints**

### Core Endpoints
- `GET /` - Service information
- `GET /health` - Health check
- `GET /api/dress-shirts` - Get all dress shirts
- `GET /api/dress-shirts/:id` - Get single dress shirt
- `GET /api/dress-shirts/fit/:fit` - Get shirts by fit (regular/slim)

### Query Parameters
- `?fit=regular|slim` - Filter by fit type
- `?color=white` - Filter by color
- `?active=true|false` - Filter by active status

## 📝 **Example Responses**

### Get All Dress Shirts
```bash
GET /api/dress-shirts
```
```json
{
  "success": true,
  "count": 20,
  "dressShirts": [...],
  "filters": {...},
  "timestamp": "2024-01-26T10:00:00.000Z"
}
```

### Get by Fit
```bash
GET /api/dress-shirts/fit/slim
```
```json
{
  "success": true,
  "count": 10,
  "fit": "slim",
  "dressShirts": [...],
  "timestamp": "2024-01-26T10:00:00.000Z"
}
```

## 🛠️ **Development**

### Quick Start
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run production server
npm start
```

### Environment Setup
```bash
# Copy environment template
cp .env.example .env

# Edit configuration
nano .env
```

## 🏗️ **Data Structure**
```javascript
{
  id: 1,
  name: "Classic Oxford Dress Shirt - White Regular",
  slug: "classic-oxford-white-regular",
  baseDesign: "Classic Oxford",
  fit: "Regular", // Regular | Slim
  color: "White",
  colorFamily: "Neutral",
  sizes: ["S", "M", "L", "XL"],
  price: 59.99,
  comparePrice: 79.99,
  sku: "SHIRTS-OXFORD-WHITE-REG",
  isActive: true,
  category: "dress-shirts",
  fabric: "100% Cotton Oxford",
  features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs"],
  description: "Timeless white oxford dress shirt...",
  imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/...",
  images: [...]
}
```

## 🎨 **Color Palette**
- **Neutral**: White, Gray, Black, Cream, Charcoal
- **Blue Family**: Light Blue, Navy
- **Accent Colors**: Pink, Lavender, Mint

## 💰 **Pricing Structure**
- **Regular Fit**: $59.99 - $64.99
- **Slim Fit**: $64.99 - $69.99
- **Compare Prices**: $79.99 - $89.99

## 🚀 **Railway Deployment**
This service is designed for Railway deployment with:
- Automatic deployment from Git
- Environment variable configuration
- Health check endpoint
- CORS configured for KCT domains

## 🔗 **Integration**
Integrates with:
- KCT Ecommerce Backend (`/api/products?include=shirts`)
- KCT Admin Panel (product display)
- KCT Product Images (S3 bucket)

## 📈 **Future Enhancements**
- PostgreSQL database integration
- Advanced filtering options
- Size/inventory management
- Image upload capabilities

---
**KCT Dress Shirts Service v1.0.0** - Simple, efficient, scalable! 👔