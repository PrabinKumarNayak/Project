import "./Course.css";
import { useNavigate } from "react-router-dom";

export default function Course({ id, name, description, image }) {
  const navigate = useNavigate();
  return (
    <div className="course">
      <div className="course-image-container">
        <img src={image} alt="" className="course-image" />
      </div>
      <div className="course-content">
        <p className="course-name">{name}</p>
        <p className="course-desc">{description}</p>
        
          <button className="btn course-btn" onClick={()=>navigate(`/tutorials/${id}`)}>View Course</button>
        
      </div>
    </div>
  );
}
