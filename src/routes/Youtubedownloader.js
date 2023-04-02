import React, { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import ytmockup from "../assets/img/ytmockup.png";
import "../styles/Youtubedownloader.css";
import { motion } from "framer-motion";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";

export default function YTDownloader() {
  const navigate = useNavigate();
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize.current);

  return (
    <motion.div
      className="ytdownloader-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="ytdownloader-header">The YouTube Downloader</h1>

      <h4 className="ytdownlaoder-collab-text">
        In collaboration with{" "}
        <a href="https://poieo-dev.com/">Poieo Dev</a>
      </h4>
      <img className="ytdownloader-mockup" src={ytmockup}></img>
      <h2 className="ytdownloader-description">
        Always{" "}
        <span style={{ color: "rgb(255,195,208)", fontSize: 30 }}>Fast</span>.
        Always{" "}
        <span style={{ color: "rgb(255,195,208)", fontSize: 30 }}>Free</span>.
      </h2>
      <div
        className="ytdownloader-visit-button"
        onMouseDown={() => window.open("https://download-youtube.io/")}
      >
        Visit
      </div>
    </motion.div>
  );
}
