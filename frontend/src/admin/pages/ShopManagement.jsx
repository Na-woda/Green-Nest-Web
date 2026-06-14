import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar";
import { Pencil, Trash2 } from "lucide-react";

const inputStyle = {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "14px",
    width: "100%",
};

export default function ShopManagement() {
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Snake Plant Laurentii",
            stock: 12,
            price: 49.99,
            status: "Active",
        },
        {
            id: 2,
            name: "Spider Plant",
            stock: 0,
            price: 34.99,
            status: "Out of Stock",
        },
    ]);

    const [newProduct, setNewProduct] = useState({
        name: "",
        category: "",
        price: "",
        oldPrice: "",
        discount: "",
        stock: "",
        description: "",
        image: null,
        imagePreview: "",
    });

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            setProducts(products.filter((product) => product.id !== id));
        }
    };

    const handleEdit = (product) => {
        setEditingId(product.id);

        setNewProduct({
            name: product.name,
            category: product.category || "",
            price: product.price,
            oldPrice: product.oldPrice || "",
            discount: product.discount || "",
            stock: product.stock,
            description: product.description || "",
            image: null,
            imagePreview: product.image || "",
        });

        setShowForm(true);
    };

    const handleSaveProduct = () => {
        const imageUrl = newProduct.image
            ? URL.createObjectURL(newProduct.image)
            : newProduct.imagePreview;

        if (editingId) {
            setProducts(
                products.map((product) =>
                    product.id === editingId
                        ? {
                            ...product,
                            name: newProduct.name,
                            category: newProduct.category,
                            price: Number(newProduct.price),
                            oldPrice: Number(newProduct.oldPrice),
                            discount: Number(newProduct.discount),
                            stock: Number(newProduct.stock),
                            description: newProduct.description,
                            image: imageUrl,
                            status:
                                Number(newProduct.stock) > 0
                                    ? "Active"
                                    : "Out of Stock",
                        }
                        : product
                )
            );
        } else {
            const product = {
                id: Date.now(),
                name: newProduct.name,
                category: newProduct.category,
                price: Number(newProduct.price),
                oldPrice: Number(newProduct.oldPrice),
                discount: Number(newProduct.discount),
                stock: Number(newProduct.stock),
                description: newProduct.description,
                image: imageUrl,
                status:
                    Number(newProduct.stock) > 0
                        ? "Active"
                        : "Out of Stock",
            };

            setProducts([...products, product]);
        }

        setEditingId(null);

        setNewProduct({
            name: "",
            category: "",
            price: "",
            oldPrice: "",
            discount: "",
            stock: "",
            description: "",
            image: null,
            imagePreview: "",
        });

        setShowForm(false);
    };
    return (
        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                background: "#f9fafb",
            }}
        >
            <AdminSidebar active="shop" />

            {/* Main Content */}
            <div style={{ flex: 1, padding: 24 }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 20,
                    }}
                >
                    <h1 style={{ fontSize: 22, fontWeight: 600 }}>
                        Shop Management
                    </h1>

                    <button
                        onClick={() => setShowForm(true)}
                        style={{
                            background: "#1d9e75",
                            color: "#fff",
                            padding: "10px 18px",
                            borderRadius: 8,
                            border: "none",
                            cursor: "pointer",
                            fontWeight: 500,
                        }}
                    >
                        + Add New Product
                    </button>
                </div>

                {/* Product Table */}
                <div
                    style={{
                        background: "#fff",
                        borderRadius: 10,
                        padding: 16,
                        border: "1px solid #e5e7eb",
                    }}
                >
                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                        }}
                    >
                        <thead>
                            <tr
                                style={{
                                    textAlign: "left",
                                    color: "#9ca3af",
                                    fontSize: 13,
                                }}
                            >
                                <th style={{ padding: 10 }}>Product</th>
                                <th style={{ padding: 10 }}>Stock</th>
                                <th style={{ padding: 10 }}>Price</th>
                                <th style={{ padding: 10 }}>Status</th>
                                <th style={{ padding: 10 }}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((p) => (
                                <tr
                                    key={p.id}
                                    style={{
                                        borderTop: "1px solid #f3f4f6",
                                    }}
                                >
                                    <td style={{ padding: 10 }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 10,
                                            }}
                                        >
                                            {p.image && (
                                                <img
                                                    src={p.image}
                                                    alt={p.name}
                                                    style={{
                                                        width: 50,
                                                        height: 50,
                                                        borderRadius: 8,
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            )}

                                            {p.name}
                                        </div>
                                    </td>

                                    <td style={{ padding: 10 }}>{p.stock}</td>

                                    <td style={{ padding: 10 }}>
                                        ${p.price}
                                    </td>

                                    <td style={{ padding: 10 }}>
                                        {p.status}
                                    </td>

                                    <td style={{ padding: 10 }}>
                                        <button
                                            onClick={() => handleEdit(p)}
                                            style={{
                                                color: "#0f8e66",
                                                border: "none",
                                                padding: 8,
                                                borderRadius: 6,
                                                marginRight: 8,
                                                cursor: "pointer",
                                            }}
                                        >
                                            <Pencil size={18} />
                                        </button>

                                        <button
                                            onClick={() => handleDelete(p.id)}
                                            style={{
                                                color: "#27500a",
                                                border: "none",
                                                padding: 8,
                                                borderRadius: 6,
                                                cursor: "pointer",
                                            }}
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Product Modal */}
            {showForm && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(0,0,0,0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 999,
                    }}
                >
                    <div
                        style={{
                            background: "#fff",
                            width: "650px",
                            maxWidth: "95%",
                            borderRadius: 12,
                            padding: 24,
                            maxHeight: "90vh",
                            overflowY: "auto",
                        }}
                    >
                        <h2 style={{ marginBottom: 20 }}>
                            {editingId ? "Edit Product" : "Add New Product"}
                        </h2>

                        <div style={{ display: "grid", gap: 12 }}>
                            <input
                                type="text"
                                placeholder="Product Name"
                                value={newProduct.name}
                                onChange={(e) =>
                                    setNewProduct({
                                        ...newProduct,
                                        name: e.target.value,
                                    })
                                }
                                style={inputStyle}
                            />

                            <input
                                type="text"
                                placeholder="Category"
                                value={newProduct.category}
                                onChange={(e) =>
                                    setNewProduct({
                                        ...newProduct,
                                        category: e.target.value,
                                    })
                                }
                                style={inputStyle}
                            />

                            <input
                                type="number"
                                placeholder="Price"
                                value={newProduct.price}
                                onChange={(e) =>
                                    setNewProduct({
                                        ...newProduct,
                                        price: e.target.value,
                                    })
                                }
                                style={inputStyle}
                            />

                            <input
                                type="number"
                                placeholder="Old Price"
                                value={newProduct.oldPrice}
                                onChange={(e) =>
                                    setNewProduct({
                                        ...newProduct,
                                        oldPrice: e.target.value,
                                    })
                                }
                                style={inputStyle}
                            />

                            <input
                                type="number"
                                placeholder="Discount (%)"
                                value={newProduct.discount}
                                onChange={(e) =>
                                    setNewProduct({
                                        ...newProduct,
                                        discount: e.target.value,
                                    })
                                }
                                style={inputStyle}
                            />

                            <input
                                type="number"
                                placeholder="Stock Quantity"
                                value={newProduct.stock}
                                onChange={(e) =>
                                    setNewProduct({
                                        ...newProduct,
                                        stock: e.target.value,
                                    })
                                }
                                style={inputStyle}
                            />

                            <textarea
                                rows="4"
                                placeholder="Description"
                                value={newProduct.description}
                                onChange={(e) =>
                                    setNewProduct({
                                        ...newProduct,
                                        description: e.target.value,
                                    })
                                }
                                style={inputStyle}
                            />

                            <div>
                                <label
                                    style={{
                                        display: "block",
                                        marginBottom: 8,
                                        fontWeight: 500,
                                    }}
                                >
                                    Product Image
                                </label>

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setNewProduct({
                                            ...newProduct,
                                            image: e.target.files[0],
                                        })
                                    }
                                />
                            </div>

                            {newProduct.image && (
                                <img
                                    src={URL.createObjectURL(newProduct.image)}
                                    alt="Preview"
                                    style={{
                                        width: 180,
                                        height: 180,
                                        objectFit: "cover",
                                        borderRadius: 10,
                                        border: "1px solid #ddd",
                                    }}
                                />
                            )}

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    gap: 10,
                                    marginTop: 10,
                                }}
                            >
                                <button
                                    onClick={() => setShowForm(false)}
                                    style={{
                                        padding: "10px 20px",
                                        borderRadius: 8,
                                        border: "1px solid #ddd",
                                        cursor: "pointer",
                                    }}
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={handleSaveProduct}
                                    style={{
                                        padding: "10px 20px",
                                        borderRadius: 8,
                                        border: "none",
                                        background: "#1d9e75",
                                        color: "#fff",
                                        cursor: "pointer",
                                    }}
                                >
                                    {editingId ? "Update Product" : "Save Product"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}