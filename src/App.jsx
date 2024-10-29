import { useEffect } from "react";
import Header from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar/Navbar";
import About from "./pages/About";
import Web from "./pages/Web";
import Mobile from "./pages/Mobile";
import Game from "./pages/Game";
import Client from "./pages/Client";
import Contact from "./pages/Contact";
import Orders from "./pages/admin/Orders";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/web" element={<Web />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/game" element={<Game />} />
        <Route path="/client" element={<Client />} />

        <Route path="/contact" element={<Orders />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
