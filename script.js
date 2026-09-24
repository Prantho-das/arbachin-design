/**
 * Arbachin (আরবাচীন) Luxury Store Engine
 */

const PRODUCTS = [
  {
    id: "saree-001",
    name: "Burgundy Banarasi Silk Saree",
    category: "sarees",
    categoryName: "Royal Sarees",
    price: 12500,
    originalPrice: 15000,
    image: "assets/image/saree_1.jpg",
    gallery: [
      "assets/image/saree_1.jpg",
      "assets/image/saree_2.jpg",
      "assets/image/saree_3.jpg"
    ],
    fabric: "Pure Banarasi Silk",
    work: "Gold Zari Embroidery",
    colors: ["Burgundy", "Maroon", "Gold"],
    colorHex: ["#671424", "#4a0e1c", "#c9a84c"],
    badge: "Bestseller",
    rating: 4.9,
    reviewsCount: 28,
    sku: "ARB-SAR-001",
    inStock: true,
    description: "Handwoven royal burgundy Banarasi silk saree with intricate gold zari work featuring traditional paisley and floral motifs. The ornamental border and richly detailed pallu make it a sublime masterpiece for bridal and festive celebrations.",
    care: "Dry clean only. Store wrapped in soft muslin cloth. Avoid direct perfume spray.",
    details: [
      "Length: 5.5 meters saree + 0.8 meter unstitched blouse piece",
      "Weave: Authentic Kadwa handloom technique",
      "Zari: Tested electroplated metallic yarn with gold sheen",
      "Origin: Heritage artisan clusters"
    ],
    delivery: "Express dispatched in 2-3 business days. Complimentary insured delivery across Bangladesh."
  },
  {
    id: "saree-002",
    name: "Royal Blue Katan Silk Saree",
    category: "sarees",
    categoryName: "Royal Sarees",
    price: 15000,
    originalPrice: 18500,
    image: "assets/image/saree_2.jpg",
    gallery: [
      "assets/image/saree_2.jpg",
      "assets/image/saree_1.jpg",
      "assets/image/saree_3.jpg"
    ],
    fabric: "Pure Katan Silk",
    work: "Silver & Gold Thread Embroidery",
    colors: ["Royal Blue", "Navy", "Silver"],
    colorHex: ["#142b58", "#0b1730", "#d1d5db"],
    badge: "New Arrival",
    rating: 5.0,
    reviewsCount: 19,
    sku: "ARB-SAR-002",
    inStock: true,
    description: "Exquisite royal blue Katan silk saree adorned with meticulous silver and antique gold needlecraft. The lustrous body drape and grand ornamental pallu evoke royal courts and timeless elegance.",
    care: "Dry clean only. Air occasionally in shade. Never spray water directly on silk.",
    details: [
      "Length: 5.5 meters + 0.8 meter matching blouse fabric",
      "Fabric: 100% fine twisted high-warp pure Katan silk",
      "Work: Minakari resham & fine zari border",
      "Occasion: Grand evening gala, reception & festivities"
    ],
    delivery: "Complimentary gift packaging and insured doorstep dispatch in 2-4 days."
  },
  {
    id: "saree-003",
    name: "Emerald Green Banarasi Saree",
    category: "sarees",
    categoryName: "Royal Sarees",
    price: 13800,
    originalPrice: 16000,
    image: "assets/image/saree_3.jpg",
    gallery: [
      "assets/image/saree_3.jpg",
      "assets/image/saree_2.jpg",
      "assets/image/saree_1.jpg"
    ],
    fabric: "Pure Banarasi Silk",
    work: "Gold Banarasi Weave",
    colors: ["Emerald Green", "Forest Green", "Gold"],
    colorHex: ["#0f4c3a", "#1a3c2a", "#c9a84c"],
    badge: "Exclusive",
    rating: 4.8,
    reviewsCount: 34,
    sku: "ARB-SAR-003",
    inStock: true,
    description: "A breathtaking emerald green Banarasi silk saree reflecting rich Bengali heritage. Woven with heritage floral jaal patterns in antique gold filament, creating an aura of timeless majesty.",
    care: "Strict dry cleaning only. Iron on reverse with low heat over silk cloth.",
    details: [
      "Length: 5.5 meters + matching designer blouse piece",
      "Technique: Traditional warp-weighted hand-loom",
      "Luster: Natural rich organic silk sheen",
      "Weight: Approx. 780 grams of pure handwoven luxury"
    ],
    delivery: "Dispatched within 48 hours in Arbachin signature keepsake box."
  },
  {
    id: "three-piece-001",
    name: "Rose Pink Embroidered Three Piece",
    category: "three-piece",
    categoryName: "Three Piece",
    price: 8500,
    originalPrice: 10500,
    image: "assets/image/saree_1.jpg",
    gallery: [
      "assets/image/saree_1.jpg",
      "assets/image/saree_3.jpg",
      "assets/image/saree_2.jpg"
    ],
    fabric: "Georgette",
    work: "Sequin & Thread Embroidery",
    colors: ["Dusty Rose", "Rose Pink", "Gold"],
    colorHex: ["#c47a88", "#e8b4bd", "#c9a84c"],
    badge: "Trending",
    rating: 4.9,
    reviewsCount: 42,
    sku: "ARB-TP-001",
    inStock: true,
    description: "Sophisticated dusty rose three-piece ensemble tailored with delicate French sequin embroidery on featherlight georgette. Includes an embellished A-line kameez, tailored wide-leg trousers, and a fluid organza dupatta.",
    care: "Gentle dry clean or delicate cold hand rinse with mild silk detergent.",
    details: [
      "Set includes: Embroidered Kameez, Palazzo/Pant, Handcrafted Dupatta",
      "Sizes: Custom stitched or Semi-stitched available (XS to XXL)",
      "Dupatta: 2.5 meters with scalloped zari borders",
      "Lining: Breathable pure cotton santoon included"
    ],
    delivery: "Free standard home delivery within 3-5 business days."
  },
  {
    id: "three-piece-002",
    name: "Navy Anarkali Three Piece",
    category: "three-piece",
    categoryName: "Three Piece",
    price: 9200,
    originalPrice: 11800,
    image: "assets/image/saree_2.jpg",
    gallery: [
      "assets/image/saree_2.jpg",
      "assets/image/saree_1.jpg",
      "assets/image/saree_3.jpg"
    ],
    fabric: "Silk Blend",
    work: "Gold & Silver Embroidery",
    colors: ["Midnight Navy", "Gold", "Royal Blue"],
    colorHex: ["#0f1f38", "#c9a84c", "#1c3d70"],
    badge: "Signature",
    rating: 5.0,
    reviewsCount: 31,
    sku: "ARB-TP-002",
    inStock: true,
    description: "Stately midnight navy anarkali gown set adorned with heavy zardozi yoke embroidery and glittering kalis. Paired with a fitted silk churidar and an ethereal tissue dupatta for majestic celebrations.",
    care: "Dry clean only. Store on padded hanger in garment bag.",
    details: [
      "Kameez: 32-kali floor flare with high-definition zari yoke",
      "Bottom: Stretch silk churidar with adjustable waistband",
      "Dupatta: Tissue silk with four-sided zardozi cutwork border",
      "Workmanship: Hand-embroidered by master craftsmen"
    ],
    delivery: "Complimentary nationwide courier delivery in 3-5 days."
  },
  {
    id: "three-piece-003",
    name: "Ivory Bridal Three Piece",
    category: "three-piece",
    categoryName: "Three Piece",
    price: 11000,
    originalPrice: 14000,
    image: "assets/image/saree_3.jpg",
    gallery: [
      "assets/image/saree_3.jpg",
      "assets/image/saree_2.jpg",
      "assets/image/saree_1.jpg"
    ],
    fabric: "Raw Silk & Net",
    work: "Pearl & Floral Embroidery",
    colors: ["Ivory", "Cream", "Pearl"],
    colorHex: ["#f5f2eb", "#ded7c8", "#edebe6"],
    badge: "Limited Edition",
    rating: 4.9,
    reviewsCount: 15,
    sku: "ARB-TP-003",
    inStock: true,
    description: "Serene ivory bridal three-piece set featuring exquisite real pearl embellishments and pastel floral threadwork on pristine raw silk. Complete with an artisanal net dupatta draped with micro-pearl tassels.",
    care: "Specialist dry cleaning only. Handle pearl embellishments with care.",
    details: [
      "Kameez: Straight-cut structured raw silk with jewel neckline",
      "Bottom: Wide-leg raw silk culottes with scalloped hem",
      "Dupatta: Soft French net with scattered pearl motifs",
      "Lining: Pre-shrunk cotton silk interior"
    ],
    delivery: "Signature white-glove boxed delivery within 3-5 days."
  }
];

