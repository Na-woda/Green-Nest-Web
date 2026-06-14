import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { mockPlants } from "../data/plants"; // Ensure this matches your actual mock data path

function CartPage() {
    const navigate = useNavigate();

    // 1. Core State Management
    const [cart, setCart] = useState([]);

    // 2. Load initially added items from local cache on page load
    useEffect(() => {
        const savedIds = JSON.parse(localStorage.getItem("greenNestCart") || "[]");

        // Convert plain IDs array into objects tracking an initial quantity of 1
        const initialCartItems = savedIds
            .map(id => {
                const plantDetails = mockPlants.find(p => p.id === id);
                if (!plantDetails) return null;
                return {
                    ...plantDetails,
                    quantity: 1
                };
            })
            .filter(item => item !== null);

        setCart(initialCartItems);
    }, []);

    // Helper utility to sync array states back out to the Navbar badge counter
    const updateGlobalStorage = (updatedCart) => {
        const structuralIds = updatedCart.map(item => item.id);
        localStorage.setItem("greenNestCart", JSON.stringify(structuralIds));

        // Broadcast custom window event to force live re-render updating the navbar counter
        const cartEvent = new CustomEvent("cartUpdated", {
            detail: { count: structuralIds.length }
        });
        window.dispatchEvent(cartEvent);
    };

    // 3. Control Handlers (Quantity Increments / Decrements)
    const handleQuantityChange = (id, change) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                const targetQuantity = item.quantity + change;
                return { ...item, quantity: targetQuantity < 1 ? 1 : targetQuantity };
            }
            return item;
        });
        setCart(updatedCart);
    };

    // 4. Trash Bin Item Deletions
    const handleRemoveItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        updateGlobalStorage(updatedCart);
    };

    // 5. Computed Subtotals
    const calculateSubtotal = () => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    };

    const subtotal = calculateSubtotal();
    const shipping = 0.00; // Free as displayed in video blueprint references
    const total = subtotal + shipping;

    // --- Empty Cart Component State View Layout ---
    if (cart.length === 0) {
        return (
            <div style={styles.emptyContainer}>
                <div style={styles.emptyIconCircle}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a0aec0" strokeWidth="1.5">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                </div>
                <h2 style={styles.emptyHeading}>Your cart is empty</h2>
                <p style={styles.emptySubtext}>Looks like you haven't added any plants yet.</p>
                <button onClick={() => navigate("/shop")} style={styles.browseBtn}>
                    🌿 Browse Plants
                </button>
            </div>
        );
    }

    // --- Standard Filled Cart Summary Grid ---
    return (
        <div style={styles.pageContainer}>
            {/* Breadcrumb Header links */}
            <div style={styles.breadcrumb}>
                <span onClick={() => navigate("/")} style={styles.crumbLink}>Home</span> / <span>Shopping Cart</span>
            </div>

            <h1 style={styles.mainTitle}>Your Cart</h1>

            <div style={styles.layoutGrid}>
                {/* Left Side: Items List Container */}
                <div style={styles.itemsColumn}>
                    {cart.map((item) => (
                        <div key={item.id} style={styles.itemCard}>
                            <img src={item.image} alt={item.name} style={styles.itemImg} />

                            <div style={styles.itemDetails}>
                                <h3 style={styles.plantName}>{item.name}</h3>
                                <span style={styles.plantCategory}>{item.category || "Indoor Plants"}</span>

                                {/* Quantity Controller Actions */}
                                <div style={styles.quantityRow}>
                                    <button
                                        onClick={() => handleQuantityChange(item.id, -1)}
                                        style={styles.quantityBtn}
                                    >
                                        <FaMinus size={10} />
                                    </button>
                                    <span style={styles.quantityValue}>{item.quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange(item.id, 1)}
                                        style={styles.quantityBtn}
                                    >
                                        <FaPlus size={10} />
                                    </button>
                                </div>
                            </div>

                            {/* Deletions & Individual Line Totals */}
                            <div style={styles.actionColumn}>
                                <button
                                    onClick={() => handleRemoveItem(item.id)}
                                    style={styles.deleteBtn}
                                    title="Remove item"
                                >
                                    <FaTrashAlt size={16} />
                                </button>
                                <span style={styles.linePrice}>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Total Summary Panel Card */}
                <aside style={styles.summaryCard}>
                    <h2 style={styles.summaryTitle}>Order Summary</h2>

                    <div style={styles.summaryRow}>
                        <span style={styles.summaryLabel}>Subtotal</span>
                        <span style={styles.summaryValue}>${subtotal.toFixed(2)}</span>
                    </div>

                    <div style={styles.summaryRow}>
                        <span style={styles.summaryLabel}>Shipping</span>
                        <span style={styles.freeShippingText}>Free</span>
                    </div>

                    <hr style={styles.divider} />

                    <div style={{ ...styles.summaryRow, marginBottom: "2rem" }}>
                        <span style={styles.totalLabel}>Total</span>
                        <span style={styles.totalValue}>${total.toFixed(2)}</span>
                    </div>

                    <button
                        style={styles.checkoutBtn}
                        onClick={() => navigate("/checkout")}
                    >
                        🔒 Checkout
                    </button>

                    <button style={styles.continueBtn} onClick={() => navigate("/shop")}>
                        ← Continue Shopping
                    </button>
                </aside>
            </div>
        </div>
    );
}

// Inline Styled Themes matching GreenNest UX standards
const styles = {
    pageContainer: {
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#f9fbf9",
        minHeight: "100vh",
        padding: "120px 8% 5rem 8%", // Extra top padding ensures navbar alignment avoids overlap
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
    layoutGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 360px",
        gap: "3rem",
        alignItems: "start",
    },
    itemsColumn: {
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
    },
    itemCard: {
        display: "flex",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "1.25rem",
        border: "1px solid #edf2f7",
        alignItems: "center",
        boxShadow: "0 1px 3px rgba(0,0,0,0.01)",
    },
    itemImg: {
        width: "90px",
        height: "90px",
        borderRadius: "12px",
        objectFit: "cover",
        backgroundColor: "#f7fafc",
    },
    itemDetails: {
        marginLeft: "1.5rem",
        flexGrow: 1,
    },
    plantName: {
        margin: "0 0 4px 0",
        fontSize: "1.15rem",
        fontWeight: "600",
        color: "#1a202c",
    },
    plantCategory: {
        fontSize: "0.85rem",
        color: "#a0aec0",
        display: "block",
        marginBottom: "1rem",
    },
    quantityRow: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f7fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "20px",
        width: "fit-content",
        padding: "2px",
    },
    quantityBtn: {
        background: "none",
        border: "none",
        width: "28px",
        height: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "#718096",
        borderRadius: "50%",
        transition: "background-color 0.15s",
    },
    quantityValue: {
        fontSize: "0.9rem",
        fontWeight: "600",
        color: "#2d3748",
        padding: "0 12px",
        minWidth: "20px",
        textAlign: "center",
    },
    actionColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-between",
        height: "90px",
        minWidth: "100px",
    },
    deleteBtn: {
        background: "none",
        border: "none",
        color: "#cbd5e0",
        cursor: "pointer",
        transition: "color 0.2s",
        padding: "4px",
    },
    linePrice: {
        fontSize: "1.2rem",
        fontWeight: "700",
        color: "#1a202c",
    },
    summaryCard: {
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        border: "1px solid #edf2f7",
        padding: "2rem",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.01)",
    },
    summaryTitle: {
        fontSize: "1.25rem",
        fontWeight: "700",
        color: "#1a202c",
        margin: "0 0 1.5rem 0",
        borderBottom: "1px solid #edf2f7",
        paddingBottom: "12px",
    },
    summaryRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem",
    },
    summaryLabel: {
        color: "#718096",
        fontSize: "0.95rem",
    },
    summaryValue: {
        fontWeight: "600",
        color: "#2d3748",
    },
    freeShippingText: {
        color: "#22c55e",
        fontWeight: "600",
    },
    divider: {
        border: "none",
        borderBottom: "1px solid #edf2f7",
        margin: "1.5rem 0",
    },
    totalLabel: {
        fontSize: "1.1rem",
        fontWeight: "700",
        color: "#1a202c",
    },
    totalValue: {
        fontSize: "1.5rem",
        fontWeight: "700",
        color: "#1b4d3e", // Primary Branding theme green
    },
    checkoutBtn: {
        width: "100%",
        backgroundColor: "#1b4d3e",
        color: "#ffffff",
        border: "none",
        padding: "14px",
        borderRadius: "30px",
        fontSize: "1rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background-color 0.2s",
        marginBottom: "1rem",
        boxShadow: "0 4px 12px rgba(27, 77, 62, 0.15)",
    },
    continueBtn: {
        width: "100%",
        background: "none",
        border: "none",
        color: "#718096",
        fontSize: "0.9rem",
        fontWeight: "500",
        cursor: "pointer",
        textAlign: "center",
        transition: "color 0.2s",
    },

    // --- Empty Layout States ---
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
};

export default CartPage;