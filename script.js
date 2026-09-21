let info = JSON.parse(localStorage.getItem("info")) || {
"[krishnakantpandit@gmail.com](mailto:krishnakantpandit@gmail.com)": {
name: "Krishnakant Pandit",
password: "Krishna@2135",
mobile: "9934555915",
gender: "Male",
account: "Customer"
}
};
localStorage.setItem("info", JSON.stringify(info));
const signup = document.querySelector(".signup-input");
if (signup) {
signup.addEventListener("submit", function (event) {
event.preventDefault();
const name = document.querySelector('input[name="name"]').value.trim();
const genderElement = document.querySelector('input[name="gender"]:checked');
const email = document.querySelector('input[name="email"]').value.trim().toLowerCase();
const mobile = document.querySelector('input[name="mobile"]').value.trim();
const accountElement = document.querySelector('input[name="accountType"]:checked');
const password = document.querySelector('input[name="password"]').value;
const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
const terms = document.querySelector('input[name="terms"]');
if (name === "") {
alert("Please enter your name!");
return;
}
if (!genderElement) {
alert("Please select your gender!");
return;
}
if (email === "") {
alert("Please enter your email!");
return;
}
if (mobile === "") {
alert("Please enter your mobile number!");
return;
}
if (!accountElement) {
alert("Please select account type!");
return;
}
if (password === "") {
alert("Please enter a password!");
return;
}
if (password !== confirmPassword) {
alert("Passwords do not match!");
return;
}
if (password.length < 6) {
alert("Password must contain at least 6 characters!");
return;
}
if (!/^\d{10}$/.test(mobile)) {
alert("Please enter a valid 10-digit mobile number!");
return;
}
if (terms && !terms.checked) {
alert("Please accept the Terms and Conditions!");
return;
}
if (info[email]) {
alert("Account already exists!");
return;
}
info[email] = {
name: name,
password: password,
mobile: mobile,
gender: genderElement.value,
account: accountElement.value
};
localStorage.setItem("info", JSON.stringify(info));
alert("Signup successful!");
window.location.href = "./login.html";
});
}

const login = document.querySelector(".login-form");
if (login) {
login.addEventListener("submit", function (event) {
event.preventDefault();
const email = document.querySelector('input[name="email"]').value.trim().toLowerCase();
const password = document.querySelector('input[name="password"]').value;
const users = JSON.parse(localStorage.getItem("info")) || {};
if (!users[email] || users[email].password !== password) {
alert("Invalid email or password!");
return;
}
localStorage.setItem("currentUser", email);
localStorage.setItem("loginFlag", "1");
alert("Login successful!");
window.location.href = "./index.html";
});
}

const loginBox = document.querySelector(".login-box");
const profileBox = document.querySelector(".login-profile .profile-box");
const currentUser = localStorage.getItem("currentUser");
const loginFlag = localStorage.getItem("loginFlag") || "0";
if (loginBox && profileBox) {
if (loginFlag === "0") {
loginBox.style.display = "flex";
profileBox.style.display = "none";
} else {
loginBox.style.display = "none";
profileBox.style.display = "flex";
}
}

const profileName = document.getElementById("profile-name");
const profileEmail = document.getElementById("profile-email");
const profileMobile = document.getElementById("profile-mobile");
const profileAccount = document.getElementById("profile-account");
if (profileName && profileEmail && profileMobile && profileAccount) {
const users = JSON.parse(localStorage.getItem("info")) || {};
if (!currentUser || !users[currentUser]) {
alert("Please login first!");
window.location.href = "./login.html";
} else {
const user = users[currentUser];
profileName.textContent = user.name;
profileEmail.textContent = currentUser;
profileMobile.textContent = "+91 " + user.mobile;
profileAccount.textContent = user.account;
}
}

const logout = document.getElementById("logout");
if (logout) {
logout.addEventListener("click", function (event) {
event.preventDefault();
localStorage.removeItem("currentUser");
localStorage.setItem("loginFlag", "0");
alert("Logged out successfully!");
window.location.href = "./index.html";
});
}

