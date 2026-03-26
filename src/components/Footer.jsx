import { Link } from "react-router-dom";
// 1. Import the logo image
import logoImg from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        
        {/* Column 1: Brand & Bio */}
        <div className="footer-col footer-col-brand">
          {/* 2. Link the logo and swap span for img */}
          <Link to="/" className="logo hero-logo">
            <div className="logo-img-wrapper">
              <img src={logoImg} alt="HERO.IO Logo" className="footer-logo-img" />
            </div>
            <span className="logo-text">HERO.IO</span>
          </Link>
          <p className="footer-description">
            Crafting innovative apps designed to make everyday life simpler.
          </p>
        </div>

        {/* Column 2: Newsletter Column */}
        <div className="footer-col footer-col-newsletter">
          <h4>Stay Connected</h4>
          <p className="footer-description">
            Subscribe to our newsletter for updates.
          </p>
          <div className="footer-newsletter">
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="newsletter-input" 
              />
              <button type="submit" className="newsletter-btn">→</button>
            </form>
          </div>
        </div>
        
        {/* Column 3: Platform Links */}
        <div className="footer-col footer-col-links">
          <h4>Platform</h4>
          <nav className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/apps">Explore Apps</Link>
            <Link to="/installation">Installation</Link>
          </nav>
        </div>
        
        {/* Column 4: Developer Links */}
        <div className="footer-col footer-col-links">
          <h4>Developer</h4>
          <nav className="footer-links">
            <a href="https://react.dev" target="_blank" rel="noreferrer">Built with React</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">Open Source</a>
            <a href="https://recharts.org" target="_blank" rel="noreferrer">Data by Recharts</a>
          </nav>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 HERO.IO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;