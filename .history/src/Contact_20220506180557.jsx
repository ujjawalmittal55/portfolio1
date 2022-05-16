import React from "react";
import { GitHub } from "@mui/icons-material";
import "./contact.css";
function Contact() {
  return (
    <div>
      <form className="form">
        <span className="elements">
          email
          <input type="email" />
        </span>
        <span className="elements">
          phone no.
          <input type="number" />
        </span>
        <span className="elements">
          name
          <input type="text" />
        </span>
        <span className="elements">
          Query
          <textarea maxlength="500"></textarea>
        </span>
        <a href="https://github.com/ujjawalmittal55" target="_blank">
          <GitHub />{" "}
        </a>
      </form>
    </div>
  );
}

export default Contact;