class ArbachinStore {
  constructor() {
    this.cart = this.loadState('arbachin_cart', []);
    this.wishlist = this.loadState('arbachin_wishlist', []);
    this.init();
  }

  loadState(key, fallback) {
    try {
      const d = localStorage.getItem(key);
      return d ? JSON.parse(d) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  saveState(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {}
  }

  init() {
    this.updateCartBadge();
    this.updateWishlistBadge();
    this.initNavbarScroll();
    this.bindEvents();
  }

  formatPrice(n) {
    return '৳' + Number(n).toLocaleString('en-BD');
  }

  addToCart(id, qty = 1, size = 'Standard', color = null) {
    const prod = PRODUCTS.find(p => p.id === id);
    if (!prod) return;

    const chosenColor = color || prod.colors[0];
    const existing = this.cart.find(item => item.id === id && item.size === size && item.color === chosenColor);

    if (existing) {
      existing.quantity += qty;
    } else {
      this.cart.push({
        id: prod.id,
        name: prod.name,
        price: prod.price,
        image: prod.image,
        category: prod.categoryName,
        size: size,
        color: chosenColor,
        quantity: qty
      });
    }

    this.saveState('arbachin_cart', this.cart);
    this.updateCartBadge();
    this.renderCartDrawer();
    this.showToast(`Added to Bag: ${prod.name}`);
    this.openCartDrawer();
  }

  removeFromCart(index) {
    if (index >= 0 && index < this.cart.length) {
      const removed = this.cart.splice(index, 1)[0];
      this.saveState('arbachin_cart', this.cart);
      this.updateCartBadge();
      this.renderCartDrawer();
      this.showToast(`Removed from Bag: ${removed.name}`);
    }
  }

  updateQuantity(index, delta) {
    if (this.cart[index]) {
      this.cart[index].quantity += delta;
      if (this.cart[index].quantity <= 0) {
        this.removeFromCart(index);
        return;
      }
      this.saveState('arbachin_cart', this.cart);
      this.updateCartBadge();
      this.renderCartDrawer();
    }
  }

  getCartTotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  updateCartBadge() {
    const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count-badge').forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'inline-flex' : 'none';
    });
  }

