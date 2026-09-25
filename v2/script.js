const PRODUCTS_V2 = [
  {
    id: "gd-kurta-01",
    name: "Printed Silk Kurta in Rich Maroon",
    price: 6800,
    origPrice: 8500,
    img1: "../assets/image/threepiece_1.jpg",
    img2: "../assets/image/threepiece_2.jpg",
    cat: "Kurtas & Tunics",
    desc: "A statement bohemian silk kurta featuring artisanal block-inspired floral motifs, side slits, and beadwork on the placket."
  },
  {
    id: "gd-kurta-02",
    name: "Navy Embellished Anarkali Tunic",
    price: 8200,
    origPrice: 10200,
    img1: "../assets/image/threepiece_2.jpg",
    img2: "../assets/image/threepiece_3.jpg",
    cat: "Three Piece",
    desc: "Midnight navy flowing tunic set designed with zari thread accents, tailored for contemporary festive elegance."
  },
  {
    id: "gd-saree-01",
    name: "Burgundy Handwoven Silk Saree",
    price: 12500,
    origPrice: 15000,
    img1: "../assets/image/saree_1.jpg",
    img2: "../assets/image/saree_2.jpg",
    cat: "Heritage Sarees",
    desc: "Handcrafted pure Banarasi silk saree enriched with timeless woven paisley buttis and heavy ornamental border."
  },
  {
    id: "gd-saree-02",
    name: "Royal Blue Katan Silk Drape",
    price: 15000,
    origPrice: 18500,
    img1: "../assets/image/saree_2.jpg",
    img2: "../assets/image/saree_3.jpg",
    cat: "Heritage Sarees",
    desc: "Sabyasachi inspired royal blue silk drape woven with two-tone silver & gold threads for regal evening galas."
  }
];

let cartV2 = JSON.parse(localStorage.getItem('arbachin_v2_cart') || '[]');

function updateCartV2() {
  const counts = document.querySelectorAll('.v2-cart-badge');
  const total = cartV2.reduce((acc, it) => acc + it.qty, 0);
  counts.forEach(el => el.textContent = total);
}

function addToCartV2(id, qty = 1, size = 'M') {
  const prod = PRODUCTS_V2.find(p => p.id === id);
  if (!prod) return;
  const match = cartV2.find(i => i.id === id && i.size === size);
  if (match) match.qty += qty;
  else cartV2.push({ ...prod, qty, size });
  localStorage.setItem('arbachin_v2_cart', JSON.stringify(cartV2));
  updateCartV2();
  alert(`"${prod.name}" (Size ${size}) added to your shopping bag!`);
}

function checkPincode() {
  const pin = document.getElementById('pincodeInput').value.trim();
  const res = document.getElementById('pincodeResult');
  if (!pin) {
    res.innerHTML = `<span style="color:#d9534f;">Please enter a valid postal code.</span>`;
    return;
  }
  res.innerHTML = `<span style="color:#2b8a3e; font-weight:600;">✓ Delivery available in 2-3 business days. Cash on delivery & Online Payment supported.</span>`;
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartV2();
});
