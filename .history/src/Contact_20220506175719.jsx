import React from "react";
import { GitHub } from "@mui/icons-material";
import "contact.css";
function Contact() {
  return (
    <div>
      <form className="form">
        <span>
          email
          <input type="email" />
        </span>
        <span>
          phone no.
          <input type="number" />
        </span>
        <a href="https://github.com/ujjawalmittal55" target="_blank">
          <GitHub />{" "}
        </a>
      </form>
    </div>
  );
}

export default Contact;
