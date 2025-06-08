import { assets } from "../../assets/Assets";
import "./Video.css"

export default function Video(){
    return(
        <div id="about-app" className="section-p1">
        <h1>Download Our <a href="#">App</a></h1>
        <div className="video">
            <video autoplay muted loop src={assets.vdo}></video>
        </div>
    </div>
    )
}