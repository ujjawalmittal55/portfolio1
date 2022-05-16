import React, { useState } from "react";
import { GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";
import "./contact.css";
const spanVariants = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1.2,
    transition: { duration: 2 },
  },
};
const inputVariants = {
  hover: {
    scale: 1.2,
  },
};
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
      <motion.form
        className="form"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.span
          className="elements"
          variant={spanVariants}
          initial="hidden"
          animate="visible"
          whileHover="visible"
        >
          emails
        </motion.span>
        <motion.input
          variant={inputVariants}
          whileFocus="hover"
          className="Input"
          whileTap={{ scale: 0.9, borderColor: "pink" }}
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
            animate: { style: { boxShadow: "1px 0px 10px #F0FFFF  " } },
            transition: { delay: 0, yoyo: Infinity },
          }}
          onClick={(e) => submit(e)}
        >
          submit
        </motion.div>
      </motion.form>
      <motion.div
        className="social"
        variants={spanVariants}
        initial="hidden"
        animate="visible"
      >
        <a href="https://github.com/ujjawalmittal55" target="_blank">
          <GitHub />{" "}
        </a>
      </motion.div>
    </div>
  );
}

export default Contact;
