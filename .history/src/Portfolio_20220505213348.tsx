import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Display from "./Display";
import "./homepage.css";
import SideBar from "./SideBar";
import About from "./About";
function Portfolio() {
  return (
    <div className="Home">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main_content">
        <Router>
          <Routes>
            <Route path="/" element={<Display />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Display />} />
            <Route path="/projects" element={<Display />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default Portfolio;
