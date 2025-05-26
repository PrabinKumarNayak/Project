import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./NewArrivals.css"
import ProductTwo from "../ProductTwo/ProductTwo";

export default function NewArrivals(){
    const {new_arrivals} = useContext(StoreContext)
    return(
        <div id="product1" class="section-p1" >
        <h2>New Arrivals</h2>
        <p>Summer Collection New Moder Design</p>
        <div class="pro-container">
        {new_arrivals.map((item, index) => {
                  return (
                    <ProductTwo
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
    )
}