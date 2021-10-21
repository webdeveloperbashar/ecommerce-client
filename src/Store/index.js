import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { AddToCartReducer } from "./Reducers/CartReducer";
import { CategoryReducer } from "./Reducers/CategoryReducers";
import { OrderCreateReducer, OrderGetReducer } from "./Reducers/OrderReducer";
import { OrderTrackingReducers } from "./Reducers/OrderTrackingReducers";
import {
  getAllProduct,
  getCreatedSorting,
  getProductByFilter,
  getProductBySearch,
  getSoldSorting,
  getRatingDescSorting,
  getRatingAscSorting,
} from "./Reducers/ProductReducers";
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
  category: CategoryReducer,
  products: getAllProduct,
  filterProduct: getProductByFilter,
  searchProduct: getProductBySearch,
  getCreatedSorting: getCreatedSorting,
  getSoldSorting: getSoldSorting,
  getRatingDescSorting: getRatingDescSorting,
  getRatingAscSorting: getRatingAscSorting,
});
const store = createStore(combinedReducer, applyMiddleware(...middleware));

export default store;
