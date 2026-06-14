import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Truck, ShieldCheck, Headphones, Leaf, ArrowRight } from 'lucide-react';
import './Home.css';

function Home() {
  const [navVisible, setNavVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 60) {
        setNavVisible(true);
      } else if (currentScrollY > lastScrollY + 10) {
        setNavVisible(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setNavVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-wrapper">
      <div className="hero-container">
        {/* =========================================================
            2. HERO CONTENT SECTION (CLEAN & LEFT ALIGNED)
            ========================================================= */}
        <main className="hero-content">

          {/* Primary High-Impact Heading */}
          <h1 className="hero-title">
            Create a Tropical <br />
            Interior in Your <br />
            <span className="highlight-text">Home</span>
          </h1>

          {/* Informational Subtext */}
          <p className="hero-subtitle">
            Hand-picked, healthy plants delivered to your doorstep with expert care guides.
            Transform your space into a green sanctuary today.
          </p>

          {/* Call to Action Interactive Buttons */}
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>
            <button className="btn-secondary">Explore Plants</button>
          </div>
        </main>

      </div>

      {/* =========================================================
          3. FEATURE BENEFITS SECTION (WITH NEW SEAMLESS ANIMATIONS)
          ========================================================= */}
      <section className="features-section">
        <div className="features-container">

          {/* Left Side: Elegant Plant Image Frame with Entrance Staggering */}
          <div className="features-image-frame">
            <img
              src="/plant1.jpeg"
              alt="Premium Monstera Leaf Detail"
              className="features-moving-img img-layer-primary animation-reveal-left"
            />
            <img
              src="/plant2.jpeg"
              alt="Close up Exotic Plant Texture"
              className="features-moving-img img-layer-secondary animation-reveal-right"
            />
            <img
              src="/plant3.jpeg"
              alt="Minimalist Potted Foliage Art"
              className="features-moving-img img-layer-tertiary animation-reveal-center"
            />
          </div>

          {/* Right Side: Header and Content Cards Grid */}
          <div className="features-content-pane">
            <div className="features-section-header animation-fade-up">
              <span className="features-tagline">Why Choose Us</span>
              <h2 className="features-main-title">Everything Your Plants Need</h2>
              <p className="features-main-subtitle">
                We are committed to delivering the best plant shopping experience with care and quality at every step.
              </p>
            </div>

            {/* Core Value Benefit Quad-Grid Array with Micro-Staggered Rows */}
            <div className="features-grid">

              {/* Card 1: Free Delivery */}
              <div className="benefit-card animation-card-step-1">
                <div className="benefit-icon-box">
                  <Truck size={22} />
                </div>
                <div className="benefit-text-box">
                  <h3 className="benefit-title">Free Delivery</h3>
                  <p className="benefit-desc">
                    Free shipping on all orders over $49. Your plants arrive healthy and fresh at your doorstep within 2-5 business days.
                  </p>
                </div>
              </div>

              {/* Card 2: Healthy Plants Guarantee */}
              <div className="benefit-card animation-card-step-2">
                <div className="benefit-icon-box">
                  <ShieldCheck size={22} />
                </div>
                <div className="benefit-text-box">
                  <h3 className="benefit-title">Healthy Plants Guaranteed</h3>
                  <p className="benefit-desc">
                    Every plant is hand-picked and inspected by our experts. If your plant arrives damaged, we will replace it for free.
                  </p>
                </div>
              </div>

              {/* Card 3: Expert Guidance */}
              <div className="benefit-card animation-card-step-3">
                <div className="benefit-icon-box">
                  <Headphones size={22} />
                </div>
                <div className="benefit-text-box">
                  <h3 className="benefit-title">Expert Plant Care Guidance</h3>
                  <p className="benefit-desc">
                    Get personalized care instructions, watering reminders, and access to our team of botanists for any plant questions.
                  </p>
                </div>
              </div>

              {/* Card 4: Happiness Guarantee */}
              <div className="benefit-card animation-card-step-4">
                <div className="benefit-icon-box">
                  <Leaf size={22} />
                </div>
                <div className="benefit-text-box">
                  <h3 className="benefit-title">30-Day Happiness Guarantee</h3>
                  <p className="benefit-desc">
                    Not satisfied with your plant? Return it within 30 days for a full refund. Your satisfaction is our priority.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          4. PLANT CATEGORIES GALLERY SECTION
          ========================================================= */}
      <section id="categories" className="categories-gallery-section">
        <div className="categories-gallery-header">
          <h2 className="categories-gallery-title">Find the Perfect Plant</h2>
          <p className="categories-gallery-subtitle">
            Explore our curated collection organized by light needs, care level, and style.
          </p>
        </div>

        <div className="categories-gallery-grid">
          {/* Item 1: Air Purifying */}
          <div className="category-gallery-card">
            <img
              src="/plant4.jpeg"
              alt="Air Purifying Plants"
              className="category-gallery-img"
            />
            <div className="category-gallery-overlay">
              <h3 className="category-gallery-name">Air Purifying Plants</h3>
              <span className="category-gallery-count">48 plants</span>
            </div>
          </div>

          {/* Item 2: Low Light */}
          <div className="category-gallery-card">
            <img
              src="/plant5.jpeg"
              alt="Low Light Plants"
              className="category-gallery-img"
            />
            <div className="category-gallery-overlay">
              <h3 className="category-gallery-name">Low Light Plants</h3>
              <span className="category-gallery-count">36 plants</span>
            </div>
          </div>

          {/* Item 3: Pet-Friendly */}
          <div className="category-gallery-card">
            <img
              src="/plant6.jpeg"
              alt="Pet-Friendly Plants"
              className="category-gallery-img"
            />
            <div className="category-gallery-overlay">
              <h3 className="category-gallery-name">Pet-Friendly Plants</h3>
              <span className="category-gallery-count">29 plants</span>
            </div>
          </div>

          {/* Item 4: Flowering Plants */}
          <div className="category-gallery-card">
            <img
              src="/plant7.jpeg"
              alt="Flowering Plants"
              className="category-gallery-img"
            />
            <div className="category-gallery-overlay">
              <h3 className="category-gallery-name">Flowering Plants</h3>
              <span className="category-gallery-count">42 plants</span>
            </div>
          </div>

          {/* Item 5: Large Floor Plants */}
          <div className="category-gallery-card">
            <img
              src="/plant8.jpeg"
              alt="Large Floor Plants"
              className="category-gallery-img"
            />
            <div className="category-gallery-overlay">
              <h3 className="category-gallery-name">Large Floor Plants</h3>
              <span className="category-gallery-count">31 plants</span>
            </div>
          </div>

          {/* Item 6: Succulents & Cacti */}
          <div className="category-gallery-card">
            <img
              src="/plant9.jpeg"
              alt="Succulents & Cacti"
              className="category-gallery-img"
            />
            <div className="category-gallery-overlay">
              <h3 className="category-gallery-name">Succulents & Cacti</h3>
              <span className="category-gallery-count">55 plants</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NEW SECTION: OUR MOST LOVED PLANTS (PRODUCT GRID)
          ========================================================= */}
      <section className="loved-plants-section">
        <div className="loved-plants-header">
          <div className="header-left">
            <span className="loved-plants-tagline">Featured Plants</span>
            <h2 className="loved-plants-title">Our Most Loved Plants</h2>
            <p className="loved-plants-subtitle">hand-picked favorites customers keep coming back for</p>
          </div>
          <a href="#shop" className="view-all-link">
            View All Plants <ArrowRight size={16} />
          </a>
        </div>

        <div className="products-grid">
          {/* Plant 1 */}
          <div className="product-card">
            <div className="image-container">
              <span className="badge badge-bestseller">Bestseller</span>
              <span className="badge badge-discount">-23%</span>
              <img src="/p1.jpg" alt="Monstera Deliciosa" />
            </div>
            <div className="product-info">
              <span className="product-category">Large Floor Plants</span>
              <h3 className="product-name">Monstera Deliciosa</h3>
              <div className="rating-row">
                <span className="stars">★★★★★</span>
                <span className="reviews-count">(234)</span>
              </div>
              <div className="price-row">
                <div className="price-box">
                  <span className="current-price">$49.99</span>
                  <span className="old-price">$64.99</span>
                </div>
                <button className="add-to-cart-btn" aria-label="Add to cart">
                  <ShoppingBag size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Plant 2 */}
          <div className="product-card">
            <div className="image-container">
              <span className="badge badge-purifier">Air Purifier</span>
              <img src="/p2.jpg" alt="Snake Plant Laurentii" />
            </div>
            <div className="product-info">
              <span className="product-category">Air Purifying Plants</span>
              <h3 className="product-name">Snake Plant Laurentii</h3>
              <div className="rating-row">
                <span className="stars">★★★★★</span>
                <span className="reviews-count">(189)</span>
              </div>
              <div className="price-row">
                <div className="price-box">
                  <span className="current-price">$34.99</span>
                </div>
                <button className="add-to-cart-btn" aria-label="Add to cart">
                  <ShoppingBag size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Plant 3 */}
          <div className="product-card">
            <div className="image-container">
              <span className="badge badge-trending">Trending</span>
              <span className="badge badge-discount">-25%</span>
              <img src="/p3.jpg" alt="Fiddle Leaf Fig" />
            </div>
            <div className="product-info">
              <span className="product-category">Large Floor Plants</span>
              <h3 className="product-name">Fiddle Leaf Fig</h3>
              <div className="rating-row">
                <span className="stars">★★★★★</span>
                <span className="reviews-count">(312)</span>
              </div>
              <div className="price-row">
                <div className="price-box">
                  <span className="current-price">$59.99</span>
                  <span className="old-price">$79.99</span>
                </div>
                <button className="add-to-cart-btn" aria-label="Add to cart">
                  <ShoppingBag size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Plant 4 */}
          <div className="product-card">
            <div className="image-container">
              <span className="badge badge-flowering">Flowering</span>
              <img src="/p4.jpg" alt="Peace Lily" />
            </div>
            <div className="product-info">
              <span className="product-category">Flowering Plants</span>
              <h3 className="product-name">Peace Lily</h3>
              <div className="rating-row">
                <span className="stars">★★★★★</span>
                <span className="reviews-count">(167)</span>
              </div>
              <div className="price-row">
                <div className="price-box">
                  <span className="current-price">$29.99</span>
                </div>
                <button className="add-to-cart-btn" aria-label="Add to cart">
                  <ShoppingBag size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. EDITORIAL SHOWCASE SECTION (ZIG-ZAG LAYOUT WITH SHADOW ASSET)
          ========================================================= */}
      <section className="editorial-showcase-section">
        <div className="editorial-container">

          {/* Row 1: Image Right, Text Left */}
          <div className="editorial-row img-right">
            <div className="editorial-text-pane">
              <span className="editorial-tag">Curated Spaces</span>
              <h2 className="editorial-title">Designed to Elevate Your Living Environment</h2>
              <p className="editorial-description">
                Incorporate majestic architectural flora tailored precisely to complement spatial geometry and lighting frameworks. Our collections bridge modern design lines with pure natural accents.
              </p>
              <button className="editorial-discover-btn">
                Explore Interior Designs <ArrowRight size={16} />
              </button>
            </div>
            <div className="editorial-image-pane">
              <div className="editorial-img-wrapper">
                <img src="/plant10.jpeg" alt="Botanical Design Space Layout" className="editorial-main-img" />
              </div>
            </div>
          </div>

          {/* Row 2: Image Left, Text Right */}
          <div className="editorial-row img-left">
            <div className="editorial-text-pane">
              <span className="editorial-tag">Eco Sustainability</span>
              <h2 className="editorial-title">Sourced Consciously, Grown Responsibly</h2>
              <p className="editorial-description">
                Every specimen originates from specialized ecosystems dedicated to biological sustainability. Our nursery practices utilize zero chemical runoffs, shielding your household air parameters flawlessly.
              </p>
              <button className="editorial-discover-btn">
                Our Growing Methods <ArrowRight size={16} />
              </button>
            </div>
            <div className="editorial-image-pane">
              <div className="editorial-img-wrapper">
                <img src="/plant12.jpeg" alt="Sustainable Nursery Cultivation" className="editorial-main-img" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          6. INTERACTIVE NEWSLETTER SUBSCRIPTION SECTION
          ========================================================= */}
      <section className="newsletter-section">
        <div className="newsletter-container animation-fade-up">

          <div className="newsletter-content">
            <span className="newsletter-tag">Join Our Green Community</span>
            <h2 className="newsletter-title">Keep Your Space Fresh</h2>
            <p className="newsletter-description">
              Subscribe to our newsletter for exclusive plant care tips, early access to new arrivals, and 10% off your first order.
            </p>
          </div>

          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-submit-btn">
                <span>Subscribe Now</span>
                <ArrowRight size={16} className="btn-arrow-icon" />
              </button>
            </div>
          </form>

        </div>
      </section>
    </div>
  );
}

export default Home;