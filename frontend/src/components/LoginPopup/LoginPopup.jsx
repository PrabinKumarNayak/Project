import { useState } from "react"
import "./LoginPopup.css"
import { assets } from "../../assets/Assets"
export default function LoginPopup({setShowLogin}){
    const [currentState,setCurrentState] = useState("Sign Up")
    return(
        <div className="login-popup">
            <form  className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
            </form>
        </div>
    )
}