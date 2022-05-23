import React from "react";
import "./display.css";
import { motion } from "framer-motion";
function Display() {
  return (
    <div className="display">
      <div className="display-div">
        <div>
          <motion.div
            initial={{ opacity: 0, x: "-200vw" }}
            animate={{
              color: "#ff0994",
              x: 0,
              opacity: 1,
              fontSize: "20px",
            }}
            transition={{ duration: 2, type: "spring", stiffness: 300 }}
            className="name"
          >
            Ujjawal Mittal
          </motion.div>
          <motion.div
            className="role"
            initial={{ opacity: 0, x: "200vw" }}
            animate={{
              color: "#ff2994",
              x: 0,
              opacity: 1,
              fontSize: "20px",
            }}
            transition={{ duration: 2, type: "spring", stiffness: 300 }}
          >
            Full Stack Developer!
          </motion.div>
        </div>
      </div>

      <div className="projects">
        <motion.svg
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          margin-top="1px"
          width="600"
          height="600"
          viewBox="0 0 413 1101"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M203.1 204.4c-3 1-6.5 1.3-10.6.9-5.1-.5-8.2 0-17.2 2.6-6 1.7-12.5 3.1-14.3 3.1-1.7 0-7.3.7-12.4 1.6-7 1.3-10.6 2.5-15.7 5.5-3.6 2.2-7 3.9-7.5 3.9-.9 0-9.4 5.1-14.2 8.5-1.4 1-2.1 2.3-1.8 3.2.4.9-.3 2.5-1.6 3.8-1.3 1.2-3.9 4.2-5.8 6.6l-3.5 4.4 3.1-2.2c5.2-3.7 6.3.5 1.4 5.2-1.7 1.6-3 3.6-3 4.5 0 .8-.9 2.4-2.1 3.3-1.1 1-1.8 2.1-1.5 2.4.3.4 1.4-.1 2.4-1 2.5-2.2 5-2.4 3.2-.2-2.7 3.2.1 2.5 5.4-1.4 3-2.3 6-4.1 6.7-4.1.6 0 2.9-1.4 5.2-3.2l4-3.2-.7 2.8c-.9 3.5-6.5 12.4-12 19.1-2.3 2.7-5 6.2-5.9 7.7-1 1.6-3.4 3.5-5.3 4.3-4.6 1.9-4.4 1.9-4.2-.9.1-1.4.5-2.3.9-2 .4.2 1-1.2 1.3-3.1.8-4.2-.2-6.6-1.6-4-.7 1.1-1.7 1.5-3.3 1.1-1.8-.5-3.5.4-7.1 3.5-2.6 2.2-5.7 4.7-7 5.6-1.3.8-2.4 2.3-2.4 3.2s-.5 2.2-1.1 2.8c-.8.8-.1 2.4 2.5 5.8 4.3 5.6 4.6 7.4 1.1 6.7-2.5-.4-2.5-.3-1.4 2.2 1.1 2.2 1 3.2-.3 5.4-1.2 2.1-1.4 3.2-.6 4.6.9 1.6.8 1.8-.6 1.3-1.2-.5-1.9.1-2.6 1.9-1.3 3.4-1.5 3.2 2.7 4.9 3.5 1.5 3.9 1.5 5-.1 1.5-2.1 1.7-5 .4-5.8-1.7-1.1-2-6.1-.4-7.9.9-.9 2-1.7 2.6-1.7.5 0 2.2-.9 3.8-2.1 3.2-2.2 4-6.6 1.4-7.5-.8-.4-1.5-1.3-1.5-2.1 0-1.2.3-1.2 2.2.1 1.9 1.4 2.5 1.4 5.7-.3 7.4-3.8 17.6-7.3 18.5-6.3.3.3 1.6.1 2.9-.5 1.2-.6 4.2-1.8 6.6-2.7 2.3-.9 5.9-2.8 7.9-4.1 2-1.4 5.1-2.5 6.8-2.5s3.7-.6 4.3-1.3c.6-.8 3-1.9 5.3-2.6 2.4-.7 5.4-2 6.7-2.8 1.4-.9 4.5-1.5 7.5-1.5 6.6.2 22 1.3 22.6 1.7.3.2 2.2-.7 4.2-1.9 3.3-2 4.5-2.1 10-1.5 3.5.5 7.7.6 9.3.3 1.7-.3 5.1.2 7.5 1 2.5.9 6 1.6 7.8 1.6 1.7 0 3.2.4 3.2 1 0 .5 1.7 1 3.8 1 2.6 0 4.5.7 5.7 2 1 1.1 2.4 2 3 2 .7 0 1.8.7 2.5 1.5s2.2 1.5 3.4 1.5c1.1 0 4.1 1 6.6 2.3 4.8 2.4 15.4 10 16.5 11.7.3.5 1.4 1 2.4 1s2.8 1.1 4 2.4c2.3 2.4 7.6 5 12.2 6 3.9.8 7 11 7.3 24.2.3 8.1.9 11.6 3.6 19.4 3.2 9.3 3.3 10.1 4 32.5.7 21.6 2.4 44.9 3.6 50.5.8 3.8 2 .9 3.8-9.4 1.4-7.8 2.5-10.9 4.8-12.6 1.2-.9 4.8-11.5 4.8-14 0-1.4.8-5.7 1.9-9.5 1-3.9 2.2-12.4 2.5-19 .4-6.6 1.4-15.2 2.1-19 .8-3.9 1.7-12.5 2-19 .3-6.6.8-15.9 1.1-20.6.7-9.6-.9-17.9-5.2-27.7-1.3-3-2.4-6.2-2.4-7.1 0-1-1.3-3.8-2.9-6.3s-3.2-5.9-3.5-7.6c-.4-1.6-1.6-3.8-2.8-4.8-1.1-1.1-5-5.7-8.6-10.3-5.7-7.3-7.4-8.7-13-11.3-3.6-1.6-7.5-3.9-8.6-5.2-1.2-1.2-4.8-3.5-8.1-5.1s-8.5-4.6-11.5-6.7-6.2-3.8-7-3.8-2.7-.6-4.2-1.4c-1.4-.8-4.6-1.7-7-2.1s-5.5-1.3-6.9-2.1c-4.1-2.1-27.3-2.8-32.8-1zM87.5 281.1c1.1 1.7-.4 5.8-2.6 6.9-1.9 1-2 1-1-.9.6-1.1 1.1-3.1 1.1-4.5 0-2.6 1.4-3.5 2.5-1.5z"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M99.8 264.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6zM70 273.5c-1 1.3-.9 1.5.9 1.5 1.1 0 2.1-.4 2.1-.9 0-1.8-1.8-2.1-3-.6zm-12 9.4c-1.2 1.8-1.6 3.2-1 3.6.5.3 1 1.7 1 3.1 0 1.3.5 2.4 1 2.4.6 0 1-.7 1-1.6s.8-1.8 1.8-2.1c1.7-.4 1.8-.9.8-4.4-.5-2.1-1.3-3.9-1.7-3.9s-1.7 1.3-2.9 2.9zm8 18.2c0 .5.5.7 1 .4.6-.3 1-.8 1-1.1 0-.2-.4-.4-1-.4-.5 0-1 .5-1 1.1zm-16 27.8c0 1.7.5 3.1 1 3.1.6 0 1-1.1 1-2.4 0-1.4-.4-2.8-1-3.1-.6-.4-1 .7-1 2.4zm23 17.5c0 2.7 1.5 4.2 2.5 2.6.8-1.3-.3-5-1.6-5-.5 0-.9 1.1-.9 2.4zm-5.3 6.9c-2.4 3.7-4.8 11.7-5.4 17.7-.5 5.3 1.3 17.7 2.4 16.6.3-.3.5-4.5.4-9.4-.2-9.1 1.9-17.4 5.4-21.2 1.4-1.6 1-6-.5-6-.4 0-1.4 1-2.3 2.3zm158.6-.6c-6.9 1.8-9.3 3.3-10.9 7.1-.8 1.9-1.4 3.6-1.4 3.8 0 .1 2 .6 4.5 1 2.6.3 5.1 1.4 5.8 2.4 1.5 2.2 8.7 3.8 8.7 2 0-.8 3.7-1 14.3-.7 17.8.5 22.3 2.1 34 12.2.9.8 2.6 1.5 3.7 1.5 2.8 0 2.7-4.9-.3-9.8-1.2-2-3.3-5.8-4.5-8.4-3.4-7-8.8-12.1-13.4-12.6-2.8-.3-3.9 1.2-1.5 2.1.6.3-2.2.6-6.3.6-5.2.1-8.2-.4-9.7-1.4-2.5-1.8-15.6-1.7-23 .2zM121 358.1c-3 1.6-6.4 2.9-7.5 2.9s-5.2 1.9-9 4.3c-6.3 3.8-7.4 5-10.7 11.2-4.8 9.1-5.6 12.3-3.3 13.1 1.7.7 6.9-1.7 9-4 2.3-2.6 9.7-6.8 14.1-8.2 2.7-.8 8.9-1.6 13.8-1.8 8.8-.3 8.9-.3 6.6 1.6-1.2 1-4.8 2.5-7.9 3.4-13.9 3.9-17.2 5.6-24.8 13.3-4 4-7.4 7.6-7.4 8-.8 3.8-.3 6.1 1.3 6.1 1 0 1.8-.5 1.8-1 0-.6.8-1 1.8-1 .9 0 3.7-.9 6-2 3.5-1.6 4.8-1.8 6.5-.8 3.3 1.8 14 3.8 15.2 2.8 1.3-1.1 18.3-4 23.3-4 5.2 0 10.6-3.4 9.9-6.3-.3-1.2-.8-3.2-1-4.3-.3-1.2-1.1-3.2-1.9-4.4-1.5-2.5-12.3-10-14.4-10-2.8 0-1.3-3 2.6-5 2.1-1.1 4.4-2 5-2 2.4 0 4.3-3.3 4.8-8.1.4-4.4.2-4.9-1.9-5.8-3.8-1.4-14.9-.7-16 1-.5.8-.9.9-.9.4 0-.6-1.2-1-2.7-1-1.6-.1-3.7-.4-4.8-.7-1.3-.4-4 .4-7.5 2.3zm14.5 25.9c1.3.6 1.5.9.5.9-.8 0-2.2-.4-3-.9-1.8-1.2-.2-1.2 2.5 0zm5.2.6c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-15.7.8c0 .2-.7.6-1.5 1-.8.3-1.5.1-1.5-.4 0-.6.7-1 1.5-1s1.5.2 1.5.4zm23.6.5c.5.5 2.5 1.3 4.4 1.8 2.5.7 3.6 1.6 3.8 3.1.2 1.2 0 2.2-.4 2.2-.8 0-7.1-3.7-10.3-6.2-2.1-1.6-2.2-1.8-.4-1.8 1 0 2.3.4 2.9.9zm-1.4 5.1c1.8 1.1 4.1 2 5.1 2 .9 0 1.7.6 1.7 1.3 0 2.4-3.5 4.7-8.3 5.3l-4.7.7v-5.7c0-6.4.9-6.9 6.2-3.6zm-25.3 5.4c1.4 5.9 1.5 5.6-1.9 5.6-3.2 0-8-1.9-8-3.1 0-.9 7.1-6.9 8.1-6.9.4 0 1.2 2 1.8 4.4zm14.1-1.5c0 1.4-2.8 3.3-3.4 2.3-.3-.5-1.7-.7-3.1-.4-1.9.3-2.4.1-2-1.1.7-1.5 8.5-2.3 8.5-.8z"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M224.8 372.4c-.9.9-2.2 1.6-2.8 1.6-1.6 0-10.3 9-9.5 9.8.4.4 1 .1 1.2-.6.6-1.6 3-1.6 4.7 0 1.1 1.1.7 1.9-2.2 4.5-2 1.8-4.4 3.5-5.4 3.9-1 .3-1.8 1-1.8 1.5 0 1.7 4 4.9 6.3 5 24.7 1.2 38.4.5 43.9-2.2 1-.5 3.6-.3 6.3.6 5.6 1.6 7.5 1.1 7.5-2.1 0-2.9-2.3-6.8-6.4-11-5.2-5.2-8.9-7.2-15.6-8.4-3.6-.6-7.2-1.6-8.1-2-.8-.5-4.9-1.2-9-1.6-6.2-.5-7.8-.4-9.1 1zm14.7 4.6c-.4.6-1 .8-1.5.5s-1.1-.1-1.5.5c-.3.5-1.4 1-2.3 1-1.2 0-1-.4.8-1.4 3-1.7 5.4-2 4.5-.6zm14.5 3.1c4.2 1.6 9.4 4.9 8.7 5.5-.2.2-2.4-.7-4.8-2s-6.4-2.7-8.9-3.1-5.2-1.1-6-1.7c-2.3-1.4 6.8-.3 11 1.3zm-23-.1c-2 1.3-4.3 1.3-3.5 0 .3-.6 1.6-1 2.8-1 1.8 0 1.9.2.7 1zm-3 7.4c0 1.3.3 3.8.6 5.5l.7 3.1h-6.1c-5.2 0-6-.3-6.5-2.1-.7-2.8.9-5.3 4.7-7.2 4.6-2.3 6.6-2.1 6.6.7zm26.7-.2c1.8 1.3 3.3 2.9 3.3 3.5 0 1.7-3.9 4.1-7.8 4.9-3.6.7-3.7.2-2.6-6.9.8-4.4 2.3-4.7 7.1-1.5zm-18.4 1c.3 1 .7 1 1.9 0s1.8-1 2.7.2c2.1 2.5-1 3.6-8.1 2.7-.3-.1-.4-1-.1-2.1.6-2.2 2.9-2.7 3.6-.8zm-65.7 4.7c-.3.5-1.7.8-3.2.8-2.7 0-7.3 4.5-7.4 7.1 0 .8-.9 2.7-2 4.2-1.4 2-1.9 3.7-1.4 5.4.6 2.7 3.4 5.7 3.4 3.7 0-.6 1.7-1.1 3.9-1.1 3.4 0 4.2-.4 6-3.6 1.2-1.9 2.1-4.6 2.1-5.9s.5-3.6 1-5.1c1.5-3.9-.5-8.6-2.4-5.5zm33.4 6.9c0 1 2.2 3.2 3.2 3.2 1.5 0 .8-2.8-.8-3.4-2.1-.8-2.4-.8-2.4.2zm-52.3 40.4c-8.2 10.4-9.5 14.5-6.2 20.8 2 3.8 3.7 3.9 2.3.2-1.8-4.7-.2-9.4 5.3-15.7 3-3.4 4.8-6.3 4.5-7.2-.3-.8-.6-1.7-.6-1.9 0-1.5-2.4.2-5.3 3.8zm62.3.6c0 1.3 3.9 4.6 4.6 3.9.9-.9-1.6-4.7-3.1-4.7-.8 0-1.5.4-1.5.8zm-50.4 21.1c-.8 1.3 2 3.3 4 2.9 1.7-.3 1.7-.4 0-2.1-1.9-1.9-3.2-2.2-4-.8zm35.7-.2c-2.4.9-1.3 2.3 1.7 2.3 3.2 0 4-1.4 1.4-2.4-.9-.3-1.6-.6-1.7-.5-.1 0-.8.3-1.4.6zm-49 3c-.7.3-1.3 1.3-1.3 2.4 0 1.4.7 1.9 2.8 1.9 1.5 0 3.3.5 4 1.2 1 .9 1.6.8 3-.5 1.5-1.6 1.5-1.9.2-2.7-.8-.5-2.7-1-4.2-1-1.4 0-2.8-.4-3-.9-.1-.4-.9-.6-1.5-.4zm9.7 7.8c0 1.6 1.6 2 2.4.6.3-.5-.1-1.1-.9-1.5-.9-.3-1.5 0-1.5.9zm3.8 5.5c-1.4 2.2-5.4 2.7-6 .8-.2-.6-1-.8-1.7-.4-.7.5-1 1.4-.7 2.2.3.7-.4 1.8-1.4 2.4-1.1.6-2 1.5-2 2 0 1.6 7.6 1.2 9-.5.8-.9 2.1-1.3 3.7-.9 1.9.5 2.5.2 3-1.5.3-1.1.9-1.8 1.4-1.6.7.5 2.9-2.5 2.9-3.9 0-.3-1.6-.6-3.5-.6-2.4 0-3.9.6-4.7 2zm9.8 3.9c-.3.5.1 1.1.9 1.5.9.3 1.5 0 1.5-.9 0-1.6-1.6-2-2.4-.6zM134.5 496c-.3.5-.1 1 .4 1 .6 0 1.1-.5 1.1-1 0-.6-.2-1-.4-1-.3 0-.8.4-1.1 1zm90.5 10.6c-1.9 1.4-3.6 2.9-3.8 3.3-.6 1.6 2.4 1.9 6.3.5 2.1-.7 4.2-1.1 4.7-.8.4.3 1.3.2 1.9-.1 1.2-.8-2.8-5.6-4.5-5.4-.6 0-2.7 1.2-4.6 2.5zm-83.4-.4c-1.7.9-1.2 1.4 4.4 4l6.3 3 5.4-2.7c3-1.5 5.3-2.8 5-3.1-.2-.2-2.8.2-5.8 1-5.3 1.3-5.5 1.3-8-1-2.8-2.6-4.4-2.9-7.3-1.2zm64 1.7c-.3.5 0 1.1.7 1.4 1.9.7 7.7-.4 7.1-1.4-.7-1.2-7.1-1.2-7.8 0zm-36.8.8c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6zM284.5 534c-2.6 3.1-4.4 6.7-5.2 10.2-2 8-3.4 13-4.6 15.8-.6 1.4-1.1 2.9-1.1 3.5-.1.5-.9 2.7-1.9 4.9-.9 2.1-1.7 4.2-1.7 4.7 0 1.3-3.4 8.8-10.2 22.4-5.9 11.8-10.5 18.7-14 21.3-2.6 1.9-5.4 4.5-20.4 19-14.9 14.4-16.9 16.1-21.9 19.2-2 1.3-3.5 3-3.5 4.1 0 1.7-1.1 2.4-3.3 2-.4-.1-1.7 1.9-2.8 4.4s-2.6 4.5-3.3 4.5-2.3 1.1-3.6 2.5c-1.2 1.3-2.6 2.2-3.1 2-1.2-.8-3.9.6-3.9 2.1 0 3-13.2.1-13.8-3-.4-1.8-2.2-2.2-2.2-.5 0 .6-.6.9-1.2.6-.7-.2-1.2-1-1-1.6.1-.6-.8-1.6-2.1-2.2-1.2-.6-3.2-2.3-4.2-4-1.1-1.6-2.5-2.7-3.1-2.5-.7.3-1.4-1.2-1.8-3.6-.6-3.8-.8-4-2.1-2.2-1.3 1.7-1.4 1.3-1.5-4.1l-.1-6-1.9 3.5-1.9 3.5-.1-4.3c0-4-1.3-5.6-2.3-3-.3.7-.6-.3-.6-2.3-.1-1.9.4-4 1-4.6.7-.7.7-1.3.1-1.7-.6-.3-1.3.2-1.7 1.3-.8 2.6-3.5 3.6-3.5 1.3 0-1 .5-2.3 1.2-3 .8-.8-.1-2.3-3.9-5.9-5.1-4.9-10.3-12.8-10.3-15.8 0-1.7-.4-2.6-5.3-13.5-1.4-3-3.4-7.5-4.5-10s-2.6-8.4-3.2-13c-.6-4.7-1.8-9.2-2.6-10.1-.8-.8-1.4-2-1.4-2.6 0-2.2-8.1-17.4-9-16.8-.6.4-.5 1.6.1 3.3 1.7 4.5 8.6 33.2 9.8 41.2.7 4.1 1.7 9.1 2.2 11.1s.9 4.6.9 5.7c0 1.2 2.1 4.5 4.6 7.4 2.6 2.9 5.7 6.5 7 8s2.4 3.2 2.4 3.8c0 .5.4 1 .9 1 .6 0 1.6 1.1 2.3 2.5 4.4 8.2 7.1 13.1 7.7 13.5.9.8 3.8 7 5.3 11.5.7 2.2 2.9 6.7 4.9 10 7.3 12.3 13.2 25.6 14.4 32.4.7 4.3 1.8 5.5 5 5.6 1.7 0 2 .6 1.7 4.4-.4 5.9-1.7 8.1-4.7 7.9-2.5-.2-3-1.5-2.6-6.6.1-1.4-.4-2.2-1.4-2.2-.9 0-1.5-.9-1.5-2.1 0-3.3-6.7-22.4-11-31.4-2.1-4.4-5.8-10.7-8.2-13.9-5-6.9-21.5-24.2-22.3-23.4-.3.3.7 1.8 2.3 3.4 7.7 7.9 20.8 25.1 25 32.9 5.8 11 12.2 29.2 12.2 34.9 0 1.3.3 3.2.7 4.2.6 1.6.7 1.6 1.5-.2.4-1.1.5 1 .2 4.7-.6 6.3-.5 6.6 1.7 7.2 5 1.4 6.9.8 6.9-1.7 0-1.4.5-2.8 1-3.1.6-.3 1-1.7 1-3 0-3.7 1.8-3.9 2.8-.3l.8 3.3.7-3.4c.6-2.7.3-3.9-1.3-5.6-2.1-2.2-2.7-6.5-1-6.5.5 0 1.7-1.5 2.6-3.2 1.4-2.7 13.9-19.9 22.7-31.1 1.2-1.6 6.2-6.8 11.2-11.5 4.9-4.8 11.5-11.2 14.6-14.3s9.6-8 14.4-11c5.8-3.5 9.5-6.6 11.1-9.1 1.3-2.1 2.4-4 2.4-4.2 0-.9 12.5-21.4 20.1-32.9 9.7-14.6 17.1-29.5 19.8-39.7 2.2-8.4 3.1-20.2 1.6-20.6-.5-.2-2.8 1.9-5 4.6zM136 636.9c0 .5-.7 1.4-1.5 2.1-1.3 1-1.5.9-1.5-.9 0-1.2.6-2.1 1.5-2.1.8 0 1.5.4 1.5.9zm35.7 46.9c3.9.3 5.4.9 5.8 2.3.8 2.5-1.3 5.4-5.1 7.3-3.3 1.5-3.4 1.5-7.8-2.2-2.7-2.2-4.5-4.6-4.5-5.9-.1-2.2 2.2-3.5 4.9-2.6.8.3 3.8.8 6.7 1.1zM164 723c0 .4-.9 1-2 1.3-2.2.6-4.9-1.8-2.8-2.5 1.7-.6 4.8.2 4.8 1.2zM47.1 556.2c-1 1.6-.8 2 1.4 2.8 3.5 1.3 3.5 1.3 3.5-1.4 0-3.1-3.2-4-4.9-1.4zm-3.4 8.5c-.9 8.3 3 26.6 5.9 27.7 1.6.6 1.5 1.4 1.9-13.1.3-11.1.3-11.1-2.6-14.4-1.6-1.8-2.9-3.6-2.9-4.1 0-.4-.4-.8-.9-.8-.4 0-1.1 2.1-1.4 4.7z"
          />
        </motion.svg>
      </div>
    </div>
  );
}

export default Display;
