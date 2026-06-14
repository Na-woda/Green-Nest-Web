import { useState } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

// ─── Color tokens ────────────────────────────────────────────────────────────
const C = {
    sidebar: "#0f1a12",
    sidebarBorder: "rgba(255,255,255,0.08)",
    green: "#1d9e75",
    greenLight: "#5dcaa5",
    greenPale: "#e1f5ee",
    greenMid: "#9fe1cb",
    successBg: "#eaf3de",
    successText: "#3b6d11",
    successDark: "#27500a",
    warnBg: "#faeeda",
    warnText: "#854f0b",
    barBg: "#f0f0f0",
=======

// ─── Color tokens ────────────────────────────────────────────────────────────
const C = {
  sidebar:   "#0f1a12",
  sidebarBorder: "rgba(255,255,255,0.08)",
  green:     "#1d9e75",
  greenLight:"#5dcaa5",
  greenPale: "#e1f5ee",
  greenMid:  "#9fe1cb",
  successBg: "#eaf3de",
  successText:"#3b6d11",
  successDark:"#27500a",
  warnBg:    "#faeeda",
  warnText:  "#854f0b",
  barBg:     "#f0f0f0",
>>>>>>> d06e1560feb9f734b189518b6c4efb529af0567b
};

// ─── Sidebar nav items ────────────────────────────────────────────────────────
const NAV = [
<<<<<<< HEAD
    { label: "Dashboard", sub: "Overview", icon: "📊", id: "dashboard", path: "/admin" },
    { label: "Shop Management", sub: "Catalog", icon: "🛍️", id: "shop", path: "/admin/shop-management" },
    { label: "Categories", sub: "Taxonomy", icon: "🏷️", id: "cats" },
    { label: "Plant Guides", sub: "Content", icon: "📖", id: "guides" },
    { label: "About Us", sub: "Brand trust", icon: "ℹ️", id: "about" },
    { label: "Contact", sub: "Support", icon: "🎧", id: "contact" },
    { label: "Users", sub: "Access", icon: "👥", id: "users" },
    { label: "Orders", sub: "Fulfillment", icon: "📦", id: "orders" },
    { label: "Settings", sub: "System", icon: "⚙️", id: "settings" },
=======
  { label: "Dashboard",        sub: "Overview",     icon: "📊", id: "dashboard" },
  { label: "Home Management",  sub: "Homepage",     icon: "🏠", id: "home" },
  { label: "Shop Management",  sub: "Catalog",      icon: "🛍️", id: "shop" },
  { label: "Categories",       sub: "Taxonomy",     icon: "🏷️", id: "cats" },
  { label: "Plant Guides",     sub: "Content",      icon: "📖", id: "guides" },
  { label: "About Us",         sub: "Brand trust",  icon: "ℹ️", id: "about" },
  { label: "Contact",          sub: "Support",      icon: "🎧", id: "contact" },
  { label: "Users",            sub: "Access",       icon: "👥", id: "users" },
  { label: "Orders",           sub: "Fulfillment",  icon: "📦", id: "orders" },
  { label: "Settings",         sub: "System",       icon: "⚙️", id: "settings" },
>>>>>>> d06e1560feb9f734b189518b6c4efb529af0567b
];

// ─── KPI data ─────────────────────────────────────────────────────────────────
const TODAY_STATS = [
<<<<<<< HEAD
    { label: "Orders today", value: "148", sub: "+18 ready to ship" },
    { label: "Revenue today", value: "$2,840", sub: "+9.2% vs yesterday" },
    { label: "Inventory health", value: "96%", sub: "8 items low stock" },
];

const CATALOG_STATS = [
    { label: "Products", value: "1,240", delta: "+12% this month", up: true, highlight: true },
    { label: "Categories", value: "18", delta: "Stable", up: false },
    { label: "Plant guides", value: "84", delta: "+4 this week", up: true },
    { label: "Customers", value: "4,891", delta: "+1.2k new entries", up: true },
];

const MAIN_STATS = [
    { label: "Total orders", value: "312", delta: "+22% vs yesterday", up: true },
    { label: "Revenue", value: "$14,242", delta: "+8.4% toward target", up: true, highlight: true },
];

const ACTIONS = [
    { icon: "➕", label: "Add product", desc: "New listing with pricing and stock" },
    { icon: "📂", label: "Create category", desc: "Organise products into groups" },
    { icon: "📄", label: "Publish guide", desc: "Add a care guide for customers" },
    { icon: "🖼️", label: "Update home", desc: "Refresh banners and featured sections" },
];

const ACTIVITY = [
    { title: "New catalog item listed", sub: "Fiddle Leaf Fig (XL)", time: "14 mins ago", tag: "SHOP" },
    { title: "Plant guide revised", sub: "Succulent Watering Regimen v2", time: "2 hours ago", tag: "GUIDES" },
    { title: "Checkout conversion verified", sub: "Order #18242 — $184.00", time: "3 hours ago", tag: "ORDERS" },
];

const PRIORITY = [
    { type: "warn", title: "Low stock — Monstera Deliciosa", desc: "Only 2 units remain. Restock before the next promotion." },
    { type: "ok", title: "Backups completed", desc: "System snapshot completed at 02:00." },
];

const HEALTH = [
    { name: "Storefront", sub: "Online", pct: 98 },
    { name: "Database", sub: "Healthy", pct: 96 },
    { name: "Product API", sub: "Operational", pct: 92 },
=======
  { label: "Orders today",      value: "148",    sub: "+18 ready to ship" },
  { label: "Revenue today",     value: "$2,840", sub: "+9.2% vs yesterday" },
  { label: "Inventory health",  value: "96%",    sub: "8 items low stock" },
];

const CATALOG_STATS = [
  { label: "Products",   value: "1,240", delta: "+12% this month", up: true,  highlight: true },
  { label: "Categories", value: "18",    delta: "Stable",          up: false },
  { label: "Plant guides",value: "84",   delta: "+4 this week",    up: true },
  { label: "Customers",  value: "4,891", delta: "+1.2k new entries",up: true },
];

const MAIN_STATS = [
  { label: "Total orders", value: "312",     delta: "+22% vs yesterday", up: true },
  { label: "Revenue",      value: "$14,242", delta: "+8.4% toward target",up: true, highlight: true },
];

const ACTIONS = [
  { icon: "➕", label: "Add product",      desc: "New listing with pricing and stock" },
  { icon: "📂", label: "Create category",  desc: "Organise products into groups" },
  { icon: "📄", label: "Publish guide",    desc: "Add a care guide for customers" },
  { icon: "🖼️", label: "Update home",     desc: "Refresh banners and featured sections" },
];

const ACTIVITY = [
  { title: "New catalog item listed",       sub: "Fiddle Leaf Fig (XL)",           time: "14 mins ago", tag: "SHOP" },
  { title: "Plant guide revised",           sub: "Succulent Watering Regimen v2",  time: "2 hours ago", tag: "GUIDES" },
  { title: "Checkout conversion verified",  sub: "Order #18242 — $184.00",         time: "3 hours ago", tag: "ORDERS" },
];

const PRIORITY = [
  { type: "warn", title: "Low stock — Monstera Deliciosa", desc: "Only 2 units remain. Restock before the next promotion." },
  { type: "ok",   title: "Backups completed",              desc: "System snapshot completed at 02:00." },
];

const HEALTH = [
  { name: "Storefront",   sub: "Online",      pct: 98 },
  { name: "Database",     sub: "Healthy",     pct: 96 },
  { name: "Product API",  sub: "Operational", pct: 92 },
>>>>>>> d06e1560feb9f734b189518b6c4efb529af0567b
];

// ─── Shared style helpers ─────────────────────────────────────────────────────
const card = {
<<<<<<< HEAD
    background: "#fff",
    border: "0.5px solid #e5e7eb",
    borderRadius: 10,
    padding: "16px",
=======
  background: "#fff",
  border: "0.5px solid #e5e7eb",
  borderRadius: 10,
  padding: "16px",
>>>>>>> d06e1560feb9f734b189518b6c4efb529af0567b
};

// ─── Sub-components ───────────────────────────────────────────────────────────

<<<<<<< HEAD

function Topbar() {
    const [query, setQuery] = useState("");
    return (
        <header style={{
            background: "#fff", borderBottom: "0.5px solid #e5e7eb",
            padding: "12px 24px", display: "flex", alignItems: "center",
            justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10,
        }}>
            <div>
                <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 500 }}>
                    Atelier Commerce Workspace
                </div>
                <div style={{ fontSize: 13, color: "#6b7280", marginTop: 1 }}>
                    Premium operations, analytics, and storefront control
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                    display: "flex", alignItems: "center", gap: 8,
                    background: "#f9fafb", border: "0.5px solid #e5e7eb",
                    borderRadius: 7, padding: "6px 12px", minWidth: 220,
                }}>
                    <span style={{ fontSize: 15, color: "#9ca3af" }}>🔍</span>
                    <input
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Search orders, products, customers…"
                        style={{
                            border: "none", background: "transparent", outline: "none",
                            fontSize: 13, color: "#374151", width: "100%",
                        }}
                    />
                </div>
                <div style={{
                    width: 30, height: 30, background: C.green, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 500, color: "#fff",
                }}>AD</div>
            </div>
        </header>
    );
}

