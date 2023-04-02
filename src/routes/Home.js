import React, { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import logo from "../assets/img/logoclear.png";
import "../styles/Home.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {transitioning ?
        (<motion.div
          className="transitionwrapper"
          initial={{ top: windowSize.current[1] }}
          animate={{ top: windowSize.current[1] }}
          exit={{ top: 0 - windowSize.current[1] }}
          transition={{ duration: 1 }}
        >
          {" "}
        </motion.div>) : null }
        <div className="descriptioncontainer">
          
          <div className="descriptionheader">
            <Typewriter
              options={{
                cursor: "_",
              }}
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .typeString(
                    "<strong style='font-size: 5em; mix-blend-mode: difference;'>Hello, I'm </strong>"
                  )
                  .typeString(
                    "<strong style='font-size: 5em; mix-blend-mode: difference; color: rgb(175,65,17);'>KlutchKyle.</strong>"
                  )
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .start();
              }}
            />
            <Typewriter
              options={{
                cursor: "_",
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .typeString(
                    "<strong style='font-size: 2em;'>I have experience with </strong>"
                  )
                  .typeString(
                    "<strong style='font-size: 2em;  color:rgba(229, 70, 40, 1)'>HTML</strong>"
                  )
                  .pauseFor(1000)
                  .deleteChars(4)
                  .typeString(
                    "<strong style='font-size: 2em;color:rgba(238, 216, 83, 1) '>Javascript</strong>"
                  )
                  .pauseFor(1000)
                  .deleteChars(10)
                  .typeString(
                    "<strong style='font-size: 2em;color:rgba(33, 157, 212, 1)'>CSS</strong>"
                  )
                  .pauseFor(1000)
                  .deleteChars(3)
                  .typeString(
                    "<strong style='font-size: 2em;color:rgba(76, 211, 248, 1) '>ReactJS</strong>"
                  )
                  .pauseFor(1000)
                  .deleteChars(7)
                  .typeString(
                    "<strong style='font-size: 2em;color:rgba(76, 211, 248, 1)  '>React Native</strong>"
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        </div>
        <motion.div
          className="linklistcontainer"
          initial="hidden"
          animate="visible"
          variants={list}
        >
          <div className="linklistheader">Projects</div>
          <ul className="linklist">
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              variants={item}
              onClick={() => {
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
              variants={item}
              onClick={() => {
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
              variants={item}
              onClick={() => {
                navigate({
                  replace: false,
                  pathname: "/yt-downloader",
                });
              }}
            >
              LockHTML Widgets
            </motion.li>
          </ul>
        </motion.div>
        <footer>
          <motion.div
            className="deviconscontainer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <i className="devicon-html5-plain"></i>
            <i className="devicon-css3-plain"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-csharp-plain"></i>
            <i className="devicon-github-original"></i>
            <i className="devicon-unity-original"></i>
          </motion.div>
        </footer>
      </motion.div>
    </motion.div>
  );
}
