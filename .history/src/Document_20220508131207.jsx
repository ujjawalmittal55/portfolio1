import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Document as Doc, Page } from "react-pdf";
import "./document.css";
function Document() {
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {/* <img src="resume.png"></img>/ */}
      {/* <iframe src="/pdf.js/web/viewer.html" className="resume"></iframe>
       */}
      <Doc file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Doc>
    </div>
  );
}

export default Document;
