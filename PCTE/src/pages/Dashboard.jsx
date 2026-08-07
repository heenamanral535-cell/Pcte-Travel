import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Package,
  CreditCard,
  Luggage,
  SlidersHorizontal,
  ChevronRight,
} from 'lucide-react';

export const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleNavigateTrips = () => {
    navigate('/trips');
  };

  return (
    <div className="dashboard-page">
      {/* Welcome Hero Banner */}
      <section className="dashboard-hero-banner">
        <div className="hero-banner-content">
          <h1 className="hero-banner-title">
            Welcome back, {user?.name?.split(' ')[0] || 'Aditi'}! 👋
          </h1>
          <p className="hero-banner-text">
            You have 2 upcoming study tours this month. Ready to explore the Silicon Valley of India next week?
          </p>
          <button className="hero-schedule-btn" onClick={handleNavigateTrips}>
            View Schedule
          </button>
        </div>
        <div className="hero-banner-decoration"></div>
      </section>

      {/* Stats Cards Row */}
      <section className="dashboard-stats-grid">
        <div className="stat-card stat-upcoming">
          <div className="stat-icon-wrapper icon-upcoming">
            <Luggage size={22} />
          </div>
          <div className="stat-data">
            <span className="stat-label">UPCOMING</span>
            <h3 className="stat-value">03</h3>
          </div>
        </div>

        <div className="stat-card stat-completed">
          <div className="stat-icon-wrapper icon-completed">
            <CheckCircle2 size={22} />
          </div>
          <div className="stat-data">
            <span className="stat-label">COMPLETED</span>
            <h3 className="stat-value">12</h3>
          </div>
        </div>

        <div className="stat-card stat-pending">
          <div className="stat-icon-wrapper icon-pending">
            <Package size={22} />
          </div>
          <div className="stat-data">
            <span className="stat-label">PENDING</span>
            <h3 className="stat-value">01</h3>
          </div>
        </div>

        <div className="stat-card stat-payments">
          <div className="stat-icon-wrapper icon-payments">
            <CreditCard size={22} />
          </div>
          <div className="stat-data">
            <span className="stat-label">PAYMENTS</span>
            <h3 className="stat-value">₹42.5k</h3>
          </div>
        </div>
      </section>

      {/* Main Grid Content: Destinations + Upcoming Events */}
      <div className="dashboard-main-grid">
        {/* Left Column: Popular Destinations */}
        <div className="destinations-section">
          <div className="section-header">
            <h2>Popular Study Destinations</h2>
            <button className="see-all-btn" onClick={handleNavigateTrips}>
              See all <ArrowRight size={16} />
            </button>
          </div>

          <div className="destinations-grid">
            {/* Card 1 */}
            <div className="destination-card" onClick={() => navigate('/booking/kyoto')}>
              <div className="dest-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80"
                  alt="Cultural Immersion - Kyoto"
                  className="dest-img"
                />
                <span className="dest-badge badge-academic">Academic</span>
              </div>
              <div className="dest-card-body">
                <h3 className="dest-title">Cultural Immersion - Kyoto</h3>
                <p className="dest-desc">Explore traditional architecture and heritage.</p>
                <div className="dest-footer">
                  <span className="dest-duration">
                    <Clock size={14} /> 7 Days
                  </span>
                  <span className="dest-price">₹85,000</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="destination-card" onClick={() => navigate('/booking/berlin')}>
              <div className="dest-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&auto=format&fit=crop&q=80"
                  alt="Tech Hub Tour - Berlin"
                  className="dest-img"
                />
                <span className="dest-badge badge-internship">Internship</span>
              </div>
              <div className="dest-card-body">
                <h3 className="dest-title">Tech Hub Tour - Berlin</h3>
                <p className="dest-desc">Visit world-class tech giants and startups.</p>
                <div className="dest-footer">
                  <span className="dest-duration">
                    <Clock size={14} /> 10 Days
                  </span>
                  <span className="dest-price">₹1,20,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Upcoming Events */}
        <div className="events-section">
          <div className="events-card-wrapper">
            <h2 className="events-card-title">Upcoming Events</h2>

            <div className="timeline-list">
              <div className="timeline-item">
                <div className="timeline-bullet bullet-blue"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Oct 24, 2024</span>
                  <h4 className="timeline-heading">Pre-Departure Briefing</h4>
                  <p className="timeline-meta">Main Auditorium, 2:00 PM</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-bullet bullet-orange"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Oct 28, 2024</span>
                  <h4 className="timeline-heading">Visa Documentation Submit</h4>
                  <p className="timeline-meta">Admin Block - Room 302</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-bullet bullet-grey"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Nov 05, 2024</span>
                  <h4 className="timeline-heading">Global Education Fair</h4>
                  <p className="timeline-meta">Exhibition Hall</p>
                </div>
              </div>
            </div>

            <button className="sync-calendar-btn">Sync with Calendar</button>
          </div>
        </div>
      </div>

      {/* Recent Bookings Section */}
      <section className="dashboard-bookings-section">
        <div className="section-header">
          <h2>Recent Bookings</h2>
          <button className="filter-icon-btn" aria-label="Filter bookings">
            <SlidersHorizontal size={18} />
          </button>
        </div>

        <div className="bookings-table-wrapper">
          <table className="pcte-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Destination</th>
                <th>Travel Dates</th>
                <th>Program Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">#PCTE-98231-TRV</td>
                <td>
                  <div className="td-destination">
                    <MapPin size={16} className="text-primary" />
                    <span>Kyoto Academic Exchange</span>
                  </div>
                </td>
                <td>Oct 12 — Oct 20, 2024</td>
                <td>Academic Expedition</td>
                <td>
                  <span className="status-badge status-confirmed">Confirmed</span>
                </td>
                <td>
                  <button
                    className="table-action-btn"
                    onClick={() => navigate('/confirmation')}
                  >
                    View Receipt <ChevronRight size={14} />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="font-medium">#PCTE-84119-TRV</td>
                <td>
                  <div className="td-destination">
                    <MapPin size={16} className="text-primary" />
                    <span>London Academic Summit</span>
                  </div>
                </td>
                <td>Nov 15 — Nov 22, 2024</td>
                <td>Student Summit</td>
                <td>
                  <span className="status-badge status-processing">Processing</span>
                </td>
                <td>
                  <button
                    className="table-action-btn"
                    onClick={() => navigate('/booking/1')}
                  >
                    Manage <ChevronRight size={14} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
