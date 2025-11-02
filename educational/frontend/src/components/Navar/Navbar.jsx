import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { assets } from "../../assets/Assets";

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <Link to="/">
        <div className="logo">
          <img src={assets.logo} alt="logo" />
          <div className="name-designation">
            <h4><span>GEE</span>CODING</h4>
            <span>Literature</span>
          </div>
        </div>
      </Link>

      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`navbar-right ${isOpen ? "show" : ""}`}>
        <ul className="navbar-menu">
          <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
          <a href="#courses" onClick={() => setMenu("courses")} className={menu === "courses" ? "active" : ""}>Courses</a>
          <a href="#blogs" onClick={() => setMenu("blog")} className={menu === "blog" ? "active" : ""}>Blog</a>
          <a href="#community" onClick={() => setMenu("community")} className={menu === "community" ? "active" : ""}>Community</a>
          <a href="#contact" onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
        </ul>

        <a href="https://geecoding.in">
          <button className="btn">Visit Geecoding</button>
        </a>
      </div>
    </div>
  );
}
