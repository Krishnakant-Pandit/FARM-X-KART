import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const AdminPage = lazy(() => import("./pages/AdminPage.jsx"));
const CartPage = lazy(() => import("./pages/CartPage.jsx"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage.jsx"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage.jsx"));
const HomePage = lazy(() => import("./pages/IndexPage.jsx"));
const ListedPage = lazy(() => import("./pages/ListedPage.jsx"));
const LoginPage = lazy(() =>
  import("./pages/LoginPage.jsx").then((module) => ({
    default: module.UserLoginPage,
  })),
);
const AdminLoginPage = lazy(() =>
  import("./pages/LoginPage.jsx").then((module) => ({
    default: module.AdminLoginPage,
  })),
);
const MyOrdersPage = lazy(() => import("./pages/MyOrdersPage.jsx"));
const ProductPage = lazy(() => import("./pages/ProductPage.jsx"));
const ProfilePage = lazy(() => import("./pages/ProfilePage.jsx"));
const SellPage = lazy(() => import("./pages/SellPage.jsx"));
const SignupPage = lazy(() => import("./pages/SignupPage.jsx"));
const SettingsPage = lazy(() => import("./pages/SettingsPage.jsx"));
const WishlistPage = lazy(() => import("./pages/WishlistPage.jsx"));

const pageTitles = {
  "/": "FARM X KART",
  "/index.html": "FARM X KART",
  "/admin": "Admin Dashboard - Farm X Kart",
  "/admin.html": "Admin Dashboard - Farm X Kart",
  "/admin/login": "Admin Login",
  "/adminLogin.html": "Admin Login",
  "/cart": "My Cart | Farm X Kart",
  "/cart.html": "My Cart | Farm X Kart",
  "/checkout": "Checkout | Farm X Kart",
  "/checkout.html": "Checkout | Farm X Kart",
  "/forgot-password": "Forgot Password | Farm X Kart",
  "/forget-password.html": "Forgot Password | Farm X Kart",
  "/listed": "My Listed Products | Farm X Kart",
  "/listed.html": "My Listed Products | Farm X Kart",
  "/login": "Login",
  "/login.html": "Login",
  "/orders": "Checkout | Farm X Kart",
  "/myOrders.html": "Checkout | Farm X Kart",
  "/products": "Farm X Kart - Vegetables",
  "/product.html": "Farm X Kart - Vegetables",
  "/profile": "Profile",
  "/profile.html": "Profile",
  "/sell": "Sell Products | Farm X Kart",
  "/sell.html": "Sell Products | Farm X Kart",
  "/settings": "Account Settings - Farm X Kart",
  "/settings.html": "Account Settings - Farm X Kart",
  "/signup": "Signup | FARM X KART",
  "/signup.html": "Signup | FARM X KART",
  "/wishlist": "Wishlist | Farm X Kart",
  "/wishlist.html": "Wishlist | Farm X Kart",
};

function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = pageTitles[pathname] || pageTitles["/"];
    document.body.id =
      pathname === "/admin" || pathname === "/admin.html" ? "admin-page" : "";
  }, [pathname]);

  return null;
}

function LoadingPage() {
  return <main aria-label="Loading page" />;
}

export default function App() {
  return (
    <>
      <PageMetadata />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin.html" element={<AdminPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/adminLogin.html" element={<AdminLoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart.html" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout.html" element={<CheckoutPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/forget-password.html" element={<ForgotPasswordPage />} />
          <Route path="/listed" element={<ListedPage />} />
          <Route path="/listed.html" element={<ListedPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login.html" element={<LoginPage />} />
          <Route path="/orders" element={<MyOrdersPage />} />
          <Route path="/myOrders.html" element={<MyOrdersPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product.html" element={<ProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile.html" element={<ProfilePage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/sell.html" element={<SellPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/settings.html" element={<SettingsPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup.html" element={<SignupPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/wishlist.html" element={<WishlistPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}
