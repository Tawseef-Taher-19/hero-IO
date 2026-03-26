import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo hero-logo">
          <span className="logo-mark">▶</span>
          <span className="logo-text">HERO.IO</span>
        </Link>

        <nav className="nav">
          <NavLink to="/" end className={navClass}>
            <span className="nav-icon">⌂</span>
            <span>Home</span>
          </NavLink>
          <NavLink to="/apps" className={navClass}>
            <span className="nav-icon">◔</span>
            <span>Apps</span>
          </NavLink>
          <NavLink to="/installation" className={navClass}>
            <span className="nav-icon">⤓</span>
            <span>Installation</span>
          </NavLink>
        </nav>

        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noreferrer"
          className="contribute-btn"
        >
          <span className="contribute-icon">◔</span>
          <span>Contribute</span>
        </a>
      </div>
    </header>
  );
};

export default Header;