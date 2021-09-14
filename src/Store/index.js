import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AddToCartReducer } from "./Reducers/CartReducer";
import { OrderCreateReducer, OrderGetReducer } from "./Reducers/OrderReducer";
import { OrderTrackingReducers } from "./Reducers/OrderTrackingReducers";
import {
  ProductReviewGetReducer,
  ProductReviewReducer,
} from "./Reducers/ProductReviewReducer";
import {
  EmailVerify,
  ForgotPassword,
  ResetPassword,
  UserLoginReducers,
  UserSignupReducers,
} from "./Reducers/UserReducers";
import { UserUpdateReducer } from "./Reducers/UserUpdateReducers";

const middleware = [thunk];
const combinedReducer = combineReducers({
  login: UserLoginReducers,
  signup: UserSignupReducers,
  userUpdate: UserUpdateReducer,
  userEmailVerify: EmailVerify,
  forgotPassword: ForgotPassword,
  resetPassword: ResetPassword,
  orders: OrderGetReducer,
  createOrders: OrderCreateReducer,
  trackingOrder: OrderTrackingReducers,
  cart: AddToCartReducer,
  review: ProductReviewReducer,
  getReview: ProductReviewGetReducer,
});
const store = createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
