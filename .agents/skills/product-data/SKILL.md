---
name: product-data
description: >-
  Use this skill to reference Arbachin product catalog data including
  sarees and three-piece sets with names, prices, descriptions, images,
  and metadata.
---

# Arbachin Product Catalog

## Categories
1. **Sarees** — Traditional and designer sarees
2. **Three Piece** — Salwar kameez sets with dupatta

## Products

### Sarees

#### 1. Burgundy Banarasi Silk Saree
- **ID**: `saree-001`
- **Price**: ৳12,500
- **Original Price**: ৳15,000
- **Image**: `assets/image/saree_1.jpg`
- **Colors**: Burgundy, Maroon
- **Fabric**: Pure Banarasi Silk
- **Work**: Gold Zari Embroidery
- **Description**: Handwoven burgundy Banarasi silk saree with intricate gold zari work featuring traditional paisley and floral motifs. The ornamental border and richly detailed pallu make it perfect for weddings and festive occasions.
- **Care**: Dry clean only. Store in muslin cloth.
- **Delivery**: 5-7 business days

#### 2. Royal Blue Katan Silk Saree
- **ID**: `saree-002`
- **Price**: ৳15,000
- **Original Price**: ৳18,500
- **Image**: `assets/image/saree_2.jpg`
- **Colors**: Royal Blue, Navy
- **Fabric**: Pure Katan Silk
- **Work**: Silver & Gold Thread Embroidery
- **Description**: Exquisite royal blue Katan silk saree adorned with silver and gold thread work. The elegant pallu features intricate paisley designs with meticulous craftsmanship, creating a regal statement piece.
- **Care**: Dry clean only. Store flat, away from direct sunlight.
- **Delivery**: 5-7 business days

#### 3. Emerald Green Banarasi Saree
- **ID**: `saree-003`
- **Price**: ৳13,800
- **Original Price**: ৳16,000
- **Image**: `assets/image/saree_3.jpg`
- **Colors**: Emerald Green, Forest Green
- **Fabric**: Pure Banarasi Silk
- **Work**: Gold Banarasi Weave
- **Description**: A stunning emerald green Banarasi silk saree featuring traditional gold weave work with elaborate floral patterns. The rich silk fabric and ornate border create an opulent look for celebrations.
- **Care**: Dry clean only. Do not wring.
- **Delivery**: 5-7 business days

### Three Piece Sets

#### 4. Rose Pink Embroidered Three Piece
- **ID**: `three-piece-001`
- **Price**: ৳8,500
- **Original Price**: ৳10,500
- **Image**: `assets/image/saree_1.jpg` (reused)
- **Colors**: Dusty Rose, Pink
- **Fabric**: Georgette
- **Work**: Sequin & Thread Embroidery
- **Description**: Elegant dusty rose pink three-piece set featuring an A-line kurta with heavy sequin and thread embroidery work, matching palazzo pants, and a delicately embroidered dupatta.
- **Care**: Gentle hand wash or dry clean
- **Delivery**: 5-7 business days

#### 5. Navy Anarkali Three Piece
- **ID**: `three-piece-002`
- **Price**: ৳9,200
- **Original Price**: ৳11,800
- **Image**: `assets/image/saree_2.jpg` (reused)
- **Colors**: Navy Blue, Midnight
- **Fabric**: Silk Blend
- **Work**: Gold & Silver Embroidery
- **Description**: Stunning midnight navy blue anarkali three-piece set with luxurious gold and silver embroidery. The flowing silhouette features a long anarkali kurta, churidar bottom, and heavily embroidered dupatta.
- **Care**: Dry clean recommended
- **Delivery**: 5-7 business days

#### 6. Ivory Bridal Three Piece
- **ID**: `three-piece-003`
- **Price**: ৳11,000
- **Original Price**: ৳14,000
- **Image**: `assets/image/saree_3.jpg` (reused)
- **Colors**: Ivory, Off-White
- **Fabric**: Raw Silk & Net
- **Work**: Pearl & Floral Embroidery
- **Description**: Luxurious ivory bridal three-piece featuring a straight-cut kurta with intricate pearl and pastel floral embroidery, palazzo pants in matching raw silk, and a sheer net dupatta with delicate border work.
- **Care**: Dry clean only
- **Delivery**: 5-7 business days

## Product Card Data Format
```javascript
{
  id: "saree-001",
  name: "Burgundy Banarasi Silk Saree",
  category: "sarees",
  price: 12500,
  originalPrice: 15000,
  image: "assets/image/saree_1.jpg",
  fabric: "Pure Banarasi Silk",
  badge: "Bestseller" // or "New", "Sale", null
}
```
