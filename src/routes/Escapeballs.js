import React from "react";
import "../styles/Escapeballs.css";
import screenshot1 from "../assets/img/screenshot1.jpeg";
import screenshot2 from "../assets/img/screenshot2.jpeg";
import screenshot3 from "../assets/img/screenshot3.jpeg";
import appstoreicon from "../assets/img/appstoreicon.svg";
import Starfield from "../components/Starfield";
import { motion, AnimatePresence } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";

export default function Escapeballs() {
  return (
    <motion.div
      className="escapeballs-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Starfield className='starfield'></Starfield>
      <h1 className="escapeballs-header">Escape Balls</h1>
      <div className="screenshot-wrapper">
        <div className="screenshot-container">
          <Swiper
            style={{ zIndex: -1 }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              {" "}
              <img className="screenshot" src={screenshot1}></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img className="screenshot" src={screenshot2}></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img className="screenshot" src={screenshot3}></img>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="ss-description">
          <div>
            Avoid the <span style={{ color: "gray" }}>spikes</span>...
          </div>
          <div>
            {" "}
            earn <span style={{ color: "yellow" }}>coins</span>...
          </div>{" "}
          <div>
            unlock all the <span style={{ color: "red" }}>skins</span>...
          </div>
          <div>
            {" "}
            climb the <span style={{ color: "blue" }}>leaderboards</span>...
          </div>{" "}
          <div>
            {" "}
            become a <span style={{ color: "magenta" }}>grandmaster</span>...
          </div>{" "}
        </div>
      </div>
      <div className="app-store-container">
        Coming Soon!
        <img
          className="app-store-icon"
          src={appstoreicon}
          alt="SVG as an image"
        ></img>
      </div>
    </motion.div>
  );
}
