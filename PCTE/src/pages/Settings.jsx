import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Bell, Lock, Shield, User, Globe, Save } from 'lucide-react';

export const Settings = () => {
  const { user } = useAuth();
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [smsNotifs, setSmsNotifs] = useState(false);
  const [currency, setCurrency] = useState('USD');

  return (
    <div className="settings-page">
      <h1 className="page-heading">Account Settings</h1>

      <div className="settings-grid">
        <div className="settings-card">
          <div className="settings-card-header">
            <Bell size={20} className="card-header-icon" />
            <h3>Notification Preferences</h3>
          </div>
          <div className="setting-toggle-row">
            <div>
              <h4>Trip Updates & Itinerary Changes</h4>
              <p>Receive immediate email updates regarding flight times, hotel changes, or schedule updates.</p>
            </div>
            <input
              type="checkbox"
              checked={emailNotifs}
              onChange={(e) => setEmailNotifs(e.target.checked)}
              className="toggle-checkbox"
            />
          </div>
          <div className="setting-toggle-row">
            <div>
              <h4>SMS Alerts</h4>
              <p>Get SMS notifications on departure day for gate changes and pickup reminders.</p>
            </div>
            <input
              type="checkbox"
              checked={smsNotifs}
              onChange={(e) => setSmsNotifs(e.target.checked)}
              className="toggle-checkbox"
            />
          </div>
        </div>

        <div className="settings-card">
          <div className="settings-card-header">
            <Globe size={20} className="card-header-icon" />
            <h3>Regional & Currency</h3>
          </div>
          <div className="form-group">
            <label>Preferred Currency Display</label>
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="USD">USD ($) - US Dollar</option>
              <option value="INR">INR (₹) - Indian Rupee</option>
              <option value="EUR">EUR (€) - Euro</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
