import "../styles/sell.css";
import { useLegacyPageBehavior } from "../hooks/useLegacyPageBehavior.js";

export default function SellPage() {
  useLegacyPageBehavior("marketplace");

  return (
    <>
      <main className="sell-box">
        <header className="sell-header">
          <h1 className="sell-title">
            Sell Your Products
          </h1>
        </header>
        <form className="sell-input" id="sellForm">
          <div className="input-box">
            <label htmlFor="productName" className="input-title">
              
                    Product Name
                
            </label>
            <input type="text" id="productName" name="productName" className="input" placeholder="Enter product name" autoComplete="off" />
          </div>
          <div className="input-box">
            <label htmlFor="productImage" className="input-title">
              
                    Upload Product Image
                
            </label>
            <input type="file" id="productImage" name="productImage" className="upload-pic" accept="image/*" />
          </div>
          <div className="input-box">
            <label htmlFor="category" className="input-title">
              
                    Category
                
            </label>
            <select id="category" name="category" className="category" defaultValue="">
              <option value="">
                
                        Select Category
                    
              </option>
              <option value="vegetables">
                Vegetables
              </option>
              <option value="fruits">
                Fruits
              </option>
              <option value="pulses">
                Pulses
              </option>
              <option value="spices">
                Spices
              </option>
            </select>
          </div>
          <div className="input-box">
            <label htmlFor="description" className="input-title">
              
                    Product Description
                
            </label>
            <textarea id="description" name="description" className="sell-description" placeholder="Describe your product..." maxLength="500"></textarea>
          </div>
          <div className="input-box">
            <label className="input-title">
              
                    Quantity
                
            </label>
            <div className="quantity-box">
              <input type="number" id="quantity" name="quantity" className="qty-input" placeholder="Enter quantity" min="0.1" step="0.1" />
              <select id="quantityUnit" name="quantityUnit" className="qty-unit" defaultValue="">
                <option value="">
                  
                            Unit
                        
                </option>
                <option value="gram">
                  Grams
                </option>
                <option value="kg">
                  Kg
                </option>
                <option value="quintal">
                  Quintal
                </option>
                <option value="piece">
                  Piece
                </option>
                <option value="dozen">
                  Dozen
                </option>
                <option value="litre">
                  Litre
                </option>
              </select>
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="harvestDate" className="input-title">
              
                    Harvest Date
                
            </label>
            <input type="date" id="harvestDate" name="harvestDate" className="harvest-date" />
          </div>
          <div className="input-box">
            <label htmlFor="expectedPrice" className="input-title">
              
                    Expected Price
                
            </label>
            <div className="price-box">
              <span className="currency">
                ₹
              </span>
              <input type="number" id="expectedPrice" name="expectedPrice" className="price-input" placeholder="Enter expected price" min="1" step="0.01" />
            </div>
          </div>
          <div className="button">
            <button type="submit" className="submit" id="submitProduct">
              
                    List Product
                
            </button>
            <a href="/products" className="cancel-btn" id="cancelProduct">
              
                    Cancel
                
            </a>
          </div>
        </form>
      </main>
    </>
  );
}
