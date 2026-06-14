import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    // State management for individual social icon hover tracking
    const [hoveredSocial, setHoveredSocial] = useState(null);
    // State management for individual link row hover tracking
    const [hoveredLink, setHoveredLink] = useState(null);
    const [footerHover, setFooterHover] = useState(false);
    const [logoHover, setLogoHover] = useState(false);

    const socialIcons = [
        {
            id: "fb",
            icon: <FaFacebookF size={14} />,
            url: "https://www.facebook.com/"
        },
        {
            id: "ig",
            icon: <FaInstagram size={14} />,
            url: "https://www.instagram.com/"
        },
        {
            id: "pin",
            icon: <FaPinterestP size={14} />,
            url: "https://www.pinterest.com/"
        },
        {
            id: "yt",
            icon: <FaYoutube size={14} />,
            url: "https://www.youtube.com/"
        },
    ];

    const quickLinks = [
        { name: "Shop Plants", path: "/shop" },
        { name: "About Us", path: "/about" },
        { name: "Plant Care Blog", path: "/guides" },
        { name: "Contact Us", path: "/contact" },
        { name: "Air Purifying", path: "/categories" },
    ];

    const customerCare = [
        "Help Center",
        "Shipping Info",
        "Returns & Refunds",
        "Track Order",
        "Privacy Policy",
    ];


    return (
        <footer
            style={{
                ...styles.footerContainer,
                transform: footerHover ? "translateY(0)" : "translateY(15px)",
                opacity: footerHover ? 1 : 0.95,
            }}
            onMouseEnter={() => setFooterHover(true)}
            onMouseLeave={() => setFooterHover(false)}
        >
            {/* TOP SEGMENT: BRAND INFO & LINKS COLUMNS */}
            <div style={styles.topSection}>

                {/* Column 1: Brand Pitch & Social Links */}
                <div style={styles.brandColumn}>
                    <h2
                        style={{
                            ...styles.logoText,
                            transform: logoHover ? "scale(1.08)" : "scale(1)",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                        }}
                        onMouseEnter={() => setLogoHover(true)}
                        onMouseLeave={() => setLogoHover(false)}
                    >
                        Green<span style={styles.logoGold}>Nest</span>
                    </h2>
                    <p style={styles.brandDescription}>
                        Bringing nature indoors since 2020. We offer premium
                        indoor plants with expert care guidance to help you
                        create your perfect green sanctuary.
                    </p>
                    <div style={styles.socialRow}>
                        {socialIcons.map((item) => {
                            const isHovered = hoveredSocial === item.id;
                            return (
                                <a
                                    key={item.id}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onMouseEnter={() => setHoveredSocial(item.id)}
                                    onMouseLeave={() => setHoveredSocial(null)}
                                    style={{
                                        ...styles.socialCircle,
                                        borderColor: isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.2)",
                                        backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "transparent",
                                        transform: isHovered
                                            ? "translateY(-5px) scale(1.15)"
                                            : "translateY(0) scale(1)",
                                        boxShadow: isHovered
                                            ? "0 8px 20px rgba(255,255,255,0.2)"
                                            : "none",
                                    }}
                                    aria-label={`Link to social media ${item.id}`}
                                >
                                    {item.icon}
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Column 2: Quick Links Navigation */}
                <div style={styles.linksColumn}>
                    <h3 style={styles.columnHeading}>QUICK LINKS</h3>
                    <ul style={styles.linkList}>
                        {quickLinks.map((link) => {
                            // FIX: Compare against link.name explicitly
                            const isHovered = hoveredLink === `quick-${link.name}`;
                            return (
                                <li key={link.name} style={styles.listItem}>
                                    <Link
                                        to={link.path}
                                        // Correctly set the ID
                                        onMouseEnter={() => setHoveredLink(`quick-${link.name}`)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        style={{
                                            ...styles.linkItem,
                                            color: isHovered ? "#ffffff" : "#a0aec0",
                                            transform: isHovered ? "translateX(8px)" : "translateX(0)",
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Column 3: Customer Care Navigation */}
                <div style={styles.linksColumn}>
                    <h3 style={styles.columnHeading}>CUSTOMER CARE</h3>
                    <ul style={styles.linkList}>
                        {customerCare.map((link) => {
                            // This part is actually correct since 'link' is just a string
                            const isHovered = hoveredLink === `care-${link}`;
                            return (
                                <li key={link} style={styles.listItem}>
                                    <a
                                        href="#"
                                        onMouseEnter={() => setHoveredLink(`care-${link}`)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        style={{
                                            ...styles.linkItem,
                                            color: isHovered ? "#ffffff" : "#a0aec0",
                                            transform: isHovered ? "translateX(8px)" : "translateX(0)",
                                        }}
                                    >
                                        {link}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Column 4: Contact Information Details */}
                <div style={styles.brandColumn}>
                    <h3 style={styles.columnHeading}>CONTACT</h3>

                    <div style={styles.contactDetailsRow}>
                        {/* Address */}
                        <div
                            style={styles.contactItem}
                            onMouseEnter={() => setHoveredLink('contact-address')}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <span style={styles.contactIcon}>📍</span>
                            <a
                                href="https://maps.google.com/?q=123+Green+Street+Portland+OR+97201"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    ...styles.contactLink,
                                    color: hoveredLink === 'contact-address' ? "#ffffff" : "#a0aec0",
                                    transform: hoveredLink === 'contact-address' ? "translateX(8px)" : "translateX(0)",
                                    display: "inline-block",
                                }}
                            >
                                123 Green Street,<br />
                                Portland, OR 97201
                            </a>
                        </div>

                        {/* Phone */}
                        <div
                            style={styles.contactItem}
                            onMouseEnter={() => setHoveredLink('contact-phone')}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <span style={styles.contactIcon}>📞</span>
                            <a
                                href="tel:+15551234567"
                                style={{
                                    ...styles.contactLink,
                                    color: hoveredLink === 'contact-phone' ? "#ffffff" : "#a0aec0",
                                    transform: hoveredLink === 'contact-phone' ? "translateX(8px)" : "translateX(0)",
                                    display: "inline-block",
                                }}
                            >
                                (555) 123-4567
                            </a>
                        </div>

                        {/* Email */}
                        <div style={styles.contactItem}>
                            <span style={styles.contactIcon}>✉️</span>
                            <a href="mailto:hello@greennest.plants" style={styles.contactLink}>
                                hello@greennest.plants
                            </a>
                        </div>

                        {/* Time */}
                        <div style={styles.contactItem}>
                            <span style={styles.contactIcon}>🕒</span>
                            <span style={styles.contactText}>
                                Mon-Fri: 9 AM - 6 PM
                            </span>
                        </div>
                    </div>
                </div>
            </div> {/* This closing tag solves the structural parsing error */}

            {/* DIVIDER HORIZONTAL RULE */}
            <hr style={styles.divider} />

            {/* BOTTOM SEGMENT: COPYRIGHT & LEGAL PRIVACY */}
            <div style={styles.bottomSection}>
                <p style={styles.copyrightText}>
                    © 2026 GreenNest. All rights reserved.
                </p>
                <div style={styles.legalLinksRow}>
                    <a href="#" style={styles.legalLink}>Privacy Policy</a>
                    <a href="#" style={styles.legalLink}>Terms of Service</a>
                    <a href="#" style={styles.legalLink}>Cookie Policy</a>
                </div>
            </div>
        </footer >
    );
}

/* ================= INLINE JAVASCRIPT STYLE OBJECTS ================= */

const styles = {
    footerContainer: {
        backgroundColor: "#030a04",
        color: "#ffffff",
        fontFamily: "'Inter', sans-serif",
        padding: "4.5rem 6% 2.5rem 6%",
        boxSizing: "border-box",
        transition: "all 0.4s ease",
    },
    topSection: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "2.5rem",
        alignItems: "start",
    },
    brandColumn: {
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease",
    },
    logoText: {
        margin: "0 0 1.2rem 0",
        fontSize: "1.65rem",
        fontWeight: "700",
        letterSpacing: "-0.5px",
        color: "#ffffff",
    },
    logoGold: {
        color: "#c3a36b", // Golden accent color used in GreenNest branding
    },
    brandDescription: {
        color: "#a0aec0", // Subdued slate gray/white text mixture
        fontSize: "0.92rem",
        lineHeight: "1.65",
        margin: "0 0 1.5rem 0",
        maxWidth: "320px",
    },
    socialRow: {
        display: "flex",
        gap: "0.75rem",
        alignItems: "center",
    },
    socialCircle: {
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        transition: "all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    },
    socialIconContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "color 0.2s ease",
    },
    linksColumn: {
        display: "flex",
        flexDirection: "column",
    },
    columnHeading: {
        fontSize: "0.85rem",
        fontWeight: "700",
        letterSpacing: "1.2px",
        color: "#ffffff",
        margin: "0 0 1.5rem 0",
        textTransform: "uppercase",
    },
    linkList: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem",
    },
    listItem: {
        margin: 0,
    },
    linkItem: {
        fontSize: "0.92rem",
        textDecoration: "none",
        transition: "all 0.3s ease",
        display: "inline-block",
    },
    contactDetailsRow: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    contactItem: {
        display: "flex",
        alignItems: "flex-start",
        gap: "0.75rem",
        transition: "all 0.3s ease",
    },
    contactIcon: {
        fontSize: "0.95rem",
        marginTop: "2px",
    },
    contactText: {
        fontSize: "0.92rem",
        color: "#a0aec0",
        lineHeight: "1.5",
    },
    contactLink: {
        color: "#a0aec0",
        textDecoration: "none",
        fontSize: "0.92rem",
        lineHeight: "1.5",
        transition: "0.3s",
        cursor: "pointer",
    },
    divider: {
        border: "none",
        height: "1px",
        background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)",
        margin: "3.5rem 0 1.5rem 0",
    },
    bottomSection: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
    },
    copyrightText: {
        fontSize: "0.85rem",
        color: "#718096",
        margin: 0,
    },
    legalLinksRow: {
        display: "flex",
        gap: "1.5rem",
    },
    legalLink: {
        fontSize: "0.85rem",
        color: "#718096",
        textDecoration: "none",
        transition: "color 0.2s ease",
    },
};

export default Footer;