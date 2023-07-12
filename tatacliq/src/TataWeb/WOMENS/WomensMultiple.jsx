import "./../MENS/Mensmultiple.css";
import myData from '../../data/women.json'

function WomensMultiple() {
  return(
    <div id="menz">
      <div id="one">
        <p>Dresses for women</p>
        <p>110919 Products</p>
      </div>
      <div id="two">
        <div>
        <span>Sort by:</span>
        <span>
          <select>
            <option>Popularity</option>
            <option>Price High to Low</option>
            <option>Price low to High</option>
            <option>New Arrivals</option>
            <option>Discounts</option>
          </select>
          <i class="fa-solid fa-arrow-down-wide-short"></i>
        </span>
        </div>
        <span>
          <img src="https://www.tatacliq.com/src/plp/components/img/list.svg" />
        </span>
      </div>
      <div id="body">
        <div id="mensleft">
            <div>
                <p>Filters</p>
                <p>Clear All</p>
            </div>
            <div>
                <p>Department</p>
                <p>Women cltng</p>
            </div>
            <div>
                <p>Category</p>
                <span>
                    <p>Western wear</p>
                    <i class="fa-solid fa-xmark"></i>
                </span>
            </div>
            <div>
            <div>
                <p>Product Type</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div>
            <p>Brand</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div>
            <p>Size</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div>
            <p>Type</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div>
            <p>Color</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div>
            <p>Price</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div>
            <p>Fit</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div>
            <p>Discount</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div>
            <p>Fabric Family</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div>
            <p>Sleeve</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div>
            <p>Collar</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div>
            <p>Pattern</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div>
            <p>Ocassion</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div>
            <p>All Discount</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            <div>
            <p>Availability</p>
                <i class="fa-solid fa-plus"></i>
            </div>
            </div>
        </div>
        <div id="mensright">
            {myData.map((product) => (
                <div>
                <div>
                    <img src={product.image}/></div>
                <div>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <span>₹{product.price}</span>
                    <span><s>₹{product["Before Discount"]}</s> </span>
                    <div>
                      <span>
                        <p>{product.Ratings}</p>
                        <i class="fa-solid fa-star fa-xs"></i>
                      </span>
                      <span>{product.count}</span>
                    </div>
                    <p>{product.stock}</p>
                </div>

                <div id="like">
                 <img style={{width:"30px" , height:"30px",
                  border: "1px solid white", borderRadius:"7px",
                   backgroundColor:"rgba(254,254,254,0.9)"}} 
                 src="https://www.tatacliq.com/src/general/components/img/WL1.svg"/>
               </div>
               <div id="similar">
                 <img style={{width:"30px" , height:"30px",
                  border: "1px solid white", borderRadius:"7px",
                   backgroundColor:"rgba(254,254,254,0.9)"}} 
                 src="https://www.tatacliq.com/src/general/components/img/similarIconNew.svg"/>
               </div>

            </div>
            ))}
            
        </div>
       
      </div>
    </div>
     )
}
export default WomensMultiple;
