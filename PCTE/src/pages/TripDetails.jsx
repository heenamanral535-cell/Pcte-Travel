import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Plane,
  MapPin,
  Clock,
  Calendar,
  Users,
  Star,
  Plus,
  Minus,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Edit,
} from 'lucide-react';

export const TripDetails = () => {
  const navigate = useNavigate();
  const { tripId } = useParams();
  const { user, isAuthenticated } = useAuth();

  const [activeTab, setActiveTab] = useState('Overview');
  const [studentsCount, setStudentsCount] = useState(1);

  const pricePerStudent = 1249;
  const serviceFee = 62.45;
  const totalAmount = pricePerStudent * studentsCount + serviceFee;

  const handleBookNow = () => {
    navigate(`/booking/${tripId || 1}`);
  };

  return (
    <div className="single-trip-page">
      {/* Navbar */}
      <header className="public-navbar">
        <div className="navbar-container">
          <div className="nav-brand" onClick={() => navigate('/')}>
            <div className="landing-logo-badge">
              <Plane size={20} color="#ffffff" />
            </div>
            <span className="brand-text">PCTE Travel</span>
          </div>

          <nav className="navbar-links">
            <Link to="/trips" className="active-nav">Trips</Link>
            <Link to="/trips">My Bookings</Link>
            <a href="#support" onClick={(e) => e.preventDefault()}>Support</a>
          </nav>

          <div className="navbar-auth-buttons">
            {isAuthenticated ? (
              <button className="navbar-profile-btn" onClick={() => navigate('/profile')}>
                <img src={user?.avatar} alt={user?.name} className="navbar-user-avatar" />
                <span>{user?.name?.split(' ')[0]}</span>
              </button>
            ) : (
              <>
                <Link to="/login" className="nav-btn-signin">Sign In</Link>
                <Link to="/register" className="nav-btn-register">Register</Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <div className="trip-hero-banner">
        <img
          src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1600&auto=format&fit=crop&q=80"
          alt="Alpine Majesty"
          className="trip-hero-bg-img"
        />
        <div className="trip-hero-overlay">
          <div className="trip-hero-content">
            <div className="location-pin-badge">
              <MapPin size={16} />
              <span>INTERLAKEN, SWITZERLAND</span>
            </div>
            <h1 className="trip-hero-title">Alpine Majesty: Winter Academic Expedition</h1>
            <div className="trip-hero-tags">
              <span className="tag-pill">Academic</span>
              <span className="tag-pill">Cultural</span>
            </div>
          </div>
        </div>

        {/* Floating Specs Bar */}
        <div className="trip-hero-specs-bar">
          <div className="spec-item">
            <span className="spec-label">FROM</span>
            <h3 className="spec-value text-indigo-600">$1,249</h3>
          </div>
          <div className="spec-item">
            <Clock size={18} className="spec-icon" />
            <div>
              <span className="spec-label">Duration</span>
              <h4 className="spec-val-sm">8 Days</h4>
            </div>
          </div>
          <div className="spec-item">
            <Calendar size={18} className="spec-icon" />
            <div>
              <span className="spec-label">Dates</span>
              <h4 className="spec-val-sm">Jan 12 - 19</h4>
            </div>
          </div>
          <div className="spec-item">
            <Users size={18} className="spec-icon" />
            <div>
              <span className="spec-label">Seats Left</span>
              <h4 className="spec-val-sm">12 Available</h4>
            </div>
          </div>
          <div className="spec-item">
            <Star size={18} className="spec-icon text-amber-500 fill-amber-500" />
            <div>
              <span className="spec-label">Rating</span>
              <h4 className="spec-val-sm">4.9 (124)</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="trip-detail-tabs-bar">
        <div className="tabs-container">
          {['Overview', 'Itinerary', 'Gallery', 'Reviews'].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="trip-details-main-container">
        <div className="trip-details-grid">
          {/* Left Column */}
          <div className="trip-left-content">
            {/* About Section */}
            <section className="detail-section">
              <h2 className="section-heading">About this Trip</h2>
              <p className="detail-paragraph">
                Experience the breathtaking beauty of the Swiss Alps through an academic lens. This curated expedition combines rigorous workshops on glaciology and sustainable tourism with world-class skiing and cultural immersion in Interlaken. Designed for students seeking to expand their horizons while gaining practical knowledge in one of the world's most stunning natural laboratories.
              </p>

              {/* Photo Gallery Grid */}
              <div className="trip-gallery-grid-3">
                <img
                  src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&auto=format&fit=crop&q=80"
                  alt="Swiss Train in Snow"
                  className="gallery-img-large"
                />
                <div className="gallery-column-right">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80"
                    alt="Classroom workshop"
                    className="gallery-img-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
                    alt="Cozy dining"
                    className="gallery-img-sm"
                  />
                </div>
              </div>
            </section>

            {/* Trip Itinerary Section */}
            <section className="detail-section">
              <h2 className="section-heading">Trip Itinerary</h2>
              <div className="itinerary-timeline">
                <div className="timeline-item">
                  <div className="timeline-dot active-dot"></div>
                  <div className="timeline-content">
                    <span className="day-badge">DAY 1: ARRIVAL & ORIENTATION</span>
                    <h3 className="timeline-title">Arrival in Zurich</h3>
                    <p className="timeline-desc">Check-in at the Grand Hotel, followed by an evening welcome reception and trip briefing.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="day-badge">DAY 2: THE EIGER NORTH FACE</span>
                    <h3 className="timeline-title">Mountain Exploration</h3>
                    <p className="timeline-desc">Morning lecture on alpine geography followed by a guided tour of the Grindelwald valley.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="day-badge">DAY 3: SUSTAINABLE FUTURES</span>
                    <h3 className="timeline-title">Eco-Tourism Workshop</h3>
                    <p className="timeline-desc">Interactive session with local conservationists regarding climate impact on alpine ecosystems.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Student Reviews Section */}
            <section className="detail-section">
              <div className="flex-between-header">
                <h2 className="section-heading">Student Reviews</h2>
                <button className="write-review-btn">
                  <Edit size={14} /> Write a Review
                </button>
              </div>

              <div className="reviews-grid-2col">
                <div className="review-card-sm">
                  <div className="review-user-row">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                      alt="Alex Rivera"
                      className="review-avatar"
                    />
                    <div>
                      <h4>Alex Rivera</h4>
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="star-filled" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="review-text">
                    "The perfect balance of education and adventure. The glaciology workshop was eye-opening, and the skiing was out of this world!"
                  </p>
                </div>

                <div className="review-card-sm">
                  <div className="review-user-row">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                      alt="Sarah Chen"
                      className="review-avatar"
                    />
                    <div>
                      <h4>Sarah Chen</h4>
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="star-filled" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="review-text">
                    "Well-organized and high-quality accommodations. I met so many like-minded students from across the country."
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Booking Summary Box */}
          <div className="trip-right-sidebar">
            <div className="booking-summary-sticky-card">
              <h3 className="summary-card-title">Booking Summary</h3>

              <div className="price-row-item">
                <span>Price per student</span>
                <span className="price-bold">${pricePerStudent}</span>
              </div>

              <div className="students-counter-group">
                <label>STUDENTS</label>
                <div className="counter-controls">
                  <button
                    type="button"
                    className="counter-btn-sm"
                    onClick={() => setStudentsCount(Math.max(1, studentsCount - 1))}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="counter-number">{studentsCount}</span>
                  <button
                    type="button"
                    className="counter-btn-sm"
                    onClick={() => setStudentsCount(studentsCount + 1)}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="price-row-item text-slate-500 text-sm">
                <span>Service Fee (5%)</span>
                <span>${serviceFee.toFixed(2)}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="price-row-item total-item">
                <span className="total-label">Total</span>
                <span className="total-price-blue">${totalAmount.toFixed(2)}</span>
              </div>

              <button className="book-now-blue-btn" onClick={handleBookNow}>
                <span>Book Now</span>
                <ArrowRight size={18} />
              </button>

              <div className="secure-booking-guarantee-note">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>Secure academic booking guaranteed</span>
              </div>
            </div>

            {/* Assistance Card */}
            <div className="assistance-card-amber">
              <HelpCircle size={24} className="help-amber-icon" />
              <div>
                <h4>Need assistance?</h4>
                <p>Our travel advisors are available 24/7 for student support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="pcte-footer">
        <div className="footer-content-wrapper">
          <div className="footer-col footer-brand-col">
            <div className="footer-brand">
              <Plane size={24} className="footer-plane-icon" />
              <span className="footer-brand-title">PCTE Travel</span>
            </div>
            <p className="footer-brand-desc">
              Empowering the next generation of global citizens through organized academic and cultural travel experiences.
            </p>
          </div>

          <div className="footer-col">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#mission">Our Mission</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>RESOURCES</h4>
            <ul>
              <li><a href="#policy">Trip Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>SUPPORT</h4>
            <ul>
              <li><a href="#support">Contact Support</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#safety">Safety Guidelines</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TripDetails;
