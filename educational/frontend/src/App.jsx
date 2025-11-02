import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Tutorials from "./Pages/Tutorials/Tutorials";
import TableOfContent from "./Pages/TableOfContent/TableOfContent";
import Literature from "./Pages/Literature/Literature";

function App() {
  return (
    <> 
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tutorials/:id" element={<Tutorials/>} />
        <Route path="/table/:id" element={<TableOfContent/>} />
        <Route path="/literature/:id/:index" element={<Literature/>} />
        
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
