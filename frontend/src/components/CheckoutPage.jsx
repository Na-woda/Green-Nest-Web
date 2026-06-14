import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { mockPlants } from "../data/plants";

function CheckoutPage() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    // Form Input States
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        countryCode: "+94",
        phone: "",
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvv: ""
    });

    const [showCvvHelp, setShowCvvHelp] = useState(false);

    // Load initial cart data from local storage
    useEffect(() => {
        const savedIds = JSON.parse(localStorage.getItem("greenNestCart") || "[]");

        // Count frequencies of each ID to handle multiple quantities if needed,
        // or map them sequentially based on your application state structure
        const itemCounts = savedIds.reduce((acc, id) => {
            acc[id] = (acc[id] || 0) + 1;
            return acc;
        }, {});

        const mappedCartItems = Object.keys(itemCounts).map(id => {
            const plantDetails = mockPlants.find(p => p.id === parseInt(id) || p.id === id);
            if (!plantDetails) return null;
            return {
                ...plantDetails,
                quantity: itemCounts[id]
            };
        }).filter(item => item !== null);

        setCart(mappedCartItems);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const calculateSubtotal = () => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    };

    const handleCardNumberChange = (e) => {
        let value = e.target.value.replace(/\D/g, ""); // only numbers

        // limit to 16 digits
        value = value.substring(0, 16);

        // add space every 4 digits
        value = value.replace(/(.{4})/g, "$1 ").trim();

        setFormData(prev => ({
            ...prev,
            cardNumber: value
        }));
    };

    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");

        // Limit to 4 digits (MMDD)
        value = value.substring(0, 4);

        // Validate month
        if (value.length >= 2) {
            let month = parseInt(value.substring(0, 2), 10);

            if (month > 12) {
                month = 12;
            }

            if (month < 1 && value.length === 2) {
                month = 1;
            }

            value =
                month.toString().padStart(2, "0") +
                value.substring(2);
        }

        // Add slash automatically
        if (value.length > 2) {
            value =
                value.substring(0, 2) +
                "/" +
                value.substring(2);
        }

        setFormData(prev => ({
            ...prev,
            expiry: value
        }));
    };

    const subtotal = calculateSubtotal();
    const shipping = 0.00; // Free shipping matched with video standards
    const total = subtotal + shipping;

    const handleSubmitOrder = (e) => {
        e.preventDefault();

        // Form Validation Check
        if (!formData.email || !formData.address || !formData.cardNumber) {
            alert("Please fill out all required fields.");
            return;
        }

        alert("🎉 Thank you for your order! Your plants are being prepared for shipping.");

        // Clear out the cart globally upon successful purchase checkout
        localStorage.removeItem("greenNestCart");
        window.dispatchEvent(new CustomEvent("cartUpdated", { detail: { count: 0 } }));

        // Redirect home
        navigate("/");
    };

    if (cart.length === 0) {
        return (
            <div style={styles.emptyContainer}>
                <h2>Your checkout is empty</h2>
                <p>Add some plants to your cart before checking out!</p>
                <button onClick={() => navigate("/shop")} style={styles.returnBtn}>Go to Shop</button>
            </div>
        );
    }

    return (
        <div style={styles.pageContainer}>
            <div style={styles.breadcrumb}>
                <span onClick={() => navigate("/cart")} style={styles.crumbLink}>Cart</span> / <span>Checkout</span>
            </div>

            <div style={styles.layoutGrid}>
                {/* Left Side: Checkout Forms */}
                <form onSubmit={handleSubmitOrder} style={styles.formContainer}>
                    <h2 style={styles.sectionHeading}>Contact Information</h2>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        style={styles.inputField}
                    />

                    <h2 style={{ ...styles.sectionHeading, marginTop: "2rem" }}>Shipping Address</h2>
                    <div style={styles.formRow}>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            style={styles.inputField}
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            style={styles.inputField}
                        />
                    </div>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        style={styles.inputField}
                    />
                    <div style={styles.formRow}>
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            required
                            value={formData.city}
                            onChange={handleInputChange}
                            style={styles.inputField}
                        />
                        <input
                            type="text"
                            name="postalCode"
                            placeholder="Postal Code"
                            required
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            style={styles.inputField}
                        />
                    </div>
                    <div style={styles.phoneContainer}>
                        <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleInputChange}
                            style={styles.countryCodeSelect}
                        >
                            <option value="+94">🇱🇰 +94</option>
                            <option value="+91">🇮🇳 +91</option>
                            <option value="+1">🇺🇸 +1</option>
                            <option value="+44">🇬🇧 +44</option>
                            <option value="+61">🇦🇺 +61</option>
                            <option value="+65">🇸🇬 +65</option>
                            <option value="+81">🇯🇵 +81</option>
                            <option value="+49">🇩🇪 +49</option>
                            <option value="+33">🇫🇷 +33</option>
                            <option value="+86">🇨🇳 +86</option>
                        </select>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            style={styles.phoneInput}
                        />
                    </div>

                    <h2 style={{ ...styles.sectionHeading, marginTop: "2rem" }}>Payment Details</h2>
                    <input
                        type="text"
                        name="cardName"
                        placeholder="Name on Card"
                        required
                        value={formData.cardName}
                        onChange={handleInputChange}
                        style={styles.inputField}
                    />
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number (💳)"
                        required
                        value={formData.cardNumber}
                        onChange={handleCardNumberChange}
                        maxLength={19}
                        style={styles.inputField}
                    />
                    <div style={styles.formRow}>
                        <input
                            type="text"
                            name="expiry"
                            placeholder="MM/DD"
                            required
                            value={formData.expiry}
                            onChange={handleExpiryChange}
                            maxLength={5}
                            style={styles.inputField}
                        />
                        <div style={styles.cvvContainer}>
                            <input
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                required
                                maxLength={3}
                                value={formData.cvv}
                                onChange={handleInputChange}
                                style={styles.inputField}
                            />

                            <span
                                style={styles.cvvHelpIcon}
                                onClick={() => setShowCvvHelp(!showCvvHelp)}
                            >
                                ❓
                            </span>

                            {showCvvHelp && (
                                <div style={styles.cvvPopup}>
                                    <div style={styles.demoCard}>
                                        <div style={styles.blackStrip}></div>

                                        <div style={styles.signatureArea}>
                                            <span style={styles.cvvBox}>123</span>
                                        </div>
                                    </div>

                                    <p style={styles.cvvText}>
                                        CVV is the 3-digit security code on the back of your card.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <button type="submit" style={styles.placeOrderBtn}>
                        Complete Purchase (${total.toFixed(2)})
                    </button>
                </form>

                {/* Right Side: Order Review Panel */}
                <aside style={styles.summaryCard}>
                    <h2 style={styles.summaryTitle}>Review Your Order</h2>

                    <div style={styles.itemsReviewList}>
                        {cart.map(item => (
                            <div key={item.id} style={styles.itemRow}>
                                <div style={styles.imgWrapper}>
                                    <img src={item.image} alt={item.name} style={styles.reviewImg} />
                                    <span style={styles.quantityBadge}>{item.quantity}</span>
                                </div>
                                <div style={styles.itemMeta}>
                                    <h4 style={styles.itemName}>{item.name}</h4>
                                    <span style={styles.itemCategory}>{item.category}</span>
                                </div>
                                <span style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    <hr style={styles.divider} />

                    <div style={styles.calcRow}>
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div style={styles.calcRow}>
                        <span>Shipping</span>
                        <span style={styles.freeText}>Free</span>
                    </div>

                    <hr style={styles.divider} />

                    <div style={styles.totalRow}>
                        <span>Total Due</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </aside>
            </div>
        </div>
    );
}

const styles = {
    pageContainer: {
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#f9fbf9",
        minHeight: "100vh",
        padding: "120px 8% 5rem 8%",
    },
    breadcrumb: {
        fontSize: "0.85rem",
        color: "#718096",
        marginBottom: "2rem",
    },
    crumbLink: {
        cursor: "pointer",
    },
    layoutGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 400px",
        gap: "4rem",
        alignItems: "start",
    },
    formContainer: {
        backgroundColor: "#ffffff",
        padding: "2.5rem",
        borderRadius: "16px",
        border: "1px solid #edf2f7",
        boxShadow: "0 1px 3px rgba(0,0,0,0.01)",
    },
    sectionHeading: {
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.4rem",
        color: "#1b4d3e",
        margin: "0 0 1.25rem 0",
        fontWeight: "700",
    },
    formRow: {
        display: "flex",
        gap: "1rem",
    },
    inputField: {
        width: "100%",
        padding: "12px 16px",
        borderRadius: "8px",
        border: "1px solid #e2e8f0",
        fontSize: "0.95rem",
        marginBottom: "1rem",
        outline: "none",
        boxSizing: "border-box",
        fontFamily: "inherit",
        transition: "border-color 0.2s",
        ':focus': {
            borderColor: "#1b4d3e"
        }
    },
    placeOrderBtn: {
        width: "100%",
        backgroundColor: "#1b4d3e",
        color: "#ffffff",
        border: "none",
        padding: "14px",
        borderRadius: "30px",
        fontSize: "1rem",
        fontWeight: "600",
        cursor: "pointer",
        marginTop: "1.5rem",
        transition: "background-color 0.2s",
        boxShadow: "0 4px 12px rgba(27, 77, 62, 0.15)",
    },
    summaryCard: {
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        border: "1px solid #edf2f7",
        padding: "2rem",
        position: "sticky",
        top: "120px",
    },
    summaryTitle: {
        fontSize: "1.2rem",
        fontWeight: "700",
        color: "#1a202c",
        margin: "0 0 1.5rem 0",
    },
    itemsReviewList: {
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        maxHeight: "300px",
        overflowY: "auto",
        paddingRight: "5px",
    },
    itemRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    imgWrapper: {
        position: "relative",
    },
    reviewImg: {
        width: "60px",
        height: "60px",
        borderRadius: "8px",
        objectFit: "cover",
        border: "1px solid #edf2f7",
        backgroundColor: "#f7fafc",
    },
    quantityBadge: {
        position: "absolute",
        top: "-8px",
        right: "-8px",
        backgroundColor: "#718096",
        color: "#ffffff",
        fontSize: "0.75rem",
        fontWeight: "600",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    itemMeta: {
        flexGrow: 1,
        marginLeft: "1rem",
        paddingRight: "10px",
    },
    itemName: {
        margin: 0,
        fontSize: "0.95rem",
        fontWeight: "600",
        color: "#2d3748",
    },
    itemCategory: {
        fontSize: "0.8rem",
        color: "#a0aec0",
    },
    itemPrice: {
        fontWeight: "600",
        fontSize: "0.95rem",
        color: "#2d3748",
    },
    divider: {
        border: "none",
        borderBottom: "1px solid #edf2f7",
        margin: "1.25rem 0",
    },
    calcRow: {
        display: "flex",
        justifyContent: "space-between",
        color: "#718096",
        fontSize: "0.95rem",
        marginBottom: "0.75rem",
    },
    freeText: {
        color: "#22c55e",
        fontWeight: "600",
    },
    totalRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "1.1rem",
        fontWeight: "700",
        color: "#1a202c",
    },
    emptyContainer: {
        textAlign: "center",
        padding: "150px 1rem",
        fontFamily: "inherit",
    },
    returnBtn: {
        backgroundColor: "#1b4d3e",
        color: "#fff",
        border: "none",
        padding: "10px 24px",
        borderRadius: "20px",
        cursor: "pointer",
        marginTop: "1rem",
    },
    phoneContainer: {
        display: "flex",
        gap: "10px",
        marginBottom: "1rem",
    },

    countryCodeSelect: {
        width: "120px",
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #e2e8f0",
        fontSize: "0.95rem",
        backgroundColor: "#fff",
        cursor: "pointer",
    },

    phoneInput: {
        flex: 1,
        padding: "12px 16px",
        borderRadius: "8px",
        border: "1px solid #e2e8f0",
        fontSize: "0.95rem",
        outline: "none",
    },
    cvvContainer: {
        position: "relative",
        width: "100%",
    },

    cvvHelpIcon: {
        position: "absolute",
        right: "12px",
        top: "12px",
        cursor: "pointer",
        fontSize: "18px",
        color: "#1b4d3e",
    },

    cvvPopup: {
        position: "absolute",
        top: "50px",
        right: "0",
        width: "260px",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        zIndex: 1000,
    },

    cvvImage: {
        width: "100%",
        borderRadius: "8px",
    },

    cvvText: {
        marginTop: "8px",
        fontSize: "0.85rem",
        color: "#555",
    },
    demoCard: {
        width: "100%",
        backgroundColor: "#f8fafc",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        boxSizing: "border-box",
    },

    blackStrip: {
        height: "35px",
        backgroundColor: "#000",
        borderRadius: "4px",
        marginBottom: "15px",
    },

    signatureArea: {
        height: "35px",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: "10px",
    },

    cvvBox: {
        border: "2px solid red",
        padding: "2px 8px",
        fontWeight: "700",
        borderRadius: "4px",
    },
};

export default CheckoutPage;