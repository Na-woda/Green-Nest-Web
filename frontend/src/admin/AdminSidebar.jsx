import React from "react";
import { useNavigate } from "react-router-dom";

const C = {
    sidebar: "#0f1a12",
    sidebarBorder: "rgba(255,255,255,0.08)",
    green: "#1d9e75",
    greenPale: "#e1f5ee",
    greenMid: "#9fe1cb",
};

const NAV = [
    { label: "Dashboard", sub: "Overview", icon: "📊", id: "dashboard", path: "/admin" },
    { label: "Shop Management", sub: "Catalog", icon: "🛍️", id: "shop", path: "/admin/shop-management" },
    { label: "Categories", sub: "Taxonomy", icon: "🏷️", id: "cats", path: "/admin/categories" },
    { label: "Plant Guides", sub: "Content", icon: "📖", id: "guides", path: "/admin/guides" },
    { label: "About Us", sub: "Brand trust", icon: "ℹ️", id: "about", path: "/admin/about" },
    { label: "Contact", sub: "Support", icon: "🎧", id: "contact", path: "/admin/contact" },
    { label: "Users", sub: "Access", icon: "👥", id: "users", path: "/admin/users" },
    { label: "Orders", sub: "Fulfillment", icon: "📦", id: "orders", path: "/admin/orders" },
    { label: "Settings", sub: "System", icon: "⚙️", id: "settings", path: "/admin/settings" },
];

export default function AdminSidebar({ active }) {
    const navigate = useNavigate();

    return (
        <aside
            style={{
                width: 220,
                flexShrink: 0,
                background: C.sidebar,
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <div
                style={{
                    padding: "20px 16px 16px",
                    borderBottom: `0.5px solid ${C.sidebarBorder}`,
                }}
            >
                <div
                    style={{
                        width: 34,
                        height: 34,
                        background: C.green,
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#fff",
                        marginBottom: 8,
                    }}
                >
                    PA
                </div>

                <div
                    style={{
                        color: C.greenPale,
                        fontSize: 13,
                        fontWeight: 500,
                    }}
                >
                    Plant Atelier
                </div>

                <div
                    style={{
                        color: "rgba(255,255,255,0.4)",
                        fontSize: 11,
                        marginTop: 2,
                    }}
                >
                    Premium Admin
                </div>
            </div>

            <nav style={{ padding: "12px 8px", flex: 1 }}>
                {NAV.map((item) => {
                    const isActive = active === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => navigate(item.path)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                width: "100%",
                                padding: "8px 10px",
                                borderRadius: 7,
                                border: "none",
                                cursor: "pointer",
                                marginBottom: 2,
                                background: isActive
                                    ? "rgba(29,158,117,0.18)"
                                    : "transparent",
                                textAlign: "left",
                            }}
                        >
                            <span style={{ fontSize: 16 }}>{item.icon}</span>

                            <div>
                                <div
                                    style={{
                                        color: isActive
                                            ? C.greenMid
                                            : "rgba(255,255,255,0.8)",
                                        fontSize: 13,
                                        fontWeight: 500,
                                    }}
                                >
                                    {item.label}
                                </div>

                                <div
                                    style={{
                                        color: "rgba(255,255,255,0.3)",
                                        fontSize: 10,
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {item.sub}
                                </div>
                            </div>
                        </button>
                    );
                })}
            </nav>
        </aside>
    );
}