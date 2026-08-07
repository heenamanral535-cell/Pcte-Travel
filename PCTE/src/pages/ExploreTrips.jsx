import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Plane,
  Search,
  MapPin,
  Calendar as CalendarIcon,
  Clock,
  Users,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
} from 'lucide-react';

export const tripData = [
  {
    id: 'london-summit',
    title: 'London Academic Summit',
    category: 'Academic',
    price: 1249,
    formattedPrice: '$1,249',
    duration: '5 Days',
    seatsLeft: 4,
    location: 'London, United Kingdom',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=80',
    description: "Explore the historic heart of London's education district with curated lectures and industry visits.",
  },
  {
    id: 'tokyo-internship',
    title: 'Tech Tokyo Internship',
    category: 'Internship',
    price: 2850,
    formattedPrice: '$2,850',
    duration: '14 Days',
    seatsLeft: 12,
    location: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&auto=format&fit=crop&q=80',
    description: "A deep dive into Tokyo's booming tech scene with networking events at leading global firms.",
  },
  {
    id: 'mediterranean-retreat',
    title: 'Mediterranean Retreat',
    category: 'Leisure',
    price: 980,
    formattedPrice: '$980',
    duration: '7 Days',
    seatsLeft: 8,
    location: 'Athens & Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&auto=format&fit=crop&q=80',
    description: 'Relax and recharge after finals with a week of sun, sand, and cultural exploration in Greece.',
  },
  {
    id: 'alpine-majesty',
    title: 'Alpine Majesty: Winter Academic Expedition',
    category: 'Academic',
    price: 1249,
    formattedPrice: '$1,249',
    duration: '8 Days',
    seatsLeft: 12,
    location: 'Interlaken, Switzerland',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&auto=format&fit=crop&q=80',
    description: 'Experience the breathtaking beauty of the Swiss Alps with workshops on glaciology and sustainable tourism.',
  },
  {
    id: 'singapore-business',
    title: 'Global Business: Singapore',
    category: 'Internship',
    price: 1750,
    formattedPrice: '$1,750',
    duration: '6 Days',
    seatsLeft: 15,
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&auto=format&fit=crop&q=80',
    description: 'Understand the mechanics of Southeast Asian trade hubs through corporate tours and workshops.',
  },
  {
    id: 'berlin-circuit',
    title: 'Berlin Startup Circuit',
    category: 'Internship',
    price: 1420,
    formattedPrice: '$1,420',
    duration: '8 Days',
    seatsLeft: 10,
    location: 'Berlin, Germany',
    image: 'https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?w=600&auto=format&fit=crop&q=80',
    description: "Connect with Europe's most vibrant startup ecosystem through workshops and office visits.",
  },
];

