import "../styles/index.css";
import { useLegacyPageBehavior } from "../hooks/useLegacyPageBehavior.js";

export default function IndexPage() {
  useLegacyPageBehavior("marketplace");

  return (
    <>
      <header>
        <div className="head-box">
          <div className="logo-container">
            <img src="/images/Logo.jpeg" alt="logo" className="logo-img" loading="lazy" />
            <div className="logo-title">
              Farm X Kart
            </div>
          </div>
          <div className="nav-conatiner">
            <a className="nav-link" href="#home">
              Home
            </a>
            <a className="nav-link" href="/products">
              Products
            </a>
            <a className="nav-link" href="#reviews">
              Reviews
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
            <a className="nav-link" href="#about">
              About Us
            </a>
          </div>
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
                <img src="/images/profilepic.jpg" alt="profile" className="profile-img" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="gap"></div>
      <div className="banner-container" id="home">
        <div className="banner-slider">
          <div className="banner-slide">
            <img src="/images/Banner1.png" alt="Shopping Banner" loading="lazy" />
          </div>
          <div className="banner-slide">
            <img src="/images/Banner2.png" alt="Online Shopping" loading="lazy" />
          </div>
          <div className="banner-slide">
            <img src="/images/Banner3.png" alt="Online Store" loading="lazy" />
          </div>
          <div className="banner-slide">
            <img src="/images/Banner4.png" alt="Shopping Deals" loading="lazy" />
          </div>
        </div>
      </div>
      <div className="gap"></div>
      <div className="welcome-conatiner">
        <div className="welcome-box">
          <div className="welcome-title">
            
                Welcome to Farm X Kart
            
          </div>
          <div className="welcome-description">
            
                Your one-stop online marketplace for fresh, quality agricultural products directly from farmers.
                Discover fresh vegetables, fruits, grains, pulses, and more at fair and affordable prices. Farm X Kart
                connects farmers with buyers, ensuring better prices, trusted products, and a hassle-free shopping
                experience.
            
          </div>
          <a href="/products" className="welcome-btn">
            Shop Now
          </a>
        </div>
      </div>
      <div className="gap"></div>
      <section id="about" className="section">
        <div className="section-title">
          
            Why Choose Farm X Kart ?
        
        </div>
        <div className="features-container">
          <div className="feature-card">
            <img src="/images/FastDelivery.png" alt="fast delivery" className="feature-icon" loading="lazy" />
            <h3>
              Fast Delivery
            </h3>
            <p>
              Quick and reliable delivery.
            </p>
          </div>
          <div className="feature-card">
            <img src="/images/SecurePayement.png" alt="secure payment" className="feature-icon" loading="lazy" />
            <h3>
              Secure Payment
            </h3>
            <p>
              Safe and secure transactions.
            </p>
          </div>
          <div className="feature-card">
            <img src="/images/BestPrice.jpeg" alt="best price" className="feature-icon" loading="lazy" />
            <h3>
              Best Prices
            </h3>
            <p>
              Great products at great prices.
            </p>
          </div>
          <div className="feature-card">
            <img src="/images/Return.png" alt="return" className="feature-icon" loading="lazy" />
            <h3>
              Easy Returns
            </h3>
            <p>
              Simple return process.
            </p>
          </div>
          <div className="feature-card">
            <img src="/images/SupportImg.png" alt="support" className="feature-icon" loading="lazy" />
            <h3>
              Support
            </h3>
            <p>
              We're here whenever you need us.
            </p>
          </div>
        </div>
      </section>
      <div className="gap"></div>
      <section className="section">
        <div className="section-title">
          
            How It Works
        
        </div>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">
              1
            </div>
            <h3>
              Browse
            </h3>
            <p>
              Explore our products.
            </p>
          </div>
          <div className="arrow">
            →
          </div>
          <div className="step">
            <div className="step-number">
              2
            </div>
            <h3>
              Add to Cart
            </h3>
            <p>
              Select your products.
            </p>
          </div>
          <div className="arrow">
            →
          </div>
          <div className="step">
            <div className="step-number">
              3
            </div>
            <h3>
              Order
            </h3>
            <p>
              Select address &amp; Place your order.
            </p>
          </div>
          <div className="arrow">
            →
          </div>
          <div className="step">
            <div className="step-number">
              4
            </div>
            <h3>
              Delivery
            </h3>
            <p>
              Receive your product.
            </p>
          </div>
        </div>
      </section>
      <div className="gap"></div>
      <section className="section">
        <div className="section-title" id="reviews">
          
            Customer Reviews
        
        </div>
        <div className="review-container">
          <div className="review-slider">
            <div className="review-group">
              <div className="review-card">
                <div className="star">
                  ⭐⭐⭐⭐⭐
                </div>
                <div className="review-description">
                  
                            "Fresh produce, fair prices, and the quality was excellent. Really happy with my purchase!"
                        
                </div>
                <div className="review-name">
                  — Rahul
                </div>
              </div>
              <div className="review-card">
                <div className="star">
                  ⭐⭐⭐⭐☆
                </div>
                <div className="review-description">
                  
                            "I loved buying directly from farmers. The vegetables were fresh and delivered on time."
                        
                </div>
                <div className="review-name">
                  — Priya
                </div>
              </div>
              <div className="review-card">
                <div className="star">
                  ⭐⭐⭐⭐⭐
                </div>
                <div className="review-description">
                  
                            "Farm X Kart makes buying fresh agricultural products so simple and convenient."
                        
                </div>
                <div className="review-name">
                  — Amit
                </div>
              </div>
            </div>
            <div className="review-group">
              <div className="review-card">
                <div className="star">
                  ⭐⭐⭐⭐☆
                </div>
                <div className="review-description">
                  
                            "The products were fresh, properly packed, and exactly as described. Great experience!"
                        
                </div>
                <div className="review-name">
                  — Sneha
                </div>
              </div>
              <div className="review-card">
                <div className="star">
                  ⭐⭐⭐⭐⭐
                </div>
                <div className="review-description">
                  
                            "I appreciate the direct connection with farmers and the transparent pricing. Highly
                            recommended!"
                        
                </div>
                <div className="review-name">
                  — Arjun
                </div>
              </div>
              <div className="review-card">
                <div className="star">
                  ⭐⭐⭐⭐☆
                </div>
                <div className="review-description">
                  
                            "Excellent quality and quick delivery. I will definitely order again from Farm X Kart."
                        
                </div>
                <div className="review-name">
                  — Ananya
                </div>
              </div>
            </div>
            <div className="review-group">
              <div className="review-card">
                <div className="star">
                  ⭐⭐⭐⭐☆
                </div>
                <div className="review-description">
                  
                            "A great platform for getting farm-fresh products while supporting local farmers."
                        
                </div>
                <div className="review-name">
                  — Vikash
                </div>
              </div>
              <div className="review-card">
                <div className="star">
                  ⭐⭐⭐⭐☆
                </div>
                <div className="review-description">
                  
                            "The ordering process was easy, and the fresh produce arrived in very good condition."
                        
                </div>
                <div className="review-name">
                  — Neha
                </div>
              </div>
              <div className="review-card">
                <div className="star">
                  ⭐⭐⭐⭐⭐
                </div>
                <div className="review-description">
                  
                            "Farm X Kart offers quality products at reasonable prices. A great initiative for farmers
                            and buyers!"
                        
                </div>
                <div className="review-name">
                  — Rohan
                </div>
              </div>
            </div>
            <div className="review-group">
              <div className="review-card">
                <div className="star">
                  ⭐⭐⭐⭐⭐
                </div>
                <div className="review-description">
                  
                            "I found exactly what I needed and the whole shopping experience was smooth and simple."
                        
                </div>
                <div className="review-name">
                  — Karan
                </div>
              </div>
              <div className="review-card">
                <div className="star">
                  ⭐⭐⭐⭐☆
                </div>
                <div className="review-description">
                  
                            "The fruits and vegetables were fresh and reasonably priced. Very satisfied with Farm X
                            Kart."
                        
                </div>
                <div className="review-name">
                  — Pooja
                </div>
              </div>
              <div className="review-card">
                <div className="star">
                  ⭐⭐⭐⭐☆
                </div>
                <div className="review-description">
                  
                            "It's wonderful to have a platform that helps farmers get better prices while giving buyers
                            quality products."
                        
                </div>
                <div className="review-name">
                  — Aditya
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="gap"></div>
      <section className="section" id="contact">
        <div className="section-title">
          Contact Us
        </div>
        <div className="contact-contaner">
          <div className="contact-box">
            <div className="contact-left-box">
              <div className="contact-info-title">
                
                        Get in touch
                    
              </div>
              <div className="contact-info-title-description">
                
                        Have a question? Contact the Farm X Kart support team.
                    
              </div>
              <div className="contact-info">
                <img src="/images/mail.png" alt="email" className="contact-info-img" loading="lazy" />
                <div className="contact">
                  support@farmxkart.com
                </div>
              </div>
              <div className="contact-info">
                <img src="/images/phone.png" alt="phone" className="contact-info-img" loading="lazy" />
                <div className="contact">
                  +91 9977982202
                </div>
              </div>
              <div className="contact-info">
                <img src="/images/location.png" alt="location" className="contact-info-img" loading="lazy" />
                <div className="contact">
                  
                            Farm X Kart office, Sector-51, New Delhi, India - 110001
                        
                </div>
              </div>
            </div>
            <div className="contact-right-box">
              <input className="input-name" type="text" placeholder="Your Name" />
              <input className="input-email" type="email" placeholder="Your Email" />
              <textarea className="input-issue" placeholder="Describe your issue or feedback..."></textarea>
              <a className="send-msg" href="#">
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="gap"></div>
      <div className="footer-box">
        <div className="footer-tittle">
          
            Farm X Kart
        
        </div>
        <div className="footer-description">
          
            Fresh Products, Directly from Our Farmers
        
        </div>
        <div className="footer-copywrite">
          
            © 2026 Farm X Kart. All Rights Reserved.
        
        </div>
      </div>
    </>
  );
}
