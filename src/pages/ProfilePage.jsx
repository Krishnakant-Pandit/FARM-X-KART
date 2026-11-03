import "../styles/profile.css";
import { useLegacyPageBehavior } from "../hooks/useLegacyPageBehavior.js";

export default function ProfilePage() {
  useLegacyPageBehavior("marketplace");

  return (
    <>
      <div className="profile-box">
        <div className="profile-head">
          <div className="profile-img">
            <img src="/images/profilepic.jpg" alt="profile pic" className="profile-pic" />
          </div>
          <div className="profile-info">
            <div className="name" id="profile-name">
              
                    Loading...
                
            </div>
            <div className="email">
              <span>
                Email
              </span>
              <span id="profile-email">
                Loading...
              </span>
            </div>
            <div className="phone">
              <span>
                Phone
              </span>
              <span id="profile-mobile">
                Loading...
              </span>
            </div>
            <div className="Acc-type">
              <span>
                Account
              </span>
              <span id="profile-account">
                Loading...
              </span>
            </div>
            <div className="Buttons">
              <button className="edit-btn" id="edit-profile">
                
                        Edit Profile
                    
              </button>
              <button className="logout-btn" id="logout">
                
                        Logout
                    
              </button>
            </div>
          </div>
        </div>
        <div className="profile-foot">
          <a href="/orders" className="other-btn">
            
                My Orders
            
          </a>
          <a href="/cart" className="other-btn">
            
                My Cart
            
          </a>
          <a href="/profile" className="other-btn">
            
                Change Address
            
          </a>
          <a href="/settings" className="other-btn">
            
                Account Settings
            
          </a>
        </div>
      </div>
    </>
  );
}
