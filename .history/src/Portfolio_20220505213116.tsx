import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Display from "./Display";
import "./homepage.css";
import SideBar from "./SideBar";
function Portfolio() {
  return (
    <div className="Home">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main_content">
        <Router>
          <Route path="/" element={<Display />} />
        </Router>
      </div>
    </div>
  );
}

export default Portfolio;
