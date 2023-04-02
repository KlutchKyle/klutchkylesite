import "./App.css";
import React from "react";
import Home from "./routes/Home";
import Escapeballs from "./routes/Escapeballs";
import YTDownloader from "./routes/Youtubedownloader";
import Navbar from './components/Navbar'
import { motion, AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Navbar/>
    <AnimatePresence initial={false} mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/escape-balls" element={<Escapeballs />} />
        <Route path="/yt-downloader" element={<YTDownloader />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
