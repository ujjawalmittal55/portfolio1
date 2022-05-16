import React from "react";

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
      </form>
    </div>
  );
}

export default Contact;
