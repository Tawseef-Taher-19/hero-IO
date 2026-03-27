import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apps from "../data/apps.json";
import AppCard from "../components/AppCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Apps = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  // Simple debounce effect for the loading state
  useEffect(() => {
    if (!search) return;
    setSearchLoading(true);
    const timer = setTimeout(() => setSearchLoading(false), 300);
    return () => clearTimeout(timer);
  }, [search]);

  const filteredApps = useMemo(() => {
    let result = [...apps].filter((app) =>
      app.title.toLowerCase().includes(search.toLowerCase())
    );

    if (sortBy === "high-low") {
      result.sort((a, b) => b.downloads - a.downloads);
    }

    if (sortBy === "low-high") {
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
      <div className="title-box card">
        <h1>Our All Applications <span className="title-icon purple">⋈</span></h1> 
        <p className="muted">         
Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="toolbar card">
        <div>
          <h3>({filteredApps.length}) Apps Found</h3>
          {/* <p className="muted">Search is case-insensitive and updates live.</p> */}
        </div>

        <div className="toolbar-controls">
          <input
            type="text"
            placeholder="Search by app title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="input"
          >
            <option value="">Sort by Downloads</option>
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>
        </div>
      </div>

      {searchLoading ? (
        <LoadingSpinner text="Searching apps..." />
      ) : filteredApps.length ? (
        <div className="apps-grid">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="center-box card">
          <h2>No App Found</h2>
          <p className="muted">
            We could not find any app matching your current search.
          </p>
          <div className="btn-group">
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