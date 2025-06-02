import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

export default function Sproduct() {
  const { featured_products } = useContext(StoreContext);
  return (
    <div id="prodetails" class="section-p1">
      <div className="single-pro-image">
       
        {featured_products.map((item, index) => {
          return   <img src={item.image} width="100%" id="MainImg" key={index}/>;
        })}

        <div className="small-img-group">
          <div className="small-img-col">
            {featured_products.map((item, index) => {
              return (
                <img src={item.image} width="100%" className="small-img" key={index} />
              );
            })}
          </div>
        </div>
      </div>

      <div className="single-pro-details">
        <h6>Home / T-Shirt</h6>
        <h4>Men's Fashion T-Shirt</h4>
        <h2>$139.00</h2>
        <select>
          <option>Select Size</option>
          <option>XL</option>
          <option>XXL</option>
          <option>Small</option>
          <option>Large</option>
        </select>
        <input type="number" value="1" />
        <button className="normal">Add To Cart</button>
        <h4>Product Details</h4>
        <p>
          The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
          sq. yd. <br /> fabric constructed from 100% cotton, this classic fit
          preshrunk <br /> jersey knit provides unmatched comfort with each
          wear. Featuring a taped neck and shoulder,
          <br /> and a seamless double-needle collar, and available in a range
          of colors,
          <br /> it offers it all in the ultimate head-turning package.
        </p>
      </div>
    </div>
  );
}
