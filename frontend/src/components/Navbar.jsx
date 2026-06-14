import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [cartCount, setCartCount] = useState(0);
    const [favoriteCount, setFavoriteCount] = useState(0);

    // Synchronize count state with LocalStorage and setup live event listener
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("greenNestCart") || "[]");
        const savedFavorites = JSON.parse(localStorage.getItem("greenNestFavorites") || "[]");

        setCartCount(savedCart.length);
        setFavoriteCount(savedFavorites.length);

        const handleCartUpdate = (event) => {
            setCartCount(event.detail.count);
        };

        const handleFavoriteUpdate = (event) => {
            setFavoriteCount(event.detail.count);
        };

        window.addEventListener("cartUpdated", handleCartUpdate);
        window.addEventListener("favoriteUpdated", handleFavoriteUpdate);

        return () => {
            window.removeEventListener("cartUpdated", handleCartUpdate);
            window.removeEventListener("favoriteUpdated", handleFavoriteUpdate);
        };
    }, []);

    // Helper function to check if a link is currently active
    const isActive = (path) => location.pathname === path;


    return (
        <nav style={styles.navbar}>
            <style>{`
    /* Navbar Entrance */
    nav {
        animation: navbarSlideDown 0.8s ease;
    }

    @keyframes navbarSlideDown {
        from {
            transform: translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    /* Floating Logo */
    .logo-float {
        animation: logoFloat 3s ease-in-out infinite;
    }

    @keyframes logoFloat {
        0%,100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-4px);
        }
    }

    /* Link Hover Underline */
    .nav-link {
        position: relative;
        transition: all 0.3s ease;
    }

    .nav-link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 50%;
        background: #1b4d3e;
        transition: all 0.3s ease;
    }

    .nav-link:hover::after {
        width: 100%;
        left: 0;
    }

    .nav-link:hover {
        color: #1b4d3e;
        transform: translateY(-2px);
    }

    /* Heart Pulse */
    .heart-icon:hover {
        animation: heartPulse 0.6s ease;
    }

    @keyframes heartPulse {
        0% { transform: scale(1); }
        25% { transform: scale(1.2); }
        50% { transform: scale(0.9); }
        75% { transform: scale(1.15); }
        100% { transform: scale(1); }
    }

    /* Cart Bounce */
    .cart-icon:hover {
        animation: cartBounce 0.7s ease;
    }

    @keyframes cartBounce {
        0%,100% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(-5px);
        }
        50% {
            transform: translateY(0);
        }
        75% {
            transform: translateY(-2px);
        }
    }

    /* Sign In Glow */
    .signin-btn {
        transition: all 0.3s ease;
    }

    .signin-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(27,77,62,0.35);
    }

    /* Active Link Glow */
    .active-link {
        text-shadow: 0 0 10px rgba(27,77,62,0.3);
    }

    /* Badge Wiggle */
    .badge-pop:hover {
        animation: wiggle 0.5s ease;
    }

    @keyframes wiggle {
        0%,100% { transform: rotate(0deg); }
        25% { transform: rotate(-10deg); }
        50% { transform: rotate(10deg); }
        75% { transform: rotate(-5deg); }
    }
`}</style>
            {/* Logo links back to Home */}
            <Link to="/" style={styles.navLogo} className="logo-float">
                🌿 GreenNest
            </Link>

            <ul style={styles.navLinks}>
                <li>
                    <Link
                        to="/"
                        className={`nav-link ${isActive('/') ? 'active-link' : ''}`}
                        style={isActive('/')
                            ? { ...styles.link, ...styles.activeLink }
                            : styles.link}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/shop"
                        className={`nav-link ${isActive('/shop') ? 'active-link' : ''}`}
                        style={isActive('/shop')
                            ? { ...styles.link, ...styles.activeLink }
                            : styles.link}
                    >
                        Shop
                    </Link>
                </li>
                <li>
                    <Link
                        to="/categories"
                        className={`nav-link ${isActive('/categories') ? 'active-link' : ''}`}
                        style={isActive('/categories')
                            ? { ...styles.link, ...styles.activeLink }
                            : styles.link}
                    >
                        Categories
                    </Link>
                </li>
                <li>
                    <Link
                        to="/guides"
                        className={`nav-link ${isActive('/guides') ? 'active-link' : ''}`}
                        style={isActive('/guides/:id')
                            ? { ...styles.link, ...styles.activeLink }
                            : styles.link}
                    >
                        Plant Guide
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className={`nav-link ${isActive('/about') ? 'active-link' : ''}`}
                        style={isActive('/about')
                            ? { ...styles.link, ...styles.activeLink }
                            : styles.link}
                    >
                        About Us
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className={`nav-link ${isActive('/contact') ? 'active-link' : ''}`}
                        style={isActive('/contact')
                            ? { ...styles.link, ...styles.activeLink }
                            : styles.link}
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            <div style={styles.navActions}>
                {/* Favorite Button */}
                <button
                    className="heart-icon"
                    style={{ ...styles.iconBtn, position: "relative" }}
                    onClick={() => navigate("/wishlist")}
                >
                    <FaHeart size={18} />

                    {favoriteCount > 0 && (
                        <span style={styles.favoriteBadge}>
                            {favoriteCount}
                        </span>
                    )}
                </button>

                {/* UPDATED: Shopping Bag Button now navigates to the "/cart" page when clicked */}
                <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <button
                        className="cart-icon"
                        style={{ ...styles.iconBtn, ...styles.cartBtn }}>

                        <FaShoppingBag size={18} />
                        {cartCount > 0 && (
                            <span
                                className="badge-pop"
                                style={styles.cartBadge}
                            >
                                {cartCount}
                            </span>
                        )}
                    </button>
                </Link>

                {/* Sign In Button */}
                <button
                    className="signin-btn"
                    style={styles.signInBtn}
                    onClick={() => navigate('/signin')}
                >
                    Sign In
                </button>
            </div>

            {/* Micro animation to pop the badge visually when changed */}
            <style>{`
                .badge-pop {
                    animation: badgePopAnim 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
                @keyframes badgePopAnim {
                    0% { transform: scale(0.4); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 5%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'linear-gradient(270deg, rgba(235, 220, 220, 0.8), rgba(146, 184, 156, 0.8), rgba(255,255,255,0.8))',
        backgroundSize: '300% 300%',
        animation: 'gradientMove 10s ease infinite',
        backdropFilter: 'blur(10px)',
    },

    navLogo: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#1b4d3e',
        letterSpacing: '-0.5px',
        cursor: 'pointer',
        textDecoration: 'none',
    },

    navLinks: {
        display: 'flex',
        listStyle: 'none',
        gap: '2rem',
        margin: 0,
        padding: 0,
    },

    link: {
        textDecoration: 'none',
        color: '#555',
        fontWeight: '500',
        fontSize: '0.95rem',
        transition: 'color 0.2s ease',
        paddingBottom: '4px',
        borderBottom: '2px solid transparent',
    },

    activeLink: {
        color: '#1b4d3e',
        fontWeight: '600',
        borderBottom: '2px solid #1b4d3e',
    },

    navActions: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.25rem',
    },

    iconBtn: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#222',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.2s',
    },

    cartBtn: {
        position: 'relative',
    },

    cartBadge: {
        position: 'absolute',
        top: '-5px',
        right: '-7px',
        backgroundColor: '#1b4d3e',
        color: '#fff',
        fontSize: '0.68rem',
        fontWeight: '700',
        borderRadius: '50%',
        width: '18px',
        height: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    },

    signInBtn: {
        backgroundColor: '#1b4d3e',
        color: '#fff',
        border: 'none',
        padding: '10px 22px',
        borderRadius: '25px',
        cursor: 'pointer',
        fontSize: '0.9rem',
        fontWeight: '600',
        transition: 'background-color 0.2s',
    },
    favoriteBadge: {
        position: 'absolute',
        top: '-5px',
        right: '-7px',
        backgroundColor: '#e53e3e',
        color: '#fff',
        fontSize: '0.68rem',
        fontWeight: '700',
        borderRadius: '50%',
        width: '18px',
        height: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    },
};

export default Navbar;