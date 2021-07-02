import React from "react";
import { Breakpoints } from "react-device-breakpoints";
import ReactDOM from "react-dom";
import App from "./app/App";
import "./assets/style/reset.css";
import "./assets/style/responsive.css";
import "./assets/style/style.css";
import reportWebVitals from "./reportWebVitals";
const breakpoints = {
  isDesktop: "(min-width: 768px)",
//   isTablet: "(max-width: 1023px) and (min-width: 768px)",
  isMobile: "(max-width: 767px)",
};
ReactDOM.render(
  <Breakpoints {...breakpoints}>
    <App />
  </Breakpoints>,
  document.getElementById("root")
);
reportWebVitals();
