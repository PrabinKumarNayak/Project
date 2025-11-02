import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./CourseFeatures.css";

import { FaVideo, FaCertificate, FaUsers } from "react-icons/fa6";

const icons = [<FaVideo />, <FaCertificate />, <FaUsers />];

export default function CourseFeatures() {
    const { course_features } = useContext(StoreContext);
  return (
    <div className="course_features section-p1" id="course_features">
      <h2 className="course_features-title">Ready for Full Video Courses?</h2>
      <p className="course_features-subtitle">
        Take your learning to the next level with structured video courses, hands-on projects,
        and certificates <br /> on  <a href="https://geecoding.in">Geecoding.in</a>
      </p>

      <div className="course_features-list">
        {course_features.map((item, index) => (
          <div className="feature-box" key={item.id}>
            <div className="feature-icon">{icons[index]}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <button className="btn blue-btn"><a href="https://geecoding.in" target="_blank" className="course_features-btn">
        Go to Geecoding.in <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </a></button>
    </div>
  );
}
