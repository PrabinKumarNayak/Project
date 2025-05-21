import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
export default function App() {
  
  return (
    <div className="app">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />

      </Routes>
    </div>
  )
}


