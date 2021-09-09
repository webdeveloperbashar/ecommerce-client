export const GetCartQuantity = (product) => {
  let quantity = 0;
  for (let i = 0; i < product?.length; i++) {
    const element = product[i];
    quantity = quantity + element?.quantity;
  }
  return quantity;
};
export const GetCartPrice = (product) => {
  let subtotal = 0;
  const tax = 5;
  const shippingFees = 3;
  for (let i = 0; i < product?.length; i++) {
    const element = product[i];
    subtotal = subtotal + element?.price * element?.quantity;
  }
  const grandTotal = (tax / 100) * subtotal + shippingFees + subtotal;
  return grandTotal.toFixed(2);
};
