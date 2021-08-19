const initialState = {
  orders: [],
};

export const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ORDER_SUCCESS":
      return {
        orders: action.payload,
      };
    default:
      return state;
  }
};
