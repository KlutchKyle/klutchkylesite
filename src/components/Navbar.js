import React, { useState, useEffect } from "react";

import "../styles/Navbar.css";
import logo from "../assets/img/logoclear.png";
import useWindowDimensions from "./functions";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

import * as Icon from "react-feather";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dynamicColor, setDynamicColor] = useState(0);
  const [mouseHover, setMouseHover] = useState(null);
  const { height, width } = useWindowDimensions();
  const [redirectModalIsOpen, setRedirectModalIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setDynamicColor("rgb(255, 210, 191)");
        break;
      case "/escape-balls":
        setDynamicColor("rgb(180, 180, 180)");
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
      transition: { type: "spring", stiffness: 500, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <nav className="navbar">
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
            <motion.div className="home-container">
              <motion.div className="menu-x-container">
                <Icon.X
                  style={
                    mouseHover == "menu-icon-x"
                      ? { color: "white", borderColor: "white" }
                      : {
                          color: `${dynamicColor}`,
                          borderColor: `${dynamicColor}`,
                        }
                  }
                  className="menu-icon-x"
                  onMouseEnter={() => {
                    setMouseHover("menu-icon-x");
                  }}
                  onMouseLeave={() => {
                    setMouseHover("none");
                  }}
                  onMouseDown={() => {
                    setIsOpen(!isOpen);
                  }}
                  size={40}
                />
              </motion.div>
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
            </motion.div>

            <motion.div
              variants={menuItemVariants}
              className="menu-list-header"
            >
              Projects
            </motion.div>

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
                if (
                  window.confirm(
                    "Would you like to be redirected to my old website that displays my old projects for jailbroken devices?\n\n***Explaination***\nLockHTML widgets are web based widgets I did for jailbroken iPhones. It isn't included in this updated website because I'm no longer supporting the widgets, nor do I have any intention in updating them."
                  )
                ) {
                  window.open("https://oldklutchkyle.netlify.app", "_blank");
                }
              }}
            >
              LockHTML Widgets
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
        //whileHover={{ scale: [1, 1.2, 1.1] }}
        >
          {isOpen ? null : (
            <Icon.Menu
              style={
                mouseHover == "menuicon"
                  ? { color: "white", borderColor: "white" }
                  : { color: `${dynamicColor}`, borderColor: `${dynamicColor}` }
              }
              className="menu-icon"
              onMouseEnter={() => {
                setMouseHover("menuicon");
              }}
              onMouseLeave={() => {
                setMouseHover("none");
              }}
              onMouseDown={() => {
                setIsOpen(!isOpen);
              }}
              size={40}
            />
          )}
        </motion.div>
        <div
          className="github"
          onMouseEnter={() => {
            setMouseHover("github");
          }}
          onMouseLeave={() => {
            setMouseHover("none");
          }}
          style={
            mouseHover == "github"
              ? { color: "white", borderColor: "white" }
              : { color: `${dynamicColor}`, borderColor: `${dynamicColor}` }
          }
          onMouseDown={() => {window.open("https://github.com/KlutchKyle", "_blank");}}
        >
          <Icon.GitHub
            style={
              mouseHover == "github-icon"
                ? { color: "white", borderColor: "white" }
                : { color: `${dynamicColor}`, borderColor: `${dynamicColor}` }
            }
            className="github-icon"
            onMouseEnter={() => {
              setMouseHover("github-icon");
            }}
            onMouseLeave={() => {
              setMouseHover("none");
            }}
            onMouseDown={() => {
              window.open("https://github.com/KlutchKyle", "_blank");
            }}
            size={30} strokeWidth={2}
          />
        </div>
        <div
          className="contact"
          onMouseEnter={() => {
            setMouseHover("contact");
          }}
          onMouseLeave={() => {
            setMouseHover("none");
          }}
          style={
            mouseHover == "contact"
              ? { color: "white", borderColor: "white" }
              : { color: `${dynamicColor}`, borderColor: `${dynamicColor}` }
          }
          onMouseDown={() => {
            window.open(`mailto:kylethelegendmc@gmail.com`);
          }}
        >
          Contact
        </div>
      </motion.div>
    </nav>
  );
}
