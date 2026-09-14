let info = JSON.parse(localStorage.getItem("info")) || {
    "krishnakantpandit@gmail.com": {
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
        const user = users[currentUser];

        if (!currentUser || !user) {
            alert("Please login first!");
            window.location.href = "./login.html";
            return;
        }

        alert("Edit Profile feature will be added here.");
    });
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

        cartItem.innerHTML = `
<img src="${item.image}" alt="${item.name}" class="cart-item-image" loading="lazy">
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
        const loginFlag = localStorage.getItem("loginFlag") || "0";
        const currentUser = localStorage.getItem("currentUser");

        if (loginFlag === "0" || !currentUser) {
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

        wishlistItem.innerHTML = `
<img src="${item.image}" alt="${item.name}" class="wishlist-item-image" loading="lazy">
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
    const currentUser = localStorage.getItem("currentUser");
    const info = JSON.parse(localStorage.getItem("info")) || {};

    if (!currentUser || !info[currentUser]) {
        return;
    }

    const user = info[currentUser];

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

        // Check if user is logged in before placing order
        const loginFlag = localStorage.getItem("loginFlag") || "0";
        const currentUser = localStorage.getItem("currentUser");

        if (loginFlag === "0" || !currentUser) {
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
                            <div class="order-item-name">
                                ${item.name}
                            </div>
                            <div class="order-item-quantity">
                                Quantity: ${item.quantity}
                            </div>
                        </div>
                    </div>
                    <div class="order-item-right">
                        <div class="order-item-price">
                            ₹${item.price * item.quantity}
                        </div>
                    </div>
                </div>
            `;
        });
        orderCard.innerHTML = `
            <div class="order-header">
                <div>
                    <div class="order-id">
                        Order ID: ${order.orderId}
                    </div>
                    <div class="order-date">
                        ${order.date}
                    </div>
                </div>
                <div class="order-status">
                    ${order.status}
                </div>
            </div>
            <div class="order-items">
                ${itemsHTML}
            </div>
            <div class="order-details">
                <div class="order-detail">
                    <strong>Name:</strong>
                    ${order.customer.name}
                </div>
                <div class="order-detail">
                    <strong>Mobile:</strong>
                    +91 ${order.customer.mobile}
                </div>
                <div class="order-detail">
                    <strong>Address:</strong>
                    ${order.customer.address}
                </div>
                <div class="order-detail">
                    <strong>City:</strong>
                    ${order.customer.city}
                </div>
                <div class="order-detail">
                    <strong>State:</strong>
                    ${order.customer.state}
                </div>
                <div class="order-detail">
                    <strong>PIN Code:</strong>
                    ${order.customer.pincode}
                </div>
                <div class="order-detail">
                    <strong>Payment:</strong>
                    ${order.payment}
                </div>
                <div class="order-detail">
                    <strong>Total Items:</strong>
                    ${order.totalItems}
                </div>
            </div>
            <div class="order-summary">
                <div>
                    Subtotal: ₹${order.subtotal}
                </div>
                <div>
                    Delivery: ₹${order.delivery}
                </div>
                <div class="order-total">
                    Total: ₹${order.total}
                </div>
            </div>
        `;
        ordersContainer.appendChild(orderCard);
    });
}
displayOrders();