import "./ExploreMenu.css";
import { menu_list } from "../../assets/Assets";

export default function ExploreMenu({ category, setCategory }) {
  return (
    // Use a <section> tag for better semantic HTML
    <section className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes crafted to satisfy your cravings.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item) => (
          // ✅ Replaced <div> with <button> for accessibility
          // ✅ Used a unique string 'item.menu_name' for the key instead of index
          <button
            key={item.menu_name}
            onClick={() => setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))}
            className="explore-menu-list-item"
            aria-pressed={category === item.menu_name} // Helps screen readers know it's active
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name} // ✅ Added descriptive alt text
            />
            <p>{item.menu_name}</p>
          </button>
        ))}
      </div>
      <hr />
    </section>
  );
}