import React from "react";
import { Breakpoints } from "react-device-breakpoints";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import App from "./app/App";
import "./assets/style/reset.css";
import "./assets/style/responsive.css";
import "./assets/style/style.css";
import reportWebVitals from "./reportWebVitals";
import store from "./Store";
console.warn = console.error = () => {};

const breakpoints = {
  isDesktop: "(min-width: 768px)",
  isMobile: "(max-width: 767px)",
};
ReactDOM.render(
  <BrowserRouter>
    <Breakpoints {...breakpoints}>
      <Provider store={store}>
        <App />
      </Provider>
    </Breakpoints>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
