import "./SettingsTab.css";
import { useRef, useEffect } from "react";

export default function SettingsTab({ open, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (e.target === overlayRef.current) onClose();
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  return (
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
          <div className="settings-card">Profile</div>
          <div className="settings-card">Language</div>
          <div className="settings-card">Notifications</div>
          <div className="settings-card">Logout</div>
        </div>
      </aside>
    </div>
  );
}
