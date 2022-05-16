import React from "react";
import { Link } from "react-router-dom";
import "./document.css";
function Document() {
  return (
    <div>
      <iframe
        src="/pdf.js/web/viewer.html?url=/resume2.pdf"
        className="resume"
      ></iframe>
    </div>
  );
}

export default Document;
