"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import "../globals.css";
const HeaderMain = () => {
  const [activeheader, setActiveheader] = useState(false);
  const [openmenu, setOpenmenu] = useState(false);

  const isActive = () => {
    window.scrollY >= 200 ? setActiveheader(true) : setActiveheader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    <header className={`header ${activeheader ? "active" : " "} `}>
      <div
        className={`overlay ${openmenu ? "active" : " "}`}
        data-overlay
      ></div>

      <div className="header-top">
        <div className="container">
          <Link href="tel:+01123456790" className="helpline-box">
            <div className="icon-box">
              <IoCallOutline />
            </div>

            <div className="wrapper">
              <p className="helpline-title">For Further Inquires :</p>

              <p className="helpline-number">+254 (123) 4567 90</p>
            </div>
          </Link>

          <Link href="#" className="logo">
            {/* <img src="./assets/images/logo.svg" alt="Tourly logo"> */}
            <div className="h3">Safaris&middot;Travels</div>
          </Link>

          <div className="header-btn-group">
            <button className="search-btn" aria-label="Search">
              <CiSearch style={{ color: "#001F3F" }} />
            </button>

            <button
              className="nav-open-btn"
              aria-label="Open Menu"
              data-nav-open-btn
              onClick={() => setOpenmenu(true)}
            >
              <AiOutlineMenu style={{ color: "#001F3F" }} />
            </button>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className={`container ${openmenu ? "active" : " "}`}>
          <div className="h3">
            {!openmenu && <Link href="/">Safaris&middot;Travels</Link>}
          </div>

          <nav className={`navbar ${openmenu ? "active" : " "} `} data-navbar>
            <div className="navbar-top">
              <Link href="/" className="logo">
                {/* <img src="./assets/images/logo-blue.svg" alt="Tourly logo"> */}
                Safaris&middot;Travels
              </Link>

              <button
                className="nav-close-btn"
                aria-label="Close Menu"
                data-nav-close-btn
                onClick={() => setOpenmenu(false)}
              >
                <IoMdClose />
              </button>
            </div>

            <ul className="navbar-list">
              <li>
                <Link
                  href="#home"
                  className="navbar-link"
                  onClick={() => setOpenmenu(false)}
                  data-nav-link
                >
                  home
                </Link>
              </li>

              <li>
                <Link
                  href="#destination"
                  className="navbar-link"
                  onClick={() => setOpenmenu(false)}
                  data-nav-link
                >
                  destination
                </Link>
              </li>

              <li>
                <Link
                  href="#package"
                  className="navbar-link"
                  onClick={() => setOpenmenu(false)}
                  data-nav-link
                >
                  packages
                </Link>
              </li>

              <li>
                <Link
                  href="#gallery"
                  className="navbar-link"
                  onClick={() => setOpenmenu(false)}
                  data-nav-link
                >
                  gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="navbar-link"
                  onClick={() => setOpenmenu(false)}
                  data-nav-link
                >
                  about us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="navbar-link"
                  onClick={() => setOpenmenu(false)}
                  data-nav-link
                >
                  contact us
                </Link>
              </li>
            </ul>
          </nav>

          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
