const PRODUCTS = [
  {
    id: "saree-001",
    name: "Burgundy Banarasi Silk Saree",
    category: "sarees",
    categoryName: "Sarees",
    price: 12500,
    originalPrice: 15000,
    image: "../assets/image/saree_1.jpg",
    fabric: "Pure Banarasi Silk",
    work: "Gold Zari Embroidery",
    badge: "Bestseller",
    colors: ["Burgundy", "Maroon"],
    description: "Handwoven burgundy Banarasi silk saree with intricate gold zari work featuring traditional paisley and floral motifs. Perfect for bridal and festive wear."
  },
  {
    id: "saree-002",
    name: "Royal Blue Katan Silk Saree",
    category: "sarees",
    categoryName: "Sarees",
    price: 15000,
    originalPrice: 18500,
    image: "../assets/image/saree_2.jpg",
    fabric: "Pure Katan Silk",
    work: "Silver & Gold Thread",
    badge: "Heritage",
    colors: ["Royal Blue", "Navy"],
    description: "Exquisite royal blue Katan silk saree adorned with silver and gold thread work. The regal statement pallu reflects timeless royal elegance."
  },
  {
    id: "saree-003",
    name: "Emerald Green Banarasi Saree",
    category: "sarees",
    categoryName: "Sarees",
    price: 13800,
    originalPrice: 16000,
    image: "../assets/image/saree_3.jpg",
    fabric: "Pure Banarasi Silk",
    work: "Gold Banarasi Weave",
    badge: "New Arrival",
    colors: ["Emerald Green", "Forest Green"],
    description: "A stunning emerald green Banarasi silk saree featuring traditional gold weave with elaborate floral borders. An opulent masterpiece."
  },
  {
    id: "three-piece-001",
    name: "Rose Pink Embroidered Three Piece",
    category: "three-piece",
    categoryName: "Three Piece",
    price: 8500,
    originalPrice: 10500,
    image: "../assets/image/threepiece_1.jpg",
    fabric: "Georgette Silk",
    work: "Sequin & Thread Embroidery",
    badge: "Trending",
    colors: ["Dusty Rose", "Pink"],
    description: "Elegant dusty rose pink three-piece set featuring an A-line kurta with heavy sequin and thread embroidery work, matching palazzo, and dupatta."
  },
  {
    id: "three-piece-002",
    name: "Navy Anarkali Three Piece",
    category: "three-piece",
    categoryName: "Three Piece",
    price: 9200,
    originalPrice: 11800,
    image: "../assets/image/threepiece_2.jpg",
    fabric: "Silk Blend",
    work: "Gold & Silver Embroidery",
    badge: "Exclusive",
    colors: ["Navy Blue", "Midnight"],
    description: "Stunning midnight navy blue anarkali three-piece set with luxurious gold embroidery and a flared floor-length silhouette."
  },
  {
    id: "three-piece-003",
    name: "Ivory Bridal Three Piece",
    category: "three-piece",
    categoryName: "Three Piece",
    price: 11000,
    originalPrice: 14000,
    image: "../assets/image/threepiece_3.jpg",
    fabric: "Raw Silk & Net",
    work: "Pearl & Floral Embroidery",
    badge: "Bestseller",
    colors: ["Ivory", "Off-White"],
    description: "Luxurious ivory bridal three-piece featuring a straight-cut kurta with intricate pearl and pastel floral embroidery, matching pants, and net dupatta."
  }
];

let cart = JSON.parse(localStorage.getItem('arbachin_cart') || '[]');

function updateCartCount() {
  const counts = document.querySelectorAll('.cart-count');
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  counts.forEach(el => {
    el.textContent = total;
  });
}

function showToast(msg) {
  let toast = document.getElementById('toastMsg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastMsg';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

function addToCart(productId, qty = 1, size = 'M') {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  const existing = cart.find(item => item.id === productId && item.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...prod, qty, size });
  }
  localStorage.setItem('arbachin_cart', JSON.stringify(cart));
  updateCartCount();
  showToast(`Added "${prod.name}" to your cart`);
}

function setupHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;
  let cur = 0;
  function showSlide(idx) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    cur = (idx + slides.length) % slides.length;
    slides[cur].classList.add('active');
    if (dots[cur]) dots[cur].classList.add('active');
  }
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showSlide(idx));
  });
  setInterval(() => {
    showSlide(cur + 1);
  }, 6000);
}

