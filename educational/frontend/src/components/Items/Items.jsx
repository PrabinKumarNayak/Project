import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useParams } from "react-router-dom";
import "./Items.css";

export default function Items() {
  const { courses } = useContext(StoreContext);
  const { id } = useParams(); // item id
  const navigate = useNavigate();

  let matchedCourse = null;
  let matchedItem = null;

  for (let course of courses) {
    for (let section of course.sections) {
      for (let item of section.items) {
        if (item.id === id) {
          matchedCourse = course;
          matchedItem = item;
          break;
        }
      }
      if (matchedItem) break;
    }
    if (matchedItem) break;
  }

  if (!matchedItem || !matchedCourse) {
    return <p className="toc-loading">Item not found.</p>;
  }

  return (
    <div className="toc-container section-p1">
      <h1 className="toc-heading">Table of Contents</h1>
      <p className="toc-summary">
        This section displays detailed units for <strong>{matchedItem.name}</strong> under the course <strong>{matchedCourse.name}</strong>.
      </p>

      <div className="toc-sub-container">
        <div className="toc-sub-heading-desc">
          <h2 className="sub-heading">{matchedItem.name}</h2>
          <p className="desc">{matchedItem.description}</p>
        </div>

        <h3>Units</h3>
        <ol className="toc-list">
          {matchedItem.unit.map((unit, index) => (
            <li
              key={unit.id}
              className="toc-unit"
              onClick={() => navigate(`/literature/${unit.id}/${index}`)}
            >
              {console.log(unit.id)
              }
              <div className="toc-topic-number">{index + 1}.</div>
              <div className="toc-topic-name">{unit.title}</div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
