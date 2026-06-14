import React from 'react';
import heroBg from '../assets/3.jpg';

const Hero = () => {
    return (
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
    );
};

const styles = {
    heroSection: {
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        width: '100%',
        position: 'relative',
    },

    heroOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

    heroContent: {
        maxWidth: '700px',
        color: '#fff',
        padding: '0 1rem',
    },

    heroTag: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding: '0.4rem 1rem',
        borderRadius: '20px',
        fontSize: '0.85rem',
        backdropFilter: 'blur(4px)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
    },

    icon: {
        marginRight: '2px',
    },

    heroTitle: {
        fontSize: '3rem',
        margin: '1rem 0',
        fontWeight: '700',
        lineHeight: '1.2',
    },

    highlight: {
        color: '#a4d4ae',
    },

    heroDescription: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        opacity: '0.9',
    },
}

export default Hero;