const editProfile = document.getElementById("edit-profile");
if (editProfile) {
editProfile.addEventListener("click", function () {
const users = JSON.parse(localStorage.getItem("info")) || {};
const editCurrentUser = localStorage.getItem("currentUser");
const user = users[editCurrentUser];
if (!editCurrentUser || !user) {
alert("Please login first!");
window.location.href = "./login.html";
return;
}
window.location.href = "./account-settings.html";
});
}

const settingsForm = document.getElementById("settings-form");
if (settingsForm) {
let settingsInfo = JSON.parse(localStorage.getItem("info")) || {};
let settingsCurrentUser = localStorage.getItem("currentUser");
let settingsLoginFlag = localStorage.getItem("loginFlag") || "0";
if (settingsLoginFlag !== "1" || !settingsCurrentUser || !settingsInfo[settingsCurrentUser]) {
alert("Please login first!");
window.location.href = "./login.html";
} else {
let settingsUser = settingsInfo[settingsCurrentUser];
const nameInput = document.getElementById("name");
const genderInput = document.getElementById("gender");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");
const accountInput = document.getElementById("account");
const oldPasswordInput = document.getElementById("old-password");
const newPasswordInput = document.getElementById("new-password");
const confirmPasswordInput = document.getElementById("confirm-password");
if (nameInput) nameInput.value = settingsUser.name || "";
if (genderInput) genderInput.value = settingsUser.gender || "";
if (emailInput) emailInput.value = settingsCurrentUser;
if (mobileInput) mobileInput.value = settingsUser.mobile || "";
if (accountInput) accountInput.value = settingsUser.account || "Customer";
settingsForm.addEventListener("submit", function (event) {
event.preventDefault();
const name = nameInput.value.trim();
const gender = genderInput.value;
const newEmail = emailInput.value.trim().toLowerCase();
const mobile = mobileInput.value.trim();
const oldPassword = oldPasswordInput.value;
const newPassword = newPasswordInput.value;
const confirmPassword = confirmPasswordInput.value;
if (name === "") {
alert("Please enter your name!");
return;
}
if (gender === "") {
alert("Please select your gender!");
return;
}
if (newEmail === "") {
alert("Please enter your email!");
return;
}
if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(newEmail)) {
alert("Please enter a valid email address!");
return;
}
if (!/^\d{10}$/.test(mobile)) {
alert("Please enter a valid 10-digit mobile number!");
return;
}
if (oldPassword !== "" || newPassword !== "" || confirmPassword !== "") {
if (oldPassword === "") {
alert("Please enter your current password!");
return;
}
if (oldPassword !== settingsUser.password) {
alert("Current password is incorrect!");
return;
}
if (newPassword === "") {
alert("Please enter a new password!");
return;
}
if (newPassword.length < 6) {
alert("Password must contain at least 6 characters!");
return;
}
if (newPassword !== confirmPassword) {
alert("New passwords do not match!");
return;
}
settingsUser.password = newPassword;
}
if (newEmail !== settingsCurrentUser) {
if (settingsInfo[newEmail]) {
alert("This email is already registered!");
return;
}
delete settingsInfo[settingsCurrentUser];
settingsInfo[newEmail] = settingsUser;
settingsCurrentUser = newEmail;
localStorage.setItem("currentUser", settingsCurrentUser);
}
settingsUser.name = name;
settingsUser.gender = gender;
settingsUser.mobile = mobile;
settingsInfo[settingsCurrentUser] = settingsUser;
localStorage.setItem("info", JSON.stringify(settingsInfo));
alert("Account settings updated successfully!");
window.location.href = "./profile.html";
});
const cancelButton = document.getElementById("cancel-button");
if (cancelButton) {
cancelButton.addEventListener("click", function () {
window.location.href = "./profile.html";
});
}
}
}

const sellLink = document.getElementById("sell-link");
const myProductsLink = document.querySelector('a[href="./listed.html"]');
const navCurrentUser = localStorage.getItem("currentUser");
const navInfo = JSON.parse(localStorage.getItem("info")) || {};
let isFarmer = false;
if (navCurrentUser && navInfo[navCurrentUser]) {
isFarmer = String(navInfo[navCurrentUser].account || "").trim().toLowerCase() === "farmer";
}
if (sellLink) {
sellLink.style.display = isFarmer ? "" : "none";
}
if (myProductsLink) {
myProductsLink.style.display = isFarmer ? "" : "none";
}

