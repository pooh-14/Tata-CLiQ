import React from 'react'
import './Navbar.css'



const Navbar = () => {
  return (
    <div id="navbar">
        <div id="left">
          <img src="http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-Black-and-White.png"/>
        </div>
        <div id="right">
            <div id="up">
              <p>Tata CLiQ Luxury</p>
              <span>
                <p>CLiQ Cash</p>
                <p>Gift Card</p>
                <p>CliQ Care</p>
                <p>Track Orders</p>
                <p>Sign in/ Sign up</p>
              </span>
            </div>
            <div id="down">
              <div>
                <p>Categories</p>
               <i className="fa-solid fa-angle-down" ></i>
              </div>
              <div>
               <p>Brands</p>
               <i className="fa-solid fa-angle-down" ></i>
              </div>
              <div>
              <i class="fa-solid fa-magnifying-glass"></i>
              <input  placeholder='Search for Products'/>
              </div>
              <div>
              <i class="fa-regular fa-heart fa-xl"></i>
              <i class="fa-solid fa-bag-shopping fa-xl"></i>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar