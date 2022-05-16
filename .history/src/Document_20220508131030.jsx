import React from "react";
import { Link } from "react-router-dom";
import { Document as Doc, Page } from "react-pdf";
import "./document.css";
function Document() {
  return (
    <div>
      {/* <img src="resume.png"></img>/ */}
      {/* <iframe src="/pdf.js/web/viewer.html" className="resume"></iframe>
       */}
      <Doc fil="/public/resume.pdf">
        <Page pageNumber={1} />
      </Doc>
    </div>
  );
}

export default Document;
