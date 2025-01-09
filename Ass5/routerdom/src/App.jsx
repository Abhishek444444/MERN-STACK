import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Explore from "./components/Explore";
import ContactUs from "./components/Contact-us";
import AboutUs from "./components/AboutUs";

function App() {

  return (
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/about" element={<AboutUs/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
