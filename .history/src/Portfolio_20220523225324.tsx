import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Display from "./Display";
import "./homepage.css";
import SideBar from "./SideBar";
import About from "./About";
import Document from "./Document";
import Contact from "./Contact";
import { AnimatePresence } from "framer-motion";
function Portfolio() {
  return (
    <div className="Home">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main_content">
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Display />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Display />} />
            <Route path="/document" element={<Document />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Portfolio;
