import Image from "next/image";
import React from "react";
import "../globals.css";
const About = () => {
  return (
    <section class="section  about" id="about" aria-label="about">
      <p className="section-subtitle text-center aboutus">About Us</p>
      <div class="container">
        <figure class="about-banner">
          <Image
            src="/images/masai5.jpg"
            width={470}
            height={538}
            loading="lazy"
            alt="about banner"
            class="w-100"
          />
        </figure>

        <div class="about-content">
          {/* <p class="section-subtitle">About Us</p> */}

          <h2 class="h2 section-title">
            Welcome To Our{" "}
            <span className="blogspan">Safaris&middot;Travels.</span>
          </h2>

          <p class="section-text section-text-1">
            Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam
            quis volutpat est, sed dapibus sapien. Cras condimentum eu velit id
            tempor. Curabitur purus sapien, cursus sed nisl tristique, commodo
            vehicula arcu.
          </p>

          <p class="section-text">
            Aliquam erat volutpat. Aliquam enim massa, sagittis blandit ex
            mattis, ultricies posuere sapien. Morbi a dignissim enim. Fusce
            elementum, augue in elementum porta, sapien nunc volutpat ex, a
            accumsan nunc lectus eu lectus.
          </p>

          <a href="#" class="btn">
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
