import React from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import HailIcon from "@mui/icons-material/Hail";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
function SideBar() {
  return (
    <div>
      <div className="logo">logo </div>
      <ul className="sidebar-items">
        <li className="list">
          <div className="list-div">
            <HomeIcon>home</HomeIcon>
          </div>
        </li>
        <li className="list">
          <div className="list-div">
            <HailIcon>home</HailIcon>
          </div>
        </li>
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
      </ul>
    </div>
  );
}

export default SideBar;
