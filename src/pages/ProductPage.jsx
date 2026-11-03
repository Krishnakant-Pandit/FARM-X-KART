import "../styles/product.css";
import { useLegacyPageBehavior } from "../hooks/useLegacyPageBehavior.js";

export default function ProductPage() {
  useLegacyPageBehavior("marketplace");

  return (
    <>
      <header>
        <div className="head-box">
          <div className="logo-box">
            <img src="/images/Logo.jpeg" alt="Farm X Kart Logo" className="logo-img" loading="lazy" />
            <div className="logo-title">
              Farm X Kart
            </div>
          </div>
          <nav>
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/sell" className="nav-link" id="sell-link">
              Sell
            </a>
            <a href="/listed" className="nav-link">
              My Products
            </a>
            <a href="/wishlist" className="nav-link">
              Wishlist
            </a>
            <a href="/cart" className="nav-link">
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
                <img src="/images/profilepic.jpg" alt="profile" className="profile-img" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="gap"></div>
      <section className="category-container">
        <div className="category-box">
          <div className="category-title">
            
                Search by Category
            
          </div>
          <div className="cat-name">
            <a href="#vegetables" className="cat-link">
              Vegetables
            </a>
            <a href="#fruits" className="cat-link">
              Fruits
            </a>
            <a href="#pulses" className="cat-link">
              Pulses
            </a>
            <a href="#spices" className="cat-link">
              Spices
            </a>
          </div>
        </div>
      </section>
      <div className="gap"></div>
      <section className="product-title-box" id="vegetables">
        <div className="product-title">
          
            Vegetables
        
        </div>
      </section>
      <div className="gap"></div>
      <section className="card-container">
        <div className="container-card">
          <div className="card">
            <img src="/images/products/vegetable/potato.webp" alt="Potato" className="product-img" loading="lazy" />
            <div className="product-name">
              Potato
            </div>
            <div className="product-price">
              ₹32 / kg
            </div>
            <div className="discount">
              <del>
                ₹42
              </del>
               24% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 126 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/tomato.jpg" alt="Tomato" className="product-img" loading="lazy" />
            <div className="product-name">
              Tomato
            </div>
            <div className="product-price">
              ₹38 / kg
            </div>
            <div className="discount">
              <del>
                ₹52
              </del>
               27% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 243 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/onion.jpg" alt="Onion" className="product-img" loading="lazy" />
            <div className="product-name">
              Onion
            </div>
            <div className="product-price">
              ₹34 / kg
            </div>
            <div className="discount">
              <del>
                ₹45
              </del>
               24% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 189 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/carrot.jpg" alt="Carrot" className="product-img" loading="lazy" />
            <div className="product-name">
              Carrot
            </div>
            <div className="product-price">
              ₹48 / kg
            </div>
            <div className="discount">
              <del>
                ₹62
              </del>
               23% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 315 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/brinjal.jpg" alt="Brinjal" className="product-img" loading="lazy" />
            <div className="product-name">
              Brinjal
            </div>
            <div className="product-price">
              ₹30 / kg
            </div>
            <div className="discount">
              <del>
                ₹40
              </del>
               25% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐☆☆ 97 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/broccoli.jpg" alt="Broccoli" className="product-img" loading="lazy" />
            <div className="product-name">
              Broccoli
            </div>
            <div className="product-price">
              ₹72 / kg
            </div>
            <div className="discount">
              <del>
                ₹95
              </del>
               24% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 278 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/cabbage.jpg" alt="Cabbage" className="product-img" loading="lazy" />
            <div className="product-name">
              Cabbage
            </div>
            <div className="product-price">
              ₹28 / kg
            </div>
            <div className="discount">
              <del>
                ₹36
              </del>
               22% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 154 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/capsicum.jpg" alt="Capsicum" className="product-img" loading="lazy" />
            <div className="product-name">
              Capsicum
            </div>
            <div className="product-price">
              ₹58 / kg
            </div>
            <div className="discount">
              <del>
                ₹75
              </del>
               23% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 421 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/cauliflower.jpg" alt="Cauliflower" className="product-img" loading="lazy" />
            <div className="product-name">
              Cauliflower
            </div>
            <div className="product-price">
              ₹42 / kg
            </div>
            <div className="discount">
              <del>
                ₹55
              </del>
               24% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 203 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/cucunbber.jpg" alt="Cucumber" className="product-img" loading="lazy" />
            <div className="product-name">
              Cucumber
            </div>
            <div className="product-price">
              ₹30 / kg
            </div>
            <div className="discount">
              <del>
                ₹40
              </del>
               25% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 176 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/green peas.jpg" alt="Green Peas" className="product-img" loading="lazy" />
            <div className="product-name">
              Green Peas
            </div>
            <div className="product-price">
              ₹65 / kg
            </div>
            <div className="discount">
              <del>
                ₹82
              </del>
               21% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 238 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/ladyfinger.jpg" alt="Lady Finger" className="product-img" loading="lazy" />
            <div className="product-name">
              Lady Finger
            </div>
            <div className="product-price">
              ₹40 / kg
            </div>
            <div className="discount">
              <del>
                ₹52
              </del>
               23% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 367 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/mushroom.jpg" alt="Mushroom" className="product-img" loading="lazy" />
            <div className="product-name">
              Mushroom
            </div>
            <div className="product-price">
              ₹95 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹125
              </del>
               24% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐☆☆ 84 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/pumpkin.webp" alt="Pumpkin" className="product-img" loading="lazy" />
            <div className="product-name">
              Pumpkin
            </div>
            <div className="product-price">
              ₹25 / kg
            </div>
            <div className="discount">
              <del>
                ₹34
              </del>
               26% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 291 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/raddish.jpg" alt="Radish" className="product-img" loading="lazy" />
            <div className="product-name">
              Radish
            </div>
            <div className="product-price">
              ₹27 / kg
            </div>
            <div className="discount">
              <del>
                ₹36
              </del>
               25% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 112 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/spinach.jpg" alt="Spinach" className="product-img" loading="lazy" />
            <div className="product-name">
              Spinach
            </div>
            <div className="product-price">
              ₹22 / 250 g
            </div>
            <div className="discount">
              <del>
                ₹30
              </del>
               27% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 198 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/corriander leaves.jpg" alt="Coriander Leaves" className="product-img" loading="lazy" />
            <div className="product-name">
              Coriander Leaves
            </div>
            <div className="product-price">
              ₹12 / 100 g
            </div>
            <div className="discount">
              <del>
                ₹18
              </del>
               33% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 143 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/mintleaves.jpg" alt="Mint Leaves" className="product-img" loading="lazy" />
            <div className="product-name">
              Mint Leaves
            </div>
            <div className="product-price">
              ₹15 / 100 g
            </div>
            <div className="discount">
              <del>
                ₹22
              </del>
               32% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 176 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/curryleaves.jpg" alt="Curry Leaves" className="product-img" loading="lazy" />
            <div className="product-name">
              Curry Leaves
            </div>
            <div className="product-price">
              ₹10 / 50 g
            </div>
            <div className="discount">
              <del>
                ₹15
              </del>
               33% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 129 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/drumstick.jpg" alt="Drumstick" className="product-img" loading="lazy" />
            <div className="product-name">
              Drumstick
            </div>
            <div className="product-price">
              ₹45 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹60
              </del>
               25% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 164 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/vegetable/jackfruit.jpg" alt="jackfruit" className="product-img" loading="lazy" />
            <div className="product-name">
              Jack Fruit
            </div>
            <div className="product-price">
              ₹75 / piece
            </div>
            <div className="discount">
              <del>
                ₹110
              </del>
               32% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 174 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="gap"></div>
        <section className="product-title-box" id="fruits">
          <div className="product-title">
            
                Fruits
            
          </div>
        </section>
        <div className="gap"></div>
      </section>
      <section className="card-container">
        <div className="container-card">
          <div className="card">
            <img src="/images/products/fruits/apple.jpg" alt="Fresh Apple" className="product-img" loading="lazy" />
            <div className="product-name">
              Apple
            </div>
            <div className="product-price">
              ₹65 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹80
              </del>
               19% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 184 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/banana.avif" alt="Fresh Banana" className="product-img" loading="lazy" />
            <div className="product-name">
              Banana
            </div>
            <div className="product-price">
              ₹48 / dozen
            </div>
            <div className="discount">
              <del>
                ₹60
              </del>
               20% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 127 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/orange.jpg" alt="Fresh Orange" className="product-img" loading="lazy" />
            <div className="product-name">
              Orange
            </div>
            <div className="product-price">
              ₹42 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹55
              </del>
               24% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 215 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/amla.jpg" alt="Fresh Amla" className="product-img" loading="lazy" />
            <div className="product-name">
              Amla
            </div>
            <div className="product-price">
              ₹38 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹50
              </del>
               24% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐☆☆ 96 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/anjeer.jpg" alt="Fresh Fig Anjeer" className="product-img" loading="lazy" />
            <div className="product-name">
              Anjeer
            </div>
            <div className="product-price">
              ₹180 / 250 g
            </div>
            <div className="discount">
              <del>
                ₹220
              </del>
               18% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 143 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/chikoo.jpg" alt="Fresh Chikoo" className="product-img" loading="lazy" />
            <div className="product-name">
              Chikoo
            </div>
            <div className="product-price">
              ₹35 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹48
              </del>
               27% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 231 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/coconut.jpg" alt="Fresh Coconut" className="product-img" loading="lazy" />
            <div className="product-name">
              Coconut
            </div>
            <div className="product-price">
              ₹40 / piece
            </div>
            <div className="discount">
              <del>
                ₹50
              </del>
               20% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 118 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/custartd apple.jpg" alt="Fresh Custard Apple" className="product-img" loading="lazy" />
            <div className="product-name">
              Custard Apple
            </div>
            <div className="product-price">
              ₹50 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹65
              </del>
               23% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 167 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/dates.jpg" alt="Fresh Dates" className="product-img" loading="lazy" />
            <div className="product-name">
              Dates
            </div>
            <div className="product-price">
              ₹110 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹140
              </del>
               21% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 139 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/dragonfruit.webp" alt="Fresh Dragon Fruit" className="product-img" loading="lazy" />
            <div className="product-name">
              Dragon Fruit
            </div>
            <div className="product-price">
              ₹65 / piece
            </div>
            <div className="discount">
              <del>
                ₹85
              </del>
               24% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 203 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/grapes.png" alt="Fresh Grapes" className="product-img" loading="lazy" />
            <div className="product-name">
              Grapes
            </div>
            <div className="product-price">
              ₹45 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹60
              </del>
               25% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 174 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/guava.jpg" alt="Fresh Guava" className="product-img" loading="lazy" />
            <div className="product-name">
              Guava
            </div>
            <div className="product-price">
              ₹30 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹42
              </del>
               29% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 246 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/jamun.jpg" alt="Fresh Jamun" className="product-img" loading="lazy" />
            <div className="product-name">
              Jamun
            </div>
            <div className="product-price">
              ₹50 / 250 g
            </div>
            <div className="discount">
              <del>
                ₹65
              </del>
               23% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐☆☆ 88 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/kiwi.jpg" alt="Fresh Kiwi" className="product-img" loading="lazy" />
            <div className="product-name">
              Kiwi
            </div>
            <div className="product-price">
              ₹90 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹115
              </del>
               22% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 156 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/lemon.jpg" alt="Fresh Lemon" className="product-img" loading="lazy" />
            <div className="product-name">
              Lemon
            </div>
            <div className="product-price">
              ₹30 / 250 g
            </div>
            <div className="discount">
              <del>
                ₹40
              </del>
               25% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 219 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/lychee.jpg" alt="Fresh Lychee" className="product-img" loading="lazy" />
            <div className="product-name">
              Lychee
            </div>
            <div className="product-price">
              ₹65 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹85
              </del>
               24% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 132 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/mango.jpg" alt="Fresh Mango" className="product-img" loading="lazy" />
            <div className="product-name">
              Mango
            </div>
            <div className="product-price">
              ₹70 / kg
            </div>
            <div className="discount">
              <del>
                ₹95
              </del>
               26% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 287 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/muskmellon.jpg" alt="Fresh Muskmelon" className="product-img" loading="lazy" />
            <div className="product-name">
              Muskmelon
            </div>
            <div className="product-price">
              ₹28 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹38
              </del>
               26% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 145 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/papaya.jpg" alt="Fresh Papaya" className="product-img" loading="lazy" />
            <div className="product-name">
              Papaya
            </div>
            <div className="product-price">
              ₹32 / kg
            </div>
            <div className="discount">
              <del>
                ₹45
              </del>
               29% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 198 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/peach.jpg" alt="Fresh Peach" className="product-img" loading="lazy" />
            <div className="product-name">
              Peach
            </div>
            <div className="product-price">
              ₹75 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹100
              </del>
               25% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 119 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/pear.webp" alt="Fresh Pear" className="product-img" loading="lazy" />
            <div className="product-name">
              Pear
            </div>
            <div className="product-price">
              ₹55 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹70
              </del>
               21% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 176 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/pineapple.jpg" alt="Fresh Pineapple" className="product-img" loading="lazy" />
            <div className="product-name">
              Pineapple
            </div>
            <div className="product-price">
              ₹55 / piece
            </div>
            <div className="discount">
              <del>
                ₹70
              </del>
               21% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 154 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/plum.jpg" alt="Fresh Plum" className="product-img" loading="lazy" />
            <div className="product-name">
              Plum
            </div>
            <div className="product-price">
              ₹65 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹85
              </del>
               24% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐☆☆ 91 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/pomegranate.jpg" alt="Fresh Pomegranate" className="product-img" loading="lazy" />
            <div className="product-name">
              Pomegranate
            </div>
            <div className="product-price">
              ₹70 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹90
              </del>
               22% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 264 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/starfruit.jpg" alt="Fresh Star Fruit" className="product-img" loading="lazy" />
            <div className="product-name">
              Star Fruit
            </div>
            <div className="product-price">
              ₹40 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹55
              </del>
               27% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 103 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/strawberry.jpg" alt="Fresh Strawberry" className="product-img" loading="lazy" />
            <div className="product-name">
              Strawberry
            </div>
            <div className="product-price">
              ₹75 / 250 g
            </div>
            <div className="discount">
              <del>
                ₹100
              </del>
               25% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 221 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/fruits/watermellon.jpg" alt="Fresh Watermelon" className="product-img" loading="lazy" />
            <div className="product-name">
              Watermelon
            </div>
            <div className="product-price">
              ₹35 / kg
            </div>
            <div className="discount">
              <del>
                ₹45
              </del>
               22% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 189 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="gap"></div>
      <section className="product-title-box" id="pulses">
        <div className="product-title">
          
            Pulses
        
        </div>
      </section>
      <div className="gap"></div>
      <section className="card-container">
        <div className="container-card">
          <div className="card">
            <img src="/images/products/pulses/black gram.jpg" alt="Black Gram" className="product-img" loading="lazy" />
            <div className="product-name">
              Black Gram
            </div>
            <div className="product-price">
              ₹65 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹78
              </del>
               17% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 142 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/pulses/channa dal.jpg" alt="Chana Dal" className="product-img" loading="lazy" />
            <div className="product-name">
              Chana Dal
            </div>
            <div className="product-price">
              ₹52 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹62
              </del>
               16% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 187 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/pulses/Field Peas.jpg" alt="Field Peas" className="product-img" loading="lazy" />
            <div className="product-name">
              Field Peas
            </div>
            <div className="product-price">
              ₹48 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹58
              </del>
               17% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 96 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/pulses/green grams.jpg" alt="Green Gram" className="product-img" loading="lazy" />
            <div className="product-name">
              Green Gram
            </div>
            <div className="product-price">
              ₹58 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹70
              </del>
               17% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 213 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/pulses/kabuli channa.jpg" alt="Kabuli Chana" className="product-img" loading="lazy" />
            <div className="product-name">
              Kabuli Chana
            </div>
            <div className="product-price">
              ₹62 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹75
              </del>
               17% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 158 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/pulses/kala chana.jpg" alt="Kala Chana" className="product-img" loading="lazy" />
            <div className="product-name">
              Kala Chana
            </div>
            <div className="product-price">
              ₹48 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹58
              </del>
               17% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 176 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/pulses/Kulthi.jpg" alt="Horse Gram" className="product-img" loading="lazy" />
            <div className="product-name">
              Horse Gram
            </div>
            <div className="product-price">
              ₹42 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹52
              </del>
               19% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 84 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/pulses/Lobia.jpg" alt="Black Eyed Peas" className="product-img" loading="lazy" />
            <div className="product-name">
              Black Eyed Peas
            </div>
            <div className="product-price">
              ₹45 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹55
              </del>
               18% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 121 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/pulses/masoor dal.jpg" alt="Masoor Dal" className="product-img" loading="lazy" />
            <div className="product-name">
              Masoor Dal
            </div>
            <div className="product-price">
              ₹55 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹66
              </del>
               17% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 194 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/pulses/Matki.jpg" alt="Moth Beans" className="product-img" loading="lazy" />
            <div className="product-name">
              Moth Beans
            </div>
            <div className="product-price">
              ₹44 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹54
              </del>
               19% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 109 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/pulses/moong dal.jpg" alt="Moong Dal" className="product-img" loading="lazy" />
            <div className="product-name">
              Moong Dal
            </div>
            <div className="product-price">
              ₹60 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹72
              </del>
               17% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 238 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/pulses/Rajma.jpg" alt="Rajma" className="product-img" loading="lazy" />
            <div className="product-name">
              Rajma
            </div>
            <div className="product-price">
              ₹68 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹82
              </del>
               17% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 167 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/pulses/urad dal.jpg" alt="Urad Dal" className="product-img" loading="lazy" />
            <div className="product-name">
              Urad Dal
            </div>
            <div className="product-price">
              ₹62 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹74
              </del>
               16% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 145 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/pulses/Arhar dal.jpg" alt="Arhar Dal" className="product-img" loading="lazy" />
            <div className="product-name">
              Arhar Dal
            </div>
            <div className="product-price">
              ₹72 / 500 g
            </div>
            <div className="discount">
              <del>
                ₹86
              </del>
               16% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 205 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="product-title-box" id="spices">
        <div className="product-title">
          
            Spices
        
        </div>
      </section>
      <div className="gap"></div>
      <section className="card-container">
        <div className="container-card">
          <div className="card">
            <img src="/images/products/spices/Ajwain.jpg" alt="Ajwain" className="product-img" loading="lazy" />
            <div className="product-name">
              Ajwain
            </div>
            <div className="product-price">
              ₹42 / 100 g
            </div>
            <div className="discount">
              <del>
                ₹50
              </del>
               16% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 118 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Bay Leaf.jpg" alt="Bay Leaf" className="product-img" loading="lazy" />
            <div className="product-name">
              Bay Leaf
            </div>
            <div className="product-price">
              ₹28 / 50 g
            </div>
            <div className="discount">
              <del>
                ₹35
              </del>
               20% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 96 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Black Cardamom.jpg" alt="Black Cardamom" className="product-img" loading="lazy" />
            <div className="product-name">
              Black Cardamom
            </div>
            <div className="product-price">
              ₹78 / 50 g
            </div>
            <div className="discount">
              <del>
                ₹92
              </del>
               15% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 84 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Black Pepper.jpg" alt="Black Pepper" className="product-img" loading="lazy" />
            <div className="product-name">
              Black Pepper
            </div>
            <div className="product-price">
              ₹92 / 100 g
            </div>
            <div className="discount">
              <del>
                ₹110
              </del>
               16% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 156 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Cinnamon.jpg" alt="Cinnamon" className="product-img" loading="lazy" />
            <div className="product-name">
              Cinnamon
            </div>
            <div className="product-price">
              ₹58 / 100 g
            </div>
            <div className="discount">
              <del>
                ₹70
              </del>
               17% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 127 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Cloves.jpg" alt="Cloves" className="product-img" loading="lazy" />
            <div className="product-name">
              Cloves
            </div>
            <div className="product-price">
              ₹72 / 50 g
            </div>
            <div className="discount">
              <del>
                ₹85
              </del>
               15% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 143 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Coriander Seeds.jpg" alt="Coriander Seeds" className="product-img" loading="lazy" />
            <div className="product-name">
              Coriander Seeds
            </div>
            <div className="product-price">
              ₹36 / 250 g
            </div>
            <div className="discount">
              <del>
                ₹45
              </del>
               20% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 109 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Cumin Seeds.jpg" alt="Cumin Seeds" className="product-img" loading="lazy" />
            <div className="product-name">
              Cumin Seeds
            </div>
            <div className="product-price">
              ₹88 / 250 g
            </div>
            <div className="discount">
              <del>
                ₹105
              </del>
               16% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 174 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Dry Red Chilli.jpg" alt="Dry Red Chilli" className="product-img" loading="lazy" />
            <div className="product-name">
              Dry Red Chilli
            </div>
            <div className="product-price">
              ₹54 / 250 g
            </div>
            <div className="discount">
              <del>
                ₹65
              </del>
               17% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 132 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Fennel Seeds.jpg" alt="Fennel Seeds" className="product-img" loading="lazy" />
            <div className="product-name">
              Fennel Seeds
            </div>
            <div className="product-price">
              ₹48 / 250 g
            </div>
            <div className="discount">
              <del>
                ₹58
              </del>
               17% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 121 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Fenugreek Seeds.jpg" alt="Fenugreek Seeds" className="product-img" loading="lazy" />
            <div className="product-name">
              Fenugreek Seeds
            </div>
            <div className="product-price">
              ₹32 / 250 g
            </div>
            <div className="discount">
              <del>
                ₹40
              </del>
               20% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 88 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Green Cardamom.jpg" alt="Green Cardamom" className="product-img" loading="lazy" />
            <div className="product-name">
              Green Cardamom
            </div>
            <div className="product-price">
              ₹145 / 50 g
            </div>
            <div className="discount">
              <del>
                ₹175
              </del>
               17% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 201 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Kalonji.jpg" alt="Kalonji" className="product-img" loading="lazy" />
            <div className="product-name">
              Kalonji
            </div>
            <div className="product-price">
              ₹44 / 100 g
            </div>
            <div className="discount">
              <del>
                ₹52
              </del>
               15% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 76 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Kasuri Methi.jpg" alt="Kasuri Methi" className="product-img" loading="lazy" />
            <div className="product-name">
              Kasuri Methi
            </div>
            <div className="product-price">
              ₹38 / 50 g
            </div>
            <div className="discount">
              <del>
                ₹46
              </del>
               17% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 113 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Mustard Seeds.jpg" alt="Mustard Seeds" className="product-img" loading="lazy" />
            <div className="product-name">
              Mustard Seeds
            </div>
            <div className="product-price">
              ₹30 / 250 g
            </div>
            <div className="discount">
              <del>
                ₹36
              </del>
               17% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 98 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Nutmeg.jpg" alt="Nutmeg" className="product-img" loading="lazy" />
            <div className="product-name">
              Nutmeg
            </div>
            <div className="product-price">
              ₹62 / 50 g
            </div>
            <div className="discount">
              <del>
                ₹75
              </del>
               17% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 91 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Saffron.jpg" alt="Saffron" className="product-img" loading="lazy" />
            <div className="product-name">
              Saffron
            </div>
            <div className="product-price">
              ₹450 / 1 g
            </div>
            <div className="discount">
              <del>
                ₹550
              </del>
               18
                    % OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 67 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Star Anise.jpg" alt="Star Anise" className="product-img" loading="lazy" />
            <div className="product-name">
              Star Anise
            </div>
            <div className="product-price">
              ₹52 / 50 g
            </div>
            <div className="discount">
              <del>
                ₹62
              </del>
               16% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐☆ 73 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/images/products/spices/Turmeric.jpg" alt="Turmeric" className="product-img" loading="lazy" />
            <div className="product-name">
              Turmeric
            </div>
            <div className="product-price">
              ₹46 / 250 g
            </div>
            <div className="discount">
              <del>
                ₹55
              </del>
               16% OFF
            </div>
            <div className="reviews">
              ⭐⭐⭐⭐⭐ 165 Reviews
            </div>
            <button className="wishlist">
              ♡ Add to Wishlist
            </button>
            <div className="cart-button">
              <button className="minus">
                −
              </button>
              <div className="items">
                Add to Cart
              </div>
              <button className="plus">
                +
              </button>
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
