import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Plane, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('scholar@pcte.edu');
  const [password, setPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login(email, password);
      navigate(from, { replace: true });
    }, 500);
  };

  return (
    <div className="auth-page-container">
      {/* Left Promotional Banner - Fluid Gradient */}
      <div className="auth-left-banner">
        <div className="auth-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <div className="auth-logo-badge">
            <Plane size={24} color="#ffffff" />
          </div>
          <span className="auth-brand-name">PCTE Travel</span>
        </div>

        <div className="auth-banner-content">
          <h1 className="auth-banner-title">Your journey starts here.</h1>
          <p className="auth-banner-desc">
            Connect with global academic opportunities, seamless bookings, and a world of student exploration designed exclusively for PCTE Scholars.
          </p>

          <div className="auth-trip-preview-card">
            <div className="trip-preview-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80"
                alt="Berlin Academic Summit Students"
                className="trip-preview-img"
              />
            </div>
            <div className="trip-preview-info">
              <div>
                <span className="trip-preview-label">NEXT TRIP</span>
                <h3 className="trip-preview-heading">Berlin Academic Summit</h3>
              </div>
              <button
                type="button"
                onClick={() => navigate('/trips')}
                className="trip-preview-arrow-btn"
                aria-label="View trip details"
              >
                  <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="auth-banner-footer">
          <p>© 2024 PCTE College Travel Agency &nbsp;•&nbsp; Official Student Portal</p>
        </div>
      </div>

      {/* Right Login Form */}
      <div className="auth-right-form-wrapper">
        <div className="auth-form-box">
          <div className="auth-form-header">
            <h2>Welcome Back</h2>
            <p>Enter your credentials to access your student travel hub.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">College Email Address</label>
              <div className="input-with-icon">
                <span className="input-icon">@</span>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="e.g. scholar@pcte.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <Lock size={18} className="input-icon-svg" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="form-row-remember">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="custom-checkbox"></span>
                <span>Remember Me</span>
              </label>
              <a href="#forgot" onClick={(e) => e.preventDefault()} className="forgot-link">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="auth-primary-btn" disabled={loading}>
              {loading ? 'Signing in...' : 'Login to Portal →'}
            </button>

            <div className="auth-divider">
              <span>OR CONTINUE WITH</span>
            </div>

            <button
              type="button"
              className="google-signin-btn"
              onClick={() => {
                login('aditi.sharma@pcte.edu', 'password');
                navigate(from, { replace: true });
              }}
            >
              <svg className="google-icon" viewBox="0 0 24 24" width="18" height="18">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Sign in with Google</span>
            </button>

            <div className="auth-footer-note">
              <span>Don't have an account? </span>
              <Link to="/register" className="auth-toggle-link">
                Register Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
