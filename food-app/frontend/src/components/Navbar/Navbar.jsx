import { useContext, useState } from "react";
import { assets } from "../../assets/Assets";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
export default function Navbar({ setShowLogin }) {
  const [menu, setMeun] = useState("home");

  const{getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} className="logo" alt="" /></Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMeun("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMeun("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMeun("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile app
        </a>
        <a
          href="#footer"
          onClick={() => setMeun("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
      </div>
      <button onClick={() => setShowLogin(true)}>Sign in</button>
    </div>
  );
}