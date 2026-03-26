import { NavLink, Link } from "react-router-dom";
// 1. Import the logo at the top
import logoImg from "../assets/logo.png";

const Header = () => {
  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo hero-logo">
          {/* 2. Replace the span icon with the img tag */}
          <div className="logo-img-wrapper">
            <img src={logoImg} alt="HERO.IO Logo" className="header-logo-img" />
          </div>
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
          href="https://github.com/"
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