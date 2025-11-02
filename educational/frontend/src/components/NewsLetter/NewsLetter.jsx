import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <div className="newsletter section-p1" id="contact">
      <div className="newsletter-icon">
        <FaEnvelope />
      </div>

      <h2 className="newsletter-title">Stay Updated</h2>
      <p className="newsletter-subtitle">
        Get the latest tutorials and coding tips delivered straight to your inbox. No spam, <br />
        just valuable content to help you grow as a developer.
      </p>

      <div className="newsletter-form">
        <input type="email" placeholder="Enter your email address" />
        <button>
          Subscribe <FaPaperPlane className="send-icon" />
        </button>
      </div>

      <p className="newsletter-footer">Join 500+ developers already subscribed</p>
    </div>
  );
}
