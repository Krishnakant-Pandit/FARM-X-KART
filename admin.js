if (localStorage.getItem("adminLogin") !== "1") {
    alert("Please login as admin first!");
    window.location.href = "./adminLogin.html";
} else {
    const info = JSON.parse(localStorage.getItem("info")) || {};
    const farmerProducts = JSON.parse(localStorage.getItem("farmerProducts")) || [];
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const users = Object.entries(info);

    const farmers = users.filter(([email, user]) =>
        String(user.account || "").toLowerCase() === "farmer"
    );

    const customers = users.filter(([email, user]) =>
        String(user.account || "").toLowerCase() === "customer"
    );

    document.getElementById("total-users").textContent = users.length;
    document.getElementById("total-farmers").textContent = farmers.length;
    document.getElementById("total-customers").textContent = customers.length;
    document.getElementById("total-products").textContent = farmerProducts.length;
    document.getElementById("total-orders").textContent = orders.length;

    document.getElementById("user-count").textContent =
        `${users.length} ${users.length === 1 ? "User" : "Users"}`;

    document.getElementById("product-count").textContent =
        `${farmerProducts.length} ${farmerProducts.length === 1 ? "Product" : "Products"}`;

    document.getElementById("order-count").textContent =
        `${orders.length} ${orders.length === 1 ? "Order" : "Orders"}`;

    function getOrderTotal(order) {
        return Number(
            order.total ||
            order.totalPrice ||
            order.amount ||
            order.grandTotal ||
            0
        );
    }

    function formatDate(date) {
        if (!date) {
            return "-";
        }

        const parsedDate = new Date(date);

        if (isNaN(parsedDate.getTime())) {
            return date;
        }

        return parsedDate.toLocaleDateString("en-IN");
    }

    function getOrderItems(order) {
        if (Array.isArray(order.items)) {
            return order.items.length;
        }

        if (Array.isArray(order.products)) {
            return order.products.length;
        }

        return Number(order.items) || 0;
    }

    function getOrderCustomer(order) {
        return (
            order.customerName ||
            order.name ||
            order.customer ||
            order.userName ||
            order.email ||
            "-"
        );
    }

    function getPaymentMethod(order) {
        return (
            order.paymentMethod ||
            order.payment ||
            order.paymentType ||
            "-"
        );
    }

    function getOrderStatus(order) {
        return order.status || "Placed";
    }

    const usersTable = document.getElementById("users-table");

    usersTable.innerHTML = "";

    if (users.length === 0) {
        usersTable.innerHTML = `
            <tr>
                <td colspan="6">No users registered</td>
            </tr>
        `;
    } else {
        users.forEach(([email, user], index) => {
            usersTable.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${user.name || "-"}</td>
                    <td>${email}</td>
                    <td>${user.mobile || "-"}</td>
                    <td>${user.gender || "-"}</td>
                    <td>${user.account || "-"}</td>
                </tr>
            `;
        });
    }

    const productsTable = document.getElementById("products-table");

    productsTable.innerHTML = "";

    if (farmerProducts.length === 0) {
        productsTable.innerHTML = `
            <tr>
                <td colspan="7">No products listed</td>
            </tr>
        `;
    } else {
        farmerProducts.forEach((product, index) => {
            productsTable.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${product.productName || product.name || "-"}</td>
                    <td>${product.farmerName || product.farmer || "-"}</td>
                    <td>${product.category || "-"}</td>
                    <td>${product.quantity || "-"} ${product.quantityUnit || ""}</td>
                    <td>₹${product.expectedPrice || product.price || 0}</td>
                    <td>${formatDate(product.dateAdded || product.harvestDate)}</td>
                </tr>
            `;
        });
    }

    const ordersTable = document.getElementById("orders-table");

    ordersTable.innerHTML = "";

    if (orders.length === 0) {
        ordersTable.innerHTML = `
            <tr>
                <td colspan="8">No orders placed</td>
            </tr>
        `;
    } else {
        orders.forEach((order, index) => {
            const orderId =
                order.orderId ||
                order.id ||
                `ORD${String(index + 1).padStart(4, "0")}`;

            const total = getOrderTotal(order);

            ordersTable.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${orderId}</td>
                    <td>${getOrderCustomer(order)}</td>
                    <td>${getOrderItems(order)}</td>
                    <td>${getPaymentMethod(order)}</td>
                    <td>₹${total.toFixed(2)}</td>
                    <td>${getOrderStatus(order)}</td>
                    <td>${formatDate(order.date || order.orderDate || order.createdAt)}</td>
                </tr>
            `;
        });
    }

    const totalRevenue = orders.reduce((total, order) => {
        return total + getOrderTotal(order);
    }, 0);

    const averageOrder = orders.length > 0
        ? totalRevenue / orders.length
        : 0;

    document.getElementById("total-revenue").textContent =
        `₹${totalRevenue.toFixed(2)}`;

    document.getElementById("revenue-total").textContent =
        `₹${totalRevenue.toFixed(2)}`;

    document.getElementById("revenue-orders").textContent =
        orders.length;

    document.getElementById("average-order").textContent =
        `₹${averageOrder.toFixed(2)}`;

    const logoutButton = document.querySelector(".logout");

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("adminLogin");
            localStorage.removeItem("adminEmail");
            window.location.href = "./adminLogin.html";
        });
    }
}