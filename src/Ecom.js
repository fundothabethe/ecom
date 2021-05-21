import React, { useEffect, useState } from "react";
import "./style/ecom.scss";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneIcon from "@material-ui/icons/Phone";
import { Button, TextareaAutosize, TextField } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Page from "./Page";
import LargerS from "./LargerS";
import emailjs from "emailjs-com";
import Footer from "./Footer";
import { db } from "./Admin/firebase";
//
function Ecom({ items }) {
  //states🦗

  const [menu, setMenu] = useState(false);

  let screenWidth = window.screen.width;

  //formal🐢

  //women

  //initiaize a ref

  const [headerbk, setHeaderbk] = useState(false);
  const [data, setData] = useState([]);

  const styles = {
    backgroundColor: "#e2ded36c",
    boxShadow: "0 0 10px #85767194, 0 0 10px #85767194",
  };

  //useEffect🤢

  useEffect(() => {
    //
    AOS.init();

    window.addEventListener("scroll", () => {
      window.scrollY >= 700 ? setHeaderbk(true) : setHeaderbk(false);
    });

    //
  }, []);

  //data
  useEffect(() => {
    db.collection("categories").onSnapshot(
      (e) => {
        setData(e?.docs.map((e) => e.data()));
      },
      (err) => {
        throw err;
      }
    );
  }, []);

  //...

  //🧶

  const menuHandler = () => {
    setMenu(!menu);
  };

  //form handler

  const formHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kmufbgj",
        "template_l5tyhs4",
        e.target,
        "user_fvySgr0ec7QEO8Ktzqa2U"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  //functions to optimize code

  const brandbounce = {
    initial: {
      scale: 1,
    },
    bounce: {
      scale: 0.95,
      transition: {
        yoyo: Infinity,
        duration: 1,
      },
    },
  };

  const links = (text, to, off = -100, showMenu = true) => {
    return (
      <Link
        whileHover={{ scale: 1.1 }}
        onClick={showMenu ? menuHandler : ""}
        activeClass="active"
        className="link"
        to={to}
        spy={true}
        smooth={true}
        offset={off}
        duration={3000}
      >
        {showMenu ? (
          text
        ) : screenWidth >= 620 ? (
          <>
            {text}
            <ShoppingCartIcon />
          </>
        ) : (
          <ShoppingCartIcon />
        )}
      </Link>
    );
  };

  //...

  const ViewRow = ({ info }) => {
    const filt = data?.filter((e) => e.category === info);

    return (
      <span className="formals">
        {filt.map((e) => (
          <div key={e.url} className="card">
            <img src={e.url} alt={e.url} />
            <p>{e.price}</p>
          </div>
        ))}
      </span>
    );
  };

  return (
    <div className="ecom">
      <motion.header
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ dalay: 3, duration: 1 }}
        style={headerbk ? styles : {}}
      >
        <ul className="large-width">
          {links("NEW ARRIVALS", "new")}
          <div className="shophover">
            SHOP <ArrowDropDownIcon />{" "}
            <ul>
              {links("BLAZERS", "blezzers")}
              {links("DRESS", "women")}
              {links("BAGS", "bags")}
              {links("SHOES", "shoes")}
              {links("KIDS", "kidz")}
              {links("MEN", "men")}
            </ul>
          </div>{" "}
          {links("ABOUT", "about", -60)}
          {links("CONTACTS", "contacts", -100)}
        </ul>
        <motion.span onClick={menuHandler} className="menu">
          <MenuIcon />
        </motion.span>
        <motion.ul
          initial={{ width: "-70vw", opacity: 0, y: "100vh" }}
          animate={
            menu
              ? { y: 0, opacity: 1, width: "70vw" }
              : { width: "-70vw", opacity: 0, y: "100vh" }
          }
          transition={{ duration: 1, ease: "easeInOut" }}
          className="small-width"
        >
          <h3 animate={{ scale: 1.2 }}>Collections</h3>
          {links("NEW ARRIVALS", "new")}
          {links("BLAZERS", "blezzers")}
          {links("DRESS", "women")}
          {links("BAGS", "bags")}
          {links("SHOES", "shoes")}
          {links("KIDS", "kidz")}
          {links("MEN", "men")}
          {links("ABOUT", "about", 60)}
          {links("CONTACTS", "contacts", -100)}
        </motion.ul>
        <motion.h1 variants={brandbounce} initial="initial" whileHover="bounce">
          kp <span className="clothing"> Clothing</span>
        </motion.h1>
        {links("ORDER NOW", "contacts", -100, false)}
      </motion.header>

      {/* ------main-focus---------- */}

      <section className="body">
        {screenWidth >= 520 ? <LargerS /> : <Page />}
      </section>

      {/* pages */}

      <section className="part1">
        {/* woman dresses and shit */}

        <div className="ladies" />
        <span className="new" />
        <h3>NEW ARRIVALS</h3>
        <ViewRow info="New" />
        <h2>WOMEN</h2>
        <div className="formalsection">
          <img className="big-img" src="dress.jpg" alt="formal" />
        </div>
        <div className="ladies" />
        {/* blezzers */}
        <span className="blezzers" />
        <h3>BLAZERS</h3>
        <ViewRow info="Blazers" />
        <div className="ladies" />
        <span className="women" />
        <h3>DRESS</h3>
        <ViewRow info="Woman" />
        <div className="ladies" />
        <span className="bags" />
        <h3>BAGS</h3>
        <ViewRow info="Bags" />
        <div className="ladies" />
        <span className="shoes" />
        <h3>SHOES</h3>
        <ViewRow info="Shoes" />
        <div className="ladies" />
        <span className="men" />
        <h2>MEN</h2>
        <div className="formalsection">
          <img className="big-img" src="formal1.jpg" alt="formal" />
        </div>
        <div className="seperate" />
        <h3>FORMAL</h3>
        <ViewRow info="Man" />
        <div className="seperate" />
        <span className="kidz" />
        <h2>KIDZ</h2>
        <div className="formalsection">
          <img className="big-img" src="kid.jpg" alt="formal" />
        </div>
        <div className="seperate" />
        <h3>CASUAL</h3>
        <ViewRow info="Kids" />
      </section>

      {/* about section */}

      <section className="about">
        <h3
          data-aos="slide-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          about
        </h3>
        <div className="about-content">
          <div>
            <img src="3.jpg" alt="about pic" />
          </div>
          <div className="about-text">
            <p>
              Kp clothing is a home of local trends that stands out from the
              crowd. We sell clothes that best suites our customer's moment at
              their outmost conveniences, where men and women feel at home.{" "}
              <br />
              <br />
              Khanyisile mdaka is undoudtedly one of South Africa authentic
              entrepreneurs with a unique branding approach.
            </p>
          </div>
        </div>
      </section>
      <section className="contacts">
        <h2>Contact Details</h2>
        <h3>Get hold of us</h3>
        <h4>Keep in touch with Khanyi</h4>
        <span className="sendmessage">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:khanyisilemdaka84@gmail.com"
          >
            <MailOutlineIcon />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="tel:+27818339140">
            <WhatsAppIcon />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="tel:+27818339140">
            <PhoneIcon />
          </motion.a>
        </span>
        <p>OR</p>
        <h3>Leave a message</h3>
        <form onSubmit={formHandler} action="submit">
          <TextField name="user_name" label="Name" />
          <span>
            {" "}
            <TextField name="user_email" label="Email" />
          </span>
          <TextareaAutosize
            name="message"
            className="textArea"
            aria-label="minimum height"
            rowsMin={3}
            placeholder="Write your message"
          />
          <Button
            className="button"
            variant="contained"
            color="secondary"
            type="submit"
          >
            SEND
          </Button>
        </form>
      </section>
      {/* footer done */}

      <div style={{ cursor: "pointer" }} className="amdin"></div>
      <Footer />
    </div>
  );
}

export default Ecom;