const sellForm = document.getElementById("sellForm");
if (sellForm) {
const formCurrentUser = localStorage.getItem("currentUser");
const formInfo = JSON.parse(localStorage.getItem("info")) || {};
if (!formCurrentUser || !formInfo[formCurrentUser] || String(formInfo[formCurrentUser].account || "").trim().toLowerCase() !== "farmer") {
alert("Only Farmer accounts can sell products!");
window.location.href = "./product.html";
} else {
const harvestDateInput = document.getElementById("harvestDate");
if (harvestDateInput) {
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
harvestDateInput.max = year + "-" + month + "-" + day;
}
sellForm.addEventListener("submit", function (event) {
event.preventDefault();
const productName = document.getElementById("productName").value.trim();
const productImage = document.getElementById("productImage");
const category = document.getElementById("category").value;
const description = document.getElementById("description").value.trim();
const quantity = document.getElementById("quantity").value;
const quantityUnit = document.getElementById("quantityUnit").value;
const productHarvestDate = document.getElementById("harvestDate").value;
const expectedPrice = document.getElementById("expectedPrice").value;
if (!productImage.files || !productImage.files[0]) {
alert("Please upload a product image!");
return;
}
const file = productImage.files[0];
const reader = new FileReader();
reader.onload = function () {
let farmerProducts = JSON.parse(localStorage.getItem("farmerProducts")) || [];
farmerProducts.push({
id: "FP" + Date.now(),
farmerEmail: formCurrentUser,
farmerName: formInfo[formCurrentUser].name,
name: productName,
image: reader.result,
category: category,
description: description,
quantity: Number(quantity),
unit: quantityUnit,
harvestDate: productHarvestDate,
price: Number(expectedPrice),
dateAdded: new Date().toLocaleString()
});
localStorage.setItem("farmerProducts", JSON.stringify(farmerProducts));
alert("Product listed successfully!");
sellForm.reset();
window.location.href = "./product.html";
};
reader.readAsDataURL(file);
});
}
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];
function getProductData(card) {
const image = card.querySelector(".product-img");
const name = card.querySelector(".product-name");
const price = card.querySelector(".product-price");
if (!image || !name || !price) {
return null;
}
const priceText = price.textContent.trim();
const priceMatch = priceText.match(/₹\s*([\d,.]+)/);
if (!priceMatch) {
return null;
}
const priceNumber = parseFloat(priceMatch[1].replace(/,/g, ""));
return {
id: image.getAttribute("src"),
name: name.textContent.trim(),
image: image.getAttribute("src"),
price: priceNumber,
priceText: priceText
};
}

function saveCart() {
localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
const existingProduct = cart.find(function (item) {
return item.id === product.id;
});
if (existingProduct) {
existingProduct.quantity++;
} else {
cart.push({
id: product.id,
name: product.name,
image: product.image,
price: product.price,
priceText: product.priceText,
quantity: 1
});
}
saveCart();
}

