import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  NavLink,
  Routes,
} from "react-router-dom";

import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import HailIcon from "@mui/icons-material/Hail";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import About from "./About";
import Display from "./Display";

function SideBar() {
  return (
    <div>
      <div className="sidebar">
        <ul className="sidebar-items">
          <Router>
            <li className="list">
              <Link to="/">
                <div className="list-div">
                  <HomeIcon>home</HomeIcon>
                </div>
              </Link>
            </li>
            <Link to="/about">
              <li className="list">
                <div className="list-div">
                  <HailIcon>home</HailIcon>
                </div>
              </li>
            </Link>

            <li className="list">
              <div className="list-div">
                <EmailOutlinedIcon>home</EmailOutlinedIcon>
              </div>
            </li>
            <li className="list">
              <div className="list-div">
                <InsertDriveFileOutlinedIcon>home</InsertDriveFileOutlinedIcon>
              </div>
            </li>

            <Routes>
              <Route path="/" element={<Display />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Display />} />
              <Route path="/projects" element={<Display />} />
            </Routes>
          </Router>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
