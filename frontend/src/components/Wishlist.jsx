import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingBag, FaCheck, FaHeart, FaRegHeart } from "react-icons/fa"; // Added missing imports
import { mockPlants } from "../data/plants";

function Wishlist() {
    const navigate = useNavigate();

    const [wishlistItems, setWishlistItems] = useState([]);
    const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("greenNestCart") || "[]"));
    const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("greenNestFavorites") || "[]"));

    // UI State
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const [hoveredCartBtnId, setHoveredCartBtnId] = useState(null);

    // Sync wishlist from favorites
    useEffect(() => {
        const favoriteIds = JSON.parse(localStorage.getItem("greenNestFavorites") || "[]");
        const favoritePlants = mockPlants.filter((plant) => favoriteIds.includes(plant.id));
        setWishlistItems(favoritePlants);
    }, [favorites]);

    // Handle Adding to Cart
    const handleAddToCart = (e, id, name) => {
        e.stopPropagation();
        let updatedCart = [...cartItems];
        if (updatedCart.includes(id)) {
            updatedCart = updatedCart.filter((item) => item !== id);
        } else {
            updatedCart.push(id);
        }
        setCartItems(updatedCart);
        localStorage.setItem("greenNestCart", JSON.stringify(updatedCart));
        window.dispatchEvent(new CustomEvent("cartUpdated", { detail: { count: updatedCart.length } }));
    };

    // Handle Removing from Favorites
    const toggleFavorite = (e, id) => {
        e.stopPropagation();
        const updatedFavorites = favorites.filter((plantId) => plantId !== id);

        localStorage.setItem("greenNestFavorites", JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
        setWishlistItems((prev) => prev.filter((plant) => plant.id !== id));

        window.dispatchEvent(
            new CustomEvent("favoriteUpdated", {
                detail: { count: updatedFavorites.length },
            })
        );
    };

    const filteredPlants = wishlistItems;

    if (wishlistItems.length === 0) {
        return (
            <div style={styles.emptyContainer}>
                <div style={styles.emptyIconCircle}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a0aec0" strokeWidth="1.5">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                </div>
                <h2 style={styles.emptyHeading}>Your wishlist is empty</h2>
                <p style={styles.emptySubtext}>Looks like you haven't added any plants yet.</p>
                <button onClick={() => navigate("/shop")} style={styles.browseBtn}>
                    🌿 Browse Plants
                </button>
            </div>
        );
    }

    return (
        <div style={styles.page}>
            <style>{`
                .cart-btn-transition {
                    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                                transform 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }
                .icon-pop {
                    animation: iconPopAnim 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
                @keyframes iconPopAnim {
                    0% { transform: scale(0.5); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
            `}</style>
            <div style={styles.breadcrumb}>
                <span onClick={() => navigate("/")} style={styles.crumbLink}>Home</span> / <span>Wishlist</span>
            </div>

            <h1 style={styles.mainTitle}>Your Wishlist</h1>

            {wishlistItems.length === 0 ? (
                <div style={styles.emptyState}>

                    <button
                        style={styles.shopBtn}
                        onClick={() => navigate("/shop")}
                    >
                        Browse Plants
                    </button>
                </div>
            ) : (
                <main style={styles.productsGrid}>
                    {filteredPlants.length > 0 && filteredPlants.map((plant) => {
                        const isCardHovered = hoveredCardId === plant.id;
                        const isCartHovered = hoveredCartBtnId === plant.id;
                        const isInCart = cartItems.includes(plant.id);
                        const isFavorite = favorites.includes(plant.id);

                        return (
                            <div
                                key={plant.id}
                                onClick={() => navigate(`/product/${plant.id}`)}
                                style={{
                                    ...styles.card,
                                    transform: isCardHovered ? "translateY(-6px)" : "translateY(0)",
                                    boxShadow: isCardHovered
                                        ? "0 12px 20px -4px rgba(27, 77, 62, 0.12)"
                                        : "0 1px 3px rgba(0,0,0,0.02)",
                                }}
                                onMouseEnter={() => setHoveredCardId(plant.id)}
                                onMouseLeave={() => {
                                    setHoveredCardId(null);
                                    setHoveredCartBtnId(null);
                                }}
                            >
                                <div style={styles.imageWrapper}>
                                    <img
                                        src={plant.image}
                                        alt={plant.name}
                                        style={{
                                            ...styles.image,
                                            transform: isCardHovered ? "scale(1.05)" : "scale(1)",
                                        }}
                                    />
                                    <button onClick={(e) => toggleFavorite(e, plant.id)} style={styles.heartBtn}>
                                        {isFavorite ? <FaHeart color="#e53e3e" /> : <FaRegHeart color="#4a5568" />}
                                    </button>
                                    <span style={{ ...styles.badge, ...styles.categoryBadge }}>
                                        {plant.category || "Plant"}
                                    </span>
                                    {plant.discount && (
                                        <span style={{ ...styles.badge, ...styles.discountBadge }}>
                                            {plant.discount}
                                        </span>
                                    )}
                                </div>

                                <div style={styles.cardBody}>
                                    <span style={styles.scientific}>
                                        {plant.scientificName}
                                    </span>

                                    <h4 style={styles.plantTitle}>
                                        {plant.name}
                                    </h4>

                                    <div style={styles.ratingRow}>
                                        <span style={styles.stars}>
                                            {"★".repeat(plant.rating || 0)}
                                            {"☆".repeat(5 - (plant.rating || 0))}
                                        </span>
                                        <span style={styles.reviewsCount}>
                                            ({plant.reviews || 120})
                                        </span>
                                    </div>

                                    <div style={styles.footer}>
                                        <div style={styles.priceBox}>
                                            <span style={styles.price}>${plant.price}</span>
                                            {plant.originalPrice && (
                                                <span style={styles.oldPrice}>${plant.originalPrice}</span>
                                            )}
                                        </div>

                                        <button
                                            className="cart-btn-transition"
                                            style={{
                                                ...styles.cartBtn,
                                                backgroundColor: isInCart
                                                    ? "#1b4d3e"
                                                    : isCartHovered
                                                        ? "#2a735d"
                                                        : "#236451",
                                                transform: isCartHovered ? "scale(1.08)" : "scale(1)",
                                            }}
                                            aria-label={isInCart ? "Remove from cart" : "Add to cart"}
                                            onMouseEnter={() => setHoveredCartBtnId(plant.id)}
                                            onMouseLeave={() => setHoveredCartBtnId(null)}
                                            onClick={(e) => handleAddToCart(e, plant.id, plant.name)}
                                        >
                                            {isInCart ? (
                                                <FaCheck size={13} className="icon-pop" style={styles.cartIcon} />
                                            ) : (
                                                <FaShoppingBag size={13} className="icon-pop" style={styles.cartIcon} />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </main>
            )}
        </div>
    );
}

// Keeping your original styles object exactly as provided
const styles = {
    page: {
        minHeight: "100vh",
        background: "#f9fbf9",
        padding: "120px 5% 60px",
        fontFamily: "'Inter', sans-serif",
    },
    header: {
        textAlign: "center",
        marginBottom: "3rem",
    },
    title: {
        fontSize: "3rem",
        fontWeight: "700",
        color: "#1b4d3e",
        marginBottom: "10px",
    },
    subtitle: {
        color: "#64748b",
        fontSize: "1rem",
    },
    productsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "2rem",
    },
    card: {
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #edf2f7",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        display: "flex",
        flexDirection: "column",
    },
    imageWrapper: {
        position: "relative",
        height: "260px",
        backgroundColor: "#f7fafc",
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.5s ease",
    },
    badge: {
        position: "absolute",
        padding: "4px 10px",
        borderRadius: "20px",
        fontSize: "0.72rem",
        fontWeight: "600",
    },
    categoryBadge: {
        top: "12px",
        left: "12px",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        color: "#1b4d3e",
    },
    discountBadge: {
        top: "12px",
        right: "12px",
        backgroundColor: "#22c55e",
        color: "#ffffff",
    },
    cardBody: {
        padding: "1.25rem",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
    },
    scientific: {
        fontSize: "0.85rem",
        color: "#718096",
        marginBottom: "4px",
        display: "block",
    },
    plantTitle: {
        margin: "0 0 8px 0",
        fontSize: "1.2rem",
        fontWeight: "700",
        color: "#1a202c",
    },
    ratingRow: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
        marginBottom: "1.25rem",
    },
    heartBtn: {
        position: "absolute",
        top: "40px",
        right: "12px",
        background: "rgba(255, 255, 255, 0.8)",
        border: "none",
        borderRadius: "50%",
        width: "32px",
        height: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 10,
        fontSize: "1rem",
        transition: "transform 0.2s ease",
    },
    stars: { color: "#f4c430", fontSize: "0.85rem", letterSpacing: "0.5px" },
    reviewsCount: { color: "#a0aec0", fontSize: "0.8rem" },
    footer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "auto",
    },
    priceBox: { display: "flex", alignItems: "baseline", gap: "6px" },
    price: { fontSize: "1.35rem", fontWeight: "700", color: "#1a202c" },
    oldPrice: {
        fontSize: "0.9rem",
        color: "#a0aec0",
        textDecoration: "line-through",
    },
    cartBtn: {
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        border: "none",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)",
    },
    cartIcon: { display: "block" },
    emptyState: { textAlign: "center", padding: "100px 20px" },
    emptyIcon: { fontSize: "4rem", marginBottom: "1rem" },
    shopBtn: {
        marginTop: "20px",
        background: "#1b4d3e",
        color: "#fff",
        border: "none",
        borderRadius: "30px",
        padding: "12px 28px",
        cursor: "pointer",
        fontWeight: "600",
    },
    emptyHeading: {
        fontSize: "1.75rem",
        fontWeight: "700",
        color: "#2d3748",
        margin: "0 0 0.5rem 0",
    },
    emptySubtext: {
        color: "#718096",
        fontSize: "1rem",
        margin: "0 0 2rem 0",
    },
    emptyContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "75vh",
        textAlign: "center",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#f9fbf9",
        padding: "0 1rem",
    },
    emptyIconCircle: {
        width: "90px",
        height: "90px",
        borderRadius: "50%",
        backgroundColor: "#f0f4f1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1.5rem",
    },
    browseBtn: {
        backgroundColor: "#1b4d3e",
        color: "#ffffff",
        border: "none",
        padding: "12px 28px",
        borderRadius: "30px",
        fontSize: "0.95rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "transform 0.2s ease",
        boxShadow: "0 4px 12px rgba(27, 77, 62, 0.12)",
    },
    breadcrumb: {
        fontSize: "0.85rem",
        color: "#718096",
        marginBottom: "1rem",
    },
    crumbLink: {
        cursor: "pointer",
        marginRight: "4px",
    },
    mainTitle: {
        fontFamily: "'Playfair Display', serif",
        fontSize: "2.5rem",
        color: "#1a202c",
        margin: "0 0 2.5rem 0",
        fontWeight: "700",
    },
};
export default Wishlist;