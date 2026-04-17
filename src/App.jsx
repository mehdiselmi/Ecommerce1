import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
