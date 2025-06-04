import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import Blog from "./Pages/Blog/Blog";
import Sproduct from "./Pages/Sproduct/Sproduct";
export default function App() {
  
  return (
    <div className="app">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/sproduct" element={<Sproduct/>}/>

      </Routes>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}


