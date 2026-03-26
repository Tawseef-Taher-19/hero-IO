import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">🦸‍♂️ Hero IO</Link>
        <nav className="nav">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/apps" className={navClass}>Apps</NavLink>
          <NavLink to="/installation" className={navClass}>Installation</NavLink>
        </nav>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn btn-outline">
          Contribution
        </a>
      </div>
    </header>
  );
};

export default Header;