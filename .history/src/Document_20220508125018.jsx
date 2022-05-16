import React from "react";
import { Link } from "react-router-dom";
import "./document.css";
function Document() {
  return (
    <div>
      <iframe src="/resume.pdf" className="resume"></iframe>
    </div>
  );
}

export default Document;
