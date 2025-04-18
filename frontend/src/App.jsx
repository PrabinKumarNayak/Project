import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./index.css"
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
export default function App() {
 

  return (
    <>
     <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="order" element={<PlaceOrder/>} />
      </Routes>
     </div>
    </>
  )
}


