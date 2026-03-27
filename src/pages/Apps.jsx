import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import apps from "../data/apps.json";
import AppCard from "../components/AppCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Apps = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  // Improved loading effect: triggers on search OR sort change
  useEffect(() => {
    setSearchLoading(true);
    // 400ms delay provides a smoother visual transition than 300ms
    const timer = setTimeout(() => setSearchLoading(false), 400);
    return () => clearTimeout(timer);
  }, [search, sortBy]);

  // Optimized filtering and sorting
  const filteredApps = useMemo(() => {
    let result = [...apps].filter((app) =>
      app.title.toLowerCase().includes(search.toLowerCase())
    );

    if (sortBy === "high-low") {
      result.sort((a, b) => b.downloads - a.downloads);
    } else if (sortBy === "low-high") {
      result.sort((a, b) => a.downloads - b.downloads);
    }

    return result;
  }, [search, sortBy]);

  const handleShowAll = () => {
    setSearch("");
    setSortBy("");
    navigate("/apps");
  };

  return (
    <section className="section-block">
      {/* Title Box matching the "Our All Applications" design */}
      <div className="title-box card">
        <h1>
          Our All Applications 
          <span className="title-icon purple" style={{ marginLeft: '10px' }}>⋈</span>
        </h1> 
        <p className="muted">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      {/* Toolbar with live count and controls */}
      <div className="toolbar card">
        <div className="toolbar-header">
          <h3>({filteredApps.length}) Apps Found</h3>
          <p className="muted smaller">Search updates live as you type</p>
        </div>

        <div className="toolbar-controls">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search by app title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input"
            />
          </div>

          <div className="select-input-wrapper">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input select-input"
            >
              <option value="">Sort by Downloads</option>
              <option value="high-low">High-Low</option>
              <option value="low-high">Low-High</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {searchLoading ? (
        // Wrapper ensures the page doesn't jump when the spinner appears
        <div className="search-loader-wrap card">
          <LoadingSpinner text="Searching apps..." />
        </div>
      ) : filteredApps.length ? (
        <div className="apps-grid">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        /* Enhanced Empty State */
        <div className="center-box card">
          <div className="empty-state-icon">🔍</div>
          <h2>No App Found</h2>
          <p className="muted">
            We could not find any app matching "<strong>{search}</strong>".
          </p>
          <div className="btn-group" style={{ marginTop: '20px' }}>
             <button onClick={handleShowAll} className="btn">
               Show All Apps
             </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Apps;