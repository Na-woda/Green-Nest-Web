import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaShoppingBag, FaCheck, FaHeart, FaRegHeart } from "react-icons/fa";
import { mockPlants } from "../data/plants";
import heroBg from '../assets/3.jpg';

function ShopPage() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const urlCategory = searchParams.get("category") || "All Plants";

    const [selectedCategory, setSelectedCategory] = useState(urlCategory);
    const [priceRange, setPriceRange] = useState(100);
    const [searchQuery, setSearchQuery] = useState("");

    const [hoveredCardId, setHoveredCardId] = useState(null);
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [hoveredCartBtnId, setHoveredCartBtnId] = useState(null);

    // UPDATED STATE: Restores cart array configurations out of localStorage cache on initialization
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem("greenNestCart");
        return saved ? JSON.parse(saved) : [];
    });

    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("greenNestFavorites");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        setSelectedCategory(urlCategory);
    }, [urlCategory]);

    const handleCategoryChange = (cat) => {
        setSelectedCategory(cat);
        if (cat === "All Plants") {
            searchParams.delete("category");
        } else {
            searchParams.set("category", cat);
        }
        setSearchParams(searchParams);
    };

    // UPDATED FUNCTION: Dispatches real-time broadcast details cleanly to update navbar counts
    const handleAddToCart = (e, plantId, plantName) => {
        e.stopPropagation();

        let updatedCart = [...cartItems];
        if (updatedCart.includes(plantId)) {
            updatedCart = updatedCart.filter((id) => id !== plantId);
            console.log("Removed from cart:", plantName);
        } else {
            updatedCart.push(plantId);
            console.log("Added to cart:", plantName);
        }

        // Apply changes to layout states and disk cache
        setCartItems(updatedCart);
        localStorage.setItem("greenNestCart", JSON.stringify(updatedCart));

        // Fire custom window event to trigger automatic tracking inside Navbar component
        const cartEvent = new CustomEvent("cartUpdated", {
            detail: { count: updatedCart.length }
        });
        window.dispatchEvent(cartEvent);
    };

    const toggleFavorite = (e, plantId) => {
        e.stopPropagation();

        let updatedFavorites = [...favorites];

        if (updatedFavorites.includes(plantId)) {
            updatedFavorites = updatedFavorites.filter(
                (id) => id !== plantId
            );
        } else {
            updatedFavorites.push(plantId);
        }

        setFavorites(updatedFavorites);
        localStorage.setItem(
            "greenNestFavorites",
            JSON.stringify(updatedFavorites)
        );

        window.dispatchEvent(
            new CustomEvent("favoriteUpdated", {
                detail: {
                    count: updatedFavorites.length,
                },
            })
        );
    };

    const categories = [
        "All Plants",
        "Air Purifying",
        "Low Light",
        "Pet-Friendly",
        "Flowering",
        "Large Floor",
        "Succulents",
    ];

    const filteredPlants = mockPlants.filter((plant) => {
        const matchesCategory =
            selectedCategory === "All Plants" ||
            (plant.scientificName && plant.scientificName.toLowerCase().includes(selectedCategory.toLowerCase())) ||
            (plant.category && plant.category.toLowerCase().includes(selectedCategory.toLowerCase()));

        const matchesPrice = plant.price <= parseFloat(priceRange);
        const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesPrice && matchesSearch;
    });

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

            <header style={styles.heroSection}>
                <div style={styles.heroOverlay}>
                    <div style={styles.heroContent}>
                        <span style={styles.heroTag}>
                            <span style={styles.icon}>🏠</span>
                            Our Full Collection
                        </span>

                        <h1 style={styles.heroTitle}>
                            Handpicked Plants for{' '}
                            <span style={styles.highlight}>Every Space</span>
                        </h1>

                        <p style={styles.heroDescription}>
                            Browse our entire collection of healthy, nursery-grown indoor plants —
                            from statement floor plants to tiny desk companions, all delivered fresh to your door.
                        </p>
                    </div>
                </div>
            </header>

            <div style={styles.utilityBar}>
                <div style={styles.searchContainer}>
                    <span style={styles.searchIcon}>🔍</span>
                    <input
                        type="text"
                        placeholder="Search plants..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={styles.searchInput}
                    />
                </div>

                <select style={styles.select}>
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>

            <div style={styles.mainLayout}>
                <aside style={styles.sidebarCard}>
                    <h3 style={styles.sidebarHeading}>Categories</h3>

                    <div style={styles.categoryContainer}>
                        {categories.map((cat) => {
                            const isSelected = selectedCategory === cat;
                            const isHovered = hoveredCategory === cat;
                            return (
                                <div
                                    key={cat}
                                    onClick={() => handleCategoryChange(cat)}
                                    onMouseEnter={() => setHoveredCategory(cat)}
                                    onMouseLeave={() => setHoveredCategory(null)}
                                    style={{
                                        ...styles.categoryItem,
                                        backgroundColor: isSelected
                                            ? "#cbe3db"
                                            : isHovered
                                                ? "#f0f4f1"
                                                : "transparent",
                                        color: isSelected ? "#1b4d3e" : "#444444",
                                        fontWeight: isSelected ? "600" : "400",
                                        transform: isHovered && !isSelected ? "translateX(4px)" : "none",
                                    }}
                                >
                                    {cat}
                                </div>
                            );
                        })}
                    </div>

                    <h3 style={{ ...styles.sidebarHeading, marginTop: "24px" }}>
                        Price Range
                    </h3>

                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        style={styles.slider}
                    />

                    <div style={styles.priceLabelRow}>
                        <span>$0</span>
                        <span style={styles.rangeValue}>${priceRange}</span>
                    </div>
                </aside>

                <main style={styles.productsGrid}>
                    {filteredPlants.length > 0 ? (
                        filteredPlants.map((plant) => {
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
                                                {"★".repeat(plant.rating)}
                                                {"☆".repeat(5 - plant.rating)}
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
                        })
                    ) : (
                        <div style={styles.noResultsContainer}>
                            <p style={styles.noResultsText}>No plants found matching your current filter settings.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    handleCategoryChange("All Plants");
                                    setPriceRange(100);
                                }}
                                style={styles.clearFiltersBtn}
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

