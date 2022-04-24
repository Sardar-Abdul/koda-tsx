import React from "react";
import { StyledApp } from "./components/styles/appStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/about";
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Topbar from "./components/navbar/topbar";
import Footer from "./components/footer/footer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StyledApp>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </StyledApp>
    </BrowserRouter>
  );
};

export default App;
