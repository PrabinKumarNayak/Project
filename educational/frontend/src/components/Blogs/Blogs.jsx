import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import Blog from "../Blog/Blog";
import { FaBookOpen } from "react-icons/fa6";
import "./Blogs.css";

export default function Blogs() {
  const { blog_list } = useContext(StoreContext);

  return (
    <div className="blogs section-p1" id="blogs">
      <span className="reader-icon">
        <FaBookOpen  />
      </span>
      <h2 className="blogs-title">From the Blog</h2>
      <p className="blogs-subtitle">
        Insights on coding, teaching, and building a career in technology
      </p>
      <div className="blogs-list">
        {blog_list.map((item, index) => (
          <Blog
            key={index}
            category={item.category}
            date={item.date}
            title={item.title}
            description={item.description}
            read_time={item.read_time}
          />
        ))}
      </div>
    </div>
  );
}
