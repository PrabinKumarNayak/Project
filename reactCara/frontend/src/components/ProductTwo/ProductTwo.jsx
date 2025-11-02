import "./ProductTwo.css"

export default function ProductTwo({ brand, name, image, price }) {
  return (
       <div className="pro">
       <img src={image} alt="" />
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
