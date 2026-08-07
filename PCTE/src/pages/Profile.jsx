import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Plane,
  LayoutDashboard,
  Luggage,
  User,
  Settings,
  LogOut,
  Edit,
  Mail,
  Phone,
  Lock,
  History,
  CheckCircle2,
  Globe,
  Award,
} from 'lucide-react';

export const Profile = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="student-hub-profile-page">
      {/* Top Navbar */}
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
            <Link to="/trips">My Bookings</Link>
            <a href="#support" onClick={(e) => e.preventDefault()}>Support</a>
          </nav>

          <div className="navbar-auth-buttons">
            <div className="hub-user-pill">
              <img
                src={user?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'}
                alt={user?.name}
                className="hub-user-avatar"
              />
              <span className="hub-user-name">{user?.name || 'Alex Rivera'}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container Layout */}
      <div className="hub-page-container">
        <div className="hub-main-grid">
          {/* Left Navigation Sidebar Card */}
          <aside className="hub-sidebar-card">
            <div className="hub-profile-header">
              <div className="hub-avatar-ring">
                <img
                  src={user?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'}
                  alt={user?.name}
                  className="hub-avatar-img"
                />
              </div>
              <h2 className="hub-student-title">Student Hub</h2>
              <p className="hub-student-role">{user?.role || 'PCTE Scholar'}</p>
              <span className="hub-dept-pill">BS Computer Science</span>
            </div>

            <nav className="hub-nav-menu">
              <Link to="/dashboard" className="hub-nav-item">
                <LayoutDashboard size={18} />
                <span>Overview</span>
              </Link>
              <Link to="/trips" className="hub-nav-item">
                <Luggage size={18} />
                <span>My Trips</span>
              </Link>
              <Link to="/profile" className="hub-nav-item active">
                <User size={18} />
                <span>Profile</span>
              </Link>
              <Link to="/settings" className="hub-nav-item">
                <Settings size={18} />
                <span>Settings</span>
              </Link>
            </nav>

            <div className="hub-sidebar-footer">
              <button className="hub-logout-btn" onClick={handleLogout}>
                <LogOut size={16} />
                <span>Log Out</span>
              </button>
            </div>
          </aside>

          {/* Right Main Content Area */}
          <main className="hub-content-area">
            {/* Header Title Bar */}
            <div className="hub-content-header">
              <div>
                <h1 className="hub-page-title">Personal Information</h1>
                <p className="hub-page-subtitle">Manage your account details and security settings.</p>
              </div>
              <button className="btn-edit-profile">
                <Edit size={16} />
                <span>Edit Profile</span>
              </button>
            </div>

            {/* Profile Grid: Personal Info Cards */}
            <div className="profile-info-cards-grid">
              {/* Card 1: Identification */}
              <div className="info-box-card">
                <div className="card-top-icon-row">
                  <span className="box-category-title">IDENTIFICATION</span>
                  <Award size={24} className="text-slate-300" />
                </div>
                <div className="info-field-group">
                  <span className="field-lbl">FULL NAME</span>
                  <p className="field-val">Alexandro J. Rivera</p>
                </div>
                <div className="info-field-group">
                  <span className="field-lbl">STUDENT ID</span>
                  <p className="field-val">{user?.studentId || 'PCTE-2024-8832'}</p>
                </div>
              </div>

              {/* Card 2: Contact Details */}
              <div className="info-box-card">
                <span className="box-category-title">CONTACT DETAILS</span>
                <div className="info-field-group icon-field">
                  <Mail size={16} className="text-indigo-600" />
                  <div>
                    <span className="field-lbl">EMAIL ADDRESS</span>
                    <p className="field-val">{user?.email || 'a.rivera@pcte.edu.co'}</p>
                  </div>
                </div>
                <div className="info-field-group icon-field">
                  <Phone size={16} className="text-indigo-600" />
                  <div>
                    <span className="field-lbl">PHONE NUMBER</span>
                    <p className="field-val">+1 (555) 012-3456</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Academic Profile */}
              <div className="info-box-card wide-card">
                <span className="box-category-title">ACADEMIC PROFILE</span>
                <div className="academic-stats-grid">
                  <div>
                    <span className="field-lbl">DEPARTMENT</span>
                    <p className="field-val">Comp. Science</p>
                  </div>
                  <div>
                    <span className="field-lbl">SEMESTER</span>
                    <p className="field-val">6th (Junior)</p>
                  </div>
                  <div>
                    <span className="field-lbl">GPA</span>
                    <p className="field-val badge-val">
                      3.82 <span className="gpa-badge">EXCELLENT</span>
                    </p>
                  </div>
                  <div>
                    <span className="field-lbl">VISA STATUS</span>
                    <p className="field-val">
                      <span className="visa-badge">ACTIVE F-1</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Credentials Card */}
              <div className="security-navy-card">
                <div className="sec-icon-circle">
                  <Lock size={20} color="#ffffff" />
                </div>
                <div>
                  <h3 className="sec-title">Security Credentials</h3>
                  <p className="sec-desc">Last updated 42 days ago. We recommend regular changes.</p>
                </div>
                <button className="btn-update-password-orange" onClick={() => alert('Change password modal...')}>
                  Update Password
                </button>
              </div>
            </div>

            {/* Recent Activity Card & Adventure Banner Row */}
            <div className="hub-secondary-grid">
              {/* Recent Activity */}
              <div className="activity-card-box">
                <div className="activity-header">
                  <h3>Recent Activity</h3>
                  <History size={18} className="text-slate-400" />
                </div>
                <div className="activity-timeline-list">
                  <div className="activity-item">
                    <div className="activity-icon-badge bg-blue-100 text-blue-600">
                      <Plane size={16} />
                    </div>
                    <div className="activity-details">
                      <h4>Flight Booked: Bogotá to Madrid</h4>
                      <p>Tech Conference 2024 • 2 hours ago</p>
                    </div>
                  </div>

                  <div className="activity-item">
                    <div className="activity-icon-badge bg-amber-100 text-amber-600">
                      <Award size={16} />
                    </div>
                    <div className="activity-details">
                      <h4>Receipt Uploaded</h4>
                      <p>Hotel deposit - $240.00 • Yesterday</p>
                    </div>
                  </div>

                  <div className="activity-item">
                    <div className="activity-icon-badge bg-indigo-100 text-indigo-600">
                      <Lock size={16} />
                    </div>
                    <div className="activity-details">
                      <h4>Login Detected</h4>
                      <p>Chrome on MacOS (Bogotá) • 3 days ago</p>
                    </div>
                  </div>

                  <div className="activity-item">
                    <div className="activity-icon-badge bg-emerald-100 text-emerald-600">
                      <CheckCircle2 size={16} />
                    </div>
                    <div className="activity-details">
                      <h4>Passport Updated</h4>
                      <p>Verified by Registrar • May 12, 2024</p>
                    </div>
                  </div>
                </div>

                <a href="#history" onClick={(e) => e.preventDefault()} className="view-full-history-link">
                  View Full History
                </a>
              </div>

              {/* Promotional Global Adventure Banner */}
              <div className="adventure-promo-banner">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&auto=format&fit=crop&q=80"
                  alt="Airport Exploration"
                  className="promo-bg-img"
                />
                <div className="promo-overlay-gradient">
                  <div className="promo-content">
                    <h2>Your Global Adventure Awaits</h2>
                    <p>
                      Ready for your next academic internship? Explore our sponsored programs across 12 countries.
                    </p>
                    <button onClick={() => navigate('/trips')} className="btn-explore-white-pill">
                      Explore Destinations
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
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
              Empowering students through global academic exploration and dependable travel logistics.
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#policy">Trip Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <div className="footer-social-icons">
              <Globe size={18} />
              <Mail size={18} />
              <Phone size={18} />
            </div>
            <p className="copyright-end">
              © 2024 PCTE College Travel Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
