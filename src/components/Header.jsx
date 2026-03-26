import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo hero-logo">
          <span className="logo-mark">▷</span>
          <span className="logo-text">HERO.IO</span>
        </Link>

        <nav className="nav">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/apps" className={navClass}>
            Apps
          </NavLink>
        </nav>

        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noreferrer"
          className="contribute-btn"
        >
          Github Contribute
        </a>
      </div>
    </header>
  );
};

export default Header;