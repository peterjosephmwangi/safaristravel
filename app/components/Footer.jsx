import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaChevronRight } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import "../globals.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="about-us" data-aos="fade-right" data-aos-delay="200">
          <h2 className="h3">About us</h2>
          <p>
            "Passionate guides crafting memorable journeys for your travel
            adventures."
          </p>
        </div>
        <div className="newsletter" data-aos="fade-right" data-aos-delay="200">
          <h2 className="h3">Newsletter</h2>
          <p>Stay update with our latest</p>
          <div className="form-element">
            <input type="text" placeholder="Email" />
            <span>
              <FaChevronRight />
            </span>
          </div>
        </div>
        <div className="instagram" data-aos="fade-left" data-aos-delay="200">
          <h2 className="h3">Instagram</h2>
          <div className="flex-row">
            <Image
              src="/images/thumb-card3.png"
              width={60}
              height={60}
              alt="insta1"
            />
            <Image
              src="/images/thumb-card4.png"
              width={60}
              height={60}
              alt="insta2"
            />
            <Image
              src="/images/thumb-card5.png"
              width={60}
              height={60}
              alt="insta3"
            />
          </div>
          <div className="flex-row">
            <Image
              src="/images/thumb-card6.png"
              width={60}
              height={60}
              alt="insta3"
            />
            <Image
              src="/images/thumb-card7.png"
              width={60}
              height={60}
              alt="insta3"
            />
            <Image
              src="/images/thumb-card8.png"
              width={60}
              height={60}
              alt="insta3"
            />
          </div>
        </div>
        <div className="follow" data-aos="fade-left" data-aos-delay="200">
          <h2 className="h3">Follow us</h2>
          <p>Let us be Social</p>
          <div>
            <ul class="social-list">
              <li>
                <a href="#" class="social-link">
                  <FaFacebook style={{ color: "blue" }} />
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <BsTwitter style={{ color: "blue" }} />
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <FaInstagram style={{ color: "#E1306C" }} />
                </a>
              </li>
              <li>
                <a href="#" class="social-link">
                  <FiYoutube style={{ color: "red" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rights flex-row">
        <h4
          className="text-gray"
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          Copyright ©{new Date().getFullYear()} All rights reserved.
        </h4>
      </div>
      <div className="move-up">
        <span>
          <i className="fas fa-arrow-circle-up fa-2x"></i>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
