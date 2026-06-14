import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import bgImage from "../assets/2.jpg";

export default function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    const registeredEmail = "test@gmail.com";
    const registeredPassword = "12345678";

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (
      email !== registeredEmail ||
      password !== registeredPassword
    ) {
      setError("Account not found. Please create an account first.");
      return;
    }

    setError("");
    alert("Sign In Successful!");
    navigate("/");
  };

  return (
    <div>
      <div style={styles.pageWrapper}>

        {/* Header */}
        <div style={styles.headerContainer}>
          <h1 style={styles.mainTitle}>Welcome Back</h1>
          <p style={styles.subTitle}>
            Sign in to your GreenNest account
          </p>
        </div>

        {/* Form Card */}
        <div style={styles.formCard}>
          <form
            onSubmit={handleSignIn}
            style={styles.form}
          >
            {/* Email */}
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
            </div>

            {/* Password */}
            <div style={styles.inputGroup}>
              <label htmlFor="password" style={styles.label}>
                Password
              </label>

              <div style={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.passwordInput}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={styles.eyeButton}
                >
                  {showPassword ? (
                    <FaEyeSlash size={16} />
                  ) : (
                    <FaEye size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div style={styles.optionsRow}>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>

              <span
                style={styles.forgotLink}
                onClick={() => navigate("/forgot-password")}
              >
                Forgot password?
              </span>
            </div>
            {error && (
              <p style={styles.errorText}>
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              style={styles.submitButton}
            >
              Sign In
            </button>


            {/* Divider */}
            <div style={styles.divider}>
              <div style={styles.dividerLine}></div>
              <span style={styles.dividerText}>or continue with</span>
              <div style={styles.dividerLine}></div>
            </div>

            {/* Social Buttons */}
            <div style={styles.socialRow}>
              <button
                type="button"
                style={styles.socialButton}
              >
                <FcGoogle size={18} />
                Google
              </button>

              <button
                type="button"
                style={styles.socialButton}
              >
                <FaApple />
                Apple
              </button>
            </div>
          </form>

          {/* Footer */}
          <div style={styles.footerText}>
            Don't have an account?{" "}
            <span
              style={styles.createAccount}
              onClick={() => navigate("/signup")}
            >
              Create one
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  pageWrapper: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(
      rgba(0,0,0,0.45),
      rgba(0,0,0,0.55)
    ), url(${bgImage}) center center / cover no-repeat`,
  },

  headerContainer: {
    textAlign: "center",
    marginBottom: "28px",
    width: "100%",
    maxWidth: "440px",
  },

  mainTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "38px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "8px",
    textShadow: "0 2px 10px rgba(0,0,0,0.4)",
  },

  subTitle: {
    fontFamily: "Inter, sans-serif",
    fontSize: "15px",
    color: "rgba(255,255,255,0.85)",
    textShadow: "0 1px 5px rgba(0,0,0,0.3)",
  },

  formCard: {
    background: "rgba(255,255,255,0.96)",
    borderRadius: "16px",
    padding: "40px 36px",
    width: "100%",
    maxWidth: "440px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    border: "1px solid rgba(255,255,255,0.5)",
    boxSizing: "border-box",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    textAlign: "left",
  },

  label: {
    fontFamily: "Inter, sans-serif",
    fontSize: "13px",
    fontWeight: "600",
    color: "#374151",
  },

  input: {
    width: "100%",
    padding: "11px 14px",
    fontSize: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    color: "#111827",
    outline: "none",
    boxSizing: "border-box",
  },

  passwordWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },

  passwordInput: {
    width: "100%",
    padding: "11px 40px 11px 14px",
    fontSize: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    color: "#111827",
    outline: "none",
    boxSizing: "border-box",
  },

  eyeButton: {
    position: "absolute",
    right: "12px",
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#9ca3af",
  },

  optionsRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "13px",
  },

  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#4b5563",
    cursor: "pointer",
  },

  forgotLink: {
    color: "#1B632A",
    textDecoration: "none",
    fontWeight: "600",
  },

  submitButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#1B632A",
    color: "#ffffff",
    border: "none",
    borderRadius: "30px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },

  divider: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "8px 0",
  },

  dividerLine: {
    flex: 1,
    height: "1px",
    backgroundColor: "#d1d5db"
  },

  dividerText: {
    padding: "0 16px",
    color: "#9ca3af",
    fontSize: "14px",
    fontWeight: "500",
    whiteSpace: "nowrap",
  },

  socialRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },

  socialButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "10px",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    fontSize: "13px",
    fontWeight: "500",
    color: "#111827",
    cursor: "pointer",
  },

  footerText: {
    marginTop: "24px",
    fontSize: "13px",
    color: "#6b7280",
    textAlign: "center",
  },

  createAccount: {
    cursor: "pointer",
    color: "#1b693e",
    fontWeight: "700",
  },
  errorText: {
    color: "#dc2626",
    fontSize: "13px",
    textAlign: "center",
    marginTop: "-5px",
  },
  forgotLink: {
    color: "#15803d",
    fontSize: "14px",
    textDecoration: "none",
    fontWeight: "500",
    cursor: "pointer",
  },
};

