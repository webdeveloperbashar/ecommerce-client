const initialState = {
  orders: [],
};

export const OrderGetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ORDER_SUCCESS":
      return {
        orders: action.payload,
      };
    default:
      return state;
  }
};
export const OrderCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ORDER_REQUEST_SUCCESS":
      return {
        orders: action.payload,
      };
    default:
      return state;
  }
};


