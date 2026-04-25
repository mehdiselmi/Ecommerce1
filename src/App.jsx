import Women from "./components/Women.jsx";
import Men from "./components/Men.jsx";
import Collections from "./components/Collections.jsx";
import About from "./components/About.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Navbar from "./Components/Navbar.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />{" "}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
