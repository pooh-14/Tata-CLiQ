import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./TataWeb/Home";
import Navbar from "./TataWeb/Navbar";
import Footer from "./TataWeb/Footer";
import MensSection from "./TataWeb/MensSection";
import Mensmultiple from "./../src/TataWeb/Mensmultiple";
import Profile from "./TataWeb/Profile/Profile";
import Cart from "./TataWeb/Cart/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/menssection" element={<MensSection />} />
        <Route exact path="/mensmultiple" element={<Mensmultiple/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
