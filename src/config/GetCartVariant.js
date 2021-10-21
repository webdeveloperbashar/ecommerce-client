export const GetCartQuantity = (product) => {
  const quantity = product.reduce((a, c) => a + c.quantity, 0);
  return quantity;
};
export const GetCartPrice = (product) => {
  const balance = product.reduce((a, c) => a + c.price * c.quantity, 0);
  return balance.toFixed(2);
};