const productCards = document.querySelectorAll(".card");
productCards.forEach(function (card) {
const cartButton = card.querySelector(".cart-button");
if (!cartButton) {
return;
}
const addButton = card.querySelector(".items");
const plusButton = card.querySelector(".plus");
const minusButton = card.querySelector(".minus");
if (!addButton || !plusButton || !minusButton) {
return;
}
function updateProductButton() {
const product = getProductData(card);
if (!product) {
return;
}
const existingProduct = cart.find(function (item) {
return item.id === product.id;
});
if (existingProduct) {
addButton.textContent = existingProduct.quantity;
} else {
addButton.textContent = "Add to Cart";
}
}
addButton.addEventListener("click", function () {
const product = getProductData(card);
if (!product) {
return;
}
addToCart(product);
updateProductButton();
alert(product.name + " added to cart!");
});
plusButton.addEventListener("click", function () {
const product = getProductData(card);
if (!product) {
return;
}
addToCart(product);
updateProductButton();
});
minusButton.addEventListener("click", function () {
const product = getProductData(card);
if (!product) {
return;
}
const existingProduct = cart.find(function (item) {
return item.id === product.id;
});
if (!existingProduct) {
return;
}
existingProduct.quantity--;
if (existingProduct.quantity <= 0) {
cart = cart.filter(function (item) {
return item.id !== product.id;
});
}
saveCart();
updateProductButton();
});
updateProductButton();
});

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
const wishlistButtons = document.querySelectorAll(".wishlist");
wishlistButtons.forEach(function (button) {
const card = button.closest(".card");
if (!card) {
return;
}
const image = card.querySelector(".product-img");
if (!image) {
return;
}
const productId = image.getAttribute("src");
const existingProduct = wishlist.find(function (item) {
return item.id === productId;
});
if (existingProduct) {
button.textContent = "♥ Added to Wishlist";
}
button.addEventListener("click", function () {
const product = getProductData(card);
if (!product) {
return;
}
const existingProduct = wishlist.find(function (item) {
return item.id === product.id;
});
if (existingProduct) {
wishlist = wishlist.filter(function (item) {
return item.id !== product.id;
});
button.textContent = "♡ Add to Wishlist";
} else {
wishlist.push(product);
button.textContent = "♥ Added to Wishlist";
}
localStorage.setItem("wishlist", JSON.stringify(wishlist));
});
});

const wishlistItemsContainer = document.getElementById("wishlist-items");
const emptyWishlist = document.getElementById("wishlist-empty");
const wishlistContent = document.getElementById("wishlist-content");
function displayWishlist() {
if (!wishlistItemsContainer || !emptyWishlist || !wishlistContent) {
return;
}
wishlistItemsContainer.innerHTML = "";
if (wishlist.length === 0) {
emptyWishlist.style.display = "flex";
wishlistContent.style.display = "none";
return;
}
emptyWishlist.style.display = "none";
wishlistContent.style.display = "block";
wishlist.forEach(function (item) {
const wishlistItem = document.createElement("div");
wishlistItem.className = "wishlist-item";
wishlistItem.innerHTML = ` <img src="${item.image}" alt="${item.name}" class="wishlist-item-image" loading="lazy">

<div class="wishlist-item-name">${item.name}</div>
<div class="wishlist-item-price">${item.priceText}</div>
<div class="wishlist-buttons">
<button class="wishlist-cart-btn" data-id="${item.id}">Add to Cart</button>
<button class="remove-wishlist-btn" data-id="${item.id}">Remove</button>
</div>
`;
        wishlistItemsContainer.appendChild(wishlistItem);
    });
    addWishlistEvents();
}

function addWishlistEvents() {
const removeButtons = document.querySelectorAll(".remove-wishlist-btn");
removeButtons.forEach(function (button) {
button.addEventListener("click", function () {
const id = button.dataset.id;
wishlist = wishlist.filter(function (item) {
return item.id !== id;
});
localStorage.setItem("wishlist", JSON.stringify(wishlist));
displayWishlist();
});
});
const cartButtons = document.querySelectorAll(".wishlist-cart-btn");
cartButtons.forEach(function (button) {
button.addEventListener("click", function () {
const id = button.dataset.id;
const wishlistItem = wishlist.find(function (item) {
return item.id === id;
});
if (!wishlistItem) {
return;
}
addToCart(wishlistItem);
alert(wishlistItem.name + " added to cart!");
});
});
}

if (wishlistItemsContainer && emptyWishlist && wishlistContent) {
displayWishlist();
}

const cartItemsContainer = document.getElementById("cart-items");
const emptyCart = document.getElementById("empty-cart");
const cartContent = document.getElementById("cart-content");
function displayCart() {
if (!cartItemsContainer || !emptyCart || !cartContent) {
return;
}
cartItemsContainer.innerHTML = "";
if (cart.length === 0) {
emptyCart.style.display = "flex";
cartContent.style.display = "none";
updateCartSummary();
return;
}
emptyCart.style.display = "none";
cartContent.style.display = "grid";
cart.forEach(function (item) {
const cartItem = document.createElement("div");
cartItem.className = "cart-item";
cartItem.innerHTML = ` <img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy">

<div class="cart-item-details">
<div class="cart-item-name">${item.name}</div>
<div class="cart-item-price">${item.priceText}</div>
<div class="quantity-box">
<button class="quantity-btn cart-minus" data-id="${item.id}">−</button>
<div class="quantity">${item.quantity}</div>
<button class="quantity-btn cart-plus" data-id="${item.id}">+</button>
</div>
</div>
<div class="cart-item-right">
<div class="item-total">₹${item.price * item.quantity}</div>
<button class="remove-btn" data-id="${item.id}">Remove</button>
</div>
`;
        cartItemsContainer.appendChild(cartItem);
    });
    addCartButtonEvents();
    updateCartSummary();
}

