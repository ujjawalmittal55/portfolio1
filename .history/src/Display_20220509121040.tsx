import React from "react";
import "./display.css";
import { motion } from "framer-motion";
function Display() {
  return (
    <div className="display">
      <div className="display-div">
        <div className="name">Ujjawal Mittal</div>
        <motion.div
          className="role"
          animate={{ color: "#ff2994", x: 10, y: 10, fontSize: "20px" }}
        >
          Full Stack Developer!
        </motion.div>
      </div>
      <img src="/public/my.jpeg" height="300" width="300"></img>
    </div>
  );
}

export default Display;
