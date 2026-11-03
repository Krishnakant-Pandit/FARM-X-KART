import "../styles/settings.css";
import { useLegacyPageBehavior } from "../hooks/useLegacyPageBehavior.js";

export default function SettingsPage() {
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
        <section className="settings-container">
          <div className="settings-title">
            <h2>
              Account Settings
            </h2>
            <p>
              Update your Farm X Kart account information
            </p>
          </div>
          <form id="settings-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  Full Name
                </label>
                <input type="text" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="gender">
                  Gender
                </label>
                <select id="gender">
                  <option value="">
                    Select Gender
                  </option>
                  <option value="Male">
                    Male
                  </option>
                  <option value="Female">
                    Female
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">
                  Mobile Number
                </label>
                <input type="tel" id="mobile" maxLength="10" />
              </div>
            </div>
            <div className="form-group full">
              <label htmlFor="account">
                Account Type
              </label>
              <input type="text" id="account" />
            </div>
            <div className="password-section">
              <h3>
                Change Password
              </h3>
              <p>
                Leave these fields empty if you do not want to change your password.
              </p>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="old-password">
                    Current Password
                  </label>
                  <input type="password" id="old-password" />
                </div>
                <div className="form-group">
                  <label htmlFor="new-password">
                    New Password
                  </label>
                  <input type="password" id="new-password" />
                </div>
              </div>
              <div className="form-group full">
                <label htmlFor="confirm-password">
                  Confirm New Password
                </label>
                <input type="password" id="confirm-password" />
              </div>
            </div>
            <div className="buttons">
              <button type="button" id="cancel-button">
                
                        Cancel
                    
              </button>
              <button type="submit" id="save-button">
                
                        Save Changes
                    
              </button>
            </div>
          </form>
          <p id="message"></p>
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
