import { motion } from "framer-motion";
import React from "react";
import "./style/larger.scss";

function LargerS() {
  return (
    <>
      <motion.span
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1.7 }}
        className="waves"
      />
      <motion.img
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="img2"
        src="3.jpg"
        alt="background"
      />
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 5, x: { type: "spring", stiffness: "120" } }}
        className="welcomeText"
      >
        <div className="brand">
          <div />
          <p>
            KP
            <br /> Clothing
          </p>
        </div>
        <h2>Welcome Home.</h2>
        <h4>Our shop moved online!</h4>
        <p>Your favorites and best fashion are now just a click away </p>
      </motion.div>
      <motion.span
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="waves2"
      />
    </>
  );
}

export default LargerS;
