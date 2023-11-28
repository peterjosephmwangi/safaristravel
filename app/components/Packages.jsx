import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import "../globals.css";

const Packages = () => {
  return (
    <section className="package" id="package">
      <div className="container">
        <p className="section-subtitle">Popular Packeges</p>

        <h2 className="h2 section-title">Checkout Our Packeges</h2>

        <p className="section-text">
          Explore tailored travel experiences with our diverse tour packages.
          Discover destinations, cultural delights, and adventures, creating
          memorable journeys for everyone.
        </p>

        <ul className="package-list">
          <li>
            <div className="package-card">
              <figure className="card-banner">
                <Image
                  src="/images/naks1.jpg"
                  height={250}
                  width={250}
                  alt="Experience The Great Holiday On Beach"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3 card-title">
                  Experience The Great Holiday On L. Nakuru
                </h3>

                <p className="card-text">
                  "Embark on a sublime holiday at Lake Nakuru, Kenya. Witness
                  the serene beauty of the lake, marvel at vast flocks of
                  flamingos, and encounter diverse wildlife in this enchanting
                  natural haven."
                </p>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <FaRegClock />

                      <p className="text">7D/6N</p>
                    </div>
                  </li>

                  <li className="card-meta-item">
                    <div className="meta-box">
                      <BsFillPersonFill />

                      <p className="text">pax: 10</p>
                    </div>
                  </li>

                  <li className="card-meta-item">
                    <div className="meta-box">
                      <FaLocationDot />

                      <p className="text">Kenya</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card-price">
                <div className="wrapper">
                  <p className="reviews">(25 reviews)</p>

                  <div className="card-rating">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>

                <p className="price">
                  $750
                  <span>/ per person</span>
                </p>

                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>

          <li>
            <div className="package-card">
              <figure className="card-banner">
                <Image
                  src="/images/naks2.jpg"
                  height={250}
                  width={250}
                  alt="Summer Holiday To The Oxolotan River"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3 card-title">
                  Summer Holiday To The Lake Nakuru
                </h3>

                <p className="card-text">
                  "Escape to the tranquility of Lake Nakuru on your summer
                  holiday. Immerse yourself in the breathtaking landscapes,
                  witness vibrant flamingos, and embrace the wonders of Kenya's
                  rich wildlife and culture."
                </p>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <FaRegClock />

                      <p className="text">7D/6N</p>
                    </div>
                  </li>

                  <li className="card-meta-item">
                    <div className="meta-box">
                      <BsFillPersonFill />

                      <p className="text">pax: 10</p>
                    </div>
                  </li>

                  <li className="card-meta-item">
                    <div className="meta-box">
                      <FaLocationDot />

                      <p className="text">Kenya</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card-price">
                <div className="wrapper">
                  <p className="reviews">(20 reviews)</p>

                  <div className="card-rating">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>

                <p className="price">
                  $520
                  <span>/ per person</span>
                </p>

                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>

          <li>
            <div className="package-card">
              <figure className="card-banner">
                <Image
                  src="/images/naks3.jpg"
                  height={250}
                  width={250}
                  alt="Santorini Island's Weekend Vacation"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3 card-title">
                  Weekend Vacation To The Aberdare National Park
                </h3>

                <p className="card-text">
                  "Indulge in a rejuvenating weekend getaway at Aberdare
                  National Park. Immerse yourself in lush landscapes, spot
                  diverse wildlife, and unwind in the heart of Kenya's
                  captivating natural beauty and tranquility."
                </p>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <div className="meta-box">
                      <FaRegClock />

                      <p className="text">7D/6N</p>
                    </div>
                  </li>

                  <li className="card-meta-item">
                    <div className="meta-box">
                      <BsFillPersonFill />

                      <p className="text">pax: 10</p>
                    </div>
                  </li>

                  <li className="card-meta-item">
                    <div className="meta-box">
                      <FaLocationDot />

                      <p className="text">Kenya</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card-price">
                <div className="wrapper">
                  <p className="reviews">(40 reviews)</p>

                  <div className="card-rating">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>

                <p className="price">
                  $660
                  <span>/ per person</span>
                </p>

                <button className="btn btn-secondary">Book Now</button>
              </div>
            </div>
          </li>
        </ul>

        <button className="btn btn-primary">View All Packages</button>
      </div>
    </section>
  );
};

export default Packages;
