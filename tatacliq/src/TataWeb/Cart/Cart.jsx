import React from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const router = useNavigate();
    function check(){
        router('/checkout')
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
                    <p>Get this order at <s>₹8999</s>  <b>₹4049</b> only!</p>
                </div>
                <div>
                    <div>
                        <img src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000015101718_437Wx649H_202211012350021.jpeg'/>
                    </div>
                    <div>
                        <span>Vero Moda Purple A-Line Dress</span>
                        <span><img src='https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg'/></span>
                        <span>Delivery by 14th Jul |</span>
                        <span>FREE</span>
                        <p><b>₹4049.00</b> <s>₹8999.00</s> ₹4950.00 Off</p>
                        <span>Color: Purple </span>   <span>Size: L</span> 
                        <div> 
                         <p>Quantity: 1</p>
                         <img src='https://www.tatacliq.com/src/general/components/img/WL5.svg'/>
                         <p>Save to wishlist</p>
                         <p>Remove</p>
                         </div>
                    </div>
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
                        <span>₹8999.00</span>
                    </div>
                    <div>
                        <p>Shipping Charge</p>
                        <span>FREE</span>
                    </div>
                    <div>
                        <p>Bag Subtotal</p>
                        <span>₹8999.00</span>
                    </div>
                    <div>
                        <p>Product Discount(s)</p>
                        <span>-₹4950.00</span>
                    </div>
                    <div>
                        <p>You will save ₹4950.00 on this order</p>
                    </div>
                    <div>
                        <p><b>Total</b>  ₹ 4049</p>
                        <button onClick={check}>Checkout</button>
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