import React from "react";
import { Link } from "react-router-dom";
function Document() {
  return (
    <div>
      Document
      <Link to="/resume.pdf" download target="_blank">
        Resume
      </Link>
      <iframe
        src="/pdf.js/web/viewer.html?url=/resume2.pdf"
        height="50vh"
        width="50vh"
      ></iframe>
    </div>
  );
}

export default Document;