export const ExploreTrips = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  const [destinationQuery, setDestinationQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [budgetRange, setBudgetRange] = useState('All');

  const filteredTrips = tripData.filter((trip) => {
    const matchesDest =
      trip.title.toLowerCase().includes(destinationQuery.toLowerCase()) ||
      trip.location.toLowerCase().includes(destinationQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || trip.category === selectedCategory;
    return matchesDest && matchesCategory;
  });

  return (
    <div className="explore-trips-page">
      {/* Top Header Navigation */}
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
            <Link to="/profile">My Bookings</Link>
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

      {/* Main Content Area */}
      <div className="explore-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link> &nbsp;/&nbsp; <span>Explore Trips</span>
        </div>

        <h1 className="page-heading">Explore Trips</h1>

        {/* Filter Search Bar Card */}
        <div className="filter-card-bar">
          <div className="filter-field">
            <label>Destination</label>
            <div className="filter-input-wrapper">
              <MapPin size={18} className="field-icon" />
              <input
                type="text"
                placeholder="Where to?"
                value={destinationQuery}
                onChange={(e) => setDestinationQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="filter-field">
            <label>Category</label>
            <div className="filter-input-wrapper">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Academic">Academic</option>
                <option value="Internship">Internship</option>
                <option value="Leisure">Leisure</option>
              </select>
            </div>
          </div>

          <div className="filter-field">
            <label>Budget Range</label>
            <div className="filter-input-wrapper">
              <select value={budgetRange} onChange={(e) => setBudgetRange(e.target.value)}>
                <option value="All">Any Budget</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-2000">$1,000 - $2,000</option>
                <option value="2000+">$2,000+</option>
              </select>
            </div>
          </div>

          <div className="filter-field">
            <label>Duration</label>
            <div className="filter-input-wrapper">
              <select>
                <option value="all">Any Duration</option>
                <option value="short">Short (1-3 days)</option>
                <option value="medium">Medium (4-7 days)</option>
                <option value="long">Long (8+ days)</option>
              </select>
            </div>
          </div>

          <div className="filter-field">
            <label>Date</label>
            <div className="filter-input-wrapper">
              <input type="date" className="date-picker-input" />
            </div>
          </div>

          <div className="filter-action-btn-wrapper">
            <button className="search-trips-btn">
              <Search size={18} />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Results Header Bar */}
        <div className="results-header-bar">
          <span className="results-count">
            <strong>{filteredTrips.length}</strong> trips found
          </span>
          <div className="sort-dropdown-wrapper">
            <span>Sort by:</span>
            <select className="sort-select">
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="duration">Duration</option>
            </select>
          </div>
        </div>

        {/* Trip Grid */}
        <div className="trips-grid">
          {filteredTrips.map((trip) => (
            <div key={trip.id} className="trip-card">
              <div
                className="trip-card-image-box"
                onClick={() => navigate(`/trip/${trip.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <span className="trip-price-tag">{trip.formattedPrice}</span>
                <img src={trip.image} alt={trip.title} className="trip-card-img" />
              </div>

              <div className="trip-card-content">
                <div className="trip-category-badge-wrapper">
                  <span className={`category-badge badge-${trip.category.toLowerCase()}`}>
                    {trip.category}
                  </span>
                </div>

                <h3
                  className="trip-card-title"
                  onClick={() => navigate(`/trip/${trip.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  {trip.title}
                </h3>
                <p className="trip-card-description">{trip.description}</p>

                <div className="trip-meta-row">
                  <span className="meta-item">
                    <Clock size={14} /> {trip.duration}
                  </span>
                  <span className="meta-item seats-badge">
                    <Users size={14} /> {trip.seatsLeft} seats left
                  </span>
                </div>

                <button
                  className="book-now-btn"
                  onClick={() => navigate(`/booking/${trip.id}`)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Bar */}
        <div className="pagination-wrapper">
          <button className="page-btn page-arrow" disabled>
            <ChevronLeft size={18} />
          </button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <span className="page-dots">...</span>
          <button className="page-btn">7</button>
          <button className="page-btn page-arrow">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Dark Footer */}
      <footer className="pcte-footer">
        <div className="footer-content-wrapper">
          <div className="footer-col footer-brand-col">
            <div className="footer-brand">
              <Plane size={24} className="footer-plane-icon" />
              <span className="footer-brand-title">PCTE Travel</span>
            </div>
            <p className="footer-brand-desc">
              Connecting students to global opportunities through organized academic and professional travel experiences.
            </p>
          </div>

          <div className="footer-col">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#policy">Trip Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#support">Contact Support</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>DESTINATIONS</h4>
            <ul>
              <li><a href="#europe">Europe</a></li>
              <li><a href="#asia">Asia Pacific</a></li>
              <li><a href="#americas">Americas</a></li>
              <li><a href="#middleeast">Middle East</a></li>
            </ul>
          </div>

          <div className="footer-col footer-newsletter-col">
            <h4>STAY UPDATED</h4>
            <p>Join our newsletter for the latest study abroad and internship opportunities.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button className="join-newsletter-btn">Join</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© 2024 PCTE College Travel Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ExploreTrips;
