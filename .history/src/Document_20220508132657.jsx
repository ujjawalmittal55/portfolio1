import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Document as Doc, Page } from "react-pdf";
import "./document.css";

// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};
function Document() {
  const [file, setFile] = useState("/resume.pdf");
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      {/* <img src="resume.png"></img>/ */}
      {/* <iframe src="/pdf.js/web/viewer.html" className="resume"></iframe>
       */}
      <Doc file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Doc>
    </div>
  );
}

export default Document;
