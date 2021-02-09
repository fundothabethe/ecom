import React, { useEffect, useState } from "react";
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
import { motion } from "framer-motion";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { Link, animateScroll as scroll } from "react-scroll";

import Row from "./Row";

function Ecom({ items }) {
  //states🦗

  const [count, setCount] = useState(4);
  const [advice, setAdvice] = useState("");
  const [menu, setMenu] = useState(false);

  //formal🐢

  const [allformal, setAllformal] = useState(false);
  const [formaltext, setFormaltext] = useState("View More");

  //women

  const [allwomen, setAllwomen] = useState(false);
  const [womentext, setWomentext] = useState("View More");

  //kidz states

  const [allkidz, setAllkidz] = useState(false);
  const [kidztext, setKidztext] = useState("View More");

  //🧶

  const menuHandler = () => {
    setMenu(!menu);
  };

  //kidz button handler

  const kidzHandler = () => {
    setAllkidz(!allkidz);
    if (!allkidz) {
      setKidztext("View Less");
    } else {
      setKidztext("View More");
    }
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
    e.target.reset();
  };

  //useEffect🤢

  useEffect(() => {
    setInterval(() => {
      const num = Math.floor(Math.random() * 6) + 1;
      setCount(num);
    }, 20000);
    fetchData();
  }, []);

  //fetch advice🤑

  const fetchData = async () => {
    const data = await fetch("https://api.adviceslip.com/advice");
    const info = await data.json();
    setAdvice(info.slip.advice);
  };

  return (
    <div className="ecom">
      <header>
        <ul className="large-width">
          <li>NEW ARRIVALS</li>
          <li className="shophover">
            SHOP <ArrowDropDownIcon />{" "}
            <ul>
              <li>MEN</li>
              <li>WOMAN</li>
              <li>KIDS</li>
              <li>SHOES</li>
            </ul>
          </li>
          <li>ABOUT</li>
          <li>CONTACTS</li>
        </ul>
        <span onClick={menuHandler} className="menu">
          <MenuIcon />
        </span>
        <ul className={menu ? "small-width" : "null"}>
          <h3>SHOP HERE💃</h3>
          <li>NEW ARRIVALS</li>
          <li>MEN</li>
          <li>WOMAN</li>
          <li>KIDS</li>
          <li>SHOES</li>
          <li>ABOUT</li>
          <li>CONTACTS</li>
        </ul>
        <h1>jack jean</h1>
        <p>ORDER NOW</p>
        <span className="buy">
          <ShoppingCartIcon />
        </span>
      </header>
      <section className="body">
        <img src={`${count}.jpg`} alt="background" />
        <h3>{advice}</h3>
      </section>
      {/* pages */}
      <section className="part1">
        <h2>MEN</h2>
        <h3>FORMAL</h3>
        <div className="formalsection">
          <img src="formal1.jpg" alt="formal" />
        </div>
        <span className="formals">
          {items.formal.map((e) => (
            <Row img={e.img} p={e.p} price={e.price} />
          ))}
          {allformal
            ? items.allformal.map((e) => (
                <Row img={e.img} p={e.p} price={e.price} />
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
        <h3>ALL MEN</h3>
        <span className="formals">
          {items.allmen.map((e) => (
            <Row show={e.show} img={e.img} p={e.p} price={e.price} />
          ))}
        </span>

        <h2>WOMEN</h2>
        <h3>CASUAL</h3>
        <div className="formalsection">
          <img src="dress.jpg" alt="formal" />
        </div>
        <span className="formals">
          {items.women.map((e) => (
            <Row show={e.show} img={e.img} p={e.p} price={e.price} />
          ))}
          {allwomen
            ? items.allwomen.map((e) => (
                <Row img={e.img} p={e.p} price={e.price} />
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
        <h2>KIDZ</h2>
        <h3>CASUAL</h3>
        <div className="formalsection">
          <img src="kid.jpg" alt="formal" />
        </div>
        <span className="formals">
          {items.kidz.map((e) => (
            <Row show={e.show} img={e.img} p={e.p} price={e.price} />
          ))}
          {allkidz
            ? items.allkidz.map((e) => (
                <Row img={e.img} p={e.p} price={e.price} />
              ))
            : ""}
        </span>
        <Button
          className="show"
          onClick={kidzHandler}
          color={allkidz ? "primary" : "secondary"}
          variant="contained"
        >
          {" "}
          {allkidz ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          {kidztext}
        </Button>
      </section>
      <section className="about">
        <h3>about</h3>
        <div className="about-content">
          <div>
            <img src="3.jpg" alt="about pic" />
          </div>
          <div className="about-text">
            <h4>what we do?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              debitis in eveniet optio dolore, praesentium quam ullam molestias{" "}
              <br />
              <br />
              explicabo perspiciatis officiis commodi laudantium iusto neque
              aliquam perferendis magni! Suscipit, quod.
            </p>
          </div>
        </div>
      </section>
      <section className="contacts">
        <h2>Contect Details</h2>
        <h3>get hold of us</h3>
        <h4>Keep in touch with us</h4>
        <span className="sendmessage">
          <span>
            <MailOutlineIcon />
          </span>
          <span>
            <WhatsAppIcon />
          </span>
          <span>
            <PhoneIcon />
          </span>
        </span>
        <p>OR</p>
        <h3>Leave a message</h3>
        <form onSubmit={formHandler} action="submit">
          <TextField label="Name" />
          <span>
            {" "}
            <TextField label="Email" />
          </span>
          <TextareaAutosize
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
        <span className="social">
          <span>
            <InstagramIcon id="insta" />
          </span>
          <span>
            <TwitterIcon id="insta" />
          </span>
          <span>
            <FacebookIcon id="insta" />
          </span>
          <span>
            <RedditIcon id="insta" />
          </span>
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
