import React from "react";
import { Link } from "react-router-dom";
import "./document.css";
function Document() {
  return (
    <div>
      <iframe src="/pdf.js/web/viewer.html" className="resume"></iframe>
    </div>
  );
}

export default Document;
