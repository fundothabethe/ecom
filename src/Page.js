import React from "react";
import "./page.scss";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Page() {
  const shakeVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: "-25%",
      transition: {
        yoyo: Infinity,
        duration: 1,
        delay: 5,
      },
    },
  };

  return (
    <main>
      <motion.img
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="img"
        src="small.jpg"
        alt="background"
      />
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="box1"
      >
        <div className="brand1">
          <div />
          <p>
            KP
            <br /> Clothing
          </p>
        </div>
        <h2>Welcome Home.</h2>
        <h4>Our shop moved online!</h4>
        <p className="p">
          Your favorites and best fashion are now just a click away{" "}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="box2"
      >
        <motion.span
          variants={shakeVariants}
          initial="initial"
          animate="animate"
          className="down-icon"
        >
          <Link
            activeClass="active"
            className="lick"
            to="box1"
            spy={true}
            smooth={true}
            offset="1000"
          >
            <ArrowDropDownCircleIcon className="below-icon" />
          </Link>
        </motion.span>
      </motion.div>
    </main>
  );
}

export default Page;
