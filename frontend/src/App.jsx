import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import ShopPage from "./components/ShopPage";
import ProductDetailPage from "./components/ProductDetailPage";
import CategoriesPage from "./components/CategoriesPage";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgetPassword from "./components/ForgotPassword";
import WishList from "./components/Wishlist";
import Contact from "./components/Contact";

import PlantGuide from "./pages/PlantGuide";
import GuideHero from "./pages/GuideHero";
import GuideDetailsPage from "./pages/GuideDetailsPage";
import About from "./pages/About";

import PlantAtelierDashboard from "./admin/PlantAtelierDashboard";
import ShopManagement from "./admin/pages/ShopManagement";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import "./App.css";

function AppContent() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className="app-container">
      {!isAdminPage && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guide" element={<GuideHero />} />
        <Route path="/guides" element={<PlantGuide />} />
        <Route path="/guides/:id" element={<GuideDetailsPage />} />
        <Route path="/about" element={<About />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<PlantAtelierDashboard />} />
        <Route
          path="/admin/shop-management"
          element={<ShopManagement />}
        />
      </Routes>

      {!isAdminPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;