import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import ProductOne from "../ProductOne/ProductOne";
import "./FeaturedProduct.css"

export default function FeaturedProducts() {
  const { featured_products } = useContext(StoreContext);
  return (
    <div id="product1" className="section-p1">
      <h2>Featured Product</h2>
      <p>Summer Collection New Moder Design</p>
      <div className="pro-container">
        {featured_products.map((item, index) => {
          return (
            <ProductOne
              key={index}
              id={item.id}
              brand={item.brand}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}
