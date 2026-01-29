export function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(p => p.id === product.id);

  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });

  saveCart(cart);
}
