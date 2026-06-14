import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Heart, ShoppingBag, MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';
import headerBg from '../assets/2A.jpg';

export default function Contact() {
  const [navVisible, setNavVisible] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const maxChars = 500;
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

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError('');
    setShowSuccess(true);

    setFullName('');
    setEmail('');
    setSubject('');
    setMessage('');

    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  return (
    <div className="contact-page-container">

      {/* =========================================================
          1. HERO GRAPHIC JUMBOTRON BANNER (Figma Match)
          ========================================================= */}
      <div
        className="contact-hero-banner"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${headerBg})` }}
      >
        <div className="hero-banner-content">
          <div className="help-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span>We Are Here to Help</span>
          </div>
          <h1 className="contact-hero-title">Get in <span>Touch</span></h1>
          <p className="contact-hero-subtitle">
            Have a question about plant care, an order, or just want to say hello?
            We would absolutely love to hear from you — reach out anytime.
          </p>
        </div>
      </div>

      {/* =========================================================
          2. CORE INTERACTION BLOCK AREA (Split Form Grid)
          ========================================================= */}
      <div className="contact-core-content-wrapper">
        <div className="contact-split-grid">

          {/* LEFT PANEL: CORPORATE CHANNELS DATA LIST */}
          <div className="contact-info-cards-column">

            {/* Card 1: Visit Us */}
            <div className="info-structural-card">
              <div className="card-icon-frame">
                <MapPin size={20} />
              </div>
              <div className="card-text-frame">
                <h3>Visit Us</h3>
                <a
                  href="https://maps.google.com/?q=123+Green+Street+Portland+OR+97201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-main-detail"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  123 Green Street
                </a>
                <p className="card-sub-detail">Portland, OR 97201</p>
              </div>
            </div>

            {/* Card 2: Call Us */}
            <div className="info-structural-card">
              <div className="card-icon-frame">
                <Phone size={20} />
              </div>
              <div className="card-text-frame">
                <h3>Call Us</h3>
                <a
                  href="tel:+15551234567"
                  className="card-main-detail"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  (555) 123-4567
                </a>
                <p className="card-sub-detail">Mon-Fri: 9 AM - 6 PM EST</p>
              </div>
            </div>

            {/* Card 3: Email Us */}
            <div className="info-structural-card">
              <div className="card-icon-frame">
                <Mail size={20} />
              </div>
              <div className="card-text-frame">
                <h3>Email Us</h3>
                <a
                  href="mailto:hello@greennest.plants"
                  className="card-main-detail"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  hello@greennest.plants
                </a>
                <p className="card-sub-detail">support@greennest.plants</p>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: INTERACTIVE EMAIL INPUT FORM FIELD CARD */}
          <div className="contact-form-card">
            {showSuccess && (
              <div
                style={{
                  background: '#d4edda',
                  color: '#155724',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  border: '1px solid #c3e6cb',
                  fontWeight: '600',
                  textAlign: 'center'
                }}
              >
                ✅ Your message has been sent successfully! We will contact you soon.
              </div>
            )}
            <form onSubmit={handleMessageSubmit} className="contact-interactive-form">

              <div className="form-row-double">
                <div className="form-input-block">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-input-block">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError('');
                    }}
                    placeholder="you@example.com"
                    required
                  />

                  {emailError && (
                    <p
                      style={{
                        color: 'red',
                        fontSize: '14px',
                        marginTop: '5px'
                      }}
                    >
                      {emailError}
                    </p>
                  )}
                </div>
              </div>

              <div className="form-input-block">
                <label htmlFor="subject">Subject</label>
                <div className="custom-select-wrapper">
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  >
                    <option value="" disabled hidden>Select a topic</option>
                    <option value="order">Order Tracking & Support</option>
                    <option value="care">Plant Care & Botanical Advice</option>
                    <option value="business">Business Partnerships</option>
                    <option value="other">Other General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="form-input-block">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Tell us how we can help..."
                  maxLength={maxChars}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <div className="textarea-counter-row">
                  <span>{message.length}/{maxChars}</span>
                </div>
              </div>

              <button type="submit" className="contact-submit-btn">
                <Send size={16} />
                <span>Send Message</span>
              </button>

            </form>
          </div>

        </div>

        {/* =========================================================
            3. WHATSAPP & MAPS GEO INFRASTRUCTURE LAYOUT AREA
            ========================================================= */}
        <div className="contact-infrastructure-block">

          {/* WhatsApp Instant Support Widget */}
          <div className="whatsapp-widget-card">
            <div className="whatsapp-card-icon-frame">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.48 8.421-.003 6.615-5.34 11.962-11.91 11.962-2.004-.001-3.973-.51-5.716-1.483L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.793 1.453 5.424 0 9.835-4.417 9.838-9.843.002-2.628-1.022-5.1-2.885-6.964C16.47 1.936 13.999 1.01 11.374 1.01c-5.429 0-9.84 4.416-9.843 9.844-.001 1.706.469 3.326 1.36 4.797L1.93 21.03l5.717-1.498zm11.341-6.116c-.328-.164-1.94-.959-2.242-1.07-.301-.11-.522-.164-.741.164-.219.329-.848 1.07-1.039 1.289-.192.219-.383.246-.711.082-.328-.164-1.386-.511-2.641-1.632-.977-.872-1.637-1.95-1.828-2.279-.191-.329-.02-.507.144-.671.148-.147.328-.384.493-.575.164-.192.219-.329.328-.548.11-.219.055-.411-.027-.575-.083-.164-.741-1.786-1.014-2.443-.267-.641-.539-.553-.741-.563-.192-.01-.41-.012-.629-.012-.219 0-.575.082-.876.411-.3.329-1.149 1.123-1.149 2.74 0 1.616 1.177 3.178 1.341 3.397.164.22 2.316 3.537 5.612 4.961.783.339 1.396.541 1.873.692.787.251 1.503.216 2.069.131.631-.094 1.94-.793 2.215-1.56.274-.767.274-1.423.192-1.56-.083-.137-.3-.22-.629-.384z" /></svg>
            </div>
            <div className="whatsapp-card-text-frame">
              <h3>WhatsApp Support</h3>
              <p>Quick answers via WhatsApp — typically within 5 minutes during business hours.</p>
              <button
                type="button"
                className="whatsapp-interactive-btn"
                onClick={() => window.open('https://wa.me/5551234567', '_blank')}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.48 8.421-.003 6.615-5.34 11.962-11.91 11.962-2.004-.001-3.973-.51-5.716-1.483L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.793 1.453 5.424 0 9.835-4.417 9.838-9.843.002-2.628-1.022-5.1-2.885-6.964C16.47 1.936 13.999 1.01 11.374 1.01c-5.429 0-9.84 4.416-9.843 9.844-.001 1.706.469 3.326 1.36 4.797L1.93 21.03l5.717-1.498zm11.341-6.116c-.328-.164-1.94-.959-2.242-1.07-.301-.11-.522-.164-.741.164-.219.329-.848 1.07-1.039 1.289-.192.219-.383.246-.711.082-.328-.164-1.386-.511-2.641-1.632-.977-.872-1.637-1.95-1.828-2.279-.191-.329-.02-.507.144-.671.148-.147.328-.384.493-.575.164-.192.219-.329.328-.548.11-.219.055-.411-.027-.575-.083-.164-.741-1.786-1.014-2.443-.267-.641-.539-.553-.741-.563-.192-.01-.41-.012-.629-.012-.219 0-.575.082-.876.411-.3.329-1.149 1.123-1.149 2.74 0 1.616 1.177 3.178 1.341 3.397.164.22 2.316 3.537 5.612 4.961.783.339 1.396.541 1.873.692.787.251 1.503.216 2.069.131.631-.094 1.94-.793 2.215-1.56.274-.767.274-1.423.192-1.56-.083-.137-.3-.22-.629-.384z" /></svg>
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Map Vector Component Layout */}
          <div className="map-embed-wrapper-container">
            <div className="map-header-action-row">
              <button
                onClick={() => window.open('https://maps.google.com', '_blank')}
                className="map-open-btn"
              >
                <span>Open in Maps</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </button>
            </div>

            {/* Embedded maps iframe styled according to your grid specifications */}
            <iframe
              title="GreenNest Corporate Location Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.667500589139!2d-122.68453488443414!3d45.517316179101614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a1740fbdfeb%3A0x946b9a8cfb9efd45!2sPortland%20Art%20Museum!5e0!3m2!1sen!2s!4v1654810239123!5m2!1sen!2s"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  );
}
