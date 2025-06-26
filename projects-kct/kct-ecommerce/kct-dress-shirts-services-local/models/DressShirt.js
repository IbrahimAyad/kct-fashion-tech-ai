// Dress Shirt Data Model & Inventory
// 20 total dress shirts: 2 fits × 10 colors

const dressShirtsInventory = [
  // Regular Fit - 10 shirts
  {
    id: 1,
    name: "Classic Oxford Dress Shirt - White Regular",
    slug: "classic-oxford-white-regular",
    baseDesign: "Classic Oxford",
    fit: "Regular",
    color: "White",
    colorFamily: "Neutral",
    colorCode: "#FFFFFF",
    sizes: ["S", "M", "L", "XL"],
    price: 59.99,
    comparePrice: 79.99,
    sku: "SHIRTS-OXFORD-WHITE-REG",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Classic fit"],
    description: "Timeless white oxford dress shirt in regular fit. Perfect for business and formal occasions.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-white-regular/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-white-regular/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-white-regular/detail.jpg"
    ]
  },
  {
    id: 2,
    name: "Classic Oxford Dress Shirt - Light Blue Regular", 
    slug: "classic-oxford-light-blue-regular",
    baseDesign: "Classic Oxford",
    fit: "Regular",
    color: "Light Blue",
    colorFamily: "Blue",
    colorCode: "#ADD8E6",
    sizes: ["S", "M", "L", "XL"],
    price: 59.99,
    comparePrice: 79.99,
    sku: "SHIRTS-OXFORD-LIGHTBLUE-REG",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Classic fit"],
    description: "Professional light blue oxford dress shirt in regular fit. Versatile and sophisticated.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-light-blue-regular/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-light-blue-regular/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-light-blue-regular/detail.jpg"
    ]
  },
  {
    id: 3,
    name: "Classic Oxford Dress Shirt - Navy Regular",
    slug: "classic-oxford-navy-regular", 
    baseDesign: "Classic Oxford",
    fit: "Regular",
    color: "Navy",
    colorFamily: "Blue",
    colorCode: "#000080",
    sizes: ["S", "M", "L", "XL"],
    price: 64.99,
    comparePrice: 84.99,
    sku: "SHIRTS-OXFORD-NAVY-REG",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Classic fit"],
    description: "Bold navy oxford dress shirt in regular fit. Makes a strong professional statement.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-navy-regular/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-navy-regular/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-navy-regular/detail.jpg"
    ]
  },
  {
    id: 4,
    name: "Classic Oxford Dress Shirt - Black Regular",
    slug: "classic-oxford-black-regular",
    baseDesign: "Classic Oxford", 
    fit: "Regular",
    color: "Black",
    colorFamily: "Neutral",
    colorCode: "#000000",
    sizes: ["S", "M", "L", "XL"],
    price: 64.99,
    comparePrice: 84.99,
    sku: "SHIRTS-OXFORD-BLACK-REG",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Classic fit"],
    description: "Sophisticated black oxford dress shirt in regular fit. Perfect for formal events.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-black-regular/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-black-regular/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-black-regular/detail.jpg"
    ]
  },
  {
    id: 5,
    name: "Classic Oxford Dress Shirt - Gray Regular",
    slug: "classic-oxford-gray-regular",
    baseDesign: "Classic Oxford",
    fit: "Regular", 
    color: "Gray",
    colorFamily: "Neutral",
    colorCode: "#808080",
    sizes: ["S", "M", "L", "XL"],
    price: 59.99,
    comparePrice: 79.99,
    sku: "SHIRTS-OXFORD-GRAY-REG",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Classic fit"],
    description: "Modern gray oxford dress shirt in regular fit. Stylish and professional.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-gray-regular/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-gray-regular/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-gray-regular/detail.jpg"
    ]
  },
  {
    id: 6,
    name: "Classic Oxford Dress Shirt - Pink Regular",
    slug: "classic-oxford-pink-regular",
    baseDesign: "Classic Oxford",
    fit: "Regular",
    color: "Pink", 
    colorFamily: "Pink",
    colorCode: "#FFC0CB",
    sizes: ["S", "M", "L", "XL"],
    price: 62.99,
    comparePrice: 82.99,
    sku: "SHIRTS-OXFORD-PINK-REG",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Classic fit"],
    description: "Elegant pink oxford dress shirt in regular fit. Adds subtle color to your wardrobe.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-pink-regular/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-pink-regular/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-pink-regular/detail.jpg"
    ]
  },
  {
    id: 7,
    name: "Classic Oxford Dress Shirt - Lavender Regular",
    slug: "classic-oxford-lavender-regular",
    baseDesign: "Classic Oxford",
    fit: "Regular",
    color: "Lavender",
    colorFamily: "Purple", 
    colorCode: "#E6E6FA",
    sizes: ["S", "M", "L", "XL"],
    price: 62.99,
    comparePrice: 82.99,
    sku: "SHIRTS-OXFORD-LAVENDER-REG",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Classic fit"],
    description: "Refined lavender oxford dress shirt in regular fit. Distinctive and sophisticated.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-lavender-regular/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-lavender-regular/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-lavender-regular/detail.jpg"
    ]
  },
  {
    id: 8,
    name: "Classic Oxford Dress Shirt - Mint Regular",
    slug: "classic-oxford-mint-regular", 
    baseDesign: "Classic Oxford",
    fit: "Regular",
    color: "Mint",
    colorFamily: "Green",
    colorCode: "#98FB98",
    sizes: ["S", "M", "L", "XL"],
    price: 62.99,
    comparePrice: 82.99,
    sku: "SHIRTS-OXFORD-MINT-REG",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Classic fit"],
    description: "Fresh mint oxford dress shirt in regular fit. Modern and refreshing style.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-mint-regular/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-mint-regular/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-mint-regular/detail.jpg"
    ]
  },
  {
    id: 9,
    name: "Classic Oxford Dress Shirt - Cream Regular",
    slug: "classic-oxford-cream-regular",
    baseDesign: "Classic Oxford",
    fit: "Regular",
    color: "Cream",
    colorFamily: "Neutral",
    colorCode: "#FFFDD0", 
    sizes: ["S", "M", "L", "XL"],
    price: 59.99,
    comparePrice: 79.99,
    sku: "SHIRTS-OXFORD-CREAM-REG",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Classic fit"],
    description: "Warm cream oxford dress shirt in regular fit. Versatile off-white option.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-cream-regular/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-cream-regular/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-cream-regular/detail.jpg"
    ]
  },
  {
    id: 10,
    name: "Classic Oxford Dress Shirt - Charcoal Regular",
    slug: "classic-oxford-charcoal-regular",
    baseDesign: "Classic Oxford",
    fit: "Regular",
    color: "Charcoal",
    colorFamily: "Neutral",
    colorCode: "#36454F",
    sizes: ["S", "M", "L", "XL"],
    price: 64.99,
    comparePrice: 84.99,
    sku: "SHIRTS-OXFORD-CHARCOAL-REG", 
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Classic fit"],
    description: "Sharp charcoal oxford dress shirt in regular fit. Modern alternative to black.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-charcoal-regular/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-charcoal-regular/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-charcoal-regular/detail.jpg"
    ]
  },

  // Slim Fit - 10 shirts
  {
    id: 11,
    name: "Classic Oxford Dress Shirt - White Slim",
    slug: "classic-oxford-white-slim",
    baseDesign: "Classic Oxford",
    fit: "Slim",
    color: "White",
    colorFamily: "Neutral",
    colorCode: "#FFFFFF",
    sizes: ["S", "M", "L", "XL"],
    price: 64.99,
    comparePrice: 84.99,
    sku: "SHIRTS-OXFORD-WHITE-SLIM",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Slim fit", "Tapered silhouette"],
    description: "Timeless white oxford dress shirt in modern slim fit. Contemporary styling with classic appeal.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-white-slim/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-white-slim/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-white-slim/detail.jpg"
    ]
  },
  {
    id: 12,
    name: "Classic Oxford Dress Shirt - Light Blue Slim",
    slug: "classic-oxford-light-blue-slim",
    baseDesign: "Classic Oxford", 
    fit: "Slim",
    color: "Light Blue",
    colorFamily: "Blue",
    colorCode: "#ADD8E6",
    sizes: ["S", "M", "L", "XL"],
    price: 64.99,
    comparePrice: 84.99,
    sku: "SHIRTS-OXFORD-LIGHTBLUE-SLIM",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Slim fit", "Tapered silhouette"],
    description: "Professional light blue oxford dress shirt in slim fit. Perfect for modern professionals.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-light-blue-slim/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-light-blue-slim/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-light-blue-slim/detail.jpg"
    ]
  },
  {
    id: 13,
    name: "Classic Oxford Dress Shirt - Navy Slim",
    slug: "classic-oxford-navy-slim",
    baseDesign: "Classic Oxford",
    fit: "Slim",
    color: "Navy",
    colorFamily: "Blue",
    colorCode: "#000080",
    sizes: ["S", "M", "L", "XL"],
    price: 69.99,
    comparePrice: 89.99,
    sku: "SHIRTS-OXFORD-NAVY-SLIM",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Slim fit", "Tapered silhouette"],
    description: "Bold navy oxford dress shirt in slim fit. Contemporary style with professional appeal.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-navy-slim/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-navy-slim/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-navy-slim/detail.jpg"
    ]
  },
  {
    id: 14,
    name: "Classic Oxford Dress Shirt - Black Slim",
    slug: "classic-oxford-black-slim",
    baseDesign: "Classic Oxford",
    fit: "Slim",
    color: "Black",
    colorFamily: "Neutral",
    colorCode: "#000000",
    sizes: ["S", "M", "L", "XL"],
    price: 69.99,
    comparePrice: 89.99,
    sku: "SHIRTS-OXFORD-BLACK-SLIM",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Slim fit", "Tapered silhouette"],
    description: "Sophisticated black oxford dress shirt in slim fit. Modern formal styling.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-black-slim/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-black-slim/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-black-slim/detail.jpg"
    ]
  },
  {
    id: 15,
    name: "Classic Oxford Dress Shirt - Gray Slim",
    slug: "classic-oxford-gray-slim",
    baseDesign: "Classic Oxford",
    fit: "Slim",
    color: "Gray",
    colorFamily: "Neutral",
    colorCode: "#808080",
    sizes: ["S", "M", "L", "XL"],
    price: 64.99,
    comparePrice: 84.99,
    sku: "SHIRTS-OXFORD-GRAY-SLIM",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Slim fit", "Tapered silhouette"],
    description: "Modern gray oxford dress shirt in slim fit. Stylish contemporary option.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-gray-slim/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-gray-slim/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-gray-slim/detail.jpg"
    ]
  },
  {
    id: 16,
    name: "Classic Oxford Dress Shirt - Pink Slim",
    slug: "classic-oxford-pink-slim",
    baseDesign: "Classic Oxford",
    fit: "Slim",
    color: "Pink",
    colorFamily: "Pink",
    colorCode: "#FFC0CB",
    sizes: ["S", "M", "L", "XL"],
    price: 67.99,
    comparePrice: 87.99,
    sku: "SHIRTS-OXFORD-PINK-SLIM",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Slim fit", "Tapered silhouette"],
    description: "Elegant pink oxford dress shirt in slim fit. Modern color with contemporary styling.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-pink-slim/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-pink-slim/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-pink-slim/detail.jpg"
    ]
  },
  {
    id: 17,
    name: "Classic Oxford Dress Shirt - Lavender Slim",
    slug: "classic-oxford-lavender-slim",
    baseDesign: "Classic Oxford",
    fit: "Slim",
    color: "Lavender",
    colorFamily: "Purple",
    colorCode: "#E6E6FA",
    sizes: ["S", "M", "L", "XL"],
    price: 67.99,
    comparePrice: 87.99,
    sku: "SHIRTS-OXFORD-LAVENDER-SLIM",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Slim fit", "Tapered silhouette"],
    description: "Refined lavender oxford dress shirt in slim fit. Distinctive modern styling.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-lavender-slim/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-lavender-slim/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-lavender-slim/detail.jpg"
    ]
  },
  {
    id: 18,
    name: "Classic Oxford Dress Shirt - Mint Slim",
    slug: "classic-oxford-mint-slim",
    baseDesign: "Classic Oxford",
    fit: "Slim",
    color: "Mint",
    colorFamily: "Green",
    colorCode: "#98FB98",
    sizes: ["S", "M", "L", "XL"],
    price: 67.99,
    comparePrice: 87.99,
    sku: "SHIRTS-OXFORD-MINT-SLIM",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Slim fit", "Tapered silhouette"],
    description: "Fresh mint oxford dress shirt in slim fit. Contemporary style with modern appeal.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-mint-slim/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-mint-slim/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-mint-slim/detail.jpg"
    ]
  },
  {
    id: 19,
    name: "Classic Oxford Dress Shirt - Cream Slim",
    slug: "classic-oxford-cream-slim",
    baseDesign: "Classic Oxford",
    fit: "Slim",
    color: "Cream",
    colorFamily: "Neutral",
    colorCode: "#FFFDD0",
    sizes: ["S", "M", "L", "XL"],
    price: 64.99,
    comparePrice: 84.99,
    sku: "SHIRTS-OXFORD-CREAM-SLIM",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Slim fit", "Tapered silhouette"],
    description: "Warm cream oxford dress shirt in slim fit. Versatile off-white with modern cut.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-cream-slim/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-cream-slim/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-cream-slim/detail.jpg"
    ]
  },
  {
    id: 20,
    name: "Classic Oxford Dress Shirt - Charcoal Slim",
    slug: "classic-oxford-charcoal-slim",
    baseDesign: "Classic Oxford",
    fit: "Slim",
    color: "Charcoal",
    colorFamily: "Neutral",
    colorCode: "#36454F",
    sizes: ["S", "M", "L", "XL"],
    price: 69.99,
    comparePrice: 89.99,
    sku: "SHIRTS-OXFORD-CHARCOAL-SLIM",
    isActive: true,
    category: "dress-shirts",
    fabric: "100% Cotton Oxford",
    careInstructions: "Machine wash cold, tumble dry low",
    features: ["Button-down collar", "Single chest pocket", "Adjustable cuffs", "Slim fit", "Tapered silhouette"],
    description: "Sharp charcoal oxford dress shirt in slim fit. Modern alternative to black with contemporary styling.",
    imageUrl: "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-charcoal-slim/main.jpg",
    images: [
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-charcoal-slim/main.jpg",
      "https://kct-product-images.s3.us-east-2.amazonaws.com/dress-shirts/oxford-charcoal-slim/detail.jpg"
    ]
  }
];

// Helper functions for data access
const getDressShirts = async () => {
  // Simulate async database call
  return Promise.resolve(dressShirtsInventory);
};

const getDressShirtById = async (id) => {
  // Simulate async database call
  const shirt = dressShirtsInventory.find(shirt => shirt.id === id);
  return Promise.resolve(shirt || null);
};

const getDressShirtsByFit = async (fit) => {
  // Simulate async database call
  const filteredShirts = dressShirtsInventory.filter(shirt => 
    shirt.fit.toLowerCase() === fit.toLowerCase()
  );
  return Promise.resolve(filteredShirts);
};

module.exports = {
  dressShirtsInventory,
  getDressShirts,
  getDressShirtById,
  getDressShirtsByFit
};