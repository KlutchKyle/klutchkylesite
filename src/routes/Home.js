import React, { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import logo from "../assets/img/logoclear.png";
import "../styles/Home.css";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import * as Icon from "react-feather";
import Marquee from "react-fast-marquee";

export default function Home() {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    document.title = "KlutchKyle's Portfolio";
  }, []);
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
    <>
      <motion.div
        className="home-page default-padding"
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
          {transitioning ? (
            <motion.div
              className="transitionwrapper"
              initial={{ top: windowSize.current[1] }}
              animate={{ top: windowSize.current[1] }}
              exit={{ top: 0 - windowSize.current[1] }}
              transition={{ duration: 1 }}
            >
              {" "}
            </motion.div>
          ) : null}
          <div className="descriptioncontainer">
            <div className="descriptionheader">
              <motion.img className="logo-image" src={logo}></motion.img>
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
                    pathname: "/poieo-pod",
                  });
                }}
              >
                PoieoPod
              </motion.li>

              <motion.li
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                variants={item}
                onClick={() => {
                  window.open("https://poieo-dev.com/");
                }}
              >
                Poieo Dev LLC
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                variants={item}
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
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
      <div id="about-me-container">
        <div className="marquee-container">
          <Marquee pauseOnHover>
            <i className="devicon-html5-plain"></i>
            <i className="devicon-css3-plain"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-csharp-plain"></i>
            <i className="devicon-github-original"></i>
            <i className="devicon-unity-plain"></i>
            <i className="devicon-python-plain"></i>
            <i className="devicon-django-plain"></i>
            <i className="devicon-djangorest-plain"></i>
            <i className="devicon-nestjs-original"></i>
            <i className="devicon-mongodb-plain"></i>
            <i className="devicon-mysql-original"></i>
            <i className="devicon-postgresql-plain"></i>
            <i className="devicon-postman-plain"></i>
            <i className="devicon-googlecloud-plain"></i>
            <i className="devicon-firebase-plain"></i>
            <i className="devicon-docker-plain"></i>
            <i className="devicon-digitalocean-original"></i>

            <i className="devicon-illustrator-plain"></i>
            <i className="devicon-inkscape-plain"></i>
            <i className="devicon-swift-plain"></i>
            <i className="devicon-tailwindcss-original"></i>
            <i className="devicon-wordpress-plain"></i>
            <i className="devicon-nextjs-original-wordmark"></i>
          </Marquee>
        </div>
        <section id="about-me-section">
          <h1 className="header">About Me</h1>
          <h2>Owner and CEO of Poieo Dev.</h2>
          <p>
            As the owner and CEO of Poieo Dev LLC, I spend a good amount of my time working on bring
            solutions to my clients, sharpening my existing skills, and learning new skills.
          </p>
          <h1 className="header">Hobbies</h1>

          <p>
            My hobbies include working on cars, diy electionic and 3d printed projects, and video
            editing. I also enjoy spending time with my family.
          </p>
        </section>
      </div>

      <footer>
        <motion.div
          className="hero-footer"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            y: {
              type: "spring",
              stiffness: 300,
              damping: 20,
              repeat: Infinity,
              repeatType: "reverse",
            },
            opacity: { duration: 0.5 },
            duration: 0.5,
          }}
        >
          <Icon.ArrowDown color={"white"} size={50} />
        </motion.div>
      </footer>
    </>
  );
}
