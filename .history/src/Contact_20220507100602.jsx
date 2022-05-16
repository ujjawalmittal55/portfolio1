import React, { useState } from "react";
import { GitHub } from "@mui/icons-material";
import "./contact.css";
function Contact() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [query, setQuery] = useState();
  return (
    <div>
      <form className="form">
        <span className="elements">email</span>
        <input type="email" />

        <span className="elements">phone no.</span>
        <input type="number" />

        <span className="elements">name</span>
        <input type="text" />

        <span className="elements">Query</span>
        <textarea maxlength="500" initial="wirte your Query"></textarea>
        <div className="button">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
      <a href="https://github.com/ujjawalmittal55" target="_blank">
        <GitHub />{" "}
      </a>
    </div>
  );
}

export default Contact;
