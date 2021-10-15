export const GetCartQuantity = (product) => {
  // let quantity = 0;
  // for (let i = 0; i < product?.length; i++) {
  //   const element = product[i];
  //   quantity = quantity + element?.quantity;
  // }
  // return quantity;
  const quantity = product.reduce((a, c) => a + c.quantity, 0);
  return quantity;
};
export const GetCartPrice = (product) => {
  const balance = product.reduce((a, c) => a + c.price * c.quantity, 0);
  return balance.toFixed(2);
};
