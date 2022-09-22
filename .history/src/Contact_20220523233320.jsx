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
    <div className="contact_ME">
      <motion.div className="contact">
        {" "}
        Contact Me
        <motion.svg
          initial={{ opacity: 0, rotateZ: -10 }}
          animate={{ opacity: 1, rotateZ: 0 }}
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          role="img"
        >
          <path
            initial={{ pathlength: 0 }}
            animate={{ pathlength: 1, transition: { duration: 0.5 } }}
            d="M16.592 9.196s-.354-3.298-3.627-3.39c-3.274-.09-4.955 2.474-4.955 6.14 0 3.665 1.858 6.597 5.045 6.597 3.184 0 3.538-3.665 3.538-3.665l6.104.365s.36 3.31-2.196 5.836c-2.552 2.524-5.69 2.937-7.876 2.92-2.19-.016-5.226.035-8.16-2.97-2.938-3.01-3.436-5.93-3.436-8.8 0-2.87.556-6.67 4.047-9.55C7.444.72 9.849 0 12.254 0c10.042 0 10.717 9.26 10.717 9.26z"
          />
        </motion.svg>
      </motion.div>
      <motion.form
        className="form"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          duration: 2,
          when: "beforeChildren",
          staggerChildren: 0.2,
        }}
      >
        <motion.input
          variant={inputVariants}
          whileFocus="hover"
          className="Input"
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="Input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="Input"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

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
        Catch me on social
        <a href="https://github.com/ujjawalmittal55" target="_blank">
          <GitHub />{" "}
        </a>
      </motion.div>
    </div>
  );
}

export default Contact;
