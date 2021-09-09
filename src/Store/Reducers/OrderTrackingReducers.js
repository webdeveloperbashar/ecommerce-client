const initialState = {
  trackingOrder: {},
};
export const OrderTrackingReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ORDER_TRACKING":
      return { trackingOrder: action.payload };
    default:
      return state;
  }
};
