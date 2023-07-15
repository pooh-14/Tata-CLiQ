import React from 'react'
import './../Cart/Checkout.css'

const Checkout = () => {
    

  return (
    <div id='checkout'>
        <div>
            <p>Checkout</p>
        </div>
        <div id='out'>
            
            <div id='checkleft'>
                <div>
                    <p>1</p>
                    <p>Add Shipping Address</p>
                    <p><u>Clear all</u></p>
                </div>

                <div>
                    <div id='name'>
                      <div>
                         <input type='text' value='First Name(Required)*'/>
                         <input type='text' value='Last Name(Required)*'/><br/>
                         <input type='text' value='City/District(Required)*'/><br/>
                         <input type='text' value='State(Required)*'/><br/>
                         <input type='text' value='Landmark'/>
                      </div>
                      <div>
                         <span>
                            <input type='radio'/>
                            <p>Home</p>
                         </span>
                         <span>
                            <input type='radio'/>
                            <p>Office</p>
                         </span>
                      </div>
                    </div> 
                    <div id='add'>
                        <input type='text' value='Enter your PIN code(Required)*'/><br/>
                        <textarea value={"Flat/House No., Floor, Building/Company/Apartment  Name, Road/Street Name, Area, Colony,Sector, Village (Required)*"} rows={5} cols={54}></textarea><br/>
                        <p>Character limit : 120</p>
                        <input type='text' value='Enter 10 digit Mobile Number'/>
                    </div>
                </div>

                <div>
                    <p>Cancel</p>
                    <button>Save & Continue</button>
                </div>
            </div>

            <div id='checkright'>
                
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
                        <p>Total Payable</p>
                        <p>₹ 4049</p>
                    </div>

                    <div>
                        <img src='https://www.tatacliq.com/src/cart/components/img/lock.svg'/>
                        <p>Safe and secure payments. Easy returns. 100% Authentic products.</p>
                    </div>
                
                
                
            </div>
        </div>
    </div>
  )
}

export default Checkout