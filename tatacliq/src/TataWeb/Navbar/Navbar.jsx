import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../CONTEXT/AuthContext";
import { toast } from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    role: "",
  });

  //usestate
  const [display, setdisplay] = useState(false);

  const handleClick = () => {
    setdisplay(true);
  };

  const handleup = () => {
    setdisplay(false);
  };

  // ------------****------------

  //usestate
  const [drop, setdrop] = useState(false);
  //onclick

  const handHover = () => {
    setdrop(!drop);
  };

  // ------------**LOGIN**------------

  const [logg, setlogg] = useState(false);

  const logopen = () => {
    setlogg(true);
  };

  const logclose = () => {
    setlogg(false);
  };

  // --------------****------------------

  const router = useNavigate();
  function goto() {
    router("/menssection");
  }

  function goin() {
    router("/cart");
  }

  function womsec() {
    router("/womenssection");
  }

  function kidsec() {
    router("/kidssection");
  }

  function kitsec() {
    router("/kitchensection");
  }

  function beautsec() {
    router("/beautysection");
  }

  function gadsec() {
    router("/gadgetssection");
  }

  function jewelsec() {
    router("/jewellerymultiple");
  }

  function accsec() {
    router("/accessmultiple");
  }

  function gowish() {
    router("/wishlist");
  }

  function gopro(){
    router("/profile")
  }

  // --------------****------------------



    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            const response = await axios.post("http://localhost:8004/login", { userData });
            if (response.data.success) {
                dispatch({
                    type: 'LOGIN',
                    payload: response.data.user
                })
                localStorage.setItem("token", JSON.stringify(response.data.token))
                setUserData({ email: "", password: "" })
                router('/')
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }
        } else {
            toast.error("All fields are mandtory.")
        }
    }
    // console.log(userData, "userData")

    useEffect(() => {
        if (state?.user?.name) {
            router('/')
        }
    }, [state])

  return (
    <div id="navbar">
      <div id="left">
        <img onClick={()=> router('/')} src="http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-Black-and-White.png" />
      </div>
      <div id="right">
        <div id="up">
          <p>Tata CLiQ Luxury</p>
          <span>
            <p onClick={() => router("/addproducts")}>Add Products</p>
            <p>CLiQ Cash</p>
            <p>Gift Card</p>
            <p>CliQ Care</p>
            <p>Track Orders</p>
            <p onClick={logopen}>{userData.name? userData.name : <p>Sign in/ Sign up</p>}</p>
          </span>
        </div>
        <div id="down">
          <div id="categories" onPointerEnter={() => handleClick()}>
            <p>Categories</p>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div>
            <p>Brands</p>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Search for Products" />
          </div>
          <div>
            <i onClick={gowish} class="fa-regular fa-heart fa-xl"></i>
            <i onClick={goin} class="fa-solid fa-bag-shopping fa-xl"></i>
            <i onClick={gopro} class="fa-regular fa-circle-user fa-xl "></i>
          </div>
        </div>

        {/* <div id="dropdown">
              <div>
              <p>Women's Fashion</p>
              <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>
              <p>Men's Fashion</p>
              <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>
              <p>Kids's Fashion</p>
              <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>
              <p>Home & Kitchen</p>
              <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>
                <p>Beauty</p>
              <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>
                <p>Gadgets</p>
              <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>
                <p>Jewellery</p>
              <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>
                <p>Accessories</p>
              <i class="fa-solid fa-angle-right"></i>
              </div>
            </div> */}
        {display && (
          <div id="dropdown">
            <div>
              <div>
                <p onClick={womsec} onMouseLeave={() => handleup()}>
                  Women's Fashion
                </p>
                <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>
                <p
                  onPointerEnter={() => handHover()}
                  onClick={goto}
                  onMouseLeave={() => handleup()}
                >
                  Men's Fashion
                </p>
                <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>
                <p onClick={kidsec} onMouseLeave={() => handleup()}>
                  Kids's Fashion
                </p>
                <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>
                <p onClick={kitsec} onMouseLeave={() => handleup()}>
                  Home & Kitchen
                </p>
                <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>
                <p onClick={beautsec} onMouseLeave={() => handleup()}>
                  Beauty
                </p>
                <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>
                <p onClick={gadsec} onMouseLeave={() => handleup()}>
                  Gadgets
                </p>
                <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>
                <p onClick={jewelsec} onMouseLeave={() => handleup()}>
                  Jewellery
                </p>
                <i class="fa-solid fa-angle-right"></i>
              </div>
              <div>
                <p onClick={accsec} onMouseLeave={() => handleup()}>
                  Accessories
                </p>
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div id="dropwomen">
              <div>
                <h4>Shop All Ethnic Wear</h4>
                <p>Kurtis & Kurtas</p>
                <p>Suits</p>
                <p>Sarees</p>
                <p>Lehengas</p>
                <p>Bottoms</p>
                <p>Blouses & Fabrics</p>
                <p>Dupattas</p>
              </div>
              <div>
                <p>Shorts</p>
                <p>Jackets & Blazers</p>
                <p>Leggings</p>
                <p>Capris</p>
                <p>Jumpsuits</p>
                <p>Shrugs</p>
                <p>Sweaters</p>
                <p>Sweatshirts</p>
              </div>
              <div>
                <h4>Lingerie & Lounge Sets</h4>
                <p>Bras</p>
                <p>Panties</p>
                <p>Lingerie Sets</p>
                <p>Camisoles</p>
                <p>Sleepwear & Robes</p>
                <p>Shapewear</p>
                <p>Swimwear</p>
              </div>
              <div>
                <h4>Bags, Wallets & Clutches</h4>
                <p>Handbags</p>
                <p>Tote Bags</p>
                <p>Sling Bags</p>
                <p>Backpacks</p>
                <p>Wallets</p>
                <p>Clutches</p>
                <p>Premium Handbags</p>
              </div>
              <div>
                <h4>Shop All Western Wear</h4>
                <p>Tops & Tunics</p>
                <p>Dresses</p>
                <p>Jeans</p>
                <p>Shirts</p>
                <p>Trousers</p>
                <p>Skirts</p>
              </div>

              <div>
                <h4>Activewear & Sportswear</h4>
                <p>T-shirts</p>
                <p>Shorts</p>
                <p>Sets</p>
                <p>Jackets</p>
                <p>Track Pants</p>
                <p>Innerwear</p>
              </div>

              <div>
                <h4>Shop All Footwear</h4>
                <p>Casual Footwear</p>
                <p>Boots</p>
                <p>Sneakers</p>
                <p>Flip Flops</p>
                <p>Sports Shoes</p>
                <p>Ethnic Footwear</p>
              </div>

              <div>
                <h4>Jewellery</h4>
                <p>Gold</p>
                <p>Diamond</p>
                <p>Silver</p>
                <p>Fashion Jewellery</p>
                <h4>Watches</h4>
                <p>Smart</p>
              </div>
            </div>
          </div>
        )}

        {/* ----------------------**LOGIN**--------------------------------- */}

        {logg ? (
          <div id="logon">
            <div id="logbox">
              <div id="welcome">
                <i onClick={logclose} class="fa-solid fa-xmark fa-xl"></i>
                <p>Welcome to Tata CLiQ</p>
              </div>
              <div id="logform">
                <form onSubmit={handleSubmit}>
                  <label>Enter your Email ID :</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                  />
                  <br />
                  <label>Enter your Password :</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                  />
                  <br />
                  <button onMouseLeave={logclose}>LOGIN</button>
                  <p>
                    New User? <u onClick={()=>router('/register')}>Register</u>
                  </p>
                </form>
                <p>
                  This site is protected by reCAPTCHA and the Google{" "}
                  <b>Privacy Policy</b> and <b>Terms of Service</b> apply. By
                  continuing, you agree to our <b>Terms of Use</b> and{" "}
                  <b>Privacy Policy</b>
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {/* <div id="dropmen">
              <div>
                <h4>Shop All Ethnic Wear</h4>
                <p>Kurtis & Kurtas</p>
                <p>Suits</p>
                <p>Sarees</p>
                <p>Lehengas</p>
                <p>Bottoms</p>
                <p>Blouses & Fabrics</p>
                <p>Dupattas</p>
              </div>
              <div>
                <p>Shorts</p>
                <p>Jackets & Blazers</p>
                <p>Leggings</p>
                <p>Capris</p>
                <p>Jumpsuits</p>
                <p>Shrugs</p>
                <p>Sweaters</p>
                <p>Sweatshirts</p>
              </div>
              <div>
                <h4>Lingerie & Lounge Sets</h4>
                <p>Bras</p>
                <p>Panties</p>
                <p>Lingerie Sets</p>
                <p>Camisoles</p>
                <p>Sleepwear & Robes</p>
                <p>Shapewear</p>
                <p>Swimwear</p>
              </div>
              <div>
                <h4>Bags, Wallets & Clutches</h4>
                <p>Handbags</p>
                <p>Tote Bags</p>
                <p>Sling Bags</p>
                <p>Backpacks</p>
                <p>Wallets</p>
                <p>Clutches</p>
                <p>Premium Handbags</p>
              </div>
              <div>
                <h4>Shop All Western Wear</h4>
                <p>Tops & Tunics</p>
                <p>Dresses</p>
                <p>Jeans</p>
                <p>Shirts</p>
                <p>Trousers</p>
                <p>Skirts</p>
              </div>
              
              <div>
                <h4>Activewear & Sportswear</h4>
                <p>T-shirts</p>
                <p>Shorts</p>
                <p>Sets</p>
                <p>Jackets</p>
                <p>Track Pants</p>
                <p>Innerwear</p>
              </div>
              
              <div>
                <h4>Shop All Footwear</h4>
                <p>Casual Footwear</p>
                <p>Boots</p>
                <p>Sneakers</p>
                <p>Flip Flops</p>
                <p>Sports Shoes</p>
                <p>Ethnic Footwear</p>
              </div>
              
              <div>
                <h4>Jewellery</h4>
                <p>Gold</p>
                <p>Diamond</p>
                <p>Silver</p>
                <p>Fashion Jewellery</p>
                <h4>Watches</h4>
                <p>Smart</p> 
              </div>
            </div> */}

        {/* {drop && <div id="dropmen">
              <div>
                <h4>Tops</h4>
                <p>T-shirts</p>
                <p>Polo T-shirts</p>
                <p>Shirts</p>
                <p>Sweatshirts</p>
                <p>Bottoms</p>
                <p>Jackets</p>
                <p>Suits</p>
                <p>Blazers</p>
                <h4>Bottoms</h4>
                <p>Jeans</p>
                <p>Chinos</p>
                <p>Trousers</p>
                <p>Formal Trousers</p>
                <p>Shorts</p>
              </div>
              <div>
                <p>Joggers</p>
                <p>Trackpants</p>
                <h4>Activewear</h4>
                <p>T-Shirts & Jerseys</p>
                <p>Sports Shorts</p>
                <p>Sports Jackets</p>
                <p>Joggers</p>
                <h4>Innerwear</h4>
                <p>Boxers</p>
                <p>Briefs</p>
                <p>Trunks</p>
                <p>Vests</p>
                <p>Night Suits</p>
                <h4>Footwear</h4>
                <p>Casual Shoes</p>
              </div>
              <div>
                <p>Sneakers</p>
                <p>Formal Shoes</p>
                <p>Running Shoes</p>
                <p>Training Shoes</p>
                <p>Sports Shoes</p>
                <p>Boots</p>
                <p>Flip Flops</p>
                <p>Sandals & Floaters</p>
                <h4>Watches</h4>
                <p>Smartwatches</p>
                <p>Work Watches</p>
                <p>Casual Watches</p>
                <p>Party Watches</p>
                <p>Digital watches</p>
                <p>Multifunctional Watches</p>
              </div> 
              <div>
                <h4>Bags, Backpacks & Wallets</h4>
                <p>Backpacks</p>
                <p>Wallets</p>
                <p>Messenger Bags</p>
                <p>Crossbody Bags</p>
                <h4>Fashion Accessories</h4>
                <p>Belts</p>
                <h4>Ties</h4>
                <p>Cufflinks</p>
                <p>Sunglasses</p>
              </div>
            </div>} */}
      </div>
    </div>
  );
};

export default Navbar;
