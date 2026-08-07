import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Plane,
  GraduationCap,
  ShieldCheck,
  Tag,
  Globe,
  Star,
  ArrowRight,
  Clock,
  User,
  Send,
  Sparkles,
  CheckCircle2,
  Lock,
  Unlock,
  LayoutDashboard,
  LogOut,
  ChevronDown,
  Search,
  Calendar,
} from 'lucide-react';

export const Landing = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [stepsProgress, setStepsProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const currentScroll = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentScroll);
      }

      // Calculate progress specifically for 4-step timeline section
      const stepsElement = document.getElementById('steps');
      if (stepsElement) {
        const rect = stepsElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const start = windowHeight * 0.85;
        const end = windowHeight * 0.15;
        const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
        setStepsProgress(progress * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    if (e) e.preventDefault();
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const curatedTrips = [
    {
      id: 1,
      title: 'Modern Tokyo Tech Summit',
      price: '$1,299',
      duration: '12 Days',
      seats: '15 Seats Left',
      desc: "Dive deep into Japan's technological landscape with exclusive university tours and industry visits.",
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'French Heritage & Arts',
      price: '$850',
      duration: '8 Days',
      seats: '8 Seats Left',
      desc: 'Explore the Louvre, Montmartre, and the stunning Provence region on this immersive cultural workshop.',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'Australian Marine Ecology',
      price: '$1,450',
      duration: '14 Days',
      seats: '4 Seats Left',
      desc: 'A hands-on research expedition focusing on conservation efforts along the Great Barrier Reef.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="landing-page-container">
      {/* Top Scroll Progress Bar */}
      <div
        className="top-scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      {/* Top Navbar */}
      <nav className="landing-nav">
        <div className="landing-nav-container">
          <div className="landing-brand" onClick={(e) => scrollToSection(e, 'hero')}>
            <div className="landing-logo-badge">
              <Plane size={22} color="#ffffff" />
            </div>
            <span className="landing-brand-title">PCTE Travel</span>
          </div>

          <div className="landing-nav-links">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, 'hero')}
              className={`landing-nav-link ${activeSection === 'hero' ? 'active' : ''}`}
            >
              Home
            </a>
            <a
              href="#curated"
              onClick={(e) => scrollToSection(e, 'curated')}
              className={`landing-nav-link ${activeSection === 'curated' ? 'active' : ''}`}
            >
              Trips
            </a>
            <a
              href="#steps"
              onClick={(e) => scrollToSection(e, 'steps')}
              className={`landing-nav-link ${activeSection === 'steps' ? 'active' : ''}`}
            >
              How it Works
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className={`landing-nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`landing-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </a>
          </div>

          <div className="landing-nav-actions">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="btn-register-pill"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <LayoutDashboard size={16} /> Portal Dashboard
                </button>
                <button
                  onClick={logout}
                  className="btn-signin-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <LogOut size={16} /> Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-signin-link">Sign In</Link>
                <Link to="/register" className="btn-register-pill">Register</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="landing-hero">
        <div className="ambient-glow orb-1"></div>
        <div className="ambient-glow orb-2"></div>
        <div className="hero-grid-container">
          <div className="hero-text-col">
            <div className="trusted-badge">
              <Sparkles size={16} className="badge-sparkle" />
              <span>Trusted by 5,000+ Students</span>
            </div>

            <h1 className="hero-main-title">
              Explore. Learn. <br />
              <span className="highlight-blue">Travel Globally.</span>
            </h1>

            <p className="hero-description">
              Empowering students and faculty with curated academic and leisure journeys.
              Discover cultural immersion programs that redefine your university experience.
            </p>

            <div className="hero-cta-group">
              <button onClick={() => navigate('/trips')} className="btn-hero-primary">
                Explore Trips <ArrowRight size={18} />
              </button>
              <a
                href="#curated"
                onClick={(e) => scrollToSection(e, 'curated')}
                className="btn-hero-secondary"
              >
                View Itineraries
              </a>
            </div>

            <button
              onClick={(e) => scrollToSection(e, 'curated')}
              className="scroll-down-btn"
              aria-label="Scroll down to explore trips"
            >
              <span>Scroll down to explore</span>
              <ChevronDown size={18} className="bounce-arrow" />
            </button>
          </div>

          <div className="hero-image-col">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&auto=format&fit=crop&q=80"
                alt="Students traveling globally"
                className="hero-main-img"
              />
              <div className="hero-img-badge">
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span>Certified Academic Credits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="metrics-banner-bar">
        <div className="metrics-container">
          <div className="metric-item">
            <h3 className="metric-number">150+</h3>
            <p className="metric-label">ACTIVE TRIPS</p>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <h3 className="metric-number">5,000+</h3>
            <p className="metric-label">GLOBAL STUDENTS</p>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <h3 className="metric-number">45</h3>
            <p className="metric-label">COUNTRIES</p>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-item">
            <h3 className="metric-number">98%</h3>
            <p className="metric-label">SATISFACTION</p>
          </div>
        </div>
      </section>

      {/* Curated Student Journeys */}
      <section id="curated" className="landing-section curated-section">
        <div className="section-header-flex">
          <div>
            <h2 className="section-title">Curated Student Journeys</h2>
            <p className="section-subtitle">Explore our most popular academic and leisure destinations</p>
          </div>
          <Link to="/trips" className="section-link-arrow">
            View All Destinations <ArrowRight size={16} />
          </Link>
        </div>

        <div className="curated-cards-grid">
          {curatedTrips.map((trip) => (
            <div key={trip.id} className="curated-trip-card">
              <div className="curated-card-image-box">
                <img src={trip.image} alt={trip.title} className="curated-card-img" />
                <span className="price-tag-badge">{trip.price}</span>
              </div>
              <div className="curated-card-body">
                <h3 className="curated-card-title">{trip.title}</h3>
                <div className="curated-card-meta">
                  <span><Clock size={14} /> {trip.duration}</span>
                  <span><User size={14} /> {trip.seats}</span>
                </div>
                <p className="curated-card-desc">{trip.desc}</p>
                <button
                  onClick={() => navigate(`/booking/${trip.id}`)}
                  className="btn-book-now-purple"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works - Step by Step Process */}
      <section id="steps" className="landing-section steps-section">
        <div className="section-header-center">
          <span className="section-pill-tag">SIMPLE 4-STEP PROCESS</span>
          <h2 className="section-title text-center">How to Use PCTE Travel</h2>
          <p className="section-subtitle text-center">Your journey from student explorer to global scholar in four easy steps</p>
        </div>

        <div className="steps-timeline-grid">
          {/* Dynamic Scroll Connecting Line */}
          <div className="timeline-track-bg">
            <div
              className="timeline-track-fill"
              style={{ width: `${stepsProgress}%` }}
            ></div>
          </div>

          <div className={`step-card step-1 ${stepsProgress >= 15 ? 'active-step' : ''}`}>
            <div className="step-badge">01</div>
            <div className="step-icon-wrapper purple-glow">
              <Search size={26} />
            </div>
            <h3 className="step-title">1. Explore Trips</h3>
            <p className="step-desc">
              Browse curated academic summits, industry internships, and cultural immersion programs tailored for university students.
            </p>
            <div className="step-footer-link" onClick={() => navigate('/trips')}>
              <span>Browse Catalog</span> <ArrowRight size={14} />
            </div>
          </div>

          <div className={`step-card step-2 ${stepsProgress >= 40 ? 'active-step' : ''}`}>
            <div className="step-badge">02</div>
            <div className="step-icon-wrapper blue-glow">
              <Calendar size={26} />
            </div>
            <h3 className="step-title">2. Select Itinerary</h3>
            <p className="step-desc">
              Choose your preferred departure dates, review course credit equivalents, and check seat availability for your cohort.
            </p>
            <div className="step-footer-link" onClick={() => navigate('/trips')}>
              <span>Check Schedules</span> <ArrowRight size={14} />
            </div>
          </div>

          <div className={`step-card step-3 ${stepsProgress >= 65 ? 'active-step' : ''}`}>
            <div className="step-badge">03</div>
            <div className="step-icon-wrapper teal-glow">
              <ShieldCheck size={26} />
            </div>
            <h3 className="step-title">3. Instant Booking</h3>
            <p className="step-desc">
              Reserve your spot with exclusive student discounts, flexible payment plans, and official university authorization.
            </p>
            <div className="step-footer-link" onClick={() => navigate('/register')}>
              <span>Scholar Signup</span> <ArrowRight size={14} />
            </div>
          </div>

          <div className={`step-card step-4 ${stepsProgress >= 88 ? 'active-step' : ''}`}>
            <div className="step-badge">04</div>
            <div className="step-icon-wrapper amber-glow">
              <Plane size={26} />
            </div>
            <h3 className="step-title">4. Fly & Earn Credits</h3>
            <p className="step-desc">
              Embark on your journey with 24/7 student support, faculty guides, and receive certified academic credits upon return.
            </p>
            <div className="step-footer-link" onClick={() => navigate('/dashboard')}>
              <span>View Portal</span> <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </section>

      {/* The PCTE Advantage */}
      <section id="about" className="landing-section advantage-section">
        <div className="section-header-center">
          <span className="section-pill-tag">WHY CHOOSE PCTE</span>
          <h2 className="section-title text-center">The PCTE Advantage</h2>
          <p className="section-subtitle text-center">World-class academic standards paired with unforgettable global exploration</p>
        </div>
        <div className="advantage-grid">
          <div className="advantage-card advantage-1">
            <span className="advantage-badge-pill teal">CREDIT READY</span>
            <div className="advantage-icon-box teal-bg">
              <GraduationCap size={28} color="#0d9488" />
            </div>
            <h3>Academic Focus</h3>
            <p>Every itinerary is verified by university department heads to award certified course credits upon completion.</p>
          </div>

          <div className="advantage-card advantage-2">
            <span className="advantage-badge-pill blue">24/7 GUARD</span>
            <div className="advantage-icon-box blue-bg">
              <ShieldCheck size={28} color="#2563eb" />
            </div>
            <h3>Safe & Guarded</h3>
            <p>Dedicated faculty escorts, round-the-clock emergency assistance, and full international travel insurance.</p>
          </div>

          <div className="advantage-card advantage-3">
            <span className="advantage-badge-pill green">BEST VALUE</span>
            <div className="advantage-icon-box green-bg">
              <Tag size={28} color="#059669" />
            </div>
            <h3>Student Pricing</h3>
            <p>Exclusive academic discounts, early-bird scholarships, and zero-interest installment payment plans.</p>
          </div>

          <div className="advantage-card advantage-4">
            <span className="advantage-badge-pill orange">50+ CAMPUSES</span>
            <div className="advantage-icon-box orange-bg">
              <Globe size={28} color="#d97706" />
            </div>
            <h3>Global Campus Network</h3>
            <p>Direct access to international university labs, tech innovation hubs, and research centers worldwide.</p>
          </div>
        </div>
      </section>

      {/* Student Voices */}
      <section className="landing-section testimonials-section">
        <h2 className="section-title text-center">Student Voices</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                alt="Sarah Johnson"
                className="testimonial-avatar"
              />
              <div>
                <h4>Sarah Johnson</h4>
                <p>Business Major, Year 3</p>
              </div>
            </div>
            <p className="testimonial-quote">
              "The Modern Tokyo trip was a game-changer. I secured an internship lead during one of the industry visits arranged by PCTE. It was perfectly organized!"
            </p>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="star-filled" />
              ))}
            </div>
          </div>

          <div className="testimonial-card featured-testimonial">
            <div className="testimonial-header">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
                alt="Alex Chen"
                className="testimonial-avatar"
              />
              <div>
                <h4>Alex Chen</h4>
                <p>Environmental Science Graduate</p>
              </div>
            </div>
            <p className="testimonial-quote">
              "The ecology trip to Australia provided hands-on data collection experience I couldn't get in a classroom. PCTE Travel knows exactly what students need."
            </p>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="star-filled" />
              ))}
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
                alt="Elena Rodriguez"
                className="testimonial-avatar"
              />
              <div>
                <h4>Elena Rodriguez</h4>
                <p>Art History, Year 2</p>
              </div>
            </div>
            <p className="testimonial-quote">
              "Visiting the European art galleries with an expert guide made my textbooks come to life. The registration process was seamless from start to finish."
            </p>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="star-filled" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="landing-footer">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="landing-brand">
              <div className="landing-logo-badge">
                <Plane size={22} color="#ffffff" />
              </div>
              <span className="landing-brand-title white-text">PCTE Travel</span>
            </div>
            <p className="footer-desc">
              Empowering the next generation of global citizens through curated academic and leisure travel experiences.
            </p>
            <div className="footer-social-icons">
              <div className="social-icon-btn">FB</div>
              <div className="social-icon-btn">IG</div>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><Link to="/trips">Upcoming Trips</Link></li>
              <li><a href="#academic">Academic Support</a></li>
              <li><a href="#insurance">Travel Insurance</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>TRIP POLICY</h4>
            <ul>
              <li><a href="#terms">Cancellation Terms</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#tos">Terms of Service</a></li>
              <li><a href="#credits">Academic Credits</a></li>
            </ul>
          </div>

          <div className="footer-newsletter-col">
            <h4>NEWSLETTER</h4>
            <p>Get trip alerts and exclusive academic travel deals.</p>
            <form onSubmit={(e) => e.preventDefault()} className="newsletter-input-group">
              <input type="email" placeholder="Email Address" required />
              <button type="submit" aria-label="Subscribe">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 PCTE College Travel Agency. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#support">Contact Support</a>
            <span>|</span>
            <a href="#policy">Trip Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
