import { assets } from "../../assets/Assets"
import "./Footer.css"

export default function Footer(){
    return(
        <footer className="section-p1">
        <div className="col">
            <img className="logo" src={assets.logo} alt=""/>
            <h4>Contact</h4>
            <p><strong>Address:</strong> 562 Wellington Road , Street 32, San Francisco</p>
            <p><strong>Phone:</strong> +01 2222 365 /(+91) 01 2345 6789</p>
            <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
            <div className="follow">
                <h4>Follow Us</h4>
                <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-pinterest-p"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div className="col">
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>

        <div className="col">
            <h4>My Account</h4>
            <a href="#">Sign in</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>

        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store Or Google Play</p>
            <div className="row">
                <img src={assets.app} alt=""/>
                <img src={assets.play} alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src={assets.pay} alt=""/>
        </div>

        <div className="copyright">
            <p>2024, Tech etc - HTML CSS Ecommerce Template</p>
        </div>
    </footer>
    )
}