function addCartButtonEvents() {
const plusButtons = document.querySelectorAll(".cart-plus");
plusButtons.forEach(function (button) {
button.addEventListener("click", function () {
const id = button.dataset.id;
const item = cart.find(function (product) {
return product.id === id;
});
if (item) {
item.quantity++;
saveCart();
displayCart();
}
});
});
const minusButtons = document.querySelectorAll(".cart-minus");
minusButtons.forEach(function (button) {
button.addEventListener("click", function () {
const id = button.dataset.id;
const item = cart.find(function (product) {
return product.id === id;
});
if (!item) {
return;
}
item.quantity--;
if (item.quantity <= 0) {
cart = cart.filter(function (product) {
return product.id !== id;
});
}
saveCart();
displayCart();
});
});
const removeButtons = document.querySelectorAll(".remove-btn");
removeButtons.forEach(function (button) {
button.addEventListener("click", function () {
const id = button.dataset.id;
cart = cart.filter(function (product) {
return product.id !== id;
});
saveCart();
displayCart();
});
});
}

function updateCartSummary() {
const totalItemsElement = document.getElementById("total-items");
const subtotalElement = document.getElementById("subtotal");
const deliveryElement = document.getElementById("delivery");
const totalPriceElement = document.getElementById("total-price");
if (!totalItemsElement || !subtotalElement || !deliveryElement || !totalPriceElement) {
return;
}
let totalItems = 0;
let subtotal = 0;
cart.forEach(function (item) {
totalItems += item.quantity;
subtotal += item.price * item.quantity;
});
const delivery = subtotal > 0 ? 40 : 0;
const total = subtotal + delivery;
totalItemsElement.textContent = totalItems;
subtotalElement.textContent = "₹" + subtotal;
deliveryElement.textContent = "₹" + delivery;
totalPriceElement.textContent = "₹" + total;
}

if (cartItemsContainer && emptyCart && cartContent) {
displayCart();
}

const checkoutButton = document.getElementById("checkout-btn");
if (checkoutButton) {
checkoutButton.addEventListener("click", function () {
const checkoutLoginFlag = localStorage.getItem("loginFlag") || "0";
const checkoutCurrentUser = localStorage.getItem("currentUser");
if (checkoutLoginFlag === "0" || !checkoutCurrentUser) {
alert("Please login first to proceed to checkout!");
window.location.href = "./login.html";
return;
}
if (cart.length === 0) {
alert("Your cart is empty!");
return;
}
window.location.href = "./checkout.html";
});
}

const farmerProductsContainer = document.getElementById("farmer-products");
function displayFarmerProducts() {
if (!farmerProductsContainer) {
return;
}
const farmerProducts = JSON.parse(localStorage.getItem("farmerProducts")) || [];
farmerProductsContainer.innerHTML = "";
if (farmerProducts.length === 0) {
farmerProductsContainer.innerHTML = "<p>No products listed by farmers yet.</p>";
return;
}
farmerProducts.forEach(function (product) {
const card = document.createElement("div");
card.className = "card farmer-product-card";
card.innerHTML = ` <img src="${product.image}" alt="${product.name}" class="product-img farmer-product-image" loading="lazy">

<div class="product-name farmer-product-name">${product.name}</div>
<div class="farmer-product-category">${product.category}</div>
<div class="farmer-product-description">${product.description}</div>
<div class="farmer-product-quantity">Available: ${product.quantity} ${product.unit}</div>
<div class="product-price farmer-product-price">₹${product.price}</div>
<div class="cart-button">
<button type="button" class="items">Add to Cart</button>
<button type="button" class="minus">−</button>
<button type="button" class="plus">+</button>
</div>
<button type="button" class="wishlist">♡ Add to Wishlist</button>
`;
        farmerProductsContainer.appendChild(card);
    });
    addFarmerProductEvents();
}

