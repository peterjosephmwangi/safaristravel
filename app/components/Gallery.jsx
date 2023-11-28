import Image from "next/image";
import React from "react";
import "../globals.css";
const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <p className="section-subtitle">Photo Gallery</p>

        <h2 className="h2 section-title">Photo's From Travellers</h2>

        <p className="section-text">
          Immerse yourself in wanderlust with our captivating tour and travel
          photo gallery. Explore stunning destinations through vibrant visuals
          and memories.
        </p>

        <ul className="gallery-list">
          <li className="gallery-item">
            <figure className="gallery-image">
              <Image
                src="/images/masai.jpg"
                width={250}
                height={300}
                alt="Gallery image1"
              />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              {/* <img src="./assets/images/gallery-2.jpg" alt="Gallery image"> */}
              <Image
                src="/images/masai1.jpg"
                width={250}
                height={300}
                alt="Gallery image2"
              />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              {/* <img src="./assets/images/gallery-3.jpg" alt="Gallery image"> */}
              <Image
                src="/images/masai2.jpg"
                width={250}
                height={300}
                alt="Gallery image3"
              />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              {/* <img src="./assets/images/gallery-4.jpg" alt="Gallery image"> */}
              <Image
                src="/images/masai3.jpg"
                width={250}
                height={300}
                alt="Gallery image4"
              />
            </figure>
          </li>

          <li className="gallery-item">
            <figure className="gallery-image">
              {/* <img src="./assets/images/gallery-5.jpg" alt="Gallery image"> */}
              <Image
                src="/images/masai4.jpg"
                width={250}
                height={300}
                alt="Gallery image5"
              />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
