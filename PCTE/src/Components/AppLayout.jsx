import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  Plane,
  User,
  Settings,
  Search,
  Bell,
  LogOut,
  ChevronDown,
  Lock,
  Unlock,
  Menu,
  X,
  Home,
  BookOpen,
} from 'lucide-react';

export const AppLayout = () => {
  const { user, logout, isAuthenticated, toggleDemoAuth } = useAuth();
  const navigate = useNavigate();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="pcte-app-container">
      <div className="pcte-main-wrapper">
        {/* Sidebar */}
        <aside className={`pcte-sidebar ${mobileSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <div className="brand-logo" onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>
              <div className="logo-icon">
                <Plane size={22} className="logo-plane" />
              </div>
              <span className="brand-title">PCTE Travel</span>
            </div>
            <button className="mobile-close-btn" onClick={() => setMobileSidebarOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <nav className="sidebar-nav">
            <NavLink
              to="/dashboard"
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setMobileSidebarOpen(false)}
            >
              <LayoutDashboard size={20} />
              <span>Overview</span>
            </NavLink>
            <NavLink
              to="/trips"
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setMobileSidebarOpen(false)}
            >
              <Plane size={20} />
              <span>Explore Trips</span>
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setMobileSidebarOpen(false)}
            >
              <BookOpen size={20} />
              <span>My Bookings</span>
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setMobileSidebarOpen(false)}
            >
              <User size={20} />
              <span>Profile</span>
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setMobileSidebarOpen(false)}
            >
              <Settings size={20} />
              <span>Settings</span>
            </NavLink>
            <NavLink
              to="/"
              className="nav-item home-link"
              onClick={() => setMobileSidebarOpen(false)}
            >
              <Home size={20} />
              <span>Public Landing</span>
            </NavLink>
          </nav>

          {/* User Profile Card at bottom of sidebar */}
          <div className="sidebar-footer">
            <div className="user-profile-card">
              <img src={user?.avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'} alt={user?.name} className="user-avatar" />
              <div className="user-info">
                <h4 className="user-name">{user?.name || 'Aditi Sharma'}</h4>
                <p className="user-role">{user?.role || 'PCTE Scholar'}</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Backdrop for mobile sidebar */}
        {mobileSidebarOpen && <div className="sidebar-backdrop" onClick={() => setMobileSidebarOpen(false)}></div>}

        {/* Main Content Area */}
        <div className="pcte-content-area">
          {/* Header Topbar */}
          <header className="pcte-topbar">
            <div className="topbar-left">
              <button className="mobile-menu-trigger" onClick={() => setMobileSidebarOpen(true)}>
                <Menu size={22} />
              </button>
              <div className="topbar-search">
                <Search size={18} className="search-icon" />
                <input type="text" placeholder="Search trips, bookings..." className="search-input" />
              </div>
            </div>

            <div className="topbar-right">
              <button className="notification-btn" aria-label="Notifications">
                <Bell size={20} />
                <span className="notification-dot"></span>
              </button>

              <div className="user-menu-wrapper">
                <button className="user-menu-trigger" onClick={() => setUserMenuOpen(!userMenuOpen)}>
                  <img src={user?.avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'} alt={user?.name} className="topbar-avatar" />
                  <span className="topbar-user-first">{user?.name?.split(' ')[0] || 'Aditi'}</span>
                  <ChevronDown size={16} />
                </button>

                {userMenuOpen && (
                  <div className="user-dropdown-menu">
                    <div className="dropdown-header">
                      <strong>{user?.name}</strong>
                      <p>{user?.email}</p>
                    </div>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" onClick={() => { navigate('/profile'); setUserMenuOpen(false); }}>
                      <User size={16} /> Profile
                    </button>
                    <button className="dropdown-item" onClick={() => { navigate('/settings'); setUserMenuOpen(false); }}>
                      <Settings size={16} /> Settings
                    </button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item logout" onClick={handleLogout}>
                      <LogOut size={16} /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Dynamic Page Content */}
          <main className="pcte-main-content">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
