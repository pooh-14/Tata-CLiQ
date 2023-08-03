import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import './Cart.css'

const Cart = () => {
  const [finalprice, setFinalPrice] = useState(0);
  const [userCart, setUserCart] = useState([]);
  const router = useNavigate();

  // console.log(userCart, "- userCart");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Current-user"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == user.email &&
          allUsers[i].password == user.password
        ) {
          setUserCart(allUsers[i].cart);
          break;
        }
      }
    } else {
     toast.error("Please login to watch all cart products.");
      router("/login");
    }
  }, []);

  useEffect(() => {
    if (userCart.length) {
        var totalprice = 0;
        for (var i = 0; i < userCart.length; i++) {
            totalprice += parseInt(userCart[i].price);
        }
        setFinalPrice(totalprice)
    }
}, [userCart])


useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Current-user"))
    if (user) {
        if (user?.role == "Seller") {
            toast.error("Access granted only to Buyer.")
            router('/')
        }
    } else {
        toast.error("You are not a Logged in user.")
        router('/practicelogin')
    }
}, [])


  function checkout(){
    const user = JSON.parse(localStorage.getItem("Current-user"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == user.email &&
          allUsers[i].password == user.password
        ) {
          allUsers[i].cart=[];
          break;
        }
      }
      localStorage.setItem("Users",JSON.stringify(allUsers))
    }
    setFinalPrice([]);  
    setUserCart([]);
   toast.success("Your products will be delivered soon. Thankyou for shopping!")
  }

  return (
    <div id='cartfull'>
        <div>
            <p>My Bag</p>
            <p>Panvel,</p>
            <p> 410210</p>
            <p><u>Change Pin Code</u></p>
        </div>
        <div id='back'>
            <p>Apply a relevant <b>coupon code</b> here to avail any additional discount. Applicable <b>cashback </b>if any will be credited to your account as per T&C.</p>
            <div id='ground'>
            <div id='cartleft'>
                <div>
                    <img src='https://www.tatacliq.com/src/cart/components/img/Vector.svg'/>
                    <p>Get more offers by adding coupons!</p>
                </div>

                <div>
                  {userCart &&
                  userCart.map((pro) => (
                  <div>
                    <div>
                        <img src={pro.image}/>
                    </div>
                    <div>
                        <span>{pro.name}</span>
                        <span><img src='https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg'/></span>
                        <span>Delivery by 14th Aug |</span> <span>FREE</span>
                        <p><b>₹{pro.price}</b></p>
                         {/* <s>₹8999.00</s> ₹4950.00 Off</p> */}
                        {/* <span>Color: Purple </span>    */}
                        <span>Size: L</span> 
                        <div> 
                         <p>Quantity: 1</p>
                         <img src='https://www.tatacliq.com/src/general/components/img/WL5.svg'/>
                         <p>Save to wishlist</p>
                         <p>Remove</p>
                         </div>
                  </div>
                </div>
                 ))}

                </div>


                <button>Continue Shopping</button>
            </div>
            <div id='cartright'>
                <div>
                    <img src='https://www.tatacliq.com/src/general/components/img/coupon.png'/>
                    <p>Check for Coupons</p>
                </div>
                <div>
                    <div>
                        <p>Bag Total</p>
                        <span>₹{finalprice + finalprice}</span>
                    </div>
                    <div>
                        <p>Shipping Charge</p>
                        <span>FREE</span>
                    </div>
                    <div>
                        <p>Bag Subtotal</p>
                        <span>₹{finalprice}</span>
                    </div>
                    <div>
                        <p>Product Discount(s)</p>
                        <span>50%</span>
                    </div>
                    <div>
                        <p>You will save 5o% on this order</p>
                    </div>
                    <div>
                        <p><b>Total</b>  ₹ {finalprice}</p>
                        <button onClick={checkout}>Checkout</button>
                    </div>

                    <div>
                        <img src='https://www.tatacliq.com/src/cart/components/img/lock.svg'/>
                        <p>Safe and secure payments. Easy returns. 100% Authentic products.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Cart