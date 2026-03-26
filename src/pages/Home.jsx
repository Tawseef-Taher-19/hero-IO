import { Link } from "react-router-dom";
import apps from "../data/apps.json";
import AppCard from "../components/AppCard";

const Home = () => {
  // Pulling the first 8 apps for the trending section
  const topApps = apps.slice(0, 8);

  return (
    <div className="home-page">
      {/* --- HERO SECTION --- */}
      <section className="hero-lite">
        <div className="hero-lite-content">
          <div className="hero-copy">
            <h1>
              We Build
              <div class="space"></div>
              <span class="gradient">Productive Apps</span>
            </h1>
            <p>
              At <strong>HERO.IO</strong>, we craft innovative apps designed to 
              make everyday life simpler, smarter, and more exciting. Our goal 
              is to turn your ideas into digital experiences that truly make an impact.
            </p>

            <div className="hero-store-buttons">
              <a 
                href="https://play.google.com/store" 
                target="_blank" 
                rel="noreferrer" 
                className="store-btn light"
              >
                <span className="store-icon">▶</span> Google Play
              </a>
              <a 
                href="https://www.apple.com/app-store/" 
                target="_blank" 
                rel="noreferrer" 
                className="store-btn light"
              >
                <span className="store-icon"></span> App Store
              </a>
            </div>
          </div>

          {/* Phone Mockup Visual */}
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="phone-header-row">
                  <span>‹</span>
                  <span>All Courses</span>
                  <span>◌</span>
                </div>
                <div className="phone-chip-row">
                  <span className="phone-chip active">Regular Course</span>
                  <span className="phone-chip">Video Course</span>
                </div>
                <div className="phone-section-title">Choose your Course</div>
                <div className="phone-card phone-card-purple">
                  <h4>Complete Web development</h4>
                  <p>203 Lessons</p>
                </div>
                <div className="phone-card phone-card-orange">
                  <h4>Python Programming</h4>
                  <p>168 Lessons</p>
                </div>
              </div>
            </div>

            {/* Floating Decorative Icons */}
            <div className="floating-icon icon-a">⌚</div>
            <div className="floating-icon icon-b">♪</div>
            <div className="floating-icon icon-c">✓</div>
            <div className="floating-icon icon-d">◫</div>
            <div className="floating-icon icon-e">⚔</div>
            <div className="floating-icon icon-f">⏻</div>
          </div>
        </div>
      </section>

      {/* --- TRUSTED STATS BAND --- */}
      <section className="trusted-band">
        <h2>Trusted By Millions, Built For You</h2>
        <div className="trusted-stats">
          <div>
            <h3>29.6M</h3>
            <small>Total Downloads</small>
            <p>21% More Than Last Month</p>
          </div>
          <div>
            <h3>906K</h3>
            <small>Total Reviews</small>
            <p>46% More Than Last Month</p>
          </div>
          <div>
            <h3>132+</h3>
            <small>Active Apps</small>
            <p>31 More Will Launch</p>
          </div>
        </div>
      </section>

      {/* --- TRENDING APPS SECTION --- */}
      <section className="trending-section">
        <div className="trending-head">
          <h2>Trending Apps</h2>
          <p>Explore All Trending Apps on the Market developed by us</p>
        </div>
        
        <div className="apps-grid apps-grid-home">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="show-all-wrap">
          <Link to="/apps" className="show-all-pill">Show All</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;