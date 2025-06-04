import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./FourProduct.css"

export default function FourProduct() {
  const { new_arrivals } = useContext(StoreContext);
  return (
    <div id="product1" className="section-p1">
      <h2>Featured Product</h2>
      <p>Summer Collection New Moder Design</p>
      <div className="pro-container">
        {new_arrivals.map((item, index) => {
          if (index <= 3) {
            return (
              <div className="pro">
                <img src={item.image} key={index} alt="" />
                <div className="des">
                  <span>{item.brand}</span>
                  <h5>{item.name}</h5>
                  <div className="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <h4>${item.price}</h4>
                </div>
                <a className="cart">
                  <i class="fa-solid fa-cart-shopping "></i>
                </a>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
