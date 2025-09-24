import { useContext, useState } from "react";
import { assets } from "../../assets/Assets";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to='/'>
        <img src={assets.logo} onClick={() => setMenuOpen(false)} className="logo" alt="Logo" />
      </Link>

      <ul className={menuOpen ? "navbar-menu active" : "navbar-menu"}>
        <div className="navbar-menu-header">
            <h2>Menu</h2>
            <FaTimes className="close-icon" onClick={() => setMenuOpen(false)} />
        </div>
        
        <Link to="/" onClick={() => { setMenu("home"); setMenuOpen(false); }} className={menu === "home" ? "active" : ""}>
          home
        </Link>
        <a href="#explore-menu" onClick={() => { setMenu("menu"); setMenuOpen(false); }} className={menu === "menu" ? "active" : ""}>
          menu
        </a>
        <a href="#app-download" onClick={() => { setMenu("mobile-app"); setMenuOpen(false); }} className={menu === "mobile-app" ? "active" : ""}>
          mobile app
        </a>
        <a href="#footer" onClick={() => { setMenu("contact-us"); setMenuOpen(false); }} className={menu === "contact-us" ? "active" : ""}>
          contact us
        </a>

        <div className="navbar-menu-mobile-controls">
        <img src={assets.search_icon} alt="Search" className="desktop-icon"/>
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="Basket" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
            <button onClick={() => { setShowLogin(true); setMenuOpen(false); }}>Sign in</button>
        </div>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" className="desktop-icon"/>
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="Basket" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
        <FaBars className="hamburger-icon" onClick={() => setMenuOpen(true)} />
      </div>
    </div>
  );
}