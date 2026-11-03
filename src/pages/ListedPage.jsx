import "../styles/listed.css";
import { useLegacyPageBehavior } from "../hooks/useLegacyPageBehavior.js";

export default function ListedPage() {
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
        </div>
        <h1>
          Account Settings
        </h1>
        <div className="back-btn">
          <a href="/profile" className="back-button">
            Back to Profile
          </a>
        </div>
      </header>
      <main>
        <section className="listed-products-box">
          <h1>
            Listed Product History
          </h1>
          <div className="summary-box">
            <div className="summary-card">
              <div className="summary-title">
                Products Listed
              </div>
              <div className="summary-value" id="total-products">
                0
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-title">
                Total Quantity
              </div>
              <div className="summary-value" id="total-quantity">
                0
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-title">
                Total Revenue
              </div>
              <div className="summary-value" id="total-revenue">
                ₹0
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-title">
                Latest Listing
              </div>
              <div className="summary-value latest" id="latest-listing">
                -
              </div>
            </div>
          </div>
          <div id="listed-products"></div>
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
