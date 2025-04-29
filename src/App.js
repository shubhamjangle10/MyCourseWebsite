import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Exams from "./pages/Exams";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Navbar = () => {
  const handleNavClick = () => {
    const nav = document.getElementById("navbarNav");
    const toggler = document.querySelector(".navbar-toggler");
    if (nav && nav.classList.contains("show")) {
      toggler?.click(); // triggers collapse
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleNavClick}>FutureThought</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/" onClick={handleNavClick}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/exams" onClick={handleNavClick}>Exams</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/courses" onClick={handleNavClick}>Courses</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about" onClick={handleNavClick}>About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact" onClick={handleNavClick}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-dark text-light text-center py-3 mt-5">
    <div className="container">
      <p className="mb-0">&copy; {new Date().getFullYear()} FutureThought. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    <div className="container" style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <Routes>
        <Route path="/MyCourseWebsite/" element={<Home />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
