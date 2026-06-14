import React from "react";
import { Link } from "react-router-dom";
import heroBg from '../assets/4.jpg';
import air from '../assets/b.jpg';
import low from '../assets/h.jpg';
import pet from '../assets/d.jpg';
import flower from '../assets/e.jpg';
import large from '../assets/f.jpg';
import cacti from '../assets/g.jpg';

const categoriesData = [
    {
        id: "air-purifying",
        name: "Air Purifying Plants",
        description: "Breathe easier with these NASA-approved plants that remove toxins naturally.",
        count: 48,
        image: air
    },
    {
        id: "low-light",
        name: "Low Light Plants",
        description: "Thrive in shade — perfect for offices, bathrooms, and darker corners.",
        count: 36,
        image: low
    },
    {
        id: "pet-friendly",
        name: "Pet-Friendly Plants",
        description: "Safe for your furry friends — beautiful plants that are non-toxic to cats and dogs.",
        count: 29,
        image: pet
    },
    {
        id: "flowering",
        name: "Flowering Plants",
        description: "Add vibrant color to your space with blooming indoor beauties.",
        count: 42,
        image: flower
    },
    {
        id: "large-floor",
        name: "Large Floor Plants",
        description: "Make a statement with tall, lush plants that transform any room.",
        count: 31,
        image: large
    },
    {
        id: "succulents-cacti",
        name: "Succulents & Cacti",
        description: "Low-maintenance & beauties — perfect for beginners and busy plant lovers.",
        count: 55,
        image: cacti
    }
];

function CategoriesPage() {
    return (
        <div style={styles.pageContainer}>
            {/* INJECTING ANIMATION STYLES FOR THE HOVER EFFECTS */}
            <style>{`
                .category-card {
                    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease !important;
                }
                .category-card:hover {
                    transform: translateY(-5px) scale(1.01) !important;
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15) !important;
                }
                .card-image-bg {
                    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1) !important;
                }
                .category-card:hover .card-image-bg {
                    transform: scale(1.08) !important;
                }
                .cta-btn-anim {
                    transition: background-color 0.2s ease, transform 0.2s ease !important;
                }
                .cta-btn-anim:hover {
                    background-color: #13382d !important;
                    transform: translateY(-2px);
                }
            `}</style>

            {/* HERO SECTION */}
            <header style={styles.heroSection}>
                <div style={styles.heroOverlay}>
                    <div style={styles.heroContent}>
                        <div style={styles.browseBadge}>
                            <span>📁</span> Browse by Category
                        </div>

                        <h1 style={styles.heroTitle}>
                            Plant <span style={styles.highlight}>Categories</span>
                        </h1>

                        <p style={styles.heroDescription}>
                            Whether you need a low-light survivor, a pet-safe beauty, or a
                            dramatic statement piece — find your perfect plant match right here.
                        </p>
                    </div>
                </div>
            </header>

            {/* CATEGORIES GRID */}
            <div style={styles.gridContainer}>
                {categoriesData.map((category) => (
                    <Link
                        to={`/shop?category=${encodeURIComponent(category.name)}`}
                        key={category.id}
                        style={styles.card}
                        className="category-card"
                    >
                        {/* Added 'card-image-bg' class to cleanly zoom the background image on hover */}
                        <div
                            className="card-image-bg"
                            style={{ ...styles.cardImage, backgroundImage: `url(${category.image})` }}
                        />
                        <div style={styles.cardOverlay} />
                        <div style={styles.cardContent}>
                            <h3 style={styles.cardTitle}>{category.name}</h3>
                            <p style={styles.cardDescription}>{category.description}</p>
                            <span style={styles.cardCount}>{category.count} plants</span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* NOT SURE WHERE TO START BANNER */}
            <div style={styles.ctaSection}>
                <h2 style={styles.ctaTitle}>Not Sure Where to Start?</h2>
                <p style={styles.ctaSubtitle}>
                    Take our quick quiz to discover which plants match your lifestyle, lighting, and experience level.
                </p>
                <Link to="/guides" style={styles.ctaButton} className="cta-btn-anim">
                    📖 View Plant Guide
                </Link>
            </div>
        </div>
    );
}

/* ================= STYLING MATRIX ================= */
const styles = {
    pageContainer: {
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
        marginBottom: '4rem',
        position: 'relative',
    },

    heroOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
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

    browseBadge: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(4px)",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        padding: "6px 16px",
        borderRadius: "20px",
        fontSize: "0.85rem",
        color: "#ffffff",
        fontWeight: "500",
        marginBottom: '1.25rem',
    },

    heroTitle: {
        fontFamily: "'Playfair Display', serif, 'Inter'",
        fontSize: '3.5rem',
        margin: '0 0 1.2rem 0',
        fontWeight: '700',
        lineHeight: '1.15',
        letterSpacing: '-0.5px',
        color: '#ffffff'
    },

    highlight: {
        color: '#a4d4ae',
    },

    heroDescription: {
        fontSize: '1.15rem',
        lineHeight: '1.6',
        opacity: '0.90',
        fontWeight: '400',
        maxWidth: '650px',
        margin: '0 auto',
        color: '#e2e8f0'
    },

    gridContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "0 auto"
    },

    card: {
        position: "relative",
        height: "320px",
        borderRadius: "16px",
        overflow: "hidden", // Crucial: clips the zooming image inside the card boundaries
        textDecoration: "none",
        display: "flex",
        alignItems: "flex-end",
        boxShadow: "0 4px 15 rgba(0, 0, 0, 0.05)",
        cursor: "pointer",
    },

    cardImage: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 1
    },

    cardOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 100%)",
        zIndex: 2
    },

    cardContent: {
        position: "relative",
        zIndex: 3,
        padding: "2rem",
        color: "#ffffff"
    },

    cardTitle: {
        fontSize: "1.5rem",
        fontWeight: "700",
        margin: "0 0 8px 0"
    },

    cardDescription: {
        fontSize: "0.88rem",
        lineHeight: "1.5",
        color: "#e2e8f0",
        margin: "0 0 16px 0",
        opacity: "0.95"
    },

    cardCount: {
        display: "inline-block",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(4px)",
        padding: "4px 12px",
        borderRadius: "12px",
        fontSize: "0.78rem",
        fontWeight: "600",
        letterSpacing: "0.3px"
    },

    ctaSection: {
        textAlign: "center",
        marginTop: "6rem",
        borderTop: "2px solid #edf2f7",
        paddingTop: "4rem"
    },

    ctaTitle: {
        fontSize: "1.8rem",
        fontWeight: "700",
        color: "#1a202c",
        margin: "0 0 10px 0"
    },

    ctaSubtitle: {
        fontSize: "0.98rem",
        color: "#718096",
        maxWidth: "500px",
        margin: "0 auto 1.5rem auto",
        lineHeight: "1.5"
    },

    ctaButton: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "#1b4d3e",
        color: "#ffffff",
        textDecoration: "none",
        padding: "12px 24px",
        borderRadius: "30px",
        fontWeight: "600",
        fontSize: "0.95rem",
        boxShadow: "0 4px 10px rgba(27, 77, 62, 0.2)",
    }
};

export default CategoriesPage;