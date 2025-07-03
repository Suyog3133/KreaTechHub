import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Page imports
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Process from "./pages/Process";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";


import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

// Main router wrapper
const AppWrapper = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs />} />

      </Routes>
    </Router>
  );
};

// App component with AOS initialization
function App() {
  useEffect(() => {
    AOS.init({ once: false, duration: 800 });
  }, []);

  return <AppWrapper />;
}

export default App;
