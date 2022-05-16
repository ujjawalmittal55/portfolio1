import React from "react";
import { Mic } from "@mui/icons-material";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="details ">
        <h1>
          <span className="nowrap">
            Hi! I am Ujjawal
            <Mic />
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
        <img src="/my.jpeg" width="300" height="300" />
      </div>
    </div>
  );
}

export default About;