function addFarmerProductEvents() {
const cards = farmerProductsContainer.querySelectorAll(".farmer-product-card");
cards.forEach(function (card) {
const addButton = card.querySelector(".items");
const plusButton = card.querySelector(".plus");
const minusButton = card.querySelector(".minus");
const wishlistButton = card.querySelector(".wishlist");
function updateFarmerProductButton() {
const product = getProductData(card);
if (!product) {
return;
}
const existingProduct = cart.find(function (item) {
return item.id === product.id;
});
if (existingProduct) {
addButton.textContent = existingProduct.quantity;
} else {
addButton.textContent = "Add to Cart";
}
}
addButton.addEventListener("click", function () {
const product = getProductData(card);
if (!product) {
return;
}
addToCart(product);
updateFarmerProductButton();
alert(product.name + " added to cart!");
});
plusButton.addEventListener("click", function () {
const product = getProductData(card);
if (!product) {
return;
}
addToCart(product);
updateFarmerProductButton();
});
minusButton.addEventListener("click", function () {
const product = getProductData(card);
if (!product) {
return;
}
const existingProduct = cart.find(function (item) {
return item.id === product.id;
});
if (!existingProduct) {
return;
}
existingProduct.quantity--;
if (existingProduct.quantity <= 0) {
cart = cart.filter(function (item) {
return item.id !== product.id;
});
}
saveCart();
updateFarmerProductButton();
});
wishlistButton.addEventListener("click", function () {
const product = getProductData(card);
if (!product) {
return;
}
const existingProduct = wishlist.find(function (item) {
return item.id === product.id;
});
if (existingProduct) {
wishlist = wishlist.filter(function (item) {
return item.id !== product.id;
});
wishlistButton.textContent = "♡ Add to Wishlist";
} else {
wishlist.push(product);
wishlistButton.textContent = "♥ Added to Wishlist";
}
localStorage.setItem("wishlist", JSON.stringify(wishlist));
});
const existingWishlist = wishlist.find(function (item) {
const product = getProductData(card);
return product && item.id === product.id;
});
if (existingWishlist) {
wishlistButton.textContent = "♥ Added to Wishlist";
}
updateFarmerProductButton();
});
}

let checkoutCart = JSON.parse(localStorage.getItem("cart")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];
const checkoutItems = document.getElementById("checkout-items");
const checkoutTotalItems = document.getElementById("checkout-total-items");
const checkoutSubtotal = document.getElementById("checkout-subtotal");
const checkoutDelivery = document.getElementById("checkout-delivery");
const checkoutTotal = document.getElementById("checkout-total");
const checkoutForm = document.getElementById("checkout-form");
function displayCheckout() {
if (!checkoutItems) {
return;
}
checkoutItems.innerHTML = "";
if (checkoutCart.length === 0) {
checkoutItems.innerHTML = "<p>Your cart is empty!</p>";
if (checkoutForm) {
checkoutForm.style.display = "none";
}
updateCheckoutSummary();
return;
}
checkoutCart.forEach(function (item) {
const checkoutItem = document.createElement("div");
checkoutItem.className = "checkout-item";
checkoutItem.innerHTML = `

<div class="checkout-item-details">
<div class="checkout-item-name">${item.name}</div>
<div class="checkout-item-price">${item.priceText}</div>
<div class="checkout-item-quantity">Quantity: ${item.quantity}</div>
</div>
<div class="checkout-item-total">₹${item.price * item.quantity}</div>
`;
        checkoutItems.appendChild(checkoutItem);
    });
    updateCheckoutSummary();
}

function updateCheckoutSummary() {
let totalItems = 0;
let subtotal = 0;
checkoutCart.forEach(function (item) {
totalItems += item.quantity;
subtotal += item.price * item.quantity;
});
const delivery = subtotal > 0 ? 40 : 0;
const total = subtotal + delivery;
if (checkoutTotalItems) {
checkoutTotalItems.textContent = totalItems;
}
if (checkoutSubtotal) {
checkoutSubtotal.textContent = "₹" + subtotal;
}
if (checkoutDelivery) {
checkoutDelivery.textContent = "₹" + delivery;
}
if (checkoutTotal) {
checkoutTotal.textContent = "₹" + total;
}
}

