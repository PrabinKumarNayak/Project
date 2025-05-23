import { useState } from "react";
import { assets } from "../../assets/Assets";
import "./Navbar.css"
export default function Navbar(){
    const [menu,setMenu] = useState("home")
    return(
    <div id="header">
        <img src={assets.logo} class="logo"/>
        <div>
            <ul id="navbar">
                 <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""} >Home</li>
                 <li onClick={()=>setMenu("shop")} className={menu==="shop"?"active":""} >Shop</li>
                 <li onClick={()=>setMenu("blog")} className={menu==="blog"?"active":""} >Blog</li>
                 <li onClick={()=>setMenu("about")} className={menu==="about"?"active":""} >About</li>
                 <li onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""} >Contact</li>
                 <li id="lg-bag" onClick={()=>setMenu("cart")} className={menu==="cart"?"active":""}><i class="fa-solid fa-bag-shopping"></i></li>
            </ul>
        </div>
    </div>
    )
}