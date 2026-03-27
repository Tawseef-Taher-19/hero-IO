import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { getInstalledApps, uninstallApp } from "../utils/localStorage";

const formatDownloads = (value) => {
  if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}B`;
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  return `${(value / 1000).toFixed(1)}K`;
};

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    setInstalledApps(getInstalledApps());
  }, []);

  // Sorting Logic based on Download Count
  const sortedApps = useMemo(() => {
    let result = [...installedApps];

    if (sortBy === "low-high") {
      // Sorts by fewest downloads first
      result.sort((a, b) => a.downloads - b.downloads);
    } else if (sortBy === "high-low") {
      // Sorts by most downloads first
      result.sort((a, b) => b.downloads - a.downloads);
    }

    return result;
  }, [installedApps, sortBy]);

  const handleUninstall = (app) => {
    const updated = uninstallApp(app.id);
    setInstalledApps(updated);
    toast.success(`${app.title} uninstalled from your device.`);
  };

  return (
    <section className="installation-page container">
      <div className="installation-header">
        <h1>Your Installed Apps</h1>
        <p className="muted">Explore All Trending Apps on the Market developed by us</p>
      </div>

      {installedApps.length ? (
        <div className="installation-content">
          <div className="installation-controls">
            <h3>{installedApps.length} Apps Found</h3>
            <div className="sort-container">
              <select 
                className="sort-select" 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">Sort By Downloads (Default)</option>
                <option value="high-low">Downloads: High to Low</option>
                <option value="low-high">Downloads: Low to High</option>
              </select>
            </div>
          </div>

          <div className="installation-list">
            {sortedApps.map((app) => (
              <div className="install-row-card" key={app.id}>
                <div className="install-row-left">
                  <div className="install-row-thumb">
                    <img src={app.image} alt={app.title} />
                  </div>
                  <div className="install-row-info">
                    <h3>{app.title}</h3>
                    <div className="install-row-meta">
                      <span style={{ fontWeight: 'bold', color: '#6366f1' }}>
                        <span className="icon">⬇</span> {formatDownloads(app.downloads)}
                      </span>
                      <span><span className="icon-star">★</span> {app.ratingAvg}</span>
                      <span>{app.size} MB</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="uninstall-btn-teal" 
                  onClick={() => handleUninstall(app)}
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="center-box card">
          <h2>No Installed App Yet</h2>
          <p className="muted">Install apps from the details page and they will appear here.</p>
          <Link to="/apps" className="btn btn-main">Explore Apps</Link>
        </div>
      )}
    </section>
  );
};

export default Installation;