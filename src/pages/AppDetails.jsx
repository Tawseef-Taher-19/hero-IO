import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";
import apps from "../data/apps.json";
import { installApp, isAppInstalled } from "../utils/localStorage";

const formatDownloads = (value) => {
  if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}B`;
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  return `${(value / 1000).toFixed(1)}K`;
};

const AppDetails = () => {
  const { id } = useParams();
  const app = useMemo(() => apps.find((item) => item.id === Number(id)), [id]);
  const [installed, setInstalled] = useState(app ? isAppInstalled(app.id) : false);

if (!app) {
    return (
      <div className="center-box card">
        <h1>App Not Found</h1>
        <p className="muted">
          The app you are looking for does not exist or has been removed.
        </p>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    );
  }

  
  const handleInstall = () => {
    if (installApp(app)) {
      setInstalled(true);
      toast.success(`${app.title} Installed Successfully`);
    }
  };

  return (
    <section className="app-details-page container">
      <div className="details-header-flex">
        {/* Left Side: Custom Icon Frame */}
        <div className="details-image-container">
          <div className="details-image-outer">
            <div className="image-bg-floor">
              <img src={app.image} alt={app.title} className="main-app-logo" />
            </div>
          </div>
        </div>

        {/* Right Side: Info & Actions */}
        <div className="details-main-info">
          <h1 className="app-title-big">{app.title}</h1>
          <p className="app-dev-text">Developed by <span>{app.companyName}</span></p>
          
          <div className="purple-divider"></div>

          <div className="stats-dashboard">
            <div className="stat-item">
              <small>Downloads</small>
              <div className="stat-value">
                <strong>{formatDownloads(app.downloads)}</strong>
                <span className="stat-icon icon-dl">⬇</span>
              </div>
            </div>
            <div className="stat-item">
              <small>Average Ratings</small>
              <div className="stat-value">
                <strong>{app.ratingAvg}</strong>
                <span className="stat-icon icon-star">★</span>
              </div>
            </div>
            <div className="stat-item">
              <small>Total Reviews</small>
              <div className="stat-value">
                <strong>{app.reviews.toLocaleString()}</strong>
                <span className="stat-icon icon-rev">💬</span>
              </div>
            </div>
          </div>

          <button 
            className={`install-btn-gradient ${installed ? 'installed' : ''}`}
            onClick={handleInstall}
            disabled={installed}
          >
            {installed ? "Installed" : `Install Now (${app.size}MB)`}
          </button>
        </div>
      </div>

      <div className="section-separator"></div>

      <div className="ratings-section">
        <h2 className="section-heading">Ratings</h2>
        <div className="horizontal-chart-container">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={[...app.ratings].reverse()} layout="vertical">
              <CartesianGrid horizontal={false} stroke="#f3f4f6" />
              <XAxis type="number" hide />
              <YAxis 
                dataKey="name" 
                type="category" 
                tick={{fontSize: 12, fill: '#6b7280'}} 
                width={50}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="count" fill="#10b981" radius={[0, 4, 4, 0]} barSize={14} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="section-separator"></div>

      <div className="description-section">
        <h2 className="section-heading">Description</h2>
        <div className="description-text">
          <p>{app.description}</p>
          {/* <p>This productivity app focuses on eliminating repetitive manual tasks by introducing intelligent automation. With a simple drag-and-drop interface, users can connect apps, tools, and workflows without any coding knowledge.</p> */}
        </div>
      </div>
    </section>
  );
};

export default AppDetails;