function TodayCard({ stat }) {
    return (
        <div style={{
            background: C.sidebar, borderRadius: 10, padding: 16,
        }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.6px", fontWeight: 500, marginBottom: 6 }}>
                {stat.label}
            </div>
            <div style={{ fontSize: 28, fontWeight: 500, color: C.greenPale, marginBottom: 3 }}>
                {stat.value}
            </div>
            <div style={{ fontSize: 12, color: C.greenLight }}>{stat.sub}</div>
        </div>
    );
}

function KpiCard({ stat }) {
    return (
        <div style={{
            ...card,
            borderTop: stat.highlight ? `2px solid ${C.green}` : card.border,
        }}>
            <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.6px", fontWeight: 500, marginBottom: 6 }}>
                {stat.label}
            </div>
            <div style={{ fontSize: 26, fontWeight: 500, color: "#111827", marginBottom: 4, lineHeight: 1.1 }}>
                {stat.value}
            </div>
            <div style={{ fontSize: 12, color: stat.up ? C.successDark : "#9ca3af", display: "flex", alignItems: "center", gap: 4 }}>
                {stat.up ? "↑" : "—"} {stat.delta}
            </div>
        </div>
    );
}

function ActionButton({ action }) {
    const [hovered, setHovered] = useState(false);
    return (
        <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: "#f9fafb",
                border: `0.5px solid ${hovered ? C.green : "#e5e7eb"}`,
                borderRadius: 8, padding: 12, cursor: "pointer",
                textAlign: "left", transition: "border-color 0.15s",
            }}
        >
            <div style={{ fontSize: 18, marginBottom: 6 }}>{action.icon}</div>
            <div style={{ fontSize: 12, fontWeight: 500, color: "#111827", marginBottom: 2 }}>{action.label}</div>
            <div style={{ fontSize: 11, color: "#9ca3af", lineHeight: 1.4 }}>{action.desc}</div>
        </button>
    );
}

