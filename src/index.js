import React from "react";
import { Breakpoints } from "react-device-breakpoints";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import "./assets/style/reset.css";
import "./assets/style/responsive.css";
import "./assets/style/style.css";
import reportWebVitals from "./reportWebVitals";

const breakpoints = {
  isDesktop: "(min-width: 768px)",
  isMobile: "(max-width: 767px)",
};
ReactDOM.render(
  <BrowserRouter>
    <Breakpoints {...breakpoints}>
      <App />
    </Breakpoints>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
