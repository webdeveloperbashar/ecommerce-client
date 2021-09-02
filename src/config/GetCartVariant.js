export const GetCartQuantity = (product) => {
  let quantity = 0;
  for (let i = 0; i < product.length; i++) {
    const element = product[i];
    quantity = quantity + element.quantity;
  }
  return quantity;
};
export const GetCartPrice = (product) => {
  let price = 0;
  for (let i = 0; i < product.length; i++) {
    const element = product[i];
    price = price + element.price;
  }
  return price;
};
