import "../styles/cart.css";
import { useLegacyPageBehavior } from "../hooks/useLegacyPageBehavior.js";

export default function CartPage() {
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
            <a className="nav-link" href="/wishlist">
              
                    Wishlist
                
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
          <div className="cart-title">
            
                My Cart
            
          </div>
        </div>
        <div className="gap"></div>
        <section className="cart-container">
          <div id="empty-cart" className="cart-empty">
            <div>
              
                    Your Cart is Empty!!
                
            </div>
            <a href="/products" className="shop-now">
              
                    Shop Now
                
            </a>
          </div>
          <div id="cart-content" className="cart-content">
            <div className="cart-items" id="cart-items">
            </div>
            <div className="cart-summary">
              <div className="summary-title">
                
                        Order Summary
                    
              </div>
              <div className="summary-row">
                <span>
                  
                            Items
                        
                </span>
                <span id="total-items">
                  
                            0
                        
                </span>
              </div>
              <div className="summary-row">
                <span>
                  
                            Subtotal
                        
                </span>
                <span id="subtotal">
                  
                            ₹0
                        
                </span>
              </div>
              <div className="summary-row">
                <span>
                  
                            Delivery
                        
                </span>
                <span id="delivery">
                  
                            ₹40
                        
                </span>
              </div>
              <div className="summary-line"></div>
              <div className="summary-total">
                <span>
                  
                            Total
                        
                </span>
                <span id="total-price">
                  
                            ₹0
                        
                </span>
              </div>
              <button className="checkout-btn" id="checkout-btn">
                
                        Proceed to Checkout
                    
              </button>
            </div>
          </div>
        </section>
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
