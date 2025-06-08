import { assets } from "../../assets/Assets";
import "./AboutHead.css"


export default function AboutHead(){
    return(
        <div id="about-head" class="section-p1">
        <img src={assets.a6}/>
        <div>
            <h2>Who we are ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto tempora nostrum, alias eius debitis laudantium sequi temporibus facilis obcaecati est porro ullam magni ab accusantium cupiditate iste consequuntur nesciunt rem animi beatae at odio. Nobis rem omnis iste odio blanditiis ducimus in maxime accusamus facilis doloremque exercitationem consequatur nisi quae fugiat iusto tempora quibusdam, soluta culpa rerum reiciendis sunt. Tempora quia placeat officia odio aspernatur illo in expedita veritatis maiores tempore eaque saepe voluptatem.</p>
            <abbr title="">Create stunning images with Lorem ipsum dolor sit amet consectetur adipisicing elit and creative modes.</abbr>
            <br/><br/>
            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Create stunning images with Lorem ipsum dolor sit amet consectetur adipisicing elit and creative modes.</marquee>
        </div>
    </div>
    )
}