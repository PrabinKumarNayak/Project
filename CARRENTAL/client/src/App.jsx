import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import CartDetails from "./Pages/CartDetails";
import Cars from "./Pages/Cars";
import MyBookings from "./Pages/MyBookings";

export default function App() {
  const { showLogin, setShowLogin } = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/car-details/:id" element={<CartDetails/>}/>
        <Route path="/cars" element={<Cars/>}/>
        <Route path="/my-bookings" element={<MyBookings/>}/>
      </Routes>
    </>
  );
}
