import { assets } from "../../assets/Assets";
import "./Footer.css";
import { FaYoutube, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top section-p1">
        <div className="footer-col brand">
          

          <p className="footer-desc">
            <h3><strong>Our Misson :</strong></h3>
            Empowering developers through practical, hands-on coding tutorials
            and comprehensive video courses.
          </p>

          <div className="footer-socials">
            <FaYoutube className="icon" />
            <FaLinkedin className="icon" />
            <FaGithub className="icon" />
            <FaEnvelope className="icon" />
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Tutorials</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Categories</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>Geecoding Courses</li>
            <li>Free Resources</li>
            <li>Code Examples</li>
            <li>Community</li>
            <li>Newsletter</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Burle Sharma. All rights reserved.</p>
      </div>
    </footer>
  );
}
