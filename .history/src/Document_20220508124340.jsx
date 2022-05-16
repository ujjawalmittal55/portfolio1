import React from "react";
import { Link } from "react-router-dom";
import "/document.css";
function Document() {
  return (
    <div>
      Document
      <Link to="/resume.pdf" download target="_blank">
        Resume
      </Link>
      <iframe
        src="/pdf.js/web/viewer.html?url=/resume2.pdf"
        className="resume"
      ></iframe>
    </div>
  );
}

export default Document;
