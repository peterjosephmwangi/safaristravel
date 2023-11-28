import React from "react";
import "../globals.css";
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h2 className="h1 hero-title">Explore Kenya</h2>
        <h2 className="h2 hero-title">
          <span>With</span> Safaris Travellers
        </h2>

        {/* <p className="hero-text">
          Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit
          class corporis nostra rem quos voluptatibus habitant? Fames, vivamus
          minim nemo enim, gravida lobortis quasi, eum.
        </p> */}

        <div className="btn-group">
          <button className="btn btn-primary">Learn more</button>

          <button className="btn btn-secondary">Book now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
