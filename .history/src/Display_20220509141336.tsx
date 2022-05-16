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
      <div className="projects">
        <motion.img
          initial={{ opacity: 0, y: "-100vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 2 }}
          whileHover={{ scale: 1.1, rotateZ: 180, transition: { delay: 0 } }}
          src="/my.jpeg"
          height="100vh"
          width="100vw"
        ></motion.img>
        <motion.img
          initial={{ opacity: 0, y: "-100vh" }}
          animate={{ opacity: 1, y: 0, rotateX: 360 }}
          transition={{ delay: 1, duration: 2 }}
          whileHover={{ scale: 1.1, rotateZ: 180, transition: { delay: 0 } }}
          src="/my.jpeg"
          height="100vh"
          width="100vw"
        ></motion.img>
      </div>
    </div>
  );
}

export default Display;
