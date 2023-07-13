import React from 'react'
import './Wishlist.css'
import myData from '../../data/wishlist.json'

const Wishlist = () => {
  return (
    <div id='wish'>
        <div id='nav'>
            <p>My Wishlist</p>
        </div>
        <div id="list">
            {myData.map((product) => (
                <div>
                <div>
                    <img src={product.image}/>
                </div>
                <div>
                  <button>Add to Bag</button>
                </div>
                <div>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <span>₹{product.price}</span>
                    <span><s>₹{product["Before Discount"]}</s> </span>
                    <p>{product.stock}</p>
                </div>

                <div id="delete">
                 <img style={{width:"30px" , height:"30px", padding:"3px",
                  border: "1px solid white", borderRadius:"7px",
                   backgroundColor:"rgba(254,254,254,0.9)"}} 
                 src="https://www.tatacliq.com/src/wishlist/components/img/Delete.svg"/>
               </div>

            </div>
            ))}
            
        </div>
    </div>
  )
}

export default Wishlist