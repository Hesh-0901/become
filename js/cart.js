// js/cart.js

export function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(product) {
  const cart = getCart();
  const found = cart.find(p => p.id === product.id);

  if (found) {
    found.qty += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart(cart);
}

export function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

export function changeQty(index, delta) {
  const cart = getCart();
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart(cart);
}

export function getCartCount() {
  return getCart().reduce((sum, p) => sum + p.qty, 0);
}

export function clearCart() {
  localStorage.removeItem("cart");
}
