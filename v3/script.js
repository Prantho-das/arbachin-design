const MASABA_DATA = [
  {
    id: "masaba-01",
    name: "Gold-Plated Stone Studded Bangle Set",
    designer: "SAMYUKTA SINGHANIA",
    price: 18500,
    origPrice: 22000,
    image: "../assets/image/saree_1.jpg",
    cat: "Luxury Jewelry",
    desc: "Exquisite pair of 24-karat gold-plated handcrafted artisan bangles, encrusted with uncut polki faux stones, simulated emerald droplets, and intricate royal floral openwork."
  },
  {
    id: "masaba-02",
    name: "Crimson Banarasi Silk Saree",
    designer: "ARBACHIN RUNWAY",
    price: 16500,
    origPrice: 19500,
    image: "../assets/image/saree_2.jpg",
    cat: "Couture Sarees",
    desc: "Scarlet banarasi silk saree woven with bold geometric palm motifs, liquid drape border, and statement gold foil pallu."
  },
  {
    id: "masaba-03",
    name: "Foil Printed Three-Piece Set",
    designer: "ARBACHIN RUNWAY",
    price: 12800,
    origPrice: 15500,
    image: "../assets/image/threepiece_1.jpg",
    cat: "Pret Ensembles",
    desc: "Signature eclectic foil print kurta paired with flared raw silk trousers and sheer embroidered organza dupatta."
  },
  {
    id: "masaba-04",
    name: "Midnight Navy Velvet Kurta Set",
    designer: "AZA CURATED",
    price: 14200,
    origPrice: 17000,
    image: "../assets/image/threepiece_2.jpg",
    cat: "Pret Ensembles",
    desc: "Rich midnight velvet embellished with dabka and zardozi threadwork for ultra-glam evening festivities."
  },
  {
    id: "masaba-05",
    name: "Emerald Green Zari Brocade Saree",
    designer: "ARBACHIN RUNWAY",
    price: 13800,
    origPrice: 16000,
    image: "../assets/image/saree_3.jpg",
    cat: "Couture Sarees",
    desc: "Emerald green pure silk saree adorned with classic lotus buttis and gold bullion woven border."
  },
  {
    id: "masaba-06",
    name: "Ivory Pearl Embellished Suit Set",
    designer: "ARBACHIN BRIDAL",
    price: 11000,
    origPrice: 14000,
    image: "../assets/image/threepiece_3.jpg",
    cat: "Bridal Pret",
    desc: "Raw silk straight kurta with pearl and floral embroidery, matched trousers and sheer net dupatta."
  }
];

let cartV3 = JSON.parse(localStorage.getItem('arbachin_v3_cart') || '[]');

function showV3Toast(msg) {
  let toast = document.getElementById('homToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'homToast';
    toast.className = 'hom-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function updateCartV3() {
  const counts = document.querySelectorAll('.hom-cart-count');
  const total = cartV3.reduce((acc, it) => acc + (it.qty || 1), 0);
  counts.forEach(el => el.textContent = total);
}

function addToCartV3(id, qty = 1, size = '2.6') {
  const prod = MASABA_DATA.find(p => p.id === id) || MASABA_DATA[0];
  const match = cartV3.find(i => i.id === prod.id && i.size === size);
  if (match) match.qty += qty;
  else cartV3.push({ ...prod, qty, size });
  localStorage.setItem('arbachin_v3_cart', JSON.stringify(cartV3));
  updateCartV3();
  showV3Toast(`Added "${prod.name}" to your Shopping Bag`);
}

function convertCurrency(val) {
  const priceEls = document.querySelectorAll('.aza-convert-price');
  let rate = 1;
  let symbol = "৳";
  if (val === "USD") { rate = 0.0083; symbol = "$"; }
  else if (val === "GBP") { rate = 0.0065; symbol = "£"; }
  else if (val === "INR") { rate = 0.70; symbol = "₹"; }
  else if (val === "AED") { rate = 0.030; symbol = "AED "; }
  
  priceEls.forEach(el => {
    const base = parseFloat(el.getAttribute('data-base-bdt') || '18500');
    el.textContent = `${symbol}${(base * rate).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  });
}

function switchAzaThumb(src, el) {
  const main = document.getElementById('azaMainImg');
  if (main) main.src = src;
  document.querySelectorAll('.aza-thumb').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
}

function setupAzaAccordions() {
  const btns = document.querySelectorAll('.aza-acc-header');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const body = item.querySelector('.aza-acc-body');
      if (!body) return;
      const isVisible = body.style.display !== 'none';
      body.style.display = isVisible ? 'none' : 'block';
      const icon = btn.querySelector('span:last-child');
      if (icon) icon.textContent = isVisible ? '+' : '−';
    });
  });
}

function setupHeroCarousel() {
  const slides = document.querySelectorAll('.hom-hero-slide');
  if (!slides.length) return;
  let idx = 0;
  setInterval(() => {
    slides.forEach(s => s.classList.remove('active'));
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 5000);
}

function loadProductFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) return;
  const prod = MASABA_DATA.find(p => p.id === id);
  if (!prod) return;
  
  document.title = `${prod.name} | Arbachin (V3)`;
  
  const titleEl = document.querySelector('.aza-item-title');
  if (titleEl) titleEl.textContent = prod.name;
  
  const desTag = document.querySelector('.aza-designer-tag');
  if (desTag) desTag.textContent = `DESIGNER: ${prod.designer}`;
  
  const priceEl = document.querySelector('.aza-price-main');
  if (priceEl) {
    priceEl.setAttribute('data-base-bdt', prod.price);
    priceEl.textContent = `৳${prod.price.toLocaleString()}`;
  }
  
  const origPriceEl = document.querySelector('.aza-price-strike');
  if (origPriceEl) origPriceEl.textContent = `৳${prod.origPrice.toLocaleString()}`;
  
  const mainImg = document.getElementById('azaMainImg');
  if (mainImg) mainImg.src = prod.image;
  
  const firstThumb = document.querySelector('.aza-thumb img');
  if (firstThumb) firstThumb.src = prod.image;
  
  const bagBtn = document.querySelector('.btn-aza-bag');
  if (bagBtn) bagBtn.setAttribute('onclick', `addToCartV3('${prod.id}', 1, 'Standard')`);
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartV3();
  setupAzaAccordions();
  setupHeroCarousel();
  loadProductFromUrl();
});
