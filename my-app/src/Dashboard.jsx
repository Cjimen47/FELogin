import { useState } from "react";
import "./Dashboard.css";
import MatchesTab from "./MatchesTab";
import SettingsTab from "./SettingsTab";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <div className="dashboard">
      {!open && !openSettings && (
        <>
          <h2 className="matches-link" onClick={() => setOpen(true)}>
            Matches
          </h2>

          <h2 className="settings-link" onClick={() => setOpenSettings(true)}>
            Settings
          </h2>
        </>
      )}

      {/* Tabs */}
      <MatchesTab open={open} onClose={() => setOpen(false)} />
      <SettingsTab open={openSettings} onClose={() => setOpenSettings(false)} />
    </div>
  );
}
