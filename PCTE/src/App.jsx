import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import AppLayout from './Components/AppLayout';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ExploreTrips from './pages/ExploreTrips';
import TripDetails from './pages/TripDetails';
import BookingDetails from './pages/BookingDetails';
import Payment from './pages/Payment';
import BookingConfirmed from './pages/BookingConfirmed';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

import './index.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Landing & Auth Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes inside AppLayout (Sidebar + Topbar Navigation) */}
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trips" element={<ExploreTrips />} />
            <Route path="/trip/:tripId" element={<TripDetails />} />
            <Route path="/booking/:tripId" element={<BookingDetails />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirmation" element={<BookingConfirmed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          {/* Fallback Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
