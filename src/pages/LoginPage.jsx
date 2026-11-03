import "../styles/login.css";

function LoginForm({ admin = false }) {
  function handleLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email").trim().toLowerCase();
    const password = formData.get("password");

    if (admin) {
      if (email !== "admin@farmxkart.com" || password !== "Admin@123") {
        alert("Invalid admin email or password!");
        return;
      }

      localStorage.setItem("adminLogin", "1");
      localStorage.setItem("adminEmail", email);
      alert("Admin login successful!");
      window.location.href = "/admin";
      return;
    }

    const users = JSON.parse(localStorage.getItem("info") || "{}");
    if (!users[email] || users[email].password !== password) {
      alert("Invalid email or password!");
      return;
    }

    localStorage.setItem("currentUser", email);
    localStorage.setItem("loginFlag", "1");
    alert("Login successful!");
    window.location.href = "/";
  }

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <div className="title">{admin ? "Admin Login" : "Login"}</div>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="login-input">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                autoComplete="email"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input"
                autoComplete="current-password"
                required
              />
            </div>
            {!admin && (
              <div className="signup-box">
                <a href="/forgot-password" className="signup">
                  Forget Password?
                </a>
                <a href="/signup" className="signup">
                  Do not have account? Signup
                </a>
              </div>
            )}
            <div className="button">
              <button type="submit" className="login-button">
                Login
              </button>
              <a href={admin ? "/login" : "/"} className="cancel">
                Cancel
              </a>
            </div>
          </form>
        </div>
      </div>
      {!admin && (
        <div className="admin-btn">
          <a href="/admin/login">Admin Login</a>
        </div>
      )}
    </>
  );
}

export function UserLoginPage() {
  return <LoginForm />;
}

export function AdminLoginPage() {
  return <LoginForm admin />;
}
