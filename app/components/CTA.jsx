import React from "react";
import "../globals.css";
const CTA = () => {
  return (
    <section
      className="cta"
      style={{
        backgroundImage: `url("/images/background.svg")`,
      }}
      id="contact"
    >
      <div className="container">
        <div className="cta-content">
          <p className="section-subtitle">Call To Action</p>

          <h2 className="h2 section-title">
            Ready For Unforgatable Travel. Remember Us!
          </h2>

          <p className="section-text" style={{ color: "#001F3F" }}>
            "Embark on unforgettable journeys with us! Create lasting memories
            as you explore the world. Trust us to turn your travel dreams into
            extraordinary experiences. Remember us for your next adventure!"
          </p>
        </div>

        <button className="btn btn-secondary">Contact Us !</button>
      </div>
    </section>
  );
};

export default CTA;
