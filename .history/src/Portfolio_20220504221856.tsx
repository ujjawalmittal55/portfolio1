import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Display from "./Display";
import "./homepage.css";
import SideBar from "./SideBar";
function Portfolio() {
  return (
    <div className="Home">
      <div className="sidebar">
        <SideBar />
      </div>
      <div>
          <Display/>
      </div>
    </div>
  );
}

export default Portfolio;
