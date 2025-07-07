import React, { useState, useEffect } from 'react';
import './OutageNotification.css';

interface OutageNotificationProps {
  onClose?: () => void;
}

const OutageNotification: React.FC<OutageNotificationProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const STORAGE_KEY = 'outage_notification_timestamp';
    const DURATION_24_HOURS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    const checkNotificationStatus = () => {
      const storedTimestamp = localStorage.getItem(STORAGE_KEY);
      const now = Date.now();

      if (!storedTimestamp) {
        // First time showing - set the timestamp
        localStorage.setItem(STORAGE_KEY, now.toString());
        setIsVisible(true);
        return now;
      }

      const startTime = parseInt(storedTimestamp);
      const elapsed = now - startTime;

      if (elapsed < DURATION_24_HOURS) {
        setIsVisible(true);
        return startTime;
      } else {
        // 24 hours have passed, clean up
        localStorage.removeItem(STORAGE_KEY);
        setIsVisible(false);
        return null;
      }
    };

    const startTime = checkNotificationStatus();

    if (startTime) {
      // Update countdown every minute
      const interval = setInterval(() => {
        const now = Date.now();
        const elapsed = now - startTime;
        const remaining = DURATION_24_HOURS - elapsed;

        if (remaining <= 0) {
          localStorage.removeItem(STORAGE_KEY);
          setIsVisible(false);
          clearInterval(interval);
        } else {
          const hours = Math.floor(remaining / (1000 * 60 * 60));
          const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
          setTimeRemaining(`${hours}h ${minutes}m remaining`);
        }
      }, 60000); // Update every minute

      // Initial time calculation
      const now = Date.now();
      const elapsed = now - startTime;
      const remaining = DURATION_24_HOURS - elapsed;
      const hours = Math.floor(remaining / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      setTimeRemaining(`${hours}h ${minutes}m remaining`);

      return () => clearInterval(interval);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const handlePhoneClick = () => {
    window.open('tel:313-525-2424', '_self');
  };

  const handleTextClick = () => {
    window.open('sms:313-525-2424', '_self');
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Close if clicking on the overlay background, not the popup itself
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="outage-notification-overlay" onClick={handleOverlayClick}>
      <div className="outage-notification-popup">
        <button 
          className="outage-notification-close" 
          onClick={handleClose}
          aria-label="Close notification"
        >
          ×
        </button>
        
        <div className="outage-notification-content">
          <div className="outage-notification-header">
            <h2>🚨 SERVICE OUTAGE NOTICE</h2>
            <p className="outage-location">Detroit Area</p>
          </div>

          <div className="outage-notification-message">
            <p><strong>Phone lines and internet are currently down in the Detroit area.</strong></p>
            <p>Please call or text your order to:</p>
            
            <div className="outage-phone-number">
              <span className="phone-number">313-525-2424</span>
            </div>

            <div className="outage-action-buttons">
              <button 
                className="outage-btn outage-btn-call" 
                onClick={handlePhoneClick}
              >
                📞 Call Now
              </button>
              <button 
                className="outage-btn outage-btn-text" 
                onClick={handleTextClick}
              >
                💬 Text Order
              </button>
            </div>

            <p className="outage-apology">
              We apologize for any inconvenience and appreciate your patience.
            </p>
          </div>

          <div className="outage-notification-footer">
            <small className="outage-timer">This notice will auto-expire in {timeRemaining}</small>
            <div style={{ marginTop: '10px', fontSize: '11px', color: '#ffcccc' }}>
              💡 Click outside this popup to continue browsing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutageNotification; 