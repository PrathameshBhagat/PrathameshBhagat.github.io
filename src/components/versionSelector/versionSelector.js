
import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./versionSelector.css";

const VersionSelector = () => {
  const navigate = useNavigate();

  // Update these URLs according to your deployment.
  const OLD_PORTFOLIO_URL = "/"; 
  const NEW_PORTFOLIO_URL = "https://YOUR-NEW-USERNAME.github.io/YOUR-NEW-REPO/";

  const handleOldPortfolio = () => {
    navigate(OLD_PORTFOLIO_URL);
  };

  const handleNewPortfolio = () => {
    window.location.href = NEW_PORTFOLIO_URL;
  };

  return (
    <div className="portfolio-selector min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="selector-label">PORTFOLIO EXPERIENCE</p>
          <h1 className="display-4 fw-bold">Choose Your Experience</h1>
          <p className="text-secondary mt-3">
            Explore my portfolio in the version you prefer.
          </p>
        </div>

        <div className="row justify-content-center g-4">

          {/* Old Portfolio */}
          <div className="col-md-6 col-lg-5">
            <div className="portfolio-card h-100 border border-2 border-warning p-4 p-md-5">
              <div className="card-number">01</div>
              <div className="portfolio-icon">◈</div>

              <span className="badge bg-secondary-subtle text-secondary mb-3">
                CLASSIC VERSION
              </span>

              <h2 className="fw-bold">Old Portfolio</h2>

              <p className="text-secondary">
                Explore my original portfolio experience, featuring
                the previous design and layout.
              </p>

              <button
                className="btn btn-dark w-100 mt-3 py-3"
                onClick={handleOldPortfolio}
              >
                Explore Old Portfolio →
              </button>
            </div>
          </div>

          {/* New Portfolio */}
          <div className="col-md-6 col-lg-5">
            <div className="portfolio-card portfolio-card-new h-100 border border-2 border-warning p-4 p-md-5">
              <div className="card-number">02</div>
              <div className="portfolio-icon">✳</div>

              <span className="badge bg-success-subtle text-success mb-3">
                NEW EXPERIENCE
              </span>

              <h2 className="fw-bold">New Portfolio</h2>

              <p className="text-secondary">
                Discover my redesigned portfolio with a fresh
                visual experience and updated presentation.
              </p>

              <button
                className="btn btn-success w-100 mt-3 py-3"
                onClick={handleNewPortfolio}
              >
                Explore New Portfolio →
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VersionSelector;

