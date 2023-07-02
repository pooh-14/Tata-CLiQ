import logo from './logo.svg';
import './App.css';
import { Route,Routes } from "react-router-dom";
import Home from './TataWeb/Home';
import Navbar from './TataWeb/Navbar';
import Footer from './TataWeb/Footer';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route exact path='/home' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
