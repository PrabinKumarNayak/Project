import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import Course from "../Course/Course";
import "./Courses.css";

export default function Courses() {
  const { courses } = useContext(StoreContext);
  return (
    <div className="courses section-p1" id="courses">
      <h2 className="courses-title">Our Offerings</h2>
      <p className="courses-subtitle">Courses To Help You Upskill</p>
      <div className="courses-list">
        {courses.map((item, index) => {
          return (
            <Course
              key={index}
              id={item.id}
              name={item.name}
              description={item.course_description}
              image={item.course_image}
            />
          );
        })}
      </div>
    </div>
  );
}
