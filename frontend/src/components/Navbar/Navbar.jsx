import { assets } from "../../assets/Assets"
import "./Navbar.css"
export default function Navbar(){
    return(
        <>
        <div className="navbar">
            <img src={assets.logo} alt="" />
            <div className="navbar-menu">
                <li>Home</li>
                <li>Menu</li>
                <li>Mobile-app</li>
                <li>Contact us</li>
            </div>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-serch-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Sign in</button>
            </div>
        </div>
        </>
    )
}