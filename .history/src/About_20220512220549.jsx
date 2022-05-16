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
    <div className="about">
      <div className="details ">
        <h1>
          <span className="nowrap">
            Hi! I am Ujjawal
            <Mic onClick={play} className="audio" />
          </span>
        </h1>
        <p>
          I am pursuing my graduation from IIT Indore in Mechanical Engineering
        </p>
        <p>I am web enthuist</p>
        <p>This is my portfolio site </p>
        <p>which will get updated every time I create something</p>
      </div>
      <div>
        <motion.img
          src="/my.jpeg"
          animate={{ rotateZ: [30, -30] }}
          transition={{ duration: 0.5, yoyo: Infinity }}
          width="300"
          height="300"
        />
      </div>
    </div>
  );
}

export default About;
