import { Link } from "react-router-dom";

const formatDownloads = (value) => {
  if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}B+`;
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M+`;
  return `${(value / 1000).toFixed(1)}K+`;
};

const AppCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`} className="card app-card">
      <div className="app-thumb">
        <img src={app.image} alt={app.title} />
      </div>
      <div className="app-info">
        <h3>{app.title}</h3>
        <div className="app-meta">
          <span className="meta-pill meta-download">
            <span className="meta-icon">⇩</span>
            {formatDownloads(app.downloads)}
          </span>
          <span className="meta-pill meta-rating">
            <span className="meta-icon">★</span>
            {app.ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;