import Modal from "./Modal";

export default function ProfileModal({ open, onClose }) {
  return <Modal open={open} onClose={onClose} title="Profile" />;
}
