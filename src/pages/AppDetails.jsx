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
  if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}B+`;
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M+`;
  return `${(value / 1000).toFixed(1)}K+`;
};

const AppDetails = () => {
  const { id } = useParams();
  const app = useMemo(() => apps.find((item) => item.id === Number(id)), [id]);
  const [installed, setInstalled] = useState(app ? isAppInstalled(app.id) : false);

  if (!app) {
    return (
      <div className="center-box card">
        <h1>App is Not Found</h1>
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
    const success = installApp(app);
    if (success) {
      setInstalled(true);
      toast.success(`${app.title} Installed Successfully`);
    }
  };

  return (
    <section className="section-block">
      <div className="details-grid card">
        <div className="details-image">
          <img src={app.image} alt={app.title} />
        </div>

        <div className="details-info">
          <p className="muted">{app.companyName}</p>
          <h1>{app.title}</h1>
          <div className="details-meta">
            <span>⭐ {app.ratingAvg}</span>
            <span>⬇ {formatDownloads(app.downloads)}</span>
            <span>📝 {app.reviews.toLocaleString()} reviews</span>
            <span>📦 {app.size} MB</span>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className="btn"
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      <div className="card chart-box">
        <h2>App Review Chart</h2>
        <div className="chart-wrap">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={app.ratings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#7c3aed" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h2>Description</h2>
        <p className="description">{app.description}</p>
      </div>
    </section>
  );
};

export default AppDetails;