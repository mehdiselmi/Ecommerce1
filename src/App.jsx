import React from "react";
import Navbar from "./components/navbar";
import Women from "./components/Women.jsx";
import Men from "./components/Men.jsx";
import Collections from "./components/Collections.jsx";
import About from "./components/About.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Hero from "./Components/Hero.jsx";
import Home from "./pages/Home.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Collections" element={<Collections />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
