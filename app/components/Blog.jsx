import Image from "next/image";
import React from "react";
import { SlCalender } from "react-icons/sl";
import "../globals.css";
const Blog = () => {
  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container">
        <p className="section-subtitle text-center">Our Blog</p>

        <h2 className="h2 section-title text-center">Latest Blog & News</h2>

        <ul className="blog-list">
          <li>
            <div className="blog-card">
              <figure
                className="card-banner img-holder"
                // style="--width: 1180; --height: 800;"
              >
                <Image
                  src="/images/masai.jpg"
                  width={1180}
                  height={800}
                  loading="lazy"
                  alt="Cras accumsan nulla nec lacus ultricies placerat."
                  className="img-cover"
                />

                <div className="card-badge">
                  <SlCalender />

                  <time className="time" datetime="2022-03-24">
                    24th March 2022
                  </time>
                </div>
              </figure>

              <div className="card-content">
                <h3 className="h4">
                  <a href="#" className="card-title">
                    A Journey Through Enchanting National Parks
                  </a>
                </h3>

                <p className="card-text">
                  Embracing Wilderness: Chronicles of Tranquil Escapes and
                  Thrilling Adventures in Nature's Sanctuaries. A Journey
                  Through Enchanting
                </p>

                <a href="#" className="card-link">
                  Read More
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure
                className="card-banner img-holder"
                // style="--width: 1180; --height: 800;"
              >
                <Image
                  src="/images/masai4.jpg"
                  width={1180}
                  height={800}
                  loading="lazy"
                  alt="Dras accumsan nulla nec lacus ultricies placerat."
                  className="img-cover"
                />

                <div className="card-badge">
                  <SlCalender />

                  <time className="time" datetime="2022-03-24">
                    24th March 2022
                  </time>
                </div>
              </figure>

              <div className="card-content">
                <h3 className="h4">
                  <a href="#" className="card-title">
                    Tales of Exploration in Nature's Playground.
                  </a>
                </h3>

                <p className="card-text">
                  Parks & Peaks: Navigating the Untamed Beauty of Natural
                  Reserves, Where Every Trail Tells a Story of Breathtaking
                  Exploration.
                </p>

                <a href="#" className="card-link">
                  Read More
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure
                className="card-banner img-holder"
                // style="--width: 1180; --height: 800;"
              >
                <Image
                  src="/images/masai5.jpg"
                  width={1180}
                  height={800}
                  loading="lazy"
                  alt="Seas accumsan nulla nec lacus ultricies placerat."
                  className="img-cover"
                />

                <div className="card-badge">
                  <SlCalender />

                  <time className="time" datetime="2022-03-24">
                    24th March 2022
                  </time>
                </div>
              </figure>

              <div className="card-content">
                <h3 className="h4">
                  <a href="#" className="card-title">
                    Discovering the Untamed Beauty of National Parks.
                  </a>
                </h3>

                <p className="card-text">
                  Serene Sanctuaries: Journeying Through Nature's Best-Kept
                  Secrets, A Blog Celebrating the Majesty and Mystique of
                  Earth's Pristine Parks.
                </p>

                <a href="#" className="card-link">
                  Read More
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