function ActivityItem({ item }) {
    return (
        <div style={{
            display: "flex", alignItems: "flex-start", gap: 10,
            padding: "9px 0", borderBottom: "0.5px solid #f3f4f6",
        }}>
            <div style={{
                width: 7, height: 7, background: C.green, borderRadius: "50%",
                flexShrink: 0, marginTop: 5,
            }} />
            <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12.5, color: "#111827", fontWeight: 500 }}>{item.title}</div>
                <div style={{ fontSize: 11.5, color: "#6b7280", marginTop: 1 }}>{item.sub}</div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>{item.time}</div>
            </div>
            <span style={{
                fontSize: 10, fontWeight: 500, padding: "2px 7px",
                borderRadius: 4, background: "#f3f4f6", color: "#9ca3af",
                flexShrink: 0, whiteSpace: "nowrap",
            }}>{item.tag}</span>
        </div>
    );
}

function PriorityItem({ item }) {
    const isWarn = item.type === "warn";
    return (
        <div style={{
            display: "flex", gap: 10, padding: "9px 0",
            borderBottom: "0.5px solid #f3f4f6", alignItems: "flex-start",
        }}>
            <div style={{
                width: 28, height: 28, borderRadius: 6, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: isWarn ? C.warnBg : C.successBg,
                color: isWarn ? C.warnText : C.successText,
                fontSize: 14,
            }}>
                {isWarn ? "⚠️" : "✅"}
            </div>
            <div>
                <div style={{ fontSize: 12.5, fontWeight: 500, color: "#111827", marginBottom: 2 }}>{item.title}</div>
                <div style={{ fontSize: 11.5, color: "#6b7280", lineHeight: 1.4 }}>{item.desc}</div>
            </div>
        </div>
    );
}

