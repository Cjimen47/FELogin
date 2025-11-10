import Modal from "./Modal";

export default function NotificationsModal({ open, onClose }) {
  return <Modal open={open} onClose={onClose} title="Notifications" />;
}
