import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { OrderReducer } from "./Reducers/OrderReducer";
import {
  EmailVerify,
  UserLoginReducers,
  UserSignupReducers
} from "./Reducers/UserReducers";
import { UserUpdateReducer } from './Reducers/UserUpdateReducers';


const middleware = [thunk];
const combinedReducer = combineReducers({
  login: UserLoginReducers,
  signup: UserSignupReducers,
  userUpdate: UserUpdateReducer,
  userEmailVerify: EmailVerify,
  orders: OrderReducer
});
const store = createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
