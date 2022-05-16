import React, { useState } from "react";
import { GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";

import "./contact.css";
function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const clearState = () => {
    setName("");
    setEmail("");
    setPhone("");
    setQuery("");
  };

  const submit = (e) => {
    e.preventDefault();
    clearState();
  };
  return (
    <div>
      <form className="form">
        <span className="elements">email</span>
        <input
          className="Input"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <span className="elements">name</span>
        <input
          className="Input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <span className="elements">phone no.</span>
        <input
          className="Input"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <span className="elements">Query</span>
        <textarea
          className="Input"
          maxLength="500"
          initial="wirte your Query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></textarea>
        <motion.div
          className="button"
          whileHover={{
            scale: 1.1,
            animate: { style: { boxShadow: "1px 0px 10px #00ff08  " } },
            transition: { delay: 0, yoyo: Infinity },
          }}
          onClick={(e) => submit(e)}
        >
          submit
        </motion.div>
      </form>
      <a href="https://github.com/ujjawalmittal55" target="_blank">
        <GitHub />{" "}
      </a>
    </div>
  );
}

export default Contact;
