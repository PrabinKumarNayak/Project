import { useContext, useState, useEffect } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

export default function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  // 1. State for managing the current page
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // You can change this number

  // 2. Logic to filter the list before paginating
  const filteredFoodList = food_list.filter(
    (item) => category === "All" || category === item.category
  );

  // 3. Logic to calculate which items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredFoodList.slice(indexOfFirstItem, indexOfLastItem);

  // 4. Logic to generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredFoodList.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // 5. Reset to page 1 when the category changes to avoid being on an empty page
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {/* We now map over 'currentItems' which is the sliced, paginated list */}
        {currentItems.map((item) => (
          <FoodItem
            key={item._id} // Using the unique _id for the key is best practice
            id={item._id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
      
      {/* 6. Render the pagination buttons */}
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}