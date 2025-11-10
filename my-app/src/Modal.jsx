import "./modal.css";
import { useRef, useEffect } from "react";

export default function Modal({ open, onClose, title }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (e.target === overlayRef.current) onClose();
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div ref={overlayRef} className="modal-overlay">
      <div className="modal-box">
        <h2>{title}</h2>
      </div>
    </div>
  );
}
