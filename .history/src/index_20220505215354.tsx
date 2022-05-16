import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Portfolio from "./Portfolio";
import SideBar from "./SideBar";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Display from "./Display";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <div className="Home">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main_content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Display />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Display />} />
            <Route path="/projects" element={<Display />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
