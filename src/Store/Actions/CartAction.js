export const AddToCartAction = (product, qty) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let hasProduct = false;
  cartItems.forEach((pd) => {
    if (pd?._id === product?._id) {
      hasProduct = true;
      if (qty > 0) {
        pd["quantity"] = qty ? pd.quantity + qty : pd.quantity + 1;
      }
      pd["quantity"] = pd.quantity + qty;
    }
  });
  if (!hasProduct && product) {
    product.quantity = qty;
    cartItems.push({ ...product });
  }
  dispatch({
    type: "ADD_TO_CART",
    payload: { cartItems },
  });
  localStorage.setItem("cart", JSON.stringify(cartItems));
};
// remove cart action
export const RemoveCartAction = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.filter(
    (pd) => pd._id !== product._id
  );
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: { cartItems },
  });
  localStorage.setItem("cart", JSON.stringify(cartItems));
};
// cart increase quantity
export const IncreaseQuantityAction = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  cartItems.forEach((pd) => {
    if (pd._id === product._id) {
      const index = cartItems.indexOf(pd);
      const increase = cartItems[index];
      increase.quantity = increase.quantity + 1;
    }
  });
  dispatch({
    type: "INCREAMENT_QUANTITY",
    payload: { cartItems },
  });
  localStorage.setItem("cart", JSON.stringify(cartItems));
};
// cart decreament quantity
export const DecreamentQuantityAction = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  cartItems.forEach((pd) => {
    if (pd._id === product._id) {
      const index = cartItems.indexOf(pd);
      const decrease = cartItems[index];
      if (decrease.quantity > 1) {
        decrease.quantity = decrease.quantity - 1;
      }
    }
  });
  dispatch({
    type: "DECREAMENT_QUANTITY",
    payload: { cartItems },
  });
  localStorage.setItem("cart", JSON.stringify(cartItems));
};
