/**
 * Arbachin (আরবাচীন) Luxury Fashion E-Commerce
 * Core Application Engine & State Store
 */

const PRODUCTS = [
  {
    id: "saree-001",
    name: "Burgundy Banarasi Silk Saree",
    category: "sarees",
    categoryName: "Sarees",
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
    categoryName: "Sarees",
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
    categoryName: "Sarees",
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
    colors: ["Dusty Rose", "Pastel Pink", "Gold"],
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
    this.activeQuickView = null;
    this.init();
  }

  loadState(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
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
    this.bindGlobalEvents();
    this.initNavbarScroll();
  }

  formatPrice(num) {
    return '৳' + Number(num).toLocaleString('en-BD');
  }

  // Cart Management
  addToCart(productId, quantity = 1, size = 'Standard', selectedColor = null) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = this.cart.findIndex(
      item => item.id === productId && item.size === size && item.color === (selectedColor || product.colors[0])
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        size: size,
        color: selectedColor || product.colors[0],
        quantity: quantity
      });
    }

    this.saveState('arbachin_cart', this.cart);
    this.updateCartBadge();
    this.renderCartDrawer();
    this.showToast(`Added to Bag: ${product.name}`, 'success');
    this.openCartDrawer();
  }

  removeFromCart(index) {
    if (index >= 0 && index < this.cart.length) {
      const removed = this.cart.splice(index, 1)[0];
      this.saveState('arbachin_cart', this.cart);
      this.updateCartBadge();
      this.renderCartDrawer();
      this.showToast(`Removed from Bag: ${removed.name}`, 'info');
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
    document.querySelectorAll('.cart-count-badge').forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  // Wishlist
  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    const product = PRODUCTS.find(p => p.id === productId);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
      this.showToast(`Removed from Wishlist`, 'info');
    } else {
      this.wishlist.push(productId);
      this.showToast(`Added to Wishlist: ${product ? product.name : ''}`, 'success');
    }
    this.saveState('arbachin_wishlist', this.wishlist);
    this.updateWishlistBadge();
    this.refreshWishlistIcons();
  }

  updateWishlistBadge() {
    const count = this.wishlist.length;
    document.querySelectorAll('.wishlist-count-badge').forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  refreshWishlistIcons() {
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      const id = btn.getAttribute('data-wishlist-id');
      const isFav = this.wishlist.includes(id);
      const icon = btn.querySelector('svg');
      if (icon) {
        if (isFav) {
          icon.setAttribute('fill', '#c9a84c');
          icon.setAttribute('stroke', '#c9a84c');
        } else {
          icon.setAttribute('fill', 'none');
          icon.setAttribute('stroke', 'currentColor');
        }
      }
    });
  }

  // Toast Notifications
  showToast(message, type = 'success') {
    let container = document.getElementById('arbachin-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'arbachin-toast-container';
      container.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none max-w-sm w-full px-4';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-enter pointer-events-auto flex items-center justify-between p-4 rounded-none shadow-xl border border-[#c9a84c]/40 text-sm font-medium ' +
      (type === 'success' ? 'bg-[#0f2419] text-[#f0ebe1]' : 'bg-[#1a3c2a] text-[#f0ebe1]');
    
    toast.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="text-[#c9a84c]">
          ${type === 'success' ? `
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          ` : `
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          `}
        </span>
        <span>${message}</span>
      </div>
      <button onclick="this.parentElement.remove()" class="text-[#c9a84c] hover:text-white p-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      if (toast.parentElement) {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }
    }, 3500);
  }

  // Drawers & Modals
  openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
      this.renderCartDrawer();
      drawer.classList.remove('translate-x-full');
      overlay.classList.remove('hidden');
      setTimeout(() => overlay.classList.remove('opacity-0'), 10);
      document.body.style.overflow = 'hidden';
    }
  }

  closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
      drawer.classList.add('translate-x-full');
      overlay.classList.add('opacity-0');
      setTimeout(() => overlay.classList.add('hidden'), 300);
      document.body.style.overflow = '';
    }
  }

  renderCartDrawer() {
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal-price');
    const freeShippingProgress = document.getElementById('free-shipping-progress');
    const freeShippingText = document.getElementById('free-shipping-text');
    const checkoutBtn = document.getElementById('cart-checkout-btn');

    if (!container) return;

    if (this.cart.length === 0) {
      container.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center text-center p-8">
          <div class="w-20 h-20 rounded-full bg-[#1a3c2a]/5 flex items-center justify-center text-[#1a3c2a] mb-4">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          </div>
          <h3 class="font-serif text-2xl text-[#1a3c2a] mb-2 font-medium">Your Bag is Empty</h3>
          <p class="text-sm text-[#6b7770] mb-6 max-w-xs">Explore our exquisite collection of handwoven sarees and bespoke three-piece ensembles.</p>
          <a href="category.html" onclick="arbachinApp.closeCartDrawer()" class="luxury-btn inline-block bg-[#1a3c2a] text-[#f0ebe1] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[#c9a84c] hover:text-[#0f1a14] transition-all">
            Discover Collections
          </a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = '৳0';
      if (freeShippingProgress) freeShippingProgress.style.width = '0%';
      if (freeShippingText) freeShippingText.textContent = 'Add ৳5,000 more for Complimentary Insured Shipping';
      if (checkoutBtn) checkoutBtn.setAttribute('disabled', 'true');
      return;
    }

    if (checkoutBtn) checkoutBtn.removeAttribute('disabled');

    const total = this.getCartTotal();
    if (subtotalEl) subtotalEl.textContent = this.formatPrice(total);

    // Free shipping threshold ৳5,000
    const threshold = 5000;
    const progress = Math.min(100, (total / threshold) * 100);
    if (freeShippingProgress) freeShippingProgress.style.width = `${progress}%`;
    if (freeShippingText) {
      if (total >= threshold) {
        freeShippingText.innerHTML = `<span class="text-[#1a3c2a] font-semibold">🎉 You have unlocked Free Express Shipping!</span>`;
      } else {
        const remaining = threshold - total;
        freeShippingText.innerHTML = `Add <strong class="text-[#1a3c2a]">${this.formatPrice(remaining)}</strong> more to unlock <strong>Complimentary Shipping</strong>`;
      }
    }

    container.innerHTML = this.cart.map((item, idx) => `
      <div class="flex gap-4 p-4 border-b border-[#dfd8cb]/60 hover:bg-[#fbf9f5] transition-colors">
        <div class="w-20 h-28 shrink-0 overflow-hidden bg-[#f0ebe1] border border-[#dfd8cb]">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover object-top" />
        </div>
        <div class="flex-1 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-start">
              <h4 class="font-serif text-sm font-semibold text-[#1a3c2a] leading-tight pr-2">${item.name}</h4>
              <button onclick="arbachinApp.removeFromCart(${idx})" class="text-[#98a39c] hover:text-[#9e1c1c] transition-colors p-1" title="Remove">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
              </button>
            </div>
            <p class="text-xs text-[#6b7770] mt-1 capitalize">${item.category} • Size: ${item.size}</p>
            <p class="text-xs text-[#6b7770]">Color: ${item.color}</p>
          </div>
          <div class="flex justify-between items-center mt-3 pt-2 border-t border-[#dfd8cb]/30">
            <div class="flex items-center border border-[#dfd8cb] bg-white">
              <button onclick="arbachinApp.updateQuantity(${idx}, -1)" class="w-7 h-7 flex items-center justify-center text-xs text-[#1a3c2a] hover:bg-[#f0ebe1]">-</button>
              <span class="w-8 text-center text-xs font-medium text-[#1a3c2a]">${item.quantity}</span>
              <button onclick="arbachinApp.updateQuantity(${idx}, 1)" class="w-7 h-7 flex items-center justify-center text-xs text-[#1a3c2a] hover:bg-[#f0ebe1]">+</button>
            </div>
            <span class="font-serif font-semibold text-sm text-[#1a3c2a]">${this.formatPrice(item.price * item.quantity)}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Quick View Modal
  openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    this.activeQuickView = product;
    let modal = document.getElementById('quick-view-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'quick-view-modal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-4xl bg-white shadow-2xl overflow-hidden border border-[#c9a84c]/30 transform transition-all animate-fadeIn">
        <button onclick="arbachinApp.closeQuickView()" class="absolute top-4 right-4 z-20 w-9 h-9 bg-white/90 hover:bg-[#1a3c2a] hover:text-white rounded-full flex items-center justify-center text-[#1a3c2a] transition-all shadow-md">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div class="grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto">
          <!-- Gallery -->
          <div class="bg-[#f8f6f0] p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#dfd8cb]">
            <div class="relative aspect-[3/4] w-full max-w-sm overflow-hidden border border-[#dfd8cb] shadow-sm bg-white">
              <img id="qv-main-img" src="${product.image}" alt="${product.name}" class="w-full h-full object-cover object-top" />
              ${product.badge ? `<span class="absolute top-3 left-3 badge-gold text-[10px] tracking-widest uppercase px-3 py-1">${product.badge}</span>` : ''}
            </div>
            <div class="flex gap-2 mt-4 justify-center">
              ${product.gallery.map((img, i) => `
                <button onclick="document.getElementById('qv-main-img').src='${img}'" class="w-14 h-16 border border-[#dfd8cb] hover:border-[#c9a84c] overflow-hidden focus:outline-none focus:ring-1 focus:ring-[#c9a84c]">
                  <img src="${img}" class="w-full h-full object-cover" />
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Product Details -->
          <div class="p-6 md:p-8 flex flex-col justify-between bg-white">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs uppercase tracking-widest text-[#c9a84c] font-cinzel font-semibold">${product.categoryName}</span>
                <span class="text-[#dfd8cb]">•</span>
                <span class="text-xs text-[#6b7770]">SKU: ${product.sku}</span>
              </div>
              <h2 class="font-serif text-2xl sm:text-3xl text-[#1a3c2a] font-normal leading-snug mb-3">${product.name}</h2>
              
              <div class="flex items-baseline gap-3 mb-4">
                <span class="font-serif text-2xl font-bold text-[#1a3c2a]">${this.formatPrice(product.price)}</span>
                <span class="text-sm text-[#98a39c] line-through">${this.formatPrice(product.originalPrice)}</span>
                <span class="text-xs font-semibold text-[#1a3c2a] bg-[#1a3c2a]/10 px-2 py-0.5">Save ${Math.round(((product.originalPrice - product.price)/product.originalPrice)*100)}%</span>
              </div>

              <p class="text-sm text-[#6b7770] leading-relaxed mb-6">${product.description}</p>

              <div class="space-y-4 pt-4 border-t border-[#dfd8cb]/60 mb-6">
                <div>
                  <label class="block text-xs uppercase tracking-wider font-semibold text-[#1a3c2a] mb-2">Fabric & Craft</label>
                  <p class="text-sm text-[#2e3832]">${product.fabric} with ${product.work}</p>
                </div>

                <div>
                  <label class="block text-xs uppercase tracking-wider font-semibold text-[#1a3c2a] mb-2">Select Color</label>
                  <div class="flex gap-2">
                    ${product.colors.map((c, idx) => `
                      <span class="inline-flex items-center gap-1.5 px-3 py-1 border border-[#dfd8cb] text-xs text-[#1a3c2a] bg-[#fbf9f5]">
                        <span class="w-3 h-3 rounded-full border border-black/10" style="background-color: ${product.colorHex[idx] || '#1a3c2a'}"></span>
                        ${c}
                      </span>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-3 pt-4 border-t border-[#dfd8cb]">
              <div class="flex gap-3">
                <div class="flex items-center border border-[#1a3c2a] w-28 shrink-0">
                  <button onclick="const q=document.getElementById('qv-qty'); if(+q.value>1) q.value=+q.value-1" class="w-8 h-12 flex items-center justify-center text-sm font-bold text-[#1a3c2a] hover:bg-[#f0ebe1]">-</button>
                  <input id="qv-qty" type="text" value="1" readonly class="w-12 text-center text-sm font-semibold text-[#1a3c2a] bg-transparent focus:outline-none" />
                  <button onclick="const q=document.getElementById('qv-qty'); q.value=+q.value+1" class="w-8 h-12 flex items-center justify-center text-sm font-bold text-[#1a3c2a] hover:bg-[#f0ebe1]">+</button>
                </div>
                <button onclick="arbachinApp.addToCart('${product.id}', +document.getElementById('qv-qty').value); arbachinApp.closeQuickView();" class="luxury-btn flex-1 bg-[#1a3c2a] text-[#f0ebe1] hover:bg-[#c9a84c] hover:text-[#0f1a14] py-3 text-xs tracking-widest uppercase font-semibold transition-all">
                  Add to Shopping Bag
                </button>
              </div>

              <div class="flex justify-between items-center pt-2">
                <a href="product.html?id=${product.id}" class="text-xs uppercase tracking-widest text-[#1a3c2a] hover:text-[#c9a84c] font-semibold underline underline-offset-4">
                  View Full Product Details →
                </a>
                <button onclick="arbachinApp.toggleWishlist('${product.id}')" class="text-xs text-[#6b7770] hover:text-[#1a3c2a] flex items-center gap-1.5">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                  Save to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.style.overflow = 'hidden';
  }

  closeQuickView() {
    const modal = document.getElementById('quick-view-modal');
    if (modal) {
      modal.remove();
      document.body.style.overflow = '';
    }
  }

  // Navbar transparent on hero, solid on scroll
  initNavbarScroll() {
    const nav = document.getElementById('main-header');
    if (!nav) return;

    const isHome = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname === '';

    const handleScroll = () => {
      if (window.scrollY > 40) {
        nav.classList.remove('glass-nav-transparent');
        nav.classList.add('glass-nav', 'shadow-sm', 'border-b', 'border-[#dfd8cb]/60');
        nav.classList.add('scrolled');
      } else if (isHome) {
        nav.classList.remove('glass-nav', 'shadow-sm', 'border-b', 'border-[#dfd8cb]/60');
        nav.classList.add('glass-nav-transparent');
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Global Event Listeners
  bindGlobalEvents() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeCartDrawer();
        this.closeQuickView();
        this.closeSearchModal();
        this.closeMobileMenu();
      }
    });

    // Mobile Menu Drawer
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

    if (mobileMenuBtn && mobileMenuDrawer) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenuDrawer.classList.remove('-translate-x-full');
        mobileMenuOverlay.classList.remove('hidden');
        setTimeout(() => mobileMenuOverlay.classList.remove('opacity-0'), 10);
        document.body.style.overflow = 'hidden';
      });
    }

    if (mobileMenuClose && mobileMenuDrawer) {
      const closeMobile = () => {
        mobileMenuDrawer.classList.add('-translate-x-full');
        mobileMenuOverlay.classList.add('opacity-0');
        setTimeout(() => mobileMenuOverlay.classList.add('hidden'), 300);
        document.body.style.overflow = '';
      };
      mobileMenuClose.addEventListener('click', closeMobile);
      if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobile);
    }
  }

  closeMobileMenu() {
    const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    if (mobileMenuDrawer && mobileMenuOverlay) {
      mobileMenuDrawer.classList.add('-translate-x-full');
      mobileMenuOverlay.classList.add('opacity-0');
      setTimeout(() => mobileMenuOverlay.classList.add('hidden'), 300);
      document.body.style.overflow = '';
    }
  }

  // Search Modal
  openSearchModal() {
    let modal = document.getElementById('search-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'search-modal';
      modal.className = 'fixed inset-0 z-50 bg-[#0f1a14]/90 backdrop-blur-md p-6 flex flex-col items-center justify-start pt-20 transition-all';
      modal.innerHTML = `
        <div class="w-full max-w-3xl relative">
          <button onclick="arbachinApp.closeSearchModal()" class="absolute -top-12 right-0 text-[#c9a84c] hover:text-white p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <div class="relative border-b-2 border-[#c9a84c] pb-2">
            <input id="global-search-input" type="text" placeholder="Search sarees, three piece, fabrics, colors..." class="w-full bg-transparent text-xl sm:text-3xl font-serif text-[#ede8df] placeholder-[#6b7770] focus:outline-none pr-12" autofocus />
            <span class="absolute right-0 top-1/2 -translate-y-1/2 text-[#c9a84c]">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </span>
          </div>

          <div class="mt-4 flex gap-2 flex-wrap items-center">
            <span class="text-xs uppercase tracking-widest text-[#c9a84c]/80 font-cinzel">Popular:</span>
            <button onclick="document.getElementById('global-search-input').value='Banarasi'; arbachinApp.performSearch('Banarasi')" class="text-xs text-[#ede8df] hover:text-[#c9a84c] underline underline-offset-4">Banarasi Silk</button>
            <button onclick="document.getElementById('global-search-input').value='Katan'; arbachinApp.performSearch('Katan')" class="text-xs text-[#ede8df] hover:text-[#c9a84c] underline underline-offset-4">Katan</button>
            <button onclick="document.getElementById('global-search-input').value='Anarkali'; arbachinApp.performSearch('Anarkali')" class="text-xs text-[#ede8df] hover:text-[#c9a84c] underline underline-offset-4">Anarkali</button>
            <button onclick="document.getElementById('global-search-input').value='Bridal'; arbachinApp.performSearch('Bridal')" class="text-xs text-[#ede8df] hover:text-[#c9a84c] underline underline-offset-4">Bridal</button>
          </div>

          <div id="search-results-container" class="mt-8 max-h-[60vh] overflow-y-auto space-y-3 pr-2"></div>
        </div>
      `;
      document.body.appendChild(modal);

      const input = document.getElementById('global-search-input');
      input.addEventListener('input', (e) => this.performSearch(e.target.value));
    }
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const input = document.getElementById('global-search-input');
      if (input) input.focus();
    }, 100);
  }

  closeSearchModal() {
    const modal = document.getElementById('search-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  performSearch(query) {
    const container = document.getElementById('search-results-container');
    if (!container) return;

    const q = query.trim().toLowerCase();
    if (!q) {
      container.innerHTML = '';
      return;
    }

    const matches = PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.fabric.toLowerCase().includes(q) ||
      p.work.toLowerCase().includes(q) ||
      p.colors.some(c => c.toLowerCase().includes(q)) ||
      p.description.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12 text-[#98a39c]">
          <p class="font-serif text-lg text-[#ede8df] mb-1">No creations found matching "${query}"</p>
          <p class="text-xs">Try searching for "Banarasi", "Silk", "Saree" or "Three Piece"</p>
        </div>
      `;
      return;
    }

    container.innerHTML = matches.map(p => `
      <a href="product.html?id=${p.id}" onclick="arbachinApp.closeSearchModal()" class="flex items-center gap-4 p-3 bg-white/5 hover:bg-white/10 border border-[#c9a84c]/20 hover:border-[#c9a84c] transition-all">
        <img src="${p.image}" alt="${p.name}" class="w-14 h-18 object-cover border border-[#dfd8cb]/30" />
        <div class="flex-1">
          <span class="text-[10px] uppercase tracking-widest text-[#c9a84c] font-cinzel">${p.categoryName}</span>
          <h4 class="font-serif text-sm font-medium text-[#ede8df]">${p.name}</h4>
          <p class="text-xs text-[#98a39c]">${p.fabric} • ${p.work}</p>
        </div>
        <div class="text-right">
          <span class="font-serif font-bold text-sm text-[#c9a84c]">${this.formatPrice(p.price)}</span>
        </div>
      </a>
    `).join('');
  }

  // Product Card Generator Helper
  generateProductCardHTML(product) {
    const isWishlist = this.wishlist.includes(product.id);
    return `
      <div class="luxury-card group relative flex flex-col bg-white border border-[#dfd8cb]/80 hover:border-[#c9a84c] transition-all duration-500 shadow-sm hover:shadow-xl">
        <!-- Image Container -->
        <div class="relative aspect-[3/4] overflow-hidden bg-[#f8f6f0]">
          <a href="product.html?id=${product.id}" class="block w-full h-full">
            <img src="${product.image}" alt="${product.name}" class="luxury-card-image w-full h-full object-cover object-top" loading="lazy" />
          </a>

          <!-- Badges -->
          <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            ${product.badge ? `
              <span class="badge-gold text-[10px] tracking-widest uppercase px-2.5 py-1 shadow-sm font-semibold">
                ${product.badge}
              </span>
            ` : ''}
          </div>

          <!-- Action Buttons -->
          <div class="absolute top-3 right-3 flex flex-col gap-2 z-10">
            <button onclick="arbachinApp.toggleWishlist('${product.id}')" data-wishlist-id="${product.id}" class="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-[#1a3c2a] hover:text-white text-[#1a3c2a] flex items-center justify-center transition-all" title="Wishlist">
              <svg class="w-4 h-4" fill="${isWishlist ? '#c9a84c' : 'none'}" stroke="${isWishlist ? '#c9a84c' : 'currentColor'}" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </button>
          </div>

          <!-- Quick View & Add to Bag Overlay on Hover -->
          <div class="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
            <button onclick="arbachinApp.openQuickView('${product.id}')" class="flex-1 py-2.5 bg-white/95 hover:bg-white text-[#1a3c2a] text-[11px] tracking-widest uppercase font-semibold transition-all">
              Quick View
            </button>
            <button onclick="arbachinApp.addToCart('${product.id}', 1)" class="w-10 h-10 bg-[#1a3c2a] hover:bg-[#c9a84c] text-white hover:text-[#0f1a14] flex items-center justify-center transition-all" title="Add to Bag">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            </button>
          </div>
        </div>

        <!-- Product Meta -->
        <div class="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white border-t border-[#dfd8cb]/50">
          <div>
            <div class="flex items-center justify-between text-[11px] text-[#98a39c] uppercase tracking-wider mb-1 font-cinzel">
              <span>${product.categoryName}</span>
              <span class="flex items-center text-[#c9a84c]">
                ★ <span class="text-[#2e3832] ml-0.5">${product.rating}</span>
              </span>
            </div>

            <h3 class="font-serif text-base sm:text-lg font-medium text-[#1a3c2a] leading-snug group-hover:text-[#c9a84c] transition-colors">
              <a href="product.html?id=${product.id}">${product.name}</a>
            </h3>
            
            <p class="text-xs text-[#6b7770] mt-1 line-clamp-1">${product.fabric}</p>
          </div>

          <div class="pt-3 mt-3 border-t border-[#dfd8cb]/40 flex items-baseline justify-between">
            <div class="flex items-baseline gap-2">
              <span class="font-serif font-bold text-base text-[#1a3c2a]">${this.formatPrice(product.price)}</span>
              ${product.originalPrice ? `
                <span class="text-xs text-[#98a39c] line-through">${this.formatPrice(product.originalPrice)}</span>
              ` : ''}
            </div>
            <span class="text-[10px] tracking-widest uppercase font-semibold text-[#1a3c2a] group-hover:translate-x-1 transition-transform">
              View →
            </span>
          </div>
        </div>
      </div>
    `;
  }
}

// Global instance
window.arbachinApp = new ArbachinStore();
