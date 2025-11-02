import "./Blog.css";

export default function Blog({
  category,
  date,
  title,
  description,
  read_time,
}) {
  return (
    <div className="blog">
      <div className="category-date">
        <p className="blog-category">{category}</p>
        <div className="blog-date-row">
          <span className="calendar">
            <i class="fa-regular fa-calendar"></i>
          </span>
          <span className="blog-date">{date}</span>
        </div>
      </div>
      <div className="title-desc">
        <h3 className="blog-title">{title}</h3>
        <p className="blog-desc">{description}</p>
      </div>
      <div className="blog-footer">
        <span className="blog-read-time">{read_time}</span>
        <a href="#" className="blog-read-more">
          Read More
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
