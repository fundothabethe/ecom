import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import "./row.scss";
import AOS from "aos";

function Row({ img, p, price }) {
  useEffect(() => {
    AOS.init({ easing: "ease-in-out" });
  }, []);

  return (
    <div data-aos="zoom-in" className="formalcards">
      <motion.img whileHover={{ scale: 1.1 }} src={img} alt="products" />
      <p>
        {p}
        <br /> {price}{" "}
      </p>
    </div>
  );
}

export default Row;