function loadUserDetails() {
const checkoutUser = localStorage.getItem("currentUser");
const checkoutInfo = JSON.parse(localStorage.getItem("info")) || {};
if (!checkoutUser || !checkoutInfo[checkoutUser]) {
return;
}
const user = checkoutInfo[checkoutUser];
const name = document.getElementById("checkout-name");
const mobile = document.getElementById("checkout-mobile");
if (name) {
name.value = user.name || "";
}
if (mobile) {
mobile.value = user.mobile || "";
}
}

if (checkoutForm) {
checkoutForm.addEventListener("submit", function (event) {
event.preventDefault();
const formLoginFlag = localStorage.getItem("loginFlag") || "0";
const formCurrentUser = localStorage.getItem("currentUser");
if (formLoginFlag === "0" || !formCurrentUser) {
alert("Please login first to place an order!");
window.location.href = "./login.html";
return;
}
if (checkoutCart.length === 0) {
alert("Your cart is empty!");
return;
}
const name = document.getElementById("checkout-name").value.trim();
const mobile = document.getElementById("checkout-mobile").value.trim();
const address = document.getElementById("checkout-address").value.trim();
const city = document.getElementById("checkout-city").value.trim();
const state = document.getElementById("checkout-state").value.trim();
const pincode = document.getElementById("checkout-pincode").value.trim();
const payment = document.querySelector('input[name="payment"]:checked');
if (!name || !mobile || !address || !city || !state || !pincode) {
alert("Please fill all delivery details!");
return;
}
if (!/^\d{10}$/.test(mobile)) {
alert("Please enter a valid 10-digit mobile number!");
return;
}
if (!/^\d{6}$/.test(pincode)) {
alert("Please enter a valid 6-digit PIN code!");
return;
}
if (!payment) {
alert("Please select a payment method!");
return;
}
let subtotal = 0;
let totalItems = 0;
checkoutCart.forEach(function (item) {
subtotal += item.price * item.quantity;
totalItems += item.quantity;
});
const delivery = subtotal > 0 ? 40 : 0;
const total = subtotal + delivery;
const order = {
orderId: "FXK" + Date.now(),
date: new Date().toLocaleString(),
items: checkoutCart,
customer: {
name: name,
mobile: mobile,
address: address,
city: city,
state: state,
pincode: pincode
},
payment: payment.value,
totalItems: totalItems,
subtotal: subtotal,
delivery: delivery,
total: total,
status: "Order Placed"
};
orders.push(order);
localStorage.setItem("orders", JSON.stringify(orders));
localStorage.removeItem("cart");
checkoutCart = [];
cart = [];
alert("Order placed successfully!");
window.location.href = "./index.html";
});
}

displayCheckout();
loadUserDetails();

const emptyOrder = document.getElementById("empty-order");
const ordersContainer = document.getElementById("orders-container");
function displayOrders() {
if (!emptyOrder || !ordersContainer) {
return;
}
ordersContainer.innerHTML = "";
const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
if (savedOrders.length === 0) {
emptyOrder.style.display = "flex";
ordersContainer.style.display = "none";
return;
}
emptyOrder.style.display = "none";
ordersContainer.style.display = "flex";
savedOrders.slice().reverse().forEach(function (order) {
const orderCard = document.createElement("div");
orderCard.className = "order-card";
let itemsHTML = "";
order.items.forEach(function (item) {
itemsHTML += `

<div class="order-item">
<div class="order-item-left">
<div>
<div class="order-item-name">${item.name}</div>
<div class="order-item-quantity">Quantity: ${item.quantity}</div>
</div>
</div>
<div class="order-item-right">
<div class="order-item-price">₹${item.price * item.quantity}</div>
</div>
</div>
`;
        });
        orderCard.innerHTML = `
<div class="order-header">
<div>
<div class="order-id">Order ID: ${order.orderId}</div>
<div class="order-date">${order.date}</div>
</div>
<div class="order-status">${order.status}</div>
</div>
<div class="order-items">${itemsHTML}</div>
<div class="order-details">
<div class="order-detail"><strong>Name:</strong> ${order.customer.name}</div>
<div class="order-detail"><strong>Mobile:</strong> +91 ${order.customer.mobile}</div>
<div class="order-detail"><strong>Address:</strong> ${order.customer.address}</div>
<div class="order-detail"><strong>City:</strong> ${order.customer.city}</div>
<div class="order-detail"><strong>State:</strong> ${order.customer.state}</div>
<div class="order-detail"><strong>PIN Code:</strong> ${order.customer.pincode}</div>
<div class="order-detail"><strong>Payment:</strong> ${order.payment}</div>
<div class="order-detail"><strong>Total Items:</strong> ${order.totalItems}</div>
</div>
<div class="order-summary">
<div>Subtotal: ₹${order.subtotal}</div>
<div>Delivery: ₹${order.delivery}</div>
<div class="order-total">Total: ₹${order.total}</div>
</div>
`;
        ordersContainer.appendChild(orderCard);
    });
}

