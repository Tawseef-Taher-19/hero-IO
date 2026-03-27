import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { getInstalledApps, uninstallApp } from "../utils/localStorage";

const formatDownloads = (value) => {
  if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}B+`;
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M+`;
  return `${(value / 1000).toFixed(1)}K+`;
};

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  // Load installed apps from localStorage on component mount
  useEffect(() => {
    setInstalledApps(getInstalledApps());
  }, []);

  const handleUninstall = (app) => {
    // Remove from storage and get updated list
    const updated = uninstallApp(app.id);
    // Update local state to trigger re-render
    setInstalledApps(updated);
    toast.success(`${app.title} uninstalled from your device.`);
  };

  return (
    <section className="section-block">
      <div className="title-box card">
        <h1>My Installation</h1>
        <p className="muted">
          Check all installed apps and remove them any time.
        </p>
      </div>

      {installedApps.length ? (
        <div className="apps-grid">
          {installedApps.map((app) => (
            <div className="card app-card" key={app.id}>
              <div className="app-thumb">
                <img src={app.image} alt={app.title} />
              </div>
              <div className="app-info">
                <h3>{app.title}</h3>
                <p className="muted">{app.companyName}</p>
                <div className="app-meta">
                  <span className="meta-pill">
                    <span className="meta-icon">⬇</span> 
                    {formatDownloads(app.downloads)}
                  </span>
                  <span className="meta-pill">
                    <span className="meta-icon">⭐</span> 
                    {app.ratingAvg}
                  </span>
                </div>
              </div>
              {/* Uninstall Button with tactile feedback */}
              <button 
                className="btn btn-danger" 
                onClick={() => handleUninstall(app)}
                style={{ marginTop: '15px', width: '100%' }}
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="center-box card">
          <h2>No Installed App Yet</h2>
          <p className="muted">
            Install apps from the details page and they will appear here.
          </p>
          <Link to="/apps" className="btn" style={{ marginTop: '20px' }}>
            Explore Apps
          </Link>
        </div>
      )}
    </section>
  );
};

export default Installation;