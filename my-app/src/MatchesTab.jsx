import "./MatchesTab.css";
import { useEffect, useRef } from "react";

export default function MatchesTab({ open, onClose }) {
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Click outside to close
  useEffect(() => {
    function handleClick(e) {
      // Close only if clicking the overlay
      if (e.target === overlayRef.current) onClose();
    }
    if (open) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [open, onClose]);

  // Focus the close button when opened
  useEffect(() => {
    if (open && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [open]);

  return (
    <div
      ref={overlayRef}
      className={`matches-overlay ${open ? "show" : ""}`}
      aria-hidden={!open}
    >
      <aside
        id="matches-drawer"
        className={`matches-drawer ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Matches"
      >
        <div className="drawer-header">
          <h2>Matches</h2>
        </div>

        <div className="drawer-body">
          <div className="match-card">Example Match 1</div>
          <div className="match-card">Example Match 2</div>
          <div className="match-card">Example Match 3</div>
        </div>
      </aside>
    </div>
  );
}
