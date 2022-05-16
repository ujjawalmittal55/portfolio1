import React from "react";
import "./display.css";
import { motion } from "framer-motion";
function Display() {
  return (
    <div className="display">
      <div className="display-div">
        <div className="name">Ujjawal Mittal</div>
        <motion.div className="role" animate={{ fontSize: 50, color: "black" }}>
          Full Stack Developer!
        </motion.div>
      </div>
    </div>
  );
}

export default Display;
