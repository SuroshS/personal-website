import "../styles/home.css";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>
          Surosh <span>Salehi</span>
        </h1>

        <p className="hero-subtitle">
          IT Graduate | Entrepreneur | Building AI-Driven Products
        </p>

        <p className="hero-description">
          I build clean, user-focused systems across React, Node.js, and modern
          cloud tools — from AI study platforms to real-world business websites.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
          <a href="/Surosh-Salehi-Resume.pdf" className="btn-secondary" download>
            Download Resume
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <p>Focus</p>
            <strong>AI + Product Builds</strong>
          </div>

          <div className="stat-card">
            <p>Stack</p>
            <strong>React • Node • Firebase</strong>
          </div>

          <div className="stat-card">
            <p>Strength</p>
            <strong>Clean UI + Systems</strong>
          </div>
        </div>
      </div>
    </section>
  );
}