const styles = {
    page: {
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#f9fbf9",
        minHeight: "100vh",
        padding: "0 5% 4rem 5%",
        marginTop: "0px",
    },
    heroSection: {
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px',
        width: 'auto',
        marginLeft: '-5.3vw',
        marginRight: '-5.3vw',
        marginBottom: '2.5rem',
        position: 'relative',
    },
    heroOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    heroContent: {
        maxWidth: '800px',
        color: '#fff',
        padding: '0 1.5rem',
    },
    heroTag: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding: '0.4rem 1.2rem',
        borderRadius: '20px',
        fontSize: '0.85rem',
        backdropFilter: 'blur(4px)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        marginBottom: '0.5rem',
    },
    icon: { marginRight: '2px' },
    heroTitle: {
        fontFamily: "'Playfair Display', serif, 'Inter'",
        fontSize: '3.5rem',
        margin: '0.5rem 0 1.2rem 0',
        fontWeight: '700',
        lineHeight: '1.15',
        letterSpacing: '-0.5px',
    },
    highlight: { color: '#a4d4ae' },
    heroDescription: {
        fontSize: '1.15rem',
        lineHeight: '1.6',
        opacity: '0.95',
        fontWeight: '400',
        maxWidth: '650px',
        margin: '0 auto',
    },
    utilityBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2rem",
        gap: "1rem",
    },
    searchContainer: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#ffffff",
        border: "1px solid #edf2f7",
        borderRadius: "30px",
        padding: "8px 16px",
        width: "300px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.01)",
    },
    searchIcon: { marginRight: "8px", fontSize: "0.9rem" },
    searchInput: {
        border: "none",
        outline: "none",
        width: "100%",
        fontSize: "0.9rem",
        color: "#4a5568",
    },
    select: {
        padding: "10px 16px",
        borderRadius: "30px",
        border: "1px solid #edf2f7",
        backgroundColor: "#ffffff",
        color: "#4a5568",
        outline: "none",
        fontSize: "0.9rem",
        cursor: "pointer",
    },
    mainLayout: {
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        gap: "2.5rem",
        alignItems: "start",
    },
    sidebarCard: {
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "1.5rem",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.01)",
        border: "1px solid #edf2f7",
    },
    sidebarHeading: {
        fontSize: "1.1rem",
        fontWeight: "700",
        color: "#1a202c",
        margin: "0 0 1rem 0",
    },
    categoryContainer: { display: "flex", flexDirection: "column", gap: "4px" },
    categoryItem: {
        padding: "10px 12px",
        borderRadius: "8px",
        fontSize: "0.92rem",
        cursor: "pointer",
        transition: "all 0.2s ease",
    },
    slider: {
        width: "100%",
        accentColor: "#1b4d3e",
        cursor: "pointer",
        marginTop: "8px",
    },
    priceLabelRow: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "0.85rem",
        color: "#718096",
        marginTop: "6px",
    },
    rangeValue: { fontWeight: "600", color: "#1b4d3e" },
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
        fontSize: "0.80rem",
        color: "#718096",
        marginBottom: "4px",
        display: "block",
    },
    plantTitle: {
        margin: "0 0 8px 0",
        fontSize: "16px",
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
        right: "12px", // If you move discount badge to left, set right: 'auto', left: '12px'
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
        transition: "transform 0.2s ease"
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
    price: { fontSize: "1rem", fontWeight: "700", color: "#1a202c" },
    oldPrice: {
        fontSize: "0.8rem",
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
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.08)"
    },
    cartIcon: { display: "block" },
    noResultsContainer: { gridColumn: "1 / -1", textAlign: "center", padding: "4rem 1rem" },
    noResultsText: { color: "#718096", marginBottom: "1rem" },
    clearFiltersBtn: {
        backgroundColor: "#1b4d3e",
        color: "#ffffff",
        border: "none",
        padding: "10px 24px",
        borderRadius: "30px",
        fontSize: "0.9rem",
        fontWeight: "600",
        cursor: "pointer",
    },
};

export default ShopPage;