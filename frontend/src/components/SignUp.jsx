import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from "../assets/1B.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaUser, FaStore } from "react-icons/fa";
import Swal from "sweetalert2";
import './SignUp.css';

export default function SignUp() {
  const [userType, setUserType] = useState('customer'); // 'customer' or 'seller'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreeTerms) {
      Swal.fire({
        icon: "warning",
        title: "Terms Required",
        text: "Please agree to the Terms of Service and Privacy Policy."
      });
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setPasswordError("");

    await Swal.fire({
      icon: "success",
      title: "Account Created!",
      text: "Your account has been created successfully.",
      confirmButtonColor: "#1b693e"
    });

    navigate("/signin");
  };

  return (
    <div className="signup-page-outer-boundary">
      <div className="signup-page-wrapper">


        {/* Top Header Block */}
        <div className="signup-header-container">
          <h1 className="signup-main-title">Create Account</h1>
          <p className="signup-sub-title">Join the GreenNest plant community</p>
        </div>

        {/* Main White Form Container */}
        <div className="signup-form-card">

          {/* User Type Segmented Selector */}
          <div className="signup-toggle-container">
            <button
              type="button"
              className={`signup-toggle-tab ${userType === 'customer' ? 'active' : ''}`}
              onClick={() => setUserType('customer')}
            >
              <FaUser size={14} />
              Customer
            </button>

            <button
              type="button"
              className={`signup-toggle-tab ${userType === 'seller' ? 'active' : ''}`}
              onClick={() => setUserType('seller')}
            >
              <FaStore size={14} />
              Seller
            </button>
          </div>

          <form onSubmit={handleSubmit} className="signup-core-form">

            {/* Full Name */}
            <div className="signup-input-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="Your full name"
                required
              />
            </div>

            {/* Email Address */}
            <div className="signup-input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password */}
            <div className="signup-input-group">
              <label htmlFor="password">Password</label>
              <div className="signup-password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Min. 8 characters"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="signup-eye-toggle-btn"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <FaEyeSlash size={16} />
                  ) : (
                    <FaEye size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="signup-input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="signup-password-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Re-enter password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="signup-eye-toggle-btn"
                  aria-label="Toggle password visibility"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash size={16} />
                  ) : (
                    <FaEye size={16} />
                  )}
                </button>
              </div>
              {passwordError && (
                <p className="password-error">
                  {passwordError}
                </p>
              )}
            </div>

            {/* Terms and Privacy Checkbox Agreement Row */}
            <div className="signup-options-row">
              <label className="signup-checkbox-label">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                />
                <span className="signup-custom-checkbox"></span>
                <span className="signup-checkbox-text">
                  I agree to GreenNest's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                </span>
              </label>
            </div>

            {/* Main Solid Green Action Button */}
            <button type="submit" className="signup-submit-btn">
              Create Account
            </button>

            {/* Text Divider */}
            <div className="signup-divider-line">
              <span>or continue with</span>
            </div>

            {/* Social Authentication Row */}
            <div className="signup-social-row">
              <button type="button" className="signup-social-btn">
                <FcGoogle />
                Google
              </button>
              <button type="button" className="signup-social-btn">
                <FaApple />
                Apple
              </button>
            </div>
          </form>

          {/* Account Inversion Access Footer Link */}
          <div className="signup-footer-text">
            Already have an account?{' '}
            <span
              onClick={() => navigate('/signin')}
              style={{ cursor: 'pointer', color: '#1b693e', fontWeight: '600' }}
            >
              Sign In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

