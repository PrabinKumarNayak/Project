import "./Header.css";
import { FaArrowRight, FaRegCirclePlay } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="header section-p1">
      <div className="header-left">
        <p className="header-subtitle">Let's Learn To Earn</p>
        <h1 className="header-title">
          Learn to Code the <br /> Practical Way
        </h1>
        <p className="header-description">
          Master hands-on tutorials in HTML, CSS, ReactJS, and Python. Build
          real <br /> projects while learning from an experienced educator.
        </p>
        <div className="header-btn">
          <button className="btn blue-btn">
            Start Learning <FaArrowRight style={{ marginLeft: "0.5rem" }} />
          </button>
          <button className="btn">
            <FaRegCirclePlay style={{ marginRight: "0.5rem" }} />
            Explore Geecoding
          </button>
        </div>
      </div>

      <div className="header-right">
        <h1></h1>
      </div>
    </div>
  );
}
