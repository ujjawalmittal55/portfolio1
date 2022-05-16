import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Portfolio from "./Portfolio";
import SideBar from "./SideBar";
import { render } from "react-dom";

import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
