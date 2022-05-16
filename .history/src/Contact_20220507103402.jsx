import React, { useState } from "react";
import { GitHub } from "@mui/icons-material";
import "./contact.css";
function Contact() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [query, setQuery] = useState();
  const submit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(name);
    console.log(phone);
    console.log(query);
  };
  return (
    <div>
      <form className="form">
        <span className="elements">email</span>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />

        <span className="elements">phone no.</span>
        <input type="number" onChange={(e) => setPhone(e.target.value)} />

        <span className="elements">name</span>
        <input type="text" onChange={(e) => setName(e.target.value)} />

        <span className="elements">Query</span>
        <textarea
          maxLength="500"
          initial="wirte your Query"
          onChange={(e) => setQuery(e.target.value)}
        ></textarea>
        <div className="button" onClick={(e) => submit(e)}>
          submit
        </div>
      </form>
      <a href="https://github.com/ujjawalmittal55" target="_blank">
        <GitHub />{" "}
      </a>
    </div>
  );
}

export default Contact;
