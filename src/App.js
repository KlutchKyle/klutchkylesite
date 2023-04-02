import "./App.css";
import React, { useState, useEffect } from 'react'; 
import Home from "./routes/Home";
import Escapeballs from "./routes/Escapeballs";
import YTDownloader from "./routes/Youtubedownloader";
import Navbar from './components/Navbar'
import { motion, AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const [animateIntro, setAnimateIntro] = useState(false);
  const location = useLocation()
  return (
    <div className="App">
      <Navbar/>
    {animateIntro ? <AnimatePresence initial={false} mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/escape-balls" element={<Escapeballs />} />
        <Route path="/yt-downloader" element={<YTDownloader />} />
      </Routes>
      </AnimatePresence>:<Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/escape-balls" element={<Escapeballs />} />
        <Route path="/yt-downloader" element={<YTDownloader />} />
      </Routes>}
    </div>
  );
}

export default App;
