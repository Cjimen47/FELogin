import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

import MatchesTab from "./MatchesTab";
import SettingsTab from "./SettingsTab";
import { getMe } from "./services/api";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const [me, setMe] = useState(null);
  const [loadingMe, setLoadingMe] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadMe() {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          navigate("/", { replace: true });
          return;
        }

        const user = await getMe();
        setMe(user);
      } catch (err) {
        // token invalid/expired or request failed
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/", { replace: true });
      } finally {
        setLoadingMe(false);
      }
    }

    loadMe();
  }, [navigate]);

  return (
    <div className="dashboard">
      {/* Small auth indicator for demo */}
      <div style={{ position: "absolute", top: 16, left: 16, opacity: 0.85 }}>
        {loadingMe ? (
          <span>Loading…</span>
        ) : me ? (
          <span>
            Logged in as <strong>{me.email ?? me.username ?? "User"}</strong>
          </span>
        ) : null}
      </div>

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
