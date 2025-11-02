import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./UnitDetails.css";

export default function UnitDetail() {
  const { courses } = useContext(StoreContext);
  const { id,index } = useParams();

  let matchedUnit = null;
  let matchedItem = null;
    
  for (let course of courses) {
    for (let section of course.sections) {
      for (let item of section.items) {
        for (let unit of item.unit) {
          if (unit.id === id) {
            matchedUnit = unit;
            matchedItem = item;
            break;
          }
        }
        if (matchedUnit) break;
      }
      if (matchedUnit) break;
    }
    if (matchedUnit) break;
  }

  if (!matchedUnit) {
    return <p className="unit-loading">Unit not found.</p>;
  }

  return (
    <div className="unit-container section-p1">
      <h1 className="unit-heading">{matchedUnit.title}</h1>
      <p className="unit-subtitle">
        Unit <strong>{Number(index)+1}</strong> from <strong>{matchedItem?.name}</strong>
      </p>

      {matchedUnit.html_file ? (
        <div
          className="unit-html-content"
          dangerouslySetInnerHTML={{ __html: matchedUnit.html_file }}
        />
      ) : (
        <p className="unit-message">No content available for this unit.</p>
      )}
    </div>
  );
}