displayOrders();
displayFarmerProducts();

function displayListedProducts() {
const listedCurrentUser = localStorage.getItem("currentUser");
const listedInfo = JSON.parse(localStorage.getItem("info")) || {};
const farmerProducts = JSON.parse(localStorage.getItem("farmerProducts")) || [];
const totalProductsElement = document.getElementById("total-products");
const totalQuantityElement = document.getElementById("total-quantity");
const totalRevenueElement = document.getElementById("total-revenue");
const latestListingElement = document.getElementById("latest-listing");
const listedProductsElement = document.getElementById("listed-products");
if (!listedProductsElement) {
return;
}
if (!listedCurrentUser || !listedInfo[listedCurrentUser]) {
alert("Please login first!");
window.location.href = "./login.html";
return;
}
if (String(listedInfo[listedCurrentUser].account || "").trim().toLowerCase() !== "farmer") {
alert("Only Farmer accounts can view listed products!");
window.location.href = "./profile.html";
return;
}
const myProducts = farmerProducts.filter(function (product) {
return product.farmerEmail === listedCurrentUser;
});
totalProductsElement.textContent = myProducts.length;
let totalQuantity = 0;
let totalRevenue = 0;
myProducts.forEach(function (product) {
totalQuantity += Number(product.quantity) || 0;
totalRevenue += (Number(product.quantity) || 0) * (Number(product.price) || 0);
});
totalQuantityElement.textContent = totalQuantity;
totalRevenueElement.textContent = "₹" + totalRevenue.toLocaleString("en-IN");
if (myProducts.length > 0) {
latestListingElement.textContent = myProducts[myProducts.length - 1].name;
} else {
latestListingElement.textContent = "-";
}
if (myProducts.length === 0) {
listedProductsElement.innerHTML = `

<div class="no-products">
No products listed yet.
</div>
`;
        return;
    }
    listedProductsElement.innerHTML = "";
    myProducts.slice().reverse().forEach(function (product) {
        const productRevenue = (Number(product.quantity) || 0) * (Number(product.price) || 0);
        const productCard = document.createElement("div");
        productCard.className = "listed-product-card";
        productCard.innerHTML = `
<div class="listed-product-image-box">
<img src="${product.image}" alt="${product.name}" class="listed-product-image" loading="lazy">
</div>
<div class="listed-product-details">
<div class="listed-product-name">${product.name}</div>
<div class="listed-product-category">Category: ${product.category}</div>
<div class="product-info-grid">
<div class="product-info">Quantity: <span>${product.quantity} ${product.unit}</span></div>
<div class="product-info">Expected Price: <span>₹${Number(product.price).toLocaleString("en-IN")}</span></div>
<div class="product-info">Harvest Date: <span>${product.harvestDate}</span></div>
<div class="product-info">Listed On: <span>${product.dateAdded}</span></div>
</div>
<div class="listed-product-revenue">Total Revenue: ₹${productRevenue.toLocaleString("en-IN")}</div>
<div class="listed-product-status">✓ Product Listed</div>
</div>
`;
        listedProductsElement.appendChild(productCard);
    });
}

displayListedProducts();
