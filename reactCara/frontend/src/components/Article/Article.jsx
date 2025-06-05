import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Article.css";

export default function Article() {
  const { blog_list } = useContext(StoreContext);
  return (
    <div id="blog">
      {blog_list.map((item, index) => {
        return (
          <div className="blog-box">
            <div className="blog-img">
              <img src={item.image} alt="" />
            </div>
            <div className="blog-details">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <a href="#">CONTINUE READING</a>
            </div>
            <h1>{item.date}</h1>
          </div>
        );
      })}
    </div>
  );
}
