import { motion } from "framer-motion";
import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { Button } from "@material-ui/core";
import { Link as Link1 } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <h3>Follow Khanyi</h3>
      <span className="social">
        <motion.a
          href="https://www.instagram.com/great_kp_mdaka/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <InstagramIcon id="insta" />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/kp.mdaka"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FacebookIcon id="insta" />
        </motion.a>
        <a
          href="https://chat.whatsapp.com/DyzzJPPEc71G3lKBN6AlPP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GroupAddIcon id="insta" />
        </a>
      </span>
      <Link1 to="/admin">
        <Button variant="contained" color="secondary">
          Admin
        </Button>
      </Link1>

      <div className="final-text">
        <h3>All Rights Reserved</h3>
        <p>©Copyright 2021</p>
      </div>
    </footer>
  );
}

export default Footer;
