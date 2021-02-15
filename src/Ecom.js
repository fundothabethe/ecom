import React, { useEffect, useRef, useState } from "react";
import "./ecom.scss";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import RedditIcon from "@material-ui/icons/Reddit";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneIcon from "@material-ui/icons/Phone";
import { Button, TextareaAutosize, TextField } from "@material-ui/core";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import AOS from "aos";
import Row from "./Row";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Page from "./Page";
import LargerS from "./LargerS";
import emailjs from "emailjs-com";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
function Ecom({ items }) {
  //states🦗

  const [menu, setMenu] = useState(false);

  let screenWidth = window.screen.width;

  //formal🐢

  const [allformal, setAllformal] = useState(false);
  const [formaltext, setFormaltext] = useState("View More");

  //women

  const [allwomen, setAllwomen] = useState(false);
  const [womentext, setWomentext] = useState("View More");

  //initiaize a ref

  const header = useRef("");
  const [headerbk, setHeaderbk] = useState(false);

  const styles = {
    backgroundColor: "#e2ded36c",
    boxShadow: "0 0 10px #85767194, 0 0 10px #85767194",
  };

  //useEffect🤢

  useEffect(() => {
    AOS.init();

    window.addEventListener("scroll", () => {
      window.scrollY >= 700 ? setHeaderbk(true) : setHeaderbk(false);
    });
  }, []);

  //🧶

  const menuHandler = () => {
    setMenu(!menu);
  };

  //women button handler

  const womenHandler = () => {
    setAllwomen(!allwomen);
    if (!allwomen) {
      setWomentext("View Less");
    } else {
      setWomentext("View More");
    }
  };

  //formal button handler🐸

  const showMore = () => {
    setAllformal(!allformal);
    if (!allformal) {
      setFormaltext("View Less");
    } else {
      setFormaltext("View More");
    }
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

  return (
    <div className="ecom">
      <motion.header
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ dalay: 3, duration: 1 }}
        ref={header}
        style={headerbk ? styles : {}}
      >
        <ul className="large-width">
          {links("WOMEN", "women")}
          <div className="shophover">
            SHOP <ArrowDropDownIcon />{" "}
            <ul>
              {links("BAGS", "bags")}
              {links("SHOES", "shoes")}
              {links("KIDS", "kidz")}
              {links("MEN", "men")}
            </ul>
          </div>{" "}
          {links("ABOUT", "about", -60)}
          {links("CONTACTS", "contacts", -100)}
        </ul>
        <motion.span
          onClick={{ scale: 1.2 }}
          onClick={menuHandler}
          className="menu"
        >
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
          <h3 animate={{ scale: 1.2 }}>SHOP HERE💃</h3>
          {links("WOMEN", "women")}
          {links("BAGS", "bags")}
          {links("SHOES", "shoes")}
          {links("KIDS", "kidz")}
          {links("MEN", "men")}
          {links("ABOUT", "about", 60)}
          {links("CONTACTS", "contacts", -100)}
        </motion.ul>
        <motion.h1 variants={brandbounce} initial="initial" whileHover="bounce">
          {" "}
          KP {/*<span style={{ fontFamily: "fantasy" }}> Clothing</span>} */}
        </motion.h1>
        {links("ORDER NOW", "contacts", -100, false)}
      </motion.header>

      {/* ------main-focus */}

      <section className="body">
        {screenWidth >= 520 ? <LargerS /> : <Page />}
      </section>

      {/* pages */}

      <section className="part1">
        {/* woman dresses and shit */}
        <span className="women" />
        <h2>WOMEN</h2>
        <div className="formalsection">
          <img src="dress.jpg" alt="formal" />
        </div>
        <div className="ladies" />
        <h3>DRESS</h3>
        <span className="formals">
          {items.women.map((e) => (
            <Row img={`./woman/${e.img}`} p={e.p} price={e.price} />
          ))}
          {allwomen
            ? items.allwomen.map((e) => (
                <Row img={`./woman/${e.img}`} p={e.p} price={e.price} />
              ))
            : ""}
        </span>
        <Button
          className="show"
          onClick={womenHandler}
          color={allwomen ? "primary" : "secondary"}
          variant="contained"
        >
          {" "}
          {allwomen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          {womentext}
        </Button>
        <div className="ladies" />
        {/* bagz */}
        <span className="bags" />
        <h3>BAGS</h3>
        <span className="formals">
          {items.bags.map((e) => (
            <Row img={`./bags/${e.img}`} p={e.p} price={e.price} />
          ))}
        </span>
        <div className="ladies" />
        {/* shoes section*/}
        <span className="shoes" />
        <h3>SHOES</h3>
        <span className="formals">
          {items.shoes.map((e) => (
            <Row img={`./shoes/${e.img}`} p={e.p} price={e.price} />
          ))}
        </span>
        {/* men */}
        <div className="ladies" />
        <span className="men" />
        <h2>MEN</h2>
        <div className="formalsection">
          <img src="formal1.jpg" alt="formal" />
        </div>
        <div className="seperate" />
        <h3>FORMAL</h3>
        <span className="formals">
          {items.formal.map((e) => (
            <Row img={`./formal suit/${e.img}`} p={e.p} price={e.price} />
          ))}
          {allformal
            ? items.allformal.map((e) => (
                <Row img={`./formal suit/${e.img}`} p={e.p} price={e.price} />
              ))
            : ""}
        </span>
        <Button
          className="show"
          onClick={showMore}
          color={allformal ? "primary" : "secondary"}
          variant="contained"
        >
          {" "}
          {allformal ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          {formaltext}
        </Button>
        <div className="seperate" />
        {/* kids section */}
        <span className="kidz" />
        <h2>KIDZ</h2>
        <div className="formalsection">
          <img src="kid.jpg" alt="formal" />
        </div>
        <div className="seperate" />
        <h3>CASUAL</h3>
        <span className="formals">
          {items.kidz.map((e) => (
            <Row img={`./kidz/${e.img}`} p={e.p} price={e.price} />
          ))}
        </span>
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
              thier outmost conveniences, where men and women feel at home.{" "}
              <br />
              <br />
              Khanyisile mdaka is undoudtedly one of Soth Africa authentic
              entrepreneurs with a unique branding approach.
            </p>
          </div>
        </div>
      </section>
      <section className="contacts">
        <h2>Contect Details</h2>
        <h3>get hold of us</h3>
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
            <GroupAddIcon />
          </a>
        </span>
        <div className="final-text">
          <h3>All Rights Reserved</h3>
          <p>©Copyrihgt 2021</p>
        </div>
      </footer>
    </div>
  );
}

export default Ecom;
