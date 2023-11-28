import React from "react";
import About from "./About";
import Blog from "./Blog";
import CTA from "./CTA";
import Destination from "./Destination";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Packages from "./Packages";

const Main = () => {
  return (
    <main>
      <article>
        {/* hero section  */}
        <Hero />
        {/* destination section  */}
        <Destination />
        {/* packages section  */}
        <Packages />
        {/* gallery section  */}
        <Gallery />
        {/* blog section  */}
        <Blog />
        {/* about section  */}
        <About />
        {/* contact section  */}
        <CTA />
      </article>
    </main>
  );
};

export default Main;
