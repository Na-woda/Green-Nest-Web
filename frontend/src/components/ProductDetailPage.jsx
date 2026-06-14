import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaShoppingBag, FaTrash, FaEdit, FaStar } from "react-icons/fa";
import { mockPlants } from "../data/plants";

function ProductDetailPage() {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState("");

    // --- PERSISTENT REVIEWS STATE ---
    const [reviews, setReviews] = useState(() => {
        const savedReviews = localStorage.getItem(`reviews_plant_${id}`);
        if (savedReviews) {
            return JSON.parse(savedReviews);
        }
        return [
            {
                id: 1,
                name: "Amanda K.",
                stars: 5,
                date: "May 15, 2026",
                text: "I was nervous ordering a plant online, but this Monstera arrived in perfect condition! It was packaged so carefully. Three months later and it already put out two massive new leaves with beautiful fenestrations. Worth every penny!",
                isUserReview: false // System default: cannot be edited/deleted
            },
            {
                id: 2,
                name: "David L.",
                stars: 4,
                date: "April 28, 2026",
                text: "Absolutely stunning plant. It was even bigger than I expected from the photos. The care card included was so helpful — I am a first-time plant owner and this made everything easy.",
                isUserReview: false // System default: cannot be edited/deleted
            }
        ];
    });

    const [reviewerName, setReviewerName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState(null);
    const [editingReviewId, setEditingReviewId] = useState(null);

    // Effect to handle plant loading when the ID changes
    useEffect(() => {
        const foundPlant = mockPlants.find((p) => p.id === parseInt(id));
        if (foundPlant) {
            setPlant(foundPlant);
            setActiveImage(foundPlant.image);
            setQuantity(1);

            const savedReviews = localStorage.getItem(`reviews_plant_${id}`);
            if (savedReviews) {
                setReviews(JSON.parse(savedReviews));
            } else {
                setReviews([
                    {
                        id: 1,
                        name: "Amanda K.",
                        stars: 5,
                        date: "May 15, 2026",
                        text: "I was nervous ordering a plant online, but this Monstera arrived in perfect condition! It was packaged so carefully. Three months later and it already put out two massive new leaves with beautiful fenestrations. Worth every penny!",
                        isUserReview: false
                    },
                    {
                        id: 2,
                        name: "David L.",
                        stars: 4,
                        date: "April 28, 2026",
                        text: "Absolutely stunning plant. It was even bigger than I expected from the photos. The care card included was so helpful — I am a first-time plant owner and this made everything easy.",
                        isUserReview: false
                    }
                ]);
            }

            setReviewerName("");
            setReviewText("");
            setRating(5);
            setEditingReviewId(null);
        }
    }, [id]);

    // Save to localStorage whenever reviews change
    useEffect(() => {
        if (id) {
            localStorage.setItem(`reviews_plant_${id}`, JSON.stringify(reviews));
        }
    }, [reviews, id]);

    if (!plant) {
        return (
            <div style={styles.errorContainer}>
                <h2>Plant Not Found</h2>
                <Link to="/" style={styles.backButton}>Back to Shop</Link>
            </div>
        );
    }

    const dynamicAverage = reviews.length > 0
        ? (reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length).toFixed(1)
        : "0.0";

    // --- REVIEW HANDLERS ---
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (!reviewerName.trim() || !reviewText.trim()) return;

        if (editingReviewId) {
            setReviews(prev =>
                prev.map(rev =>
                    rev.id === editingReviewId
                        ? { ...rev, name: reviewerName, text: reviewText, stars: rating, date: `${new Date().toLocaleDateString()} (Edited)` }
                        : rev
                )
            );
            setEditingReviewId(null);
        } else {
            const newReview = {
                id: Date.now(),
                name: reviewerName,
                stars: rating,
                date: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
                text: reviewText,
                isUserReview: true // Crucial flag: identifying that the current visitor created this!
            };
            setReviews(prev => [newReview, ...prev]);
        }

        setReviewerName("");
        setReviewText("");
        setRating(5);
    };

    const handleEditSetup = (review) => {
        // Double check safeguard protection block
        if (!review.isUserReview) return;

        setEditingReviewId(review.id);
        setReviewerName(review.name);
        setReviewText(review.text);
        setRating(review.stars);
    };

    const handleDeleteReview = (reviewId, isUserReview) => {
        if (!isUserReview) return;

        if (window.confirm("Are you sure you want to delete this review?")) {
            setReviews(prev => prev.filter(rev => rev.id !== reviewId));
        }
    };

    const handleCancelEdit = () => {
        setEditingReviewId(null);
        setReviewerName("");
        setReviewText("");
        setRating(5);
    };

    const displayThumbnails = plant.images && plant.images.length > 0 ? plant.images : [plant.image];
    const recommendedPlants = mockPlants.filter((p) => p.id !== plant.id).slice(0, 4);
    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    const totalPrice = (plant.price * quantity).toFixed(2);

    return (
        <div style={styles.page}>
            {/* BREADCRUMB */}
            <div style={styles.breadcrumb}>
                <Link to="/" style={styles.breadcrumbLink}>Shop</Link>
                <span style={styles.breadcrumbSeparator}>/</span>
                <Link to={`/?category=${encodeURIComponent(plant.category || "All Plants")}`} style={styles.breadcrumbLink}>
                    {plant.category || "Plants"}
                </Link>
                <span style={styles.breadcrumbSeparator}>/</span>
                <span style={styles.breadcrumbCurrent}>{plant.name}</span>
            </div>

            {/* MAIN CONTENT */}
            <div style={styles.mainLayout}>
                {/* GALLERY */}
                <div style={styles.galleryContainer}>
                    <div style={styles.mainImageWrapper}>
                        <img src={activeImage} alt={plant.name} style={styles.mainImage} />
                    </div>
                    <div style={styles.thumbnailRow}>
                        {displayThumbnails.map((img, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveImage(img)}
                                style={{
                                    ...styles.thumbnailWrapper,
                                    borderColor: activeImage === img ? "#1b4d3e" : "#edf2f7",
                                }}
                            >
                                <img src={img} alt={`view-${index}`} style={styles.thumbnail} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* DETAILS PANEL */}
                <div style={styles.detailsContainer}>
                    <div style={styles.badgeRow}>
                        {plant.category && (
                            <span style={{ ...styles.badge, ...styles.bestsellerBadge }}>{plant.category}</span>
                        )}
                        <span style={{ ...styles.badge, ...styles.categoryBadge }}>
                            {plant.scientificName || "Large Floor Plants"}
                        </span>
                    </div>

                    <h1 style={styles.title}>{plant.name}</h1>

                    <div style={styles.ratingRow}>
                        <span style={styles.stars}>{"★".repeat(Math.round(dynamicAverage))}</span>
                        <span style={styles.reviewsCount}>{dynamicAverage} ({reviews.length} reviews)</span>
                    </div>

                    <div style={styles.priceRow}>
                        <span style={styles.price}>${plant.price}</span>
                        {plant.originalPrice && <span style={styles.oldPrice}>${plant.originalPrice}</span>}
                    </div>

                    <p style={styles.description}>
                        {plant.description || "The iconic Monstera Deliciosa..."}
                    </p>

                    <div style={styles.actionRow}>
                        <div style={styles.quantityWidget}>
                            <button onClick={handleDecrement} style={styles.qtyBtn}>−</button>
                            <span style={styles.qtyValue}>{quantity}</span>
                            <button onClick={handleIncrement} style={styles.qtyBtn}>+</button>
                        </div>

                        <button style={styles.addToCartBtn}>
                            <FaShoppingBag size={14} style={styles.cartIcon} />
                            Add to Cart — ${totalPrice}
                        </button>
                    </div>

                    <div style={styles.tagSpecRow}>
                        <div style={styles.tagSpec}>🌿 Air Purifier</div>
                    </div>

                    <div style={styles.stockNotice}>
                        <span style={styles.stockDot}>●</span> <strong>{plant.stock || 15}</strong> in stock — ready to ship
                    </div>
                </div>
            </div>

            {/* CARE INSTRUCTIONS SECTION */}
            <div style={styles.careSection}>
                <h3 style={styles.sectionHeading}>Care Instructions</h3>
                <div style={styles.careGrid}>
                    <div style={styles.careCard}>
                        <div style={styles.careHeader}><span style={styles.careIconBox}>☀️</span> Care Level</div>
                        <p style={styles.careText}>{plant.careLevel || "Easy to Moderate"}</p>
                    </div>
                    <div style={styles.careCard}>
                        <div style={styles.careHeader}><span style={styles.careIconBox}>🌤️</span> Light Needs</div>
                        <p style={styles.careText}>{plant.lightNeeds || "Bright indirect light."}</p>
                    </div>
                    <div style={styles.careCard}>
                        <div style={styles.careHeader}><span style={styles.careIconBox}>💧</span> Watering</div>
                        <p style={styles.careText}>{plant.watering || "Water every 1-2 weeks."}</p>
                    </div>
                    <div style={styles.careCard}>
                        <div style={styles.careHeader}><span style={styles.careIconBox}>☁️</span> Humidity</div>
                        <p style={styles.careText}>{plant.humidity || "Prefers medium to high humidity."}</p>
                    </div>
                </div>
            </div>

            {/* CUSTOMER REVIEWS SECTION */}
            <div style={styles.reviewsSection}>
                <h3 style={styles.sectionHeading}>Customer Reviews</h3>

                {/* WRITE / EDIT REVIEW FORM */}
                <form onSubmit={handleReviewSubmit} style={styles.reviewForm}>
                    <h4 style={styles.formTitle}>{editingReviewId ? "Edit Your Review" : "Share Your Thoughts"}</h4>

                    <div style={styles.starRatingInputRow}>
                        <span style={styles.ratingLabel}>Your Rating:</span>
                        <div style={styles.starContainer}>
                            {[1, 2, 3, 4, 5].map((starValue) => {
                                const isSelected = starValue <= (hoverRating || rating);
                                return (
                                    <button
                                        type="button"
                                        key={starValue}
                                        onClick={() => setRating(starValue)}
                                        onMouseEnter={() => setHoverRating(starValue)}
                                        onMouseLeave={() => setHoverRating(null)}
                                        style={styles.starSelectBtn}
                                    >
                                        <FaStar
                                            size={22}
                                            color={isSelected ? "#f4c430" : "#edf2f7"}
                                            style={{ transition: "color 0.15s ease" }}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div style={styles.formGroup}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={reviewerName}
                            onChange={(e) => setReviewerName(e.target.value)}
                            style={styles.formInput}
                            required
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <textarea
                            rows="4"
                            placeholder="Write your review here..."
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            style={styles.formTextArea}
                            required
                        />
                    </div>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <button type="submit" style={styles.submitReviewBtn}>
                            {editingReviewId ? "Update Review" : "Submit Review"}
                        </button>
                        {editingReviewId && (
                            <button type="button" onClick={handleCancelEdit} style={styles.cancelEditBtn}>
                                Cancel
                            </button>
                        )}
                    </div>
                </form>

                {/* REVIEWS LIST */}
                <div style={styles.reviewWrapper}>
                    {reviews.length === 0 ? (
                        <p style={{ color: "#718096", fontStyle: "italic" }}>No reviews yet. Be the first to write one!</p>
                    ) : (
                        reviews.map((review) => (
                            <div key={review.id} style={styles.reviewItem}>
                                <div style={styles.reviewMeta}>
                                    <strong>{review.name}</strong>
                                    <span style={styles.reviewStars}>{"★".repeat(review.stars)}</span>
                                    <span style={styles.reviewDate}>{review.date}</span>

                                    {/* --- CONDITIONALLY RENDER EDIT/DELETE BUTTONS --- */}
                                    {review.isUserReview && (
                                        <div style={styles.reviewActions}>
                                            <button
                                                onClick={() => handleEditSetup(review)}
                                                style={styles.actionBtn}
                                                title="Edit Review"
                                            >
                                                <FaEdit size={14} color="#4a5568" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteReview(review.id, review.isUserReview)}
                                                style={styles.actionBtn}
                                                title="Delete Review"
                                            >
                                                <FaTrash size={14} color="#e53e3e" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <p style={styles.reviewText}>{review.text}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* CROSS SELL SECTION */}
            <div style={styles.crossSellSection}>
                <h3 style={styles.sectionHeading}>Also Like</h3>
                <div style={styles.crossSellGrid}>
                    {recommendedPlants.map((recPlant) => (
                        <Link to={`/product/${recPlant.id}`} key={recPlant.id} style={styles.crossCard}>
                            <div style={styles.crossImageWrapper}>
                                <img src={recPlant.image} alt={recPlant.name} style={styles.crossImage} />
                            </div>
                            <div style={styles.crossCardBody}>
                                <span style={styles.crossScientific}>{recPlant.scientificName || "Houseplant"}</span>
                                <h4 style={styles.crossTitle}>{recPlant.name}</h4>
                                <span style={styles.crossPrice}>${recPlant.price}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
/* ================= JAVASCRIPT OBJECT STYLING MATRIX ================= */
const styles = {
    page: {
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#f9fbf9",
        minHeight: "100vh",
        padding: "0 5% 4rem 5%",
        marginTop: "100px", // To offset the fixed navbar height
    },
    breadcrumb: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "1.5rem 0",
        fontSize: "0.88rem",
        color: "#718096",
    },
    breadcrumbLink: {
        textDecoration: "none",
        color: "#718096",
        cursor: "pointer",
    },
    breadcrumbSeparator: {
        color: "#a0aec0",
    },
    breadcrumbCurrent: {
        color: "#1b4d3e",
        fontWeight: "500",
    },
    mainLayout: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "3.5rem",
        alignItems: "start",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        padding: "2.5rem",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.01)",
    },
    galleryContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    mainImageWrapper: {
        width: "100%",
        height: "600px",
        backgroundColor: "#f7fafc",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    mainImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    thumbnailRow: {
        display: "flex",
        gap: "12px",
    },
    thumbnailWrapper: {
        width: "80px",
        height: "80px",
        borderRadius: "8px",
        overflow: "hidden",
        border: "2px solid #edf2f7",
        cursor: "pointer",
        backgroundColor: "#f7fafc",
        transition: "border-color 0.2s ease",
    },
    thumbnail: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    detailsContainer: {
        display: "flex",
        flexDirection: "column",
    },
    badgeRow: {
        display: "flex",
        gap: "8px",
        marginBottom: "12px",
    },
    badge: {
        padding: "4px 10px",
        borderRadius: "20px",
        fontSize: "0.75rem",
        fontWeight: "600",
    },
    bestsellerBadge: {
        backgroundColor: "#fef3c7",
        color: "#d97706",
    },
    categoryBadge: {
        backgroundColor: "#edf2f7",
        color: "#4a5568",
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "700",
        color: "#1a202c",
        margin: "0 0 10px 0",
    },
    ratingRow: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "1.5rem",
    },
    stars: {
        color: "#f4c430",
        fontSize: "1rem",
        letterSpacing: "1px",
    },
    reviewsCount: {
        color: "#718096",
        fontSize: "0.9rem",
    },
    priceRow: {
        display: "flex",
        alignItems: "baseline",
        gap: "10px",
        marginBottom: "1.5rem",
    },
    price: {
        fontSize: "2rem",
        fontWeight: "700",
        color: "#1a202c",
    },
    oldPrice: {
        fontSize: "1.2rem",
        color: "#a0aec0",
        textDecoration: "line-through",
    },
    description: {
        fontSize: "0.95rem",
        lineHeight: "1.65",
        color: "#4a5568",
        margin: "0 0 2rem 0",
    },
    actionRow: {
        display: "flex",
        gap: "1rem",
        marginBottom: "1.5rem",
    },
    quantityWidget: {
        display: "flex",
        alignItems: "center",
        border: "1px solid #edf2f7",
        borderRadius: "30px",
        backgroundColor: "#f7fafc",
        overflow: "hidden",
    },
    qtyBtn: {
        border: "none",
        background: "none",
        width: "40px",
        height: "44px",
        fontSize: "1.2rem",
        cursor: "pointer",
        color: "#4a5568",
        outline: "none",
    },
    qtyValue: {
        padding: "0 10px",
        fontWeight: "600",
        color: "#1a202c",
        minWidth: "20px",
        textAlign: "center",
    },
    addToCartBtn: {
        flex: 1,
        backgroundColor: "#1b4d3e",
        color: "#ffffff",
        border: "none",
        borderRadius: "30px",
        fontSize: "0.95rem",
        fontWeight: "600",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        transition: "background-color 0.2s ease",
    },
    cartIcon: {
        marginBottom: "2px",
    },
    tagSpecRow: {
        display: "flex",
        marginBottom: "1.5rem",
    },
    tagSpec: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "0.9rem",
        color: "#2f855a",
        backgroundColor: "#f0fff4",
        padding: "6px 14px",
        borderRadius: "8px",
        fontWeight: "500",
    },
    stockNotice: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "0.9rem",
        color: "#4a5568",
        borderTop: "1px solid #edf2f7",
        paddingTop: "1.5rem",
    },
    stockDot: {
        color: "#38a169",
        fontSize: "0.75rem",
    },
    errorContainer: {
        padding: "4rem 1rem",
        textAlign: "center",
    },
    backButton: {
        display: "inline-block",
        marginTop: "1rem",
        padding: "8px 20px",
        backgroundColor: "#1b4d3e",
        color: "#ffffff",
        textDecoration: "none",
        borderRadius: "20px",
    },
    sectionHeading: {
        fontSize: "1.5rem",
        fontWeight: "700",
        color: "#1a202c",
        marginBottom: "1.5rem",
        borderBottom: "2px solid #edf2f7",
        paddingBottom: "0.5rem",
    },
    careSection: {
        marginTop: "4rem",
    },
    careGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "1.5rem",
    },
    careCard: {
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "1.25rem",
        border: "1px solid #edf2f7",
    },
    careHeader: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontWeight: "600",
        color: "#1a202c",
        fontSize: "0.95rem",
        marginBottom: "8px",
    },
    careIconBox: {
        fontSize: "1.1rem",
    },
    careText: {
        fontSize: "0.88rem",
        lineHeight: "1.5",
        color: "#4a5568",
        margin: 0,
    },
    reviewsSection: {
        marginTop: "4rem",
    },
    reviewWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
    },
    reviewItem: {
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "1.5rem",
        border: "1px solid #edf2f7",
    },
    reviewMeta: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "8px",
        flexWrap: "wrap",
        fontSize: "0.9rem",
    },
    reviewStars: {
        color: "#f4c430",
        letterSpacing: "1px",
    },
    reviewDate: {
        color: "#a0aec0",
        fontSize: "0.8rem",
        marginLeft: "auto",
    },
    reviewText: {
        fontSize: "0.92rem",
        lineHeight: "1.6",
        color: "#4a5568",
        margin: 0,
    },
    reviewForm: {
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "1.5rem",
        border: "1px solid #edf2f7",
        marginBottom: "2rem",
    },

    starRatingInputRow: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "1.25rem"
    },
    ratingLabel: {
        fontSize: "0.9rem",
        color: "#4a5568",
        fontWeight: "500"
    },
    starContainer: {
        display: "flex",
        alignItems: "center"
    },
    starSelectBtn: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0 2px",
        outline: "none",
        display: "flex",
        alignItems: "center"
    },
    formTitle: {
        margin: "0 0 1rem 0",
        color: "#1a202c",
        fontSize: "1.1rem",
        fontWeight: "600"
    },
    formGroup: {
        marginBottom: "1rem",
    },
    formInput: {
        width: "100%",
        padding: "10px 14px",
        borderRadius: "6px",
        border: "1px solid #cbd5e0",
        fontSize: "0.9rem",
        fontFamily: "inherit",
        boxSizing: "border-box"
    },
    formTextArea: {
        width: "100%",
        padding: "10px 14px",
        borderRadius: "6px",
        border: "1px solid #cbd5e0",
        fontSize: "0.9rem",
        fontFamily: "inherit",
        resize: "vertical",
        boxSizing: "border-box"
    },
    submitReviewBtn: {
        backgroundColor: "#1b4d3e",
        color: "#ffffff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "20px",
        fontWeight: "600",
        fontSize: "0.88rem",
        cursor: "pointer"
    },
    cancelEditBtn: {
        backgroundColor: "#edf2f7",
        color: "#4a5568",
        border: "none",
        padding: "10px 20px",
        borderRadius: "20px",
        fontWeight: "600",
        fontSize: "0.88rem",
        cursor: "pointer"
    },
    reviewActions: {
        marginLeft: "auto",
        display: "flex",
        gap: "8px"
    },
    actionBtn: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    crossSellSection: {
        marginTop: "4rem",
    },
    crossSellGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "1.5rem",
    },
    crossCard: {
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        border: "1px solid #edf2f7",
        overflow: "hidden",
        textDecoration: "none",
        transition: "transform 0.2s ease",
        display: "block",
    },
    crossImageWrapper: {
        height: "220px",
        backgroundColor: "#f7fafc",
        overflow: "hidden",
    },
    crossImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    crossCardBody: {
        padding: "1rem",
    },
    crossScientific: {
        fontSize: "0.75rem",
        color: "#718096",
        display: "block",
        marginBottom: "4px",
    },
    crossTitle: {
        margin: "0 0 6px 0",
        fontSize: "0.95rem",
        fontWeight: "600",
        color: "#1a202c",
    },
    crossPrice: {
        fontSize: "1rem",
        fontWeight: "700",
        color: "#1a202c",
    },
};

export default ProductDetailPage;