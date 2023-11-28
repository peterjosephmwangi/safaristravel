import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Destination = () => {
  return (
    <section className="popular" id="destination">
      <div className="container">
        <p className="section-subtitle">Uncover place</p>

        <h2 className="h2 section-title">Popular destination</h2>

        <p className="section-text">
          Kenya beckons with iconic wildlife in Maasai Mara, elephants at
          Amboseli, cultural charm in Nairobi, flamingos at Lake Nakuru, and
          historical allure in Lamu. Diani's beaches and Mount Kenya's peaks add
          to its diverse attractions.
        </p>

        <ul className="popular-list">
          <li>
            <div className="popular-card">
              <figure className="card-img">
                <Image src="/images/masai5.jpg" alt="San miguel, italy" fill />
              </figure>

              <div className="card-content">
                <div className="card-rating">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>

                <p className="card-subtitle">
                  <a href="#">Kenya</a>
                </p>

                <h3 className="h3 card-title">
                  <a href="#">Aberdare Park</a>
                </h3>

                <p className="card-text">
                  Scenic landscapes, wildlife, and lush forests thrive.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="popular-card">
              <figure className="card-img">
                <Image src="/images/masai2.jpg" alt="San miguel, italy" fill />
              </figure>

              <div className="card-content">
                <div className="card-rating">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>

                <p className="card-subtitle">
                  <a href="#">Kenya</a>
                </p>

                <h3 className="h3 card-title">
                  <a href="#">Lake Nakuru Park</a>
                </h3>

                <p className="card-text">
                  Flamingos, diverse wildlife, and scenic beauty.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="popular-card">
              <figure className="card-img">
                <Image src="/images/masai1.jpg" alt="San miguel, italy" fill />
              </figure>

              <div className="card-content">
                <div className="card-rating">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>

                <p className="card-subtitle">
                  <a href="#">Kenya</a>
                </p>

                <h3 className="h3 card-title">
                  <a href="#">Amboseli Park</a>
                </h3>

                <p className="card-text">
                  Kenya is home to abundant impalas and showcasing graceful
                  wildlife.
                </p>
              </div>
            </div>
          </li>
        </ul>

        <button className="btn btn-primary">More destintion</button>
      </div>
    </section>
  );
};

export default Destination;
