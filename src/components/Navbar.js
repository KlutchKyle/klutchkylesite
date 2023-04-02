import React, { useState, useEffect } from "react";

import "../styles/Navbar.css";
import logo from "../assets/img/logoclear.png";
import useWindowDimensions from "./functions";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

import * as Icon from "react-feather";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dynamicColor, setDynamicColor] = useState(0);
  const [mouseHover, setMouseHover] = useState(null);
  const { height, width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setDynamicColor("rgb(255, 210, 191)");
        break;
      case "/escape-balls":
        setDynamicColor("rgb(255, 255, 255)");
        break;
      case "/yt-downloader":
        setDynamicColor("rgb(255,195,208)");
        break;
      default:
        setDynamicColor("rgb(255, 210, 191)");
      // code block
    }
  }, [location]);
  useEffect(() => {
    console.log("dynamicColor", dynamicColor);
  }, [dynamicColor]);

  useEffect(() => {
    console.log("isOpen", isOpen);
  }, [isOpen]);

  const menuItemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <nav className="navbar">
      {height <= 660 || location.pathname != "/home" ? (
        <motion.div
          className="smallnav"
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <motion.div
            onMouseDown={() => {
              setIsOpen(!isOpen);
            }}
            className="menu-list-container"
            variants={{
              open: { opacity: 1, visibility: "visible" },
              closed: { opacity: 0, visibility: "hidden" },
            }}
          >
            <motion.ul
              className="menu-list-inner"
              variants={{
                open: {
                  opacity: 1,
                  visibility: "visible",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  opacity: 0,
                  visibility: "hidden",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              <div className="menu-list-header">Projects</div>
              <motion.li
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                variants={menuItemVariants}
                onMouseDown={() => {
                  navigate({
                    replace: false,
                    pathname: "/",
                  });
                }}
              >
                Home
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                variants={menuItemVariants}
                onMouseDown={() => {
                  navigate({
                    replace: false,
                    pathname: "/escape-balls",
                  });
                }}
              >
                Escape Balls
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                variants={menuItemVariants}
                onMouseDown={() => {
                  navigate({
                    replace: false,
                    pathname: "/yt-downloader",
                  });
                }}
              >
                YT Downloader
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                variants={menuItemVariants}
                onMouseDown={() => {
                  navigate({
                    replace: false,
                    pathname: "/yt-downloader",
                  });
                }}
              >
                LockHTML Widgets
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div
            onMouseDown={() => {
              setIsOpen(!isOpen);
            }}
            onMouseEnter={() => {
              setMouseHover("menu");
            }}
            onMouseExit={() => {
              setMouseHover('none');
            }}
            //whileHover={{ scale: [1, 1.2, 1.1] }}
          >
            <Icon.Menu
              style={isOpen ? { opacity: 0 } : { color: `${dynamicColor}` }}
              className="menuicon"
              size={40}
            />
          </motion.div>
          <div
            className="contact"
            onMouseEnter={() => {
              setMouseHover("contact");
            }}
            onMouseExit={() => {
              setMouseHover('none');
            }}
            style={mouseHover == 'contact' ? { color: 'white', borderColor: 'white' } : { color: `${dynamicColor}`, borderColor: `${dynamicColor}` }}
            onMouseDown={() => {
              window.open(`mailto:kylethelegendmc@gmail.com`);
            }}
          >
            Contact
          </div>
        </motion.div>
      ) : (
        <div className="largenav">
          <div className="logoiconcontainer">
            <img className="logoicon" src={logo}></img>
          </div>
        </div>
      )}
    </nav>
  );
}
