import React from "react";
import { Link } from "react-router-dom";
function Document() {
  return (
    <div>
      Document
      <Link to="/resume.pdf" download target="_blank">
        Resume
      </Link>
    </div>
  );
}

export default Document;
