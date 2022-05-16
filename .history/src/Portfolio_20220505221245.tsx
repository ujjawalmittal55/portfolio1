import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
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
      <div className="main_content"></div>
    </div>
  );
}

export default Portfolio;
