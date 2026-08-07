import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Plane,
  User,
  Mail,
  Lock,
  RotateCcw,
  BookOpen,
  Hash,
  Phone,
  AlertCircle,
  ShieldCheck,
  GraduationCap,
  Headphones,
  ArrowRight,
} from 'lucide-react';

export const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    email: 'alex.smith@gmail.com',
    phone: '',
    department: '',
    semester: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [emailTouched, setEmailTouched] = useState(true);
  const [loading, setLoading] = useState(false);

  const isEmailInvalid =
    emailTouched &&
    formData.email.length > 0 &&
    !formData.email.endsWith('@pcte.edu') &&
    !formData.email.endsWith('@pcte.edu.in');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const getPasswordStrength = () => {
    const { password } = formData;
    if (!password) return { level: 0, text: 'No password', color: '#cbd5e1' };
    if (password.length < 6) return { level: 1, text: 'Weak', color: '#ef4444' };
    if (password.length < 10) return { level: 2, text: 'Medium', color: '#f59e0b' };
    return { level: 4, text: 'Strong', color: '#10b981' };
  };

  const strength = getPasswordStrength();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      register(formData);
      navigate('/dashboard');
    }, 600);
  };

  return (
    <div className="registration-page-wrapper">
      {/* Brand Header */}
      <div className="reg-brand-header" onClick={() => navigate('/')}>
        <h1 className="reg-brand-title">PCTE Travel</h1>
        <p className="reg-brand-subtitle">Global experiences for the modern scholar.</p>
      </div>

      {/* Main Centered Registration Card */}
      <div className="reg-card">
        <div className="reg-card-header">
          <h2>Student Registration</h2>
          <p>Complete the form below to begin your academic journey abroad.</p>
        </div>

        <form onSubmit={handleSubmit} className="reg-form">
          <div className="reg-grid-2col">
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Enter your full legal name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Student ID */}
            <div className="form-group">
              <label htmlFor="studentId">Student ID</label>
              <div className="input-with-icon">
                <Hash size={18} className="input-icon-svg" />
                <input
                  id="studentId"
                  type="text"
                  name="studentId"
                  required
                  placeholder="e.g. PCTE-2024-001"
                  value={formData.studentId}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* College Email */}
            <div className="form-group">
              <label htmlFor="email">College Email</label>
              <div className={`input-with-icon ${isEmailInvalid ? 'input-error-border' : ''}`}>
                <span className="input-icon">@</span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="alex.smith@pcte.edu.in"
                  value={formData.email}
                  onFocus={() => setEmailTouched(true)}
                  onChange={handleChange}
                />
              </div>
              {isEmailInvalid && (
                <div className="field-error-msg">
                  <AlertCircle size={14} />
                  <span>Please use your official @pcte.edu.in email address.</span>
                </div>
              )}
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <div className="input-with-icon">
                <Phone size={18} className="input-icon-svg" />
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Department */}
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select your department</option>
                <option value="Computer Science & IT">Computer Science & IT</option>
                <option value="Global Business Relations">Global Business Relations</option>
                <option value="Hotel Management">Hotel Management</option>
                <option value="Biotechnology">Biotechnology</option>
                <option value="Journalism & Mass Comm">Journalism & Mass Comm</option>
                <option value="Environmental Science">Environmental Science</option>
              </select>
            </div>

            {/* Current Semester */}
            <div className="form-group">
              <label htmlFor="semester">Current Semester</label>
              <select
                id="semester"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                required
              >
                <option value="">Select semester</option>
                <option value="Semester 1">Semester 1</option>
                <option value="Semester 2">Semester 2</option>
                <option value="Semester 3">Semester 3</option>
                <option value="Semester 4">Semester 4</option>
                <option value="Semester 5">Semester 5</option>
                <option value="Semester 6">Semester 6</option>
                <option value="Semester 7">Semester 7</option>
                <option value="Semester 8">Semester 8</option>
              </select>
            </div>

            {/* Create Password */}
            <div className="form-group">
              <label htmlFor="password">Create Password</label>
              <div className="input-with-icon">
                <Lock size={18} className="input-icon-svg" />
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  placeholder="Min. 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-with-icon">
                <RotateCcw size={18} className="input-icon-svg" />
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  required
                  placeholder="Repeat password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Password Strength Meter */}
          <div className="password-strength-box">
            <div className="strength-bars">
              <div className={`bar ${strength.level >= 1 ? 'active' : ''}`} style={{ backgroundColor: strength.level >= 1 ? strength.color : '#e2e8f0' }}></div>
              <div className={`bar ${strength.level >= 2 ? 'active' : ''}`} style={{ backgroundColor: strength.level >= 2 ? strength.color : '#e2e8f0' }}></div>
              <div className={`bar ${strength.level >= 3 ? 'active' : ''}`} style={{ backgroundColor: strength.level >= 3 ? strength.color : '#e2e8f0' }}></div>
              <div className={`bar ${strength.level >= 4 ? 'active' : ''}`} style={{ backgroundColor: strength.level >= 4 ? strength.color : '#e2e8f0' }}></div>
            </div>
            <span className="strength-text">Strength: {strength.text}</span>
          </div>

          {/* Terms Checkbox */}
          <div className="terms-checkbox-row">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />
              <span className="custom-checkbox"></span>
              <span>
                I agree to the <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a> and{' '}
                <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a> regarding my personal data usage for travel arrangements.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="reg-orange-btn" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account →'}
          </button>

          {/* Login Link */}
          <div className="reg-footer-link">
            <span>Already have an account? </span>
            <Link to="/login" className="login-text-btn">Login</Link>
          </div>
        </form>
      </div>

      {/* Trust Badges */}
      <div className="reg-trust-badges">
        <div className="trust-badge-item">
          <ShieldCheck size={20} className="trust-icon" />
          <span>Secure Enrollment</span>
        </div>
        <div className="trust-badge-item">
          <GraduationCap size={20} className="trust-icon" />
          <span>100+ Partner Colleges</span>
        </div>
        <div className="trust-badge-item">
          <Headphones size={20} className="trust-icon" />
          <span>24/7 Academic Support</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
