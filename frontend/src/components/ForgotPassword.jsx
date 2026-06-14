import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgImage from "../assets/2.jpg";

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Password reset link sent to ${email}`);
        console.log("Reset link sent to:", email);
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Forgot Password</h2>

                <p style={styles.text}>
                    Enter your email address and we'll send you a link to reset your password.
                </p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" style={styles.label}>
                        Email Address
                    </label>

                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="you@example.com"
                        style={styles.input}
                    />

                    <button
                        type="submit"
                        style={styles.button}
                    >
                        Send Reset Link
                    </button>
                </form>

                <div style={styles.footer}>
                    <Link
                        to="/signin"
                        style={styles.link}
                    >
                        Back to Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        background: `linear-gradient(
              rgba(0,0,0,0.45),
              rgba(0,0,0,0.55)
            ), url(${bgImage}) center center / cover no-repeat`,
    },

    card: {
        backgroundColor: '#ffffff',
        padding: '32px',
        borderRadius: '16px',
        boxShadow: '0 10px 15px rgba(0,0,0,0.15)',
        width: '100%',
        maxWidth: '400px',
        boxSizing: 'border-box',
    },

    title: {
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#1f2937',
        marginBottom: '8px',
    },

    text: {
        fontSize: '0.875rem',
        color: '#4b5563',
        marginBottom: '24px',
        lineHeight: '1.5',
    },

    label: {
        display: 'block',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: '#374151',
        marginBottom: '6px',
    },

    input: {
        width: '100%',
        padding: '12px 16px',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        outline: 'none',
        fontSize: '14px',
        boxSizing: 'border-box',
    },

    button: {
        width: '100%',
        backgroundColor: '#1e4a36',
        color: '#ffffff',
        padding: '12px',
        border: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '14px',
        cursor: 'pointer',
        marginTop: '24px',
    },

    footer: {
        marginTop: '24px',
        textAlign: 'center',
    },

    link: {
        fontSize: '0.875rem',
        color: '#15803d',
        textDecoration: 'none',
        fontWeight: '500',
    },
};