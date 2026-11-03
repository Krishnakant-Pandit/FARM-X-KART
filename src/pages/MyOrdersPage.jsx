import "../styles/myOrders.css";
import { useLegacyPageBehavior } from "../hooks/useLegacyPageBehavior.js";

export default function MyOrdersPage() {
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
          <div className="checkout-title">
            My Orders
          </div>
        </div>
        <div className="gap"></div>
        <section className="order-box">
          <div id="empty-order" className="empty-order">
            <div className="empty-display">
              
            No order Placed!!
        
            </div>
            <a href="/products" className="shop-now">
              
            Shop Now
        
            </a>
          </div>
          <div id="orders-container" className="orders-container"></div>
        </section>
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
