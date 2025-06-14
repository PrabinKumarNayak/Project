import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./index.css"
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";
export default function App() {
  const[showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
     <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="order" element={<PlaceOrder/>} />
      </Routes>
     </div>
     <Footer/>
    </>
  )
}


