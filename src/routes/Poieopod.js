import React, { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import "../styles/Poieopod.css";
import { motion } from "framer-motion";
import poieopodmockup from '../assets/img/poieopod3.png'
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";

export default function PoieoPod() {
  const navigate = useNavigate();
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize.current);

  useEffect(()=>{document.title = "KlutchKyle's Portfolio | YouTube Downloader"},[])

  return (
    <motion.div
      className="poieopod-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img className="poieopod-mockup" src={poieopodmockup}></img>
      <div
        className="primary-btn poieopod-btn"
        onMouseDown={() => window.open("https://poieopod.com/")}
      >
        Visit
      </div>
    </motion.div>
  );
}
