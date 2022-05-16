import React from "react";
import { GitHub } from "@mui/icons-material";
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
        <GitHub />
      </form>
    </div>
  );
}

export default Contact;