function openQuickView(prodId) {
  const prod = PRODUCTS.find(p => p.id === prodId);
  if (!prod) return;
  let modal = document.getElementById('quickViewModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quickViewModal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }
  modal.innerHTML = `
    <div class="modal-box">
      <button class="modal-close" onclick="closeModal()">&times;</button>
      <div style="background:#f9f9f9;">
        <img src="${prod.image}" alt="${prod.name}" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div style="padding:32px; display:flex; flex-direction:column; justify-content:center;">
        <div style="font-size:12px; font-weight:700; color:var(--gold); text-transform:uppercase; margin-bottom:6px;">${prod.categoryName}</div>
        <h3 style="font-family:var(--font-serif); font-size:24px; color:var(--brand); margin-bottom:12px;">${prod.name}</h3>
        <div style="display:flex; align-items:baseline; gap:10px; margin-bottom:16px;">
          <span style="font-size:22px; font-weight:700; color:var(--brand);">৳${prod.price.toLocaleString()}</span>
          <span style="font-size:14px; text-decoration:line-through; color:#999;">৳${prod.originalPrice.toLocaleString()}</span>
        </div>
        <p style="font-size:13px; color:#5e6b63; margin-bottom:20px; line-height:1.6;">${prod.description}</p>
        <div style="font-size:13px; font-weight:600; margin-bottom:8px;">Fabric: <span style="font-weight:400; color:#666;">${prod.fabric}</span></div>
        <div style="font-size:13px; font-weight:600; margin-bottom:24px;">Work: <span style="font-weight:400; color:#666;">${prod.work}</span></div>
        <div style="display:flex; gap:12px;">
          <button class="btn-gold" style="flex:1;" onclick="addToCart('${prod.id}'); closeModal();">Add To Cart</button>
          <a href="product.html?id=${prod.id}" class="btn-outline" style="border-color:var(--brand); color:var(--brand); margin:0; text-align:center;">Details</a>
        </div>
      </div>
    </div>
  `;
  modal.classList.add('active');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

function closeModal() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
}

function setupAccordions() {
  const triggers = document.querySelectorAll('.accordion-trigger, .pdp-acc-btn, .pdp-acc-header');
  triggers.forEach(trig => {
    trig.addEventListener('click', () => {
      const item = trig.closest('.accordion-item, .pdp-acc-item');
      if (!item) return;
      const content = item.querySelector('.accordion-content, .pdp-acc-body, .pdp-acc-content');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item, .pdp-acc-item').forEach(i => {
        i.classList.remove('open');
        const c = i.querySelector('.accordion-content, .pdp-acc-body, .pdp-acc-content');
        if (c) c.style.maxHeight = null;
      });
      if (!isOpen && content) {
        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

function setupDetailGallery() {
  const thumbs = document.querySelectorAll('.pdp-thumb, .thumb-item');
  const mainImg = document.getElementById('mainDetailImg');
  if (!mainImg || !thumbs.length) return;
  thumbs.forEach(th => {
    th.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      th.classList.add('active');
      const imgEl = th.querySelector('img');
      const targetSrc = imgEl ? imgEl.src : th.getAttribute('data-img');
      if (targetSrc) mainImg.src = targetSrc;
    });
  });
}

function setupSizeSelector() {
  const chips = document.querySelectorAll('.pdp-size-chip, .size-chip, .pdp-size-btn');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });
}

function loadProductFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) return;
  const prod = PRODUCTS.find(p => p.id === id);
  if (!prod) return;
  
  document.title = `${prod.name} | Arbachin (V1)`;
  
  const titleEl = document.querySelector('.pdp-title');
  if (titleEl) titleEl.textContent = prod.name;
  
  const breadcrumbSpan = document.querySelector('.pdp-breadcrumb span:last-child');
  if (breadcrumbSpan) breadcrumbSpan.textContent = prod.name;
  
  const curPriceEl = document.querySelector('.pdp-cur-price');
  if (curPriceEl) curPriceEl.textContent = `৳${prod.price.toLocaleString()}`;
  
  const origPriceEl = document.querySelector('.pdp-orig-price');
  if (origPriceEl) origPriceEl.textContent = `৳${prod.originalPrice.toLocaleString()}`;
  
  const descEl = document.querySelector('.pdp-summary > p');
  if (descEl) descEl.textContent = prod.description;
  
  const skuEl = document.querySelector('.pdp-sku');
  if (skuEl) skuEl.innerHTML = `Product Code: ARB-${prod.id.toUpperCase()} | ${prod.fabric} • ${prod.work} &bull; ★ 4.9 (38 Reviews)`;
  
  const mainImg = document.getElementById('mainDetailImg');
  if (mainImg) {
    mainImg.src = prod.image;
    mainImg.alt = prod.name;
  }
  
  const thumbs = document.querySelectorAll('.pdp-thumb');
  if (thumbs.length) {
    const imagesPool = [
      prod.image,
      prod.category === 'sarees' ? '../assets/image/saree_1.jpg' : '../assets/image/threepiece_1.jpg',
      prod.category === 'sarees' ? '../assets/image/saree_2.jpg' : '../assets/image/threepiece_2.jpg',
      prod.category === 'sarees' ? '../assets/image/saree_3.jpg' : '../assets/image/threepiece_3.jpg'
    ];
    thumbs.forEach((th, idx) => {
      const img = th.querySelector('img');
      const src = imagesPool[idx] || prod.image;
      if (img) img.src = src;
      th.setAttribute('data-img', src);
      if (idx === 0) th.classList.add('active');
      else th.classList.remove('active');
    });
  }
  
  const bagBtn = document.querySelector('.btn-pdp-bag, .btn-pdp-cart');
  if (bagBtn) {
    bagBtn.setAttribute('onclick', `addToCart('${prod.id}', 1, 'M')`);
  }
  const buyBtn = document.querySelector('.btn-pdp-buy');
  if (buyBtn) {
    buyBtn.setAttribute('onclick', `addToCart('${prod.id}', 1, 'M'); showToast('Redirecting to Express Luxury Checkout...');`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  setupHeroSlider();
  setupAccordions();
  setupDetailGallery();
  setupSizeSelector();
  loadProductFromUrl();
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (nav) {
      if (window.scrollY > 50) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }
  });
});
