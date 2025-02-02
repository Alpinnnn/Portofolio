import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { useLenis } from "lenis/react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const lenis = useLenis();

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const targetSection = document.querySelector("#contact");
    if (targetSection) {
      lenis.scrollTo(targetSection, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-slate-900 to-slate-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:grid md:grid-cols-[1fr,auto,1fr] md:items-center md:gap-8">
        <h1>
          <a href="" className="logo">
            <img src="/images/logo.svg" width={40} height={40} alt="Alpinnnn" />
          </a>
        </h1>

        <div className="relative">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
        <a
          href="#contact"
          onClick={handleScrollToContact}
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
