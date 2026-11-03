import "../styles/index.css";
import { useLegacyPageBehavior } from "../hooks/useLegacyPageBehavior.js";
import "../styles/admin.css";

export default function AdminPage() {
  useLegacyPageBehavior("admin");

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
            <a className="nav-link" href="#dashboard">
              Dashboard
            </a>
            <a className="nav-link" href="#users">
              Users
            </a>
            <a className="nav-link" href="#products">
              Products
            </a>
            <a className="nav-link" href="#orders">
              Orders
            </a>
            <a className="nav-link" href="#revenue">
              Revenue
            </a>
          </div>
          <div className="login-profile">
            <button className="logout">
              Logout
            </button>
          </div>
        </div>
      </header>
      <div className="gap"></div>
      <main className="admin-main">
        <section id="dashboard" className="admin-section">
          <div className="section-title">
            
                Admin Dashboard
            
          </div>
          <div className="admin-stats-container">
            <div className="admin-stat-card">
              <div className="admin-stat-title">
                Total Users
              </div>
              <div className="admin-stat-value" id="total-users">
                0
              </div>
              <div className="admin-stat-description">
                Registered users
              </div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-title">
                Total Farmers
              </div>
              <div className="admin-stat-value" id="total-farmers">
                0
              </div>
              <div className="admin-stat-description">
                Farmer accounts
              </div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-title">
                Total Customers
              </div>
              <div className="admin-stat-value" id="total-customers">
                0
              </div>
              <div className="admin-stat-description">
                Customer accounts
              </div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-title">
                Total Products
              </div>
              <div className="admin-stat-value" id="total-products">
                0
              </div>
              <div className="admin-stat-description">
                Listed products
              </div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-title">
                Total Orders
              </div>
              <div className="admin-stat-value" id="total-orders">
                0
              </div>
              <div className="admin-stat-description">
                Customer orders
              </div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-title">
                Total Revenue
              </div>
              <div className="admin-stat-value" id="total-revenue">
                ₹0
              </div>
              <div className="admin-stat-description">
                Generated revenue
              </div>
            </div>
          </div>
        </section>
        <div className="gap"></div>
        <section className="admin-section" id="users">
          <div className="section-title">
            
                User Management
            
          </div>
          <div className="gap"></div>
          <div className="admin-table-box">
            <div className="admin-table-heading">
              <div>
                Registered Users
              </div>
              <span id="user-count">
                0 Users
              </span>
            </div>
            <div className="admin-table-scroll">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>
                      S.No
                    </th>
                    <th>
                      Name
                    </th>
                    <th>
                      Email
                    </th>
                    <th>
                      Mobile
                    </th>
                    <th>
                      Gender
                    </th>
                    <th>
                      Account Type
                    </th>
                  </tr>
                </thead>
                <tbody id="users-table">
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <div className="gap"></div>
        <section className="admin-section" id="products">
          <div className="section-title">
            
                Product Management
            
          </div>
          <div className="gap"></div>
          <div className="admin-table-box">
            <div className="admin-table-heading">
              <div>
                Listed Products
              </div>
              <span id="product-count">
                0 Products
              </span>
            </div>
            <div className="admin-table-scroll">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>
                      S.No
                    </th>
                    <th>
                      Product
                    </th>
                    <th>
                      Farmer
                    </th>
                    <th>
                      Category
                    </th>
                    <th>
                      Quantity
                    </th>
                    <th>
                      Price
                    </th>
                    <th>
                      Listed On
                    </th>
                  </tr>
                </thead>
                <tbody id="products-table">
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <div className="gap"></div>
        <section className="admin-section" id="orders">
          <div className="section-title">
            
                Order Management
            
          </div>
          <div className="gap"></div>
          <div className="admin-table-box">
            <div className="admin-table-heading">
              <div>
                Customer Orders
              </div>
              <span id="order-count">
                0 Orders
              </span>
            </div>
            <div className="admin-table-scroll">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>
                      S.No
                    </th>
                    <th>
                      Order ID
                    </th>
                    <th>
                      Customer
                    </th>
                    <th>
                      Items
                    </th>
                    <th>
                      Payment
                    </th>
                    <th>
                      Total
                    </th>
                    <th>
                      Status
                    </th>
                    <th>
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody id="orders-table">
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <div className="gap"></div>
        <section className="admin-section" id="revenue">
          <div className="section-title">
            
                Revenue Overview
            
          </div>
          <div className="gap"></div>
          <div className="admin-revenue-container">
            <div className="admin-revenue-card">
              <div className="admin-revenue-title">
                
                        Total Revenue
                    
              </div>
              <div className="admin-revenue-value" id="revenue-total">
                
                        ₹0
                    
              </div>
            </div>
            <div className="admin-revenue-card">
              <div className="admin-revenue-title">
                
                        Total Orders
                    
              </div>
              <div className="admin-revenue-value" id="revenue-orders">
                
                        0
                    
              </div>
            </div>
            <div className="admin-revenue-card">
              <div className="admin-revenue-title">
                
                        Average Order Value
                    
              </div>
              <div className="admin-revenue-value" id="average-order">
                
                        ₹0
                    
              </div>
            </div>
          </div>
        </section>
      </main>
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