function HealthBar({ item }) {
    return (
        <div style={{ marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                <span style={{ fontSize: 12.5, color: "#111827", fontWeight: 500 }}>{item.name}</span>
                <span style={{ fontSize: 12, fontWeight: 500, color: C.successDark }}>{item.pct}%</span>
            </div>
            <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>{item.sub}</div>
            <div style={{ background: C.barBg, borderRadius: 4, height: 5 }}>
                <div style={{ background: C.green, borderRadius: 4, height: 5, width: `${item.pct}%` }} />
            </div>
        </div>
    );
=======
function Sidebar({ active, onSelect }) {
  return (
    <aside style={{
      width: 220, flexShrink: 0,
      background: C.sidebar,
      display: "flex", flexDirection: "column",
      minHeight: "100vh",
    }}>
      {/* Brand */}
      <div style={{ padding: "20px 16px 16px", borderBottom: `0.5px solid ${C.sidebarBorder}` }}>
        <div style={{
          width: 34, height: 34, background: C.green, borderRadius: 8,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, fontWeight: 500, color: "#fff", marginBottom: 8,
        }}>PA</div>
        <div style={{ color: C.greenPale, fontSize: 13, fontWeight: 500 }}>Plant Atelier</div>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginTop: 2 }}>Premium Admin</div>
      </div>

      {/* Nav */}
      <nav style={{ padding: "12px 8px", flex: 1 }}>
        {NAV.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                width: "100%", padding: "8px 10px", borderRadius: 7,
                border: "none", cursor: "pointer", marginBottom: 2,
                background: isActive ? "rgba(29,158,117,0.18)" : "transparent",
                textAlign: "left",
                transition: "background 0.15s",
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
            >
              <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{
                  color: isActive ? C.greenMid : "rgba(255,255,255,0.8)",
                  fontSize: 12.5, fontWeight: 500,
                }}>{item.label}</div>
                <div style={{
                  color: "rgba(255,255,255,0.3)", fontSize: 10,
                  textTransform: "uppercase", letterSpacing: "0.5px", marginTop: 1,
                }}>{item.sub}</div>
              </div>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

function Topbar() {
  const [query, setQuery] = useState("");
  return (
    <header style={{
      background: "#fff", borderBottom: "0.5px solid #e5e7eb",
      padding: "12px 24px", display: "flex", alignItems: "center",
      justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10,
    }}>
      <div>
        <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 500 }}>
          Atelier Commerce Workspace
        </div>
        <div style={{ fontSize: 13, color: "#6b7280", marginTop: 1 }}>
          Premium operations, analytics, and storefront control
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "#f9fafb", border: "0.5px solid #e5e7eb",
          borderRadius: 7, padding: "6px 12px", minWidth: 220,
        }}>
          <span style={{ fontSize: 15, color: "#9ca3af" }}>🔍</span>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search orders, products, customers…"
            style={{
              border: "none", background: "transparent", outline: "none",
              fontSize: 13, color: "#374151", width: "100%",
            }}
          />
        </div>
        <div style={{
          width: 30, height: 30, background: C.green, borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, fontWeight: 500, color: "#fff",
        }}>AD</div>
      </div>
    </header>
  );
}

