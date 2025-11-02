import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Module.css";
import { useNavigate, useParams } from "react-router-dom";

export default function Module() {
  const { courses } = useContext(StoreContext);
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the course that matches the id from URL
  const selectedCourse = courses.find((course) => {
    return course.id === id;
  });

  // Show a fallback if course not found (like wrong URL)
  if (!selectedCourse) {
    return (
      <p style={{ textAlign: "center", padding: "2rem" }}>Course not found.</p>
    );
  }

  return (
    <div className="module-container section-p1">
      <div className="course-block">
        <h1 className="module-title">{selectedCourse.name}</h1>
        <p className="module-description">
          {selectedCourse.course_description}
        </p>
        <h3 className="module-subtitle">Choose Your Skill Set:</h3>

        <div className="module-grid">
          {selectedCourse.sections.map((section) => {
            return (
              <div key={section.type} className="module-card">
                <h4 className="module-section-title">{section.type}</h4>
                <div className="module-items-grid">
                  {section.items.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="module-item"
                        onClick={() => navigate(`/table/${item.id}`)}
                      >
                        {item.icon && <item.icon className="module-icon" />}
                        <span>{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
