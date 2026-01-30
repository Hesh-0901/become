import { auth } from "./firebase.config.js";
import { onAuthStateChanged } from
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

let CART_KEY = null;

/* ================= INIT ================= */
export function initCart() {
  onAuthStateChanged(auth, user => {
    if (!user) return;
    CART_KEY = `cart_${user.uid}`;
  });
}

/* ================= UTILS ================= */
function getCart() {
  if (!CART_KEY) return [];
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}

function saveCart(cart) {
  if (!CART_KEY) return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

/* ================= PUBLIC ================= */
export function addToCart(product) {
  const cart = getCart();
  const found = cart.find(p => p.id === product.id);

  if (found) {
    found.qty += 1;
  } else {
    cart.push({
      ...product,
      qty: 1
    });
  }

  saveCart(cart);
}