function TodayCard({ stat }) {
  return (
    <div style={{
      background: C.sidebar, borderRadius: 10, padding: 16,
    }}>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.6px", fontWeight: 500, marginBottom: 6 }}>
        {stat.label}
      </div>
      <div style={{ fontSize: 28, fontWeight: 500, color: C.greenPale, marginBottom: 3 }}>
        {stat.value}
      </div>
      <div style={{ fontSize: 12, color: C.greenLight }}>{stat.sub}</div>
    </div>
  );
}

function KpiCard({ stat }) {
  return (
    <div style={{
      ...card,
      borderTop: stat.highlight ? `2px solid ${C.green}` : card.border,
    }}>
      <div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.6px", fontWeight: 500, marginBottom: 6 }}>
        {stat.label}
      </div>
      <div style={{ fontSize: 26, fontWeight: 500, color: "#111827", marginBottom: 4, lineHeight: 1.1 }}>
        {stat.value}
      </div>
      <div style={{ fontSize: 12, color: stat.up ? C.successDark : "#9ca3af", display: "flex", alignItems: "center", gap: 4 }}>
        {stat.up ? "↑" : "—"} {stat.delta}
      </div>
    </div>
  );
}

function ActionButton({ action }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#f9fafb",
        border: `0.5px solid ${hovered ? C.green : "#e5e7eb"}`,
        borderRadius: 8, padding: 12, cursor: "pointer",
        textAlign: "left", transition: "border-color 0.15s",
      }}
    >
      <div style={{ fontSize: 18, marginBottom: 6 }}>{action.icon}</div>
      <div style={{ fontSize: 12, fontWeight: 500, color: "#111827", marginBottom: 2 }}>{action.label}</div>
      <div style={{ fontSize: 11, color: "#9ca3af", lineHeight: 1.4 }}>{action.desc}</div>
    </button>
  );
}

function ActivityItem({ item }) {
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: 10,
      padding: "9px 0", borderBottom: "0.5px solid #f3f4f6",
    }}>
      <div style={{
        width: 7, height: 7, background: C.green, borderRadius: "50%",
        flexShrink: 0, marginTop: 5,
      }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12.5, color: "#111827", fontWeight: 500 }}>{item.title}</div>
        <div style={{ fontSize: 11.5, color: "#6b7280", marginTop: 1 }}>{item.sub}</div>
        <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>{item.time}</div>
      </div>
      <span style={{
        fontSize: 10, fontWeight: 500, padding: "2px 7px",
        borderRadius: 4, background: "#f3f4f6", color: "#9ca3af",
        flexShrink: 0, whiteSpace: "nowrap",
      }}>{item.tag}</span>
    </div>
  );
}

function PriorityItem({ item }) {
  const isWarn = item.type === "warn";
  return (
    <div style={{
      display: "flex", gap: 10, padding: "9px 0",
      borderBottom: "0.5px solid #f3f4f6", alignItems: "flex-start",
    }}>
      <div style={{
        width: 28, height: 28, borderRadius: 6, flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: isWarn ? C.warnBg : C.successBg,
        color: isWarn ? C.warnText : C.successText,
        fontSize: 14,
      }}>
        {isWarn ? "⚠️" : "✅"}
      </div>
      <div>
        <div style={{ fontSize: 12.5, fontWeight: 500, color: "#111827", marginBottom: 2 }}>{item.title}</div>
        <div style={{ fontSize: 11.5, color: "#6b7280", lineHeight: 1.4 }}>{item.desc}</div>
      </div>
    </div>
  );
}

function HealthBar({ item }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
        <span style={{ fontSize: 12.5, color: "#111827", fontWeight: 500 }}>{item.name}</span>
        <span style={{ fontSize: 12, fontWeight: 500, color: C.successDark }}>{item.pct}%</span>
      </div>
      <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>{item.sub}</div>
      <div style={{ background: C.barBg, borderRadius: 4, height: 5 }}>
        <div style={{ background: C.green, borderRadius: 4, height: 5, width: `${item.pct}%` }} />
      </div>
    </div>
  );
