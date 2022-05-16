import React from "react";
import { Link } from "react-router-dom";
import { Document as doc, Page } from "react-pdf";
import "./document.css";
function Document() {
  return (
    <div>
      {/* <img src="resume.png"></img>/ */}
      <iframe src="/pdf.js/web/viewer.html" className="resume"></iframe>
    </div>
  );
}

export default Document;
