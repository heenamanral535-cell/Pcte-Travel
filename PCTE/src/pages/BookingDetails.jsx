import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Plane,
  ShieldCheck,
  Calendar as CalendarIcon,
  Plus,
  Minus,
  MapPin,
  HelpCircle,
  ArrowRight,
  Shield,
} from 'lucide-react';
import { tripData } from './ExploreTrips';

export const BookingDetails = () => {
  const navigate = useNavigate();
  const { tripId } = useParams();
  const { user, isAuthenticated } = useAuth();

  const selectedTrip = tripData?.find((t) => String(t.id) === String(tripId)) || {
    title: 'Mediterranean Business Summit',
    category: 'ACADEMIC EXPEDITION',
    location: 'Barcelona & Valencia, Spain',
    price: 1250,
  };

  const [travelDate, setTravelDate] = useState('2024-12-15');
  const [passengers, setPassengers] = useState(0);
  const [pickupPoint, setPickupPoint] = useState('Main Campus Central Plaza (Gate 2)');
  const [specialRequests, setSpecialRequests] = useState('');
  const [promoCode, setPromoCode] = useState('STUDENT2024');

  const basePrice = selectedTrip.price || 1250;
  const grantDiscount = 200;
  const taxes = 45.5;
  const totalAmount = Math.max(0, basePrice * (1 + passengers) - grantDiscount + taxes);

  const handleConfirm = () => {
    navigate('/payment');
  };

  return (
    <div className="booking-details-page">
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
            <Link to="/trips">Trips</Link>
            <Link to="/trips" className="active-nav">My Bookings</Link>
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

      {/* Progress Steps Header */}
      <div className="checkout-progress-bar">
        <div className="progress-step step-active">
          <div className="step-number">1</div>
          <span className="step-label">Details</span>
        </div>
        <div className="progress-line"></div>
        <div className="progress-step">
          <div className="step-number">2</div>
          <span className="step-label">Payment</span>
        </div>
        <div className="progress-line"></div>
        <div className="progress-step">
          <div className="step-number">3</div>
          <span className="step-label">Confirmation</span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="booking-container">
        <div className="booking-main-grid">
          {/* Left Column */}
          <div className="booking-left-col">
            {/* Card 1: Student Information */}
            <div className="checkout-card">
              <div className="card-header-with-icon">
                <h2>Student Information</h2>
                <ShieldCheck size={22} className="text-indigo-600" />
              </div>

              <div className="info-grid-2col">
                <div className="info-item">
                  <span className="info-label">FULL NAME</span>
                  <p className="info-val">{user?.name || 'Alex Rivera'}</p>
                </div>
                <div className="info-item">
                  <span className="info-label">STUDENT ID</span>
                  <p className="info-val">{user?.studentId || 'PCTE-2024-8842'}</p>
                </div>
                <div className="info-item">
                  <span className="info-label">EMAIL ADDRESS</span>
                  <p className="info-val">{user?.email || 'a.rivera@pcte.edu.co'}</p>
                </div>
                <div className="info-item">
                  <span className="info-label">ACADEMIC PROGRAM</span>
                  <p className="info-val">{user?.program || 'Global Business Relations'}</p>
                </div>
              </div>
            </div>

            {/* Card 2: Travel Details */}
            <div className="checkout-card">
              <h2>Travel Details</h2>

              <div className="form-grid-2col">
                <div className="form-group">
                  <label>Preferred Travel Date</label>
                  <div className="input-with-icon">
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Additional Passengers</label>
                  <div className="passenger-counter">
                    <button
                      type="button"
                      className="counter-btn"
                      onClick={() => setPassengers(Math.max(0, passengers - 1))}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="counter-val">{passengers}</span>
                    <button
                      type="button"
                      className="counter-btn"
                      onClick={() => setPassengers(passengers + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Pickup Point</label>
                <select
                  value={pickupPoint}
                  onChange={(e) => setPickupPoint(e.target.value)}
                  className="full-select"
                >
                  <option value="Main Campus Central Plaza (Gate 2)">
                    Main Campus Central Plaza (Gate 2)
                  </option>
                  <option value="North Campus Student Terminal">
                    North Campus Student Terminal
                  </option>
                  <option value="City International Airport Terminal 3">
                    City International Airport Terminal 3
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>Special Requests or Accessibility Needs</label>
                <textarea
                  rows={4}
                  placeholder="Mention any dietary requirements, physical accessibility needs, or specific luggage constraints..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="full-textarea"
                ></textarea>
              </div>
            </div>

            {/* Secure Booking Guarantee Banner */}
            <div className="secure-guarantee-banner">
              <Shield size={22} className="guarantee-shield-icon" />
              <div>
                <h4>Secure Booking Guarantee</h4>
                <p>Your information is encrypted and protected by PCTE institutional security protocols.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="booking-right-col">
            <div className="summary-card">
              <span className="summary-category">{selectedTrip.category}</span>
              <h3 className="summary-title">{selectedTrip.title}</h3>
              <p className="summary-location">
                <MapPin size={14} /> {selectedTrip.location}
              </p>

              <div className="summary-divider"></div>

              <div className="summary-price-breakdown">
                <div className="price-row">
                  <span>Base Program Fee</span>
                  <span>${basePrice.toFixed(2)}</span>
                </div>
                <div className="price-row grant-row">
                  <span>Institutional Grant</span>
                  <span className="text-discount">-${grantDiscount.toFixed(2)}</span>
                </div>
                <div className="price-row">
                  <span>Insurance & Taxes</span>
                  <span>${taxes.toFixed(2)}</span>
                </div>
              </div>

              <div className="summary-divider"></div>

              <div className="total-row">
                <span>Total Amount</span>
                <span className="total-price">${totalAmount.toFixed(2)}</span>
              </div>

              <div className="promo-code-box">
                <label>Promo Code</label>
                <div className="promo-input-group">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="STUDENT2024"
                  />
                  <button type="button" className="apply-promo-btn">
                    Apply
                  </button>
                </div>
              </div>

              <button className="confirm-booking-orange-btn" onClick={handleConfirm}>
                <span>Confirm Booking</span>
                <ArrowRight size={18} />
              </button>

              <p className="disclaimer-text">
                By clicking confirm, you agree to our Trip Policy.
              </p>
            </div>

            {/* Support Box */}
            <div className="help-support-card">
              <HelpCircle size={24} className="help-icon" />
              <div>
                <h4>Need help with booking?</h4>
                <p>Chat with a travel advisor 24/7 or call extension 4402.</p>
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
              Empowering students through global academic experiences and seamless travel solutions.
            </p>
          </div>

          <div className="footer-col">
            <h4>Agency</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#policy">Trip Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#support">Contact Support</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Language</h4>
            <p className="lang-text">🌐 English (Global)</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookingDetails;
