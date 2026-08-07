import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Plane,
  CheckCircle,
  CreditCard,
  Building,
  Smartphone,
  Wallet,
  Lock,
  Info,
  ShieldCheck,
  Award,
} from 'lucide-react';

export const Payment = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [saveCard, setSaveCard] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePayNow = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate('/confirmation');
    }, 600);
  };

  return (
    <div className="payment-page-wrapper">
      {/* Header Navbar */}
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

      {/* Checkout Progress Steps */}
      <div className="checkout-progress-bar">
        <div className="progress-step step-completed">
          <CheckCircle size={18} className="step-check-icon" />
          <span className="step-label">Selection</span>
        </div>
        <div className="progress-line line-completed"></div>
        <div className="progress-step step-completed">
          <CheckCircle size={18} className="step-check-icon" />
          <span className="step-label">Details</span>
        </div>
        <div className="progress-line line-completed"></div>
        <div className="progress-step step-active">
          <div className="step-number">3</div>
          <span className="step-label">Payment</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="payment-main-container">
        <h1 className="payment-page-title">Choose Payment Method</h1>

        <div className="payment-layout-grid">
          {/* Left Column: Vertical Tabs */}
          <div className="payment-tabs-sidebar">
            <button
              type="button"
              className={`payment-tab-btn ${paymentMethod === 'upi' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('upi')}
            >
              <Smartphone size={20} />
              <span>UPI</span>
            </button>
            <button
              type="button"
              className={`payment-tab-btn ${paymentMethod === 'debit' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('debit')}
            >
              <CreditCard size={20} />
              <span>Debit Card</span>
            </button>
            <button
              type="button"
              className={`payment-tab-btn ${paymentMethod === 'credit' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('credit')}
            >
              <CreditCard size={20} />
              <span>Credit Card</span>
            </button>
            <button
              type="button"
              className={`payment-tab-btn ${paymentMethod === 'netbanking' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('netbanking')}
            >
              <Building size={20} />
              <span>Net Banking</span>
            </button>
          </div>

          {/* Middle Column: Card Form */}
          <div className="payment-form-card">
            <div className="card-form-header">
              <h2>Card Details</h2>
              <div className="card-type-icons">
                <Wallet size={20} className="text-slate-400" />
                <CreditCard size={20} className="text-slate-400" />
              </div>
            </div>

            <form onSubmit={handlePayNow} className="card-form-body">
              <div className="form-group">
                <label>Card Number</label>
                <div className="input-with-icon">
                  <input
                    type="text"
                    placeholder="XXXX XXXX XXXX XXXX"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                  <CreditCard size={18} className="input-icon-right text-indigo-600" />
                </div>
              </div>

              <div className="form-row-2col">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <div className="input-with-icon">
                    <input
                      type="password"
                      maxLength={4}
                      placeholder="***"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                    />
                    <Info size={16} className="input-icon-right text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Cardholder Name</label>
                <input
                  type="text"
                  placeholder="As shown on card"
                  value={cardHolder}
                  onChange={(e) => setCardHolder(e.target.value)}
                  required
                />
              </div>

              <div className="save-card-checkbox">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={saveCard}
                    onChange={(e) => setSaveCard(e.target.checked)}
                  />
                  <span className="custom-checkbox"></span>
                  <span className="save-card-text">
                    Securely save this card for future academic trips. Our servers never store your full card details.
                  </span>
                </label>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="payment-summary-card">
            <h2 className="order-summary-title">Order Summary</h2>

            <div className="summary-trip-details">
              <div className="trip-flex-row">
                <div>
                  <h3 className="order-trip-name">Global Tech Internship Trip</h3>
                  <p className="order-trip-meta">San Francisco, USA • 14 Days</p>
                </div>
                <span className="order-trip-price">$2,450.00</span>
              </div>
            </div>

            <div className="summary-divider"></div>

            <div className="price-breakdown-list">
              <div className="price-row">
                <span>Student Discount (PCTE-HUB)</span>
                <span className="text-emerald-600 font-bold">-$250.00</span>
              </div>
              <div className="price-row">
                <span>Processing Fee</span>
                <span>$45.00</span>
              </div>
            </div>

            <div className="summary-divider"></div>

            <div className="order-total-block">
              <div className="total-label-val">
                <span className="total-title">Total</span>
                <span className="total-amount-blue">$2,245.00</span>
              </div>
              <p className="taxes-note">Inclusive of all taxes</p>
            </div>

            <button
              type="button"
              className="pay-now-primary-btn"
              onClick={handlePayNow}
              disabled={loading}
            >
              <Lock size={18} />
              <span>{loading ? 'Processing Payment...' : 'Pay $2,245.00 Now'}</span>
            </button>

            <p className="booking-policy-text">
              By clicking "Pay Now", you agree to the{' '}
              <a href="#policy" onClick={(e) => e.preventDefault()}>Booking Policy</a>.
            </p>

            <div className="security-badges-footer">
              <div className="badge-item">
                <ShieldCheck size={18} />
                <span>PCI DSS COMPLIANT</span>
              </div>
              <div className="badge-item">
                <Lock size={18} />
                <span>SSL SECURED</span>
              </div>
              <div className="badge-item">
                <Award size={18} />
                <span>MCAFEE SECURE</span>
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
              Empowering student exploration through reliable and tech-driven travel solutions.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#policy">Trip Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#support">Contact Support</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="copyright-end">
              © 2024 PCTE College Travel Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Payment;
