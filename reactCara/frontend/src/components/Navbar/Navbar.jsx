import { useState } from "react";
import { assets } from "../../assets/Assets";
import { Link } from "react-router-dom";
import "./Navbar.css"
export default function Navbar(){
    const [menu,setMenu] = useState("home")
    return(
    <div id="header">
        <Link to='/'><img src={assets.logo} class="logo"/></Link>
        <div>
            <div id="navbar">
                 <Link to='/'><a onClick={()=>setMenu("home")} className={menu==="home"?"active":""} >Home</a></Link>
                 <Link to='/shop'><a onClick={()=>setMenu("shop")} className={menu==="shop"?"active":""} >Shop</a></Link>
                 <Link to='/blog'><a onClick={()=>setMenu("blog")} className={menu==="blog"?"active":""} >Blog</a></Link>
                 <a onClick={()=>setMenu("about")} className={menu==="about"?"active":""} >About</a>
                 <a onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""} >Contact</a>
                 <a id="lg-bag" onClick={()=>setMenu("cart")} className={menu==="cart"?"active":""}><i class="fa-solid fa-bag-shopping"></i></a>
            </div>
        </div>
    </div>
    )
}