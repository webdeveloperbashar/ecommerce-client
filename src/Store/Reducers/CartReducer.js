const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart") || "[]"),
};
export const AddToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cartItems: action.payload.cartItems };
    case "REMOVE_FROM_CART":
      return { cartItems: action.payload.cartItems };
    case "INCREAMENT_QUANTITY":
      return { cartItems: action.payload.cartItems };
    case "DECREAMENT_QUANTITY":
      return { cartItems: action.payload.cartItems };
    default:
      return state;
  }
};
