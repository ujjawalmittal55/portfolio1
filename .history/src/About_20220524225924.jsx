import React from "react";
import { Mic } from "@mui/icons-material";
import "./about.css";
import { motion } from "framer-motion";
function About() {
  let audio = new Audio("/name.mp3");
  const play = () => {
    audio.play();
  };
  return (
    <motion.div
      exit={{
        y: "100vh",
        opacity: 0,
        transition: { ease: "easeInOut", duration: 1 },
      }}
      className="about"
    >
      <div className="details ">
        <h1>
          <motion.span className="nowrap">
            Hi! I am Ujjawal
            <Mic onClick={play} className="audio" />
          </motion.span>
        </h1>
        <motion.p
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 2, type: "fade" }}
        >
          I am pursuing my graduation from IIT Indore in Mechanical Engineering
        </motion.p>
        <motion.p
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 2, type: "fade" }}
        >
          I am web enthuist
        </motion.p>
        <motion.p
          initial={{ y: "100vw" }}
          animate={{ y: 0 }}
          transition={{ duration: 2, type: "fade" }}
        >
          This is my portfolio site{" "}
        </motion.p>
        <motion.p
          initial={{ y: "-100vw" }}
          animate={{ y: 0 }}
          transition={{ duration: 2, type: "fade" }}
        >
          which will get updated every time I create something
        </motion.p>
      </div>
      <div>
        <motion.img
          src="/my.jpeg"
          class="image"
          animate={{ rotateZ: [30, -30] }}
          transition={{ duration: 0.5, yoyo: Infinity }}
          width="300em"
          height="300em"
        />
      </div>
    </motion.div>
  );
}

export default About;
