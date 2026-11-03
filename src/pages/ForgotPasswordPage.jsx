import "../styles/forget-password.css";
import { useLegacyPageBehavior } from "../hooks/useLegacyPageBehavior.js";

export default function ForgotPasswordPage() {
  useLegacyPageBehavior("marketplace");

  return (
    <>
      <div className="forgot-container">
        <div className="forgot-card">
          <h2>
            Forgot Password?
          </h2>
          <p className="description">
            
                Enter your registered email address to reset your password.
            
          </p>
          <form id="forgot-form">
            <div className="input-group">
              <label htmlFor="forgot-email">
                Email Address
              </label>
              <input type="email" id="forgot-email" placeholder="Enter your email" />
            </div>
            <button type="submit" className="continue-button">
              
                    Continue
                
            </button>
          </form>
          <p id="forgot-message"></p>
          <a href="/" className="cancel">
            
                Back to Login
            
          </a>
        </div>
      </div>
    </>
  );
}
