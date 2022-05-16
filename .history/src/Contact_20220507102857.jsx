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
        <input type="email" onChange={setEmail(target.value)} />

        <span className="elements">phone no.</span>
        <input type="number" />

        <span className="elements">name</span>
        <input type="text" />

        <span className="elements">Query</span>
        <textarea maxlength="500" initial="wirte your Query"></textarea>
        <div className="button">submit</div>
      </form>
      <a href="https://github.com/ujjawalmittal55" target="_blank">
        <GitHub />{" "}
      </a>
    </div>
  );
}

export default Contact;