  toggleWishlist(id) {
    const idx = this.wishlist.indexOf(id);
    const prod = PRODUCTS.find(p => p.id === id);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
      this.showToast(`Removed from Wishlist`);
    } else {
      this.wishlist.push(id);
      this.showToast(`Saved to Wishlist: ${prod ? prod.name : ''}`);
    }
    this.saveState('arbachin_wishlist', this.wishlist);
    this.updateWishlistBadge();
    this.refreshWishlistButtons();
  }

  updateWishlistBadge() {
    const count = this.wishlist.length;
    document.querySelectorAll('.wishlist-count-badge').forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'inline-flex' : 'none';
    });
  }

  refreshWishlistButtons() {
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      const id = btn.getAttribute('data-wishlist-id');
      const isFav = this.wishlist.includes(id);
      const svg = btn.querySelector('svg');
      if (svg) {
        if (isFav) {
          svg.setAttribute('fill', '#c9a84c');
          svg.setAttribute('stroke', '#c9a84c');
        } else {
          svg.setAttribute('fill', 'none');
          svg.setAttribute('stroke', 'currentColor');
        }
      }
    });
  }

  showToast(msg) {
    let box = document.getElementById('toast-box');
    if (!box) {
      box = document.createElement('div');
      box.id = 'toast-box';
      box.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:10px;pointer-events:none;max-width:360px;width:100%;padding:0 16px;';
      document.body.appendChild(box);
    }

    const t = document.createElement('div');
    t.style.cssText = 'background:#0f2419;color:#f4efe6;border:1px solid #c9a84c;padding:14px 18px;font-size:13px;font-family:sans-serif;box-shadow:0 8px 24px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:space-between;pointer-events:auto;transition:all 0.3s ease;';
    t.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="color:#c9a84c;font-size:16px;">✦</span>
        <span>${msg}</span>
      </div>
      <button onclick="this.parentElement.remove()" style="background:none;border:none;color:#c9a84c;cursor:pointer;font-size:16px;padding:0 4px;">&times;</button>
    `;
    box.appendChild(t);
    setTimeout(() => {
      if (t.parentElement) {
        t.style.opacity = '0';
        t.style.transform = 'translateY(10px)';
        setTimeout(() => t.remove(), 300);
      }
    }, 3500);
  }

  openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
      this.renderCartDrawer();
      drawer.style.transform = 'translateX(0)';
      overlay.style.display = 'block';
      setTimeout(() => overlay.style.opacity = '1', 10);
      document.body.style.overflow = 'hidden';
    }
  }

  closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
      drawer.style.transform = 'translateX(100%)';
      overlay.style.opacity = '0';
      setTimeout(() => overlay.style.display = 'none', 300);
      document.body.style.overflow = '';
    }
  }

  renderCartDrawer() {
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal-price');
    const freeShippingText = document.getElementById('free-shipping-text');
    const freeShippingProgress = document.getElementById('free-shipping-progress');

    if (!container) return;

    if (this.cart.length === 0) {
      container.innerHTML = `
        <div style="padding:48px 24px;text-align:center;">
          <div style="width:64px;height:64px;border-radius:50%;background:#f0ebe1;color:#1a3c2a;display:inline-flex;align-items:center;justify-content:center;margin-bottom:16px;font-size:24px;">🛍️</div>
          <h3 style="font-family:'Playfair Display',serif;font-size:20px;color:#1a3c2a;margin-bottom:8px;">Your Bag is Empty</h3>
          <p style="font-size:13px;color:#6b7770;margin-bottom:20px;">Explore our majestic sarees and artisanal three-piece creations.</p>
          <a href="category.html" onclick="arbachinApp.closeCartDrawer()" class="btn-forest" style="padding:10px 24px;font-size:11px;">Explore Collections</a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = '৳0';
      if (freeShippingProgress) freeShippingProgress.style.width = '0%';
      if (freeShippingText) freeShippingText.textContent = 'Add ৳5,000 for Complimentary Insured Shipping';
      return;
    }

    const total = this.getCartTotal();
    if (subtotalEl) subtotalEl.textContent = this.formatPrice(total);

    const threshold = 5000;
    const progress = Math.min(100, (total / threshold) * 100);
    if (freeShippingProgress) freeShippingProgress.style.width = `${progress}%`;
    if (freeShippingText) {
      if (total >= threshold) {
        freeShippingText.innerHTML = `<span style="color:#1a3c2a;font-weight:600;">✨ You have qualified for Complimentary Insured Shipping!</span>`;
      } else {
        freeShippingText.innerHTML = `Add <strong>${this.formatPrice(threshold - total)}</strong> more for <strong>Complimentary Shipping</strong>`;
      }
    }

    container.innerHTML = this.cart.map((item, idx) => `
      <div style="display:flex;gap:16px;padding:16px;border-bottom:1px solid #dfd7ca;background:#ffffff;">
        <div style="width:70px;height:95px;flex-shrink:0;overflow:hidden;border:1px solid #dfd7ca;">
          <img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;object-position:top;" />
        </div>
        <div style="flex:1;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start;">
              <h4 style="font-family:'Playfair Display',serif;font-size:14px;font-weight:600;color:#1a3c2a;line-height:1.3;">${item.name}</h4>
              <button onclick="arbachinApp.removeFromCart(${idx})" style="background:none;border:none;color:#98a39c;cursor:pointer;font-size:18px;padding:0 4px;" title="Remove">&times;</button>
            </div>
            <p style="font-size:11px;color:#6b7770;margin-top:4px;">${item.category} • Color: ${item.color}</p>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;">
            <div style="display:inline-flex;align-items:center;border:1px solid #dfd7ca;">
              <button onclick="arbachinApp.updateQuantity(${idx}, -1)" style="width:26px;height:26px;background:none;border:none;cursor:pointer;font-weight:bold;color:#1a3c2a;">-</button>
              <span style="width:28px;text-align:center;font-size:12px;font-weight:600;color:#1a3c2a;">${item.quantity}</span>
              <button onclick="arbachinApp.updateQuantity(${idx}, 1)" style="width:26px;height:26px;background:none;border:none;cursor:pointer;font-weight:bold;color:#1a3c2a;">+</button>
            </div>
            <span style="font-family:'Playfair Display',serif;font-weight:700;font-size:15px;color:#1a3c2a;">${this.formatPrice(item.price * item.quantity)}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  openQuickView(id) {
    const prod = PRODUCTS.find(p => p.id === id);
    if (!prod) return;

    let m = document.getElementById('qv-modal');
    if (!m) {
      m = document.createElement('div');
      m.id = 'qv-modal';
      m.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.7);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:16px;';
      document.body.appendChild(m);
    }

    m.innerHTML = `
      <div style="background:#ffffff;border:1px solid #c9a84c;max-width:850px;width:100%;max-height:90vh;overflow-y:auto;position:relative;box-shadow:0 20px 50px rgba(0,0,0,0.3);">
        <button onclick="arbachinApp.closeQuickView()" style="position:absolute;top:12px;right:12px;z-index:10;width:32px;height:32px;border-radius:50%;background:#ffffff;border:1px solid #dfd7ca;color:#1a3c2a;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;">&times;</button>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:24px;padding:24px;">
          <div style="position:relative;aspect-ratio:3/4;overflow:hidden;background:#f4efe6;border:1px solid #dfd7ca;">
            <img src="${prod.image}" alt="${prod.name}" style="width:100%;height:100%;object-fit:cover;object-position:top;" />
            <span style="position:absolute;top:12px;left:12px;background:#c9a84c;color:#0d1712;font-family:'Cinzel',serif;font-size:9px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;padding:4px 8px;">${prod.badge}</span>
          </div>
          <div style="display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <span style="font-family:'Cinzel',serif;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;color:#c9a84c;font-weight:bold;">${prod.categoryName}</span>
              <h2 style="font-family:'Playfair Display',serif;font-size:24px;color:#1a3c2a;margin:6px 0 10px;line-height:1.2;">${prod.name}</h2>
              <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:14px;">
                <span style="font-family:'Playfair Display',serif;font-size:24px;font-weight:700;color:#1a3c2a;">${this.formatPrice(prod.price)}</span>
                <span style="font-size:14px;color:#98a39c;text-decoration:line-through;">${this.formatPrice(prod.originalPrice)}</span>
              </div>
              <p style="font-size:13px;color:#5c6861;line-height:1.6;margin-bottom:16px;">${prod.description}</p>
              <div style="padding:12px 0;border-top:1px solid #dfd7ca;border-bottom:1px solid #dfd7ca;margin-bottom:16px;font-size:12px;color:#1a3c2a;">
                <p><strong>Fabric:</strong> ${prod.fabric}</p>
                <p style="margin-top:4px;"><strong>Craftsmanship:</strong> ${prod.work}</p>
              </div>
            </div>
            <div>
              <button onclick="arbachinApp.addToCart('${prod.id}', 1); arbachinApp.closeQuickView();" class="btn-gold" style="width:100%;margin-bottom:10px;">
                Add to Shopping Bag
              </button>
              <a href="product.html?id=${prod.id}" style="display:block;text-align:center;font-size:11px;font-family:'Cinzel',serif;letter-spacing:0.15em;text-transform:uppercase;color:#1a3c2a;text-decoration:underline;">
                View Full Product Details →
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    m.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  closeQuickView() {
    const m = document.getElementById('qv-modal');
    if (m) {
      m.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  openSearchModal() {
    let m = document.getElementById('search-modal');
    if (!m) {
      m = document.createElement('div');
      m.id = 'search-modal';
      m.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(13,23,18,0.92);backdrop-filter:blur(8px);padding:40px 20px;display:flex;justify-content:center;';
      m.innerHTML = `
        <div style="max-w:700px;width:100%;color:#f4efe6;position:relative;">
          <button onclick="arbachinApp.closeSearchModal()" style="position:absolute;top:-20px;right:0;background:none;border:none;color:#c9a84c;font-size:32px;cursor:pointer;">&times;</button>
          <div style="border-bottom:2px solid #c9a84c;padding-bottom:10px;margin-top:40px;display:flex;align-items:center;">
            <input id="global-search-input" type="text" placeholder="Search sarees, three piece, fabrics, colors..." style="width:100%;background:transparent;border:none;outline:none;font-family:'Playfair Display',serif;font-size:24px;color:#f4efe6;" autofocus />
          </div>
          <div id="search-results-box" style="margin-top:24px;max-height:60vh;overflow-y:auto;display:flex;flex-direction:column;gap:12px;"></div>
        </div>
      `;
      document.body.appendChild(m);

      document.getElementById('global-search-input').addEventListener('input', (e) => {
        const q = e.target.value.trim().toLowerCase();
        const resBox = document.getElementById('search-results-box');
        if (!q) {
          resBox.innerHTML = '';
          return;
        }
        const matches = PRODUCTS.filter(p => 
          p.name.toLowerCase().includes(q) || 
          p.fabric.toLowerCase().includes(q) || 
          p.work.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
        if (matches.length === 0) {
          resBox.innerHTML = `<p style="text-align:center;padding:24px;color:#98a39c;font-size:14px;">No creations found matching "${q}"</p>`;
          return;
        }
        resBox.innerHTML = matches.map(p => `
          <a href="product.html?id=${p.id}" onclick="arbachinApp.closeSearchModal()" style="display:flex;align-items:center;gap:16px;padding:12px;background:rgba(255,255,255,0.06);border:1px solid rgba(201,168,76,0.3);text-decoration:none;color:#f4efe6;">
            <img src="${p.image}" alt="${p.name}" style="width:50px;height:65px;object-fit:cover;" />
            <div style="flex:1;">
              <span style="font-family:'Cinzel',serif;font-size:10px;color:#c9a84c;text-transform:uppercase;">${p.categoryName}</span>
              <h4 style="font-family:'Playfair Display',serif;font-size:16px;margin:2px 0;">${p.name}</h4>
              <p style="font-size:12px;color:#98a39c;">${p.fabric}</p>
            </div>
            <span style="font-family:'Playfair Display',serif;font-size:16px;font-weight:bold;color:#c9a84c;">${arbachinApp.formatPrice(p.price)}</span>
          </a>
        `).join('');
      });
    }
    m.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const inp = document.getElementById('global-search-input');
      if (inp) inp.focus();
    }, 100);
  }

  closeSearchModal() {
    const m = document.getElementById('search-modal');
    if (m) {
      m.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  initNavbarScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;

    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname === '';

    const onScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add('header-scrolled');
        header.classList.remove('header-transparent');
      } else if (isHomePage) {
        header.classList.remove('header-scrolled');
        header.classList.add('header-transparent');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  bindEvents() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeCartDrawer();
        this.closeQuickView();
        this.closeSearchModal();
        this.closeMobileNav();
      }
    });

    const mobBtn = document.getElementById('mobile-menu-btn');
    const mobClose = document.getElementById('mobile-menu-close');
    const mobOverlay = document.getElementById('mobile-menu-overlay');

    if (mobBtn) {
      mobBtn.addEventListener('click', () => this.openMobileNav());
    }
    if (mobClose) {
      mobClose.addEventListener('click', () => this.closeMobileNav());
    }
    if (mobOverlay) {
      mobOverlay.addEventListener('click', () => this.closeMobileNav());
    }
  }

  openMobileNav() {
    const d = document.getElementById('mobile-menu-drawer');
    const o = document.getElementById('mobile-menu-overlay');
    if (d && o) {
      d.style.transform = 'translateX(0)';
      o.style.display = 'block';
      setTimeout(() => o.style.opacity = '1', 10);
      document.body.style.overflow = 'hidden';
    }
  }

  closeMobileNav() {
    const d = document.getElementById('mobile-menu-drawer');
    const o = document.getElementById('mobile-menu-overlay');
    if (d && o) {
      d.style.transform = 'translateX(-100%)';
      o.style.opacity = '0';
      setTimeout(() => o.style.display = 'none', 300);
      document.body.style.overflow = '';
    }
  }

  generateProductCardHTML(product) {
    const isWishlist = this.wishlist.includes(product.id);
    return `
      <div class="product-card group">
        <div class="product-image-box">
          <a href="product.html?id=${product.id}" style="display:block;width:100%;height:100%;">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </a>
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
          
          <button onclick="arbachinApp.toggleWishlist('${product.id}')" data-wishlist-id="${product.id}" style="position:absolute;top:10px;right:10px;width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,0.9);border:1px solid #dfd7ca;display:flex;align-items:center;justify-content:center;color:#1a3c2a;cursor:pointer;z-index:5;" title="Wishlist">
            <svg style="width:16px;height:16px;" fill="${isWishlist ? '#c9a84c' : 'none'}" stroke="${isWishlist ? '#c9a84c' : 'currentColor'}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </button>

          <div style="position:absolute;inset-x:0;bottom:0;padding:10px;background:linear-gradient(to top, rgba(0,0,0,0.7), transparent);display:flex;gap:8px;" class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button onclick="arbachinApp.openQuickView('${product.id}')" style="flex:1;background:#ffffff;border:none;color:#1a3c2a;font-family:'Cinzel',serif;font-size:10px;font-weight:bold;letter-spacing:0.15em;text-transform:uppercase;padding:8px 0;cursor:pointer;">
              Quick View
            </button>
            <button onclick="arbachinApp.addToCart('${product.id}', 1)" style="width:36px;height:36px;background:#1a3c2a;border:1px solid #c9a84c;color:#f4efe6;display:flex;align-items:center;justify-content:center;cursor:pointer;" title="Add to Bag">
              <svg style="width:16px;height:16px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            </button>
          </div>
        </div>

        <div class="product-info-box">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
              <span style="font-family:'Cinzel',serif;font-size:10px;color:#c9a84c;text-transform:uppercase;letter-spacing:0.15em;font-weight:bold;">${product.categoryName}</span>
              <span style="font-size:11px;color:#c9a84c;">★ <span style="color:#5c6861;">${product.rating}</span></span>
            </div>
            <a href="product.html?id=${product.id}" class="product-title">${product.name}</a>
            <p style="font-size:12px;color:#5c6861;margin-bottom:8px;">${product.fabric}</p>
          </div>

          <div style="display:flex;justify-content:space-between;align-items:baseline;padding-top:10px;border-top:1px solid #f4efe6;">
            <div>
              <span class="product-price-current">${this.formatPrice(product.price)}</span>
              ${product.originalPrice ? `<span class="product-price-old">${this.formatPrice(product.originalPrice)}</span>` : ''}
            </div>
            <a href="product.html?id=${product.id}" style="font-family:'Cinzel',serif;font-size:10px;font-weight:bold;letter-spacing:0.15em;text-transform:uppercase;color:#1a3c2a;text-decoration:none;">View →</a>
          </div>
        </div>
      </div>
    `;
  }
}

window.arbachinApp = new ArbachinStore();
