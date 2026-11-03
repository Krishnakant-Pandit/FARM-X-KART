import "../styles/checkout.css";
import { useLegacyPageBehavior } from "../hooks/useLegacyPageBehavior.js";

export default function CheckoutPage() {
  useLegacyPageBehavior("marketplace");

  return (
    <>
      <header>
        <div className="head-box">
          <div className="logo-container">
            <img src="/images/Logo.jpeg" alt="Farm X Kart logo" className="logo-img" loading="lazy" />
            <div className="logo-title">
              Farm X Kart
            </div>
          </div>
          <nav className="nav-container">
            <a className="nav-link" href="/">
              Home
            </a>
            <a className="nav-link" href="/products">
              Products
            </a>
            <a className="nav-link" href="/cart">
              Cart
            </a>
          </nav>
          <div className="login-profile">
            <div className="login-box">
              <a className="login" href="/login">
                Login
              </a>
              <a className="signup" href="/signup">
                Sign Up
              </a>
            </div>
            <div className="profile-box">
              <a href="/profile" className="profile">
                <img src="/images/profilepic.jpg" alt="Profile" className="profile-img" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="gap"></div>
        <div className="title-box">
          <div className="checkout-title">
            Checkout
          </div>
        </div>
        <div className="gap"></div>
        <div className="checkout-container">
          <div className="checkout-left">
            <div className="checkout-box">
              <h2>
                Delivery Address
              </h2>
              <form id="checkout-form">
                <div className="input-group">
                  <label htmlFor="checkout-name">
                    Full Name
                  </label>
                  <input type="text" id="checkout-name" />
                </div>
                <div className="input-group">
                  <label htmlFor="checkout-mobile">
                    Mobile Number
                  </label>
                  <input type="tel" id="checkout-mobile" maxLength="10" />
                </div>
                <div className="input-group">
                  <label htmlFor="checkout-address">
                    Address
                  </label>
                  <textarea id="checkout-address" rows="4"></textarea>
                </div>
                <div className="address-row">
                  <div className="input-group">
                    <label htmlFor="checkout-city">
                      City
                    </label>
                    <input type="text" id="checkout-city" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="checkout-state">
                      State
                    </label>
                    <input type="text" id="checkout-state" />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="checkout-pincode">
                    PIN Code
                  </label>
                  <input type="text" id="checkout-pincode" maxLength="6" />
                </div>
                <h2>
                  Payment Method
                </h2>
                <div className="payment-options">
                  <label className="payment-option">
                    <input type="radio" name="payment" defaultValue="cod" />
                    <span>
                      Cash on Delivery
                    </span>
                  </label>
                  <label className="payment-option">
                    <input type="radio" name="payment" defaultValue="upi" />
                    <span>
                      UPI
                    </span>
                  </label>
                  <label className="payment-option">
                    <input type="radio" name="payment" defaultValue="card" />
                    <span>
                      Debit / Credit Card
                    </span>
                  </label>
                </div>
                <button type="submit" className="place-order-btn">
                  
                        Place Order
                    
                </button>
              </form>
            </div>
          </div>
          <div className="checkout-right">
            <div className="order-box">
              <h2>
                Your Order
              </h2>
              <div id="checkout-items"></div>
              <div className="summary-line">
                <span>
                  Total Items
                </span>
                <span id="checkout-total-items">
                  0
                </span>
              </div>
              <div className="summary-line">
                <span>
                  Subtotal
                </span>
                <span id="checkout-subtotal">
                  ₹0
                </span>
              </div>
              <div className="summary-line">
                <span>
                  Delivery
                </span>
                <span id="checkout-delivery">
                  ₹0
                </span>
              </div>
              <div className="summary-line total-line">
                <span>
                  Total
                </span>
                <span id="checkout-total">
                  ₹0
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="gap"></div>
      </main>
      <footer className="footer-box">
        <div className="footer-title">
          
            Farm X Kart
        
        </div>
        <div className="footer-description">
          
            Fresh Products, Directly from Our Farmers
        
        </div>
        <div className="footer-copyright">
          
            © 2026 Farm X Kart. All Rights Reserved.
        
        </div>
      </footer>
    </>
  );
}
