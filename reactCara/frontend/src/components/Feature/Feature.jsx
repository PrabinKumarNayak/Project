import { assets, feature_list } from "../../assets/Assets";
import "./Feature.css"
export default function Feature() {
  return (
    <div id="feature" class="section-p1">
      {feature_list.map((item, index) => {
        return (
          <div class="fe-box">
            <img src={item.feature_image} alt="" />
            <h6>{item.feature}</h6>
          </div>
        );
      })}
    </div>
  );
}
