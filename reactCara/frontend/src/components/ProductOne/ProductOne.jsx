import { Link } from "react-router-dom";
import "./ProductOne.css"

export default function ProductOne({ id, brand, name, image, price }) {
  return (
       <div className="pro">
       <Link to='/sproduct'><img src={image} alt="" /></Link>
       <div className="des">
         <span>{brand}</span>
         <h5>{name}</h5>
         <div className="star">
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
         </div>
         <h4>${price}</h4>
       </div>
       <a className="cart">
         <i class="fa-solid fa-cart-shopping "></i>
       </a>
     </div>
  );
}
