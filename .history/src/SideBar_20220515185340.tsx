import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  NavLink,
} from "react-router-dom";

import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import HailIcon from "@mui/icons-material/Hail";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { motion } from "framer-motion";
function SideBar() {
  return (
    <div>
      <div className="sidebar">
        <ul className="sidebar-items">
          <li className="list">
            <Link to="/">
              <div className="list-div">
                <HomeIcon>home</HomeIcon>
              </div>
            </Link>
          </li>
          <Link to="/about">
            <motion.li
              className="list"
              whileHover={{ scale: 1.1, transition: { yoyo: Infinity } }}
            >
              <div className="list-div">
                <HailIcon>home</HailIcon>
              </div>
            </motion.li>
          </Link>
          <Link to="/contact">
            <li className="list">
              <div className="list-div">
                <EmailOutlinedIcon>home</EmailOutlinedIcon>
              </div>
            </li>
          </Link>

          <Link to="/document">
            <li className="list">
              <div className="list-div">
                <InsertDriveFileOutlinedIcon>home</InsertDriveFileOutlinedIcon>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
