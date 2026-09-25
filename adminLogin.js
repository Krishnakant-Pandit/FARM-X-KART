const adminLogin = document.querySelector(".login-form");

if (adminLogin) {
    adminLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.querySelector('input[name="email"]').value.trim().toLowerCase();
        const password = document.querySelector('input[name="password"]').value;

        const adminEmail = "admin@farmxkart.com";
        const adminPassword = "Admin@123";

        if (email !== adminEmail || password !== adminPassword) {
            alert("Invalid admin email or password!");
            return;
        }

        localStorage.setItem("adminLogin", "1");
        localStorage.setItem("adminEmail", email);

        alert("Admin login successful!");

        window.location.href = "./admin.html";
    });
}