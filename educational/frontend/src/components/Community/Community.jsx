import { useContext, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Community.css";
import { StoreContext } from "../../context/StoreContext";

export default function Community() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { community } = useContext(StoreContext);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? community.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === community.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="community-wrapper" id="community">
      <h2 className="community-title">Our Community</h2>

      <div className="community-container">
        <button className="nav-btn left" onClick={handlePrev}>
          <FaChevronLeft />
        </button>

        {community.map((member, index) => {
          return (
            <div
              key={member.id}
              className={`community-card ${
                index === currentIndex ? "active" : "inactive"
              }`}
            >
              <img
                src={member.profile_pic}
                alt={member.title}
                className="community-image"
              />
              <div className="community-details">
                <h3 className="community-name">{member.title}</h3>
                <p className="community-desc">{member.description}</p>
                <ul className="community-features">
                  {member.features.map((point, i) => {
                    return <li key={i}>{point}</li>;
                  })}
                </ul>
                <div className="btn">Know More</div>
              </div>
            </div>
          );
        })}

        <button className="nav-btn right" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