>>>>>>> d06e1560feb9f734b189518b6c4efb529af0567b
}

// ─── Main Dashboard Component ─────────────────────────────────────────────────

export default function PlantAtelierDashboard() {
<<<<<<< HEAD
    const [activeNav, setActiveNav] = useState("dashboard");

    return (
        <div style={{ display: "flex", fontFamily: "Inter, system-ui, sans-serif", minHeight: "100vh", background: "#f9fafb" }}>
            <AdminSidebar
                active={activeNav}
                onSelect={setActiveNav}
            />

            <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto" }}>
                <Topbar />

                <main style={{ padding: 24, flex: 1 }}>
                    {/* Page header */}
                    <div style={{ marginBottom: 24 }}>
                        <h1 style={{ fontSize: 22, fontWeight: 500, color: "#111827", margin: 0 }}>
                            Plant Shop Operations
                        </h1>
                        <p style={{ fontSize: 13, color: "#6b7280", marginTop: 4, lineHeight: 1.5 }}>
                            Track products, orders, customer activity, and plant guide content from one clean workspace.
                        </p>
                    </div>

                    {/* Today's snapshot */}
                    <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 500, color: "#9ca3af", marginBottom: 12 }}>
                        Today's snapshot
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
                        {TODAY_STATS.map((s) => <TodayCard key={s.label} stat={s} />)}
                    </div>

                    {/* Catalogue overview */}
                    <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 500, color: "#9ca3af", marginBottom: 12 }}>
                        Catalogue overview
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
                        {CATALOG_STATS.map((s) => <KpiCard key={s.label} stat={s} />)}
                    </div>

                    {/* Orders + Revenue + System status row */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 20 }}>
                        {MAIN_STATS.map((s) => <KpiCard key={s.label} stat={s} />)}
                        <div style={{
                            ...card,
                            background: C.successBg,
                            border: `0.5px solid #c0dd97`,
                            display: "flex", flexDirection: "column", justifyContent: "center",
                        }}>
                            <div style={{ fontSize: 11, color: C.successText, textTransform: "uppercase", letterSpacing: "0.6px", fontWeight: 500, marginBottom: 4 }}>
                                System status
                            </div>
                            <div style={{ fontSize: 18, fontWeight: 500, color: C.successDark, marginBottom: 3 }}>
                                All systems <span style={{ color: C.green }}>operational</span>
                            </div>
                            <div style={{ fontSize: 12, color: C.successText }}>Last checked: just now</div>
                        </div>
                    </div>

                    {/* Bottom 3-column grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>

                        {/* Quick actions */}
                        <div style={card}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                                <div>
                                    <div style={{ fontSize: 13, fontWeight: 500, color: "#111827" }}>Quick actions</div>
                                    <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>Manage daily tasks</div>
                                </div>
                                <span style={{ fontSize: 11, color: "#9ca3af" }}>4 shortcuts</span>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                                {ACTIONS.map((a) => <ActionButton key={a.label} action={a} />)}
                            </div>
                        </div>

                        {/* Activity stream */}
                        <div style={card}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                                <div>
                                    <div style={{ fontSize: 13, fontWeight: 500, color: "#111827" }}>Recent activity</div>
                                    <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>Latest changes</div>
                                </div>
                                <span style={{ fontSize: 11, color: C.green, cursor: "pointer" }}>View audit log</span>
                            </div>
                            {ACTIVITY.map((a) => <ActivityItem key={a.title} item={a} />)}
                        </div>

                        {/* Priority + Health */}
                        <div style={card}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                                <div style={{ fontSize: 13, fontWeight: 500, color: "#111827" }}>Priority & health</div>
                                <span style={{
                                    fontSize: 10, fontWeight: 500, padding: "2px 8px", borderRadius: 4,
                                    background: C.successBg, color: C.successText,
                                }}>Stable</span>
                            </div>
                            <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 14 }}>2 tasks need attention</div>

                            {PRIORITY.map((p) => <PriorityItem key={p.title} item={p} />)}

                            <div style={{ borderTop: "0.5px solid #f3f4f6", margin: "14px 0 12px" }} />
                            <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 500, color: "#9ca3af", marginBottom: 10 }}>
                                Core services
                            </div>
                            {HEALTH.map((h) => <HealthBar key={h.name} item={h} />)}
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
=======
  const [activeNav, setActiveNav] = useState("dashboard");

  return (
    <div style={{ display: "flex", fontFamily: "Inter, system-ui, sans-serif", minHeight: "100vh", background: "#f9fafb" }}>
      <Sidebar active={activeNav} onSelect={setActiveNav} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto" }}>
        <Topbar />

        <main style={{ padding: 24, flex: 1 }}>
          {/* Page header */}
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 22, fontWeight: 500, color: "#111827", margin: 0 }}>
              Plant Shop Operations
            </h1>
            <p style={{ fontSize: 13, color: "#6b7280", marginTop: 4, lineHeight: 1.5 }}>
              Track products, orders, customer activity, and plant guide content from one clean workspace.
            </p>
          </div>

          {/* Today's snapshot */}
          <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 500, color: "#9ca3af", marginBottom: 12 }}>
            Today's snapshot
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
            {TODAY_STATS.map((s) => <TodayCard key={s.label} stat={s} />)}
          </div>

          {/* Catalogue overview */}
          <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 500, color: "#9ca3af", marginBottom: 12 }}>
            Catalogue overview
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
            {CATALOG_STATS.map((s) => <KpiCard key={s.label} stat={s} />)}
          </div>

          {/* Orders + Revenue + System status row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 20 }}>
            {MAIN_STATS.map((s) => <KpiCard key={s.label} stat={s} />)}
            <div style={{
              ...card,
              background: C.successBg,
              border: `0.5px solid #c0dd97`,
              display: "flex", flexDirection: "column", justifyContent: "center",
            }}>
              <div style={{ fontSize: 11, color: C.successText, textTransform: "uppercase", letterSpacing: "0.6px", fontWeight: 500, marginBottom: 4 }}>
                System status
              </div>
              <div style={{ fontSize: 18, fontWeight: 500, color: C.successDark, marginBottom: 3 }}>
                All systems <span style={{ color: C.green }}>operational</span>
              </div>
              <div style={{ fontSize: 12, color: C.successText }}>Last checked: just now</div>
            </div>
          </div>

          {/* Bottom 3-column grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>

            {/* Quick actions */}
            <div style={card}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111827" }}>Quick actions</div>
                  <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>Manage daily tasks</div>
                </div>
                <span style={{ fontSize: 11, color: "#9ca3af" }}>4 shortcuts</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {ACTIONS.map((a) => <ActionButton key={a.label} action={a} />)}
              </div>
            </div>

            {/* Activity stream */}
            <div style={card}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#111827" }}>Recent activity</div>
                  <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>Latest changes</div>
                </div>
                <span style={{ fontSize: 11, color: C.green, cursor: "pointer" }}>View audit log</span>
              </div>
              {ACTIVITY.map((a) => <ActivityItem key={a.title} item={a} />)}
            </div>

            {/* Priority + Health */}
            <div style={card}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#111827" }}>Priority & health</div>
                <span style={{
                  fontSize: 10, fontWeight: 500, padding: "2px 8px", borderRadius: 4,
                  background: C.successBg, color: C.successText,
                }}>Stable</span>
              </div>
              <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 14 }}>2 tasks need attention</div>

              {PRIORITY.map((p) => <PriorityItem key={p.title} item={p} />)}

              <div style={{ borderTop: "0.5px solid #f3f4f6", margin: "14px 0 12px" }} />
              <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 500, color: "#9ca3af", marginBottom: 10 }}>
                Core services
              </div>
              {HEALTH.map((h) => <HealthBar key={h.name} item={h} />)}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
>>>>>>> d06e1560feb9f734b189518b6c4efb529af0567b
}
