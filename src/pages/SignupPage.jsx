import "../styles/signup.css";

export default function SignupPage() {
  function handleSignup(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim().toLowerCase();
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const users = JSON.parse(localStorage.getItem("info") || "{}");

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (users[email]) {
      alert("Account already exists!");
      return;
    }

    users[email] = {
      name,
      password,
      mobile: formData.get("mobile").trim(),
      gender: formData.get("gender"),
      account: formData.get("accountType"),
    };
    localStorage.setItem("info", JSON.stringify(users));
    alert("Signup successful!");
    window.location.href = "/login";
  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-title">Signup</div>
        <form className="signup-input" onSubmit={handleSignup}>
          <input type="text" name="name" placeholder="Name" className="input" required />
          <div className="input-option">
            <div className="option-title">Gender</div>
            <div className="option">
              <label>
                <input type="radio" name="gender" value="male" required /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" /> Female
              </label>
              <label>
                <input type="radio" name="gender" value="others" /> Others
              </label>
            </div>
          </div>
          <input type="email" name="email" placeholder="Email" className="input" required />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            className="input"
            maxLength="10"
            pattern="[0-9]{10}"
            required
          />
          <div className="input-option">
            <div className="option-title">Account Type</div>
            <div className="option">
              <label>
                <input type="radio" name="accountType" value="customer" required /> Customer
              </label>
              <label>
                <input type="radio" name="accountType" value="farmer" /> Farmer
              </label>
            </div>
          </div>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            minLength="8"
            autoComplete="new-password"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            className="input"
            placeholder="Confirm Password"
            minLength="8"
            autoComplete="new-password"
            required
          />
          <label className="terms">
            <input type="checkbox" name="terms" required />
            I agree to the Terms &amp; Conditions
          </label>
          <a href="/login" className="login-link">
            Already registered? Login
          </a>
          <div className="button">
            <button type="submit" className="signup-btn">
              Signup
            </button>
            <a href="/" className="cancel-btn">
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
