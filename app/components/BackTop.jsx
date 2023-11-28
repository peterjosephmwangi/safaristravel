"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiChevronUp } from "react-icons/bi";
import "../globals.css";
const BackTop = () => {
  const [activeheader, setActiveheader] = useState(false);

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
    <div>
      <Link
        href="#top"
        className={`go-top ${activeheader ? "active" : " "} `}
        aria-label="Back to top"
        data-go-top
      >
        <BiChevronUp />
      </Link>
    </div>
  );
};

export default BackTop;
