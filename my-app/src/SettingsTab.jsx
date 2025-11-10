import "./SettingsTab.css";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileModal from "./ProfileModal";
import LanguageModal from "./LanguageModal";
import NotificationsModal from "./NotificationsModal";

export default function SettingsTab({ open, onClose }) {
  const overlayRef = useRef(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    function handleClick(e) {
      if (e.target === overlayRef.current) onClose();
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  const navigate = useNavigate();

  const handleLogout = () => {
    onClose();
    navigate("/");
  };


  return (
    <>
      <div
        ref={overlayRef}
        className={`settings-overlay ${open ? "show" : ""}`}
        aria-hidden={!open}
      >
        <aside className={`settings-drawer ${open ? "open" : ""}`}>
          <div className="drawer-header">
            <h2>Settings</h2>
          </div>

          <div className="drawer-body">
            <div className="settings-card" onClick={() => setProfileOpen(true)}>Profile</div>
            <div className="settings-card" onClick={() => setLanguageOpen(true)}>Language</div>
            <div className="settings-card" onClick={() => setNotificationsOpen(true)}>Notifications</div>
            <div className="settings-card" onClick={handleLogout}>Logout</div>

          </div>
        </aside>
      </div>

      <ProfileModal open={profileOpen} onClose={() => setProfileOpen(false)} />
      <LanguageModal open={languageOpen} onClose={() => setLanguageOpen(false)} />
      <NotificationsModal open={notificationsOpen} onClose={() => setNotificationsOpen(false)} />
    </>
  );
}
