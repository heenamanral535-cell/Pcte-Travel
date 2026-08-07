import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Download, Eye, ArrowLeft, Plane, Calendar, Users, CreditCard } from 'lucide-react';

export const BookingConfirmed = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmation-page-wrapper">
      {/* Background Map Overlay */}
      <div className="map-texture-bg"></div>

      {/* Main Confirmation Modal Card */}
      <div className="confirmation-modal-card">
        {/* Step Indicator Dots */}
        <div className="confirmation-step-dots">
          <span className="dot dot-active"></span>
          <span className="line line-active"></span>
          <span className="dot dot-active"></span>
          <span className="line line-active"></span>
          <span className="dot dot-active"></span>
        </div>

        {/* Success Icon */}
        <div className="success-icon-circle">
          <Check size={32} className="check-svg" />
        </div>

        {/* Header Text */}
        <h1 className="confirmation-title">Booking Confirmed!</h1>
        <p className="confirmation-subtitle">
          Pack your bags! Your trip has been successfully scheduled. We've sent a confirmation email with all the details.
        </p>

        {/* Receipt Box */}
        <div className="receipt-box">
          <div className="receipt-header">
            <span className="receipt-label">BOOKING RECEIPT</span>
            <span className="receipt-id">#PCTE-98231-TRV</span>
          </div>

          <div className="receipt-grid-2col">
            <div className="receipt-item">
              <span className="receipt-item-title">Destination Trip</span>
              <div className="receipt-item-value">
                <Plane size={16} className="receipt-icon" />
                <span>Kyoto Academic Exchange</span>
              </div>
            </div>

            <div className="receipt-item">
              <span className="receipt-item-title">Travel Dates</span>
              <div className="receipt-item-value">
                <Calendar size={16} className="receipt-icon" />
                <span>Oct 12 — Oct 20, 2024</span>
              </div>
            </div>

            <div className="receipt-item">
              <span className="receipt-item-title">Passenger(s)</span>
              <div className="receipt-item-value">
                <Users size={16} className="receipt-icon" />
                <span>1 Student (Self)</span>
              </div>
            </div>

            <div className="receipt-item">
              <span className="receipt-item-title">Amount Paid</span>
              <div className="receipt-item-value amount-paid">
                <CreditCard size={16} className="receipt-icon" />
                <span>$1,240.00 USD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="confirmation-actions">
          <button className="download-ticket-btn" onClick={() => alert('Downloading official PCTE e-Ticket PDF...')}>
            <Download size={18} />
            <span>Download Ticket</span>
          </button>

          <button className="view-booking-btn" onClick={() => navigate('/dashboard')}>
            <Eye size={18} />
            <span>View Booking</span>
          </button>
        </div>

        {/* Return Link */}
        <button className="return-dashboard-link" onClick={() => navigate('/dashboard')}>
          <ArrowLeft size={16} />
          <span>Return to Dashboard</span>
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmed;
