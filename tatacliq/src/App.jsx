import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./TataWeb/Home/Home";
import Navbar from "./TataWeb/Navbar/Navbar";
import Footer from "./TataWeb/Footer/Footer";
import MensSection from "./TataWeb/MENS/MensSection";
import Mensmultiple from "./../src/TataWeb/MENS/Mensmultiple";
import Profile from "./TataWeb/Profile/Profile";
import Cart from "./TataWeb/Cart/Cart";
import AccessMultiple from "./TataWeb/ACCESSORIES/AccessMultiple";
import BeautyMultiple from "./TataWeb/BEAUTY/BeautyMultiple";
import GadgetsMultiple from "./TataWeb/GADGETS/GadgetsMultiple";
import JewelleryMultiple from "./TataWeb/JEWELLERY/JewelleryMultiple";
import KidsMultiple from "./TataWeb/KIDS/KidsMultiple";
import KitchenMultiple from "./TataWeb/KITCHEN/KitchenMultiple";
import WomensMultiple from "./TataWeb/WOMENS/WomensMultiple";
import WomensSection from "./TataWeb/WOMENS/WomensSection";
import KidsSection from "./TataWeb/KIDS/KidsSection";
import KitchenSection from "./TataWeb/KITCHEN/KitchenSection";
import BeautySection from "./TataWeb/BEAUTY/BeautySection";
import GadgetsSection from "./TataWeb/GADGETS/GadgetsSection";
import Wishlist from "./TataWeb/Wishlist/Wishlist";
import Checkout from "./TataWeb/Cart/Checkout";

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
        <Route exact path="/accessmultiple" element={<AccessMultiple/>}/>
        <Route exact path="/beautymultiple" element={<BeautyMultiple/>}/>
        <Route exact path="/gadgetsmultiple" element={<GadgetsMultiple/>}/>
        <Route exact path="/jewellerymultiple" element={<JewelleryMultiple/>}/>
        <Route exact path="/kidsmultiple" element={<KidsMultiple/>}/>
        <Route exact path="/kitchenmultiple" element={<KitchenMultiple/>}/>
        <Route exact path="/womensmultiple" element={<WomensMultiple/>}/>
        <Route exact path="/womenssection" element={<WomensSection/>}/>
        <Route exact path="/kidssection" element={<KidsSection/>}/>
        <Route exact path="/kitchensection" element={<KitchenSection/>}/>
        <Route exact path="/beautysection" element={<BeautySection/>}/>
        <Route exact path="/gadgetssection" element={<GadgetsSection/>}/>
        <Route exact path="/wishlist" element={<Wishlist/>}/>
        <Route exact path="/checkout" element={<Checkout/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
