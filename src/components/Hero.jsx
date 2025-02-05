import React from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";
import { useLenis } from "lenis/react";

const Hero = () => {
  const lenis = useLenis();

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const targetSection = document.querySelector("#about");
    if (targetSection) {
      lenis.scrollTo(targetSection, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container grid items-center lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                width={40}
                height={40}
                alt=""
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-slate-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon={"download"} />{" "}
            <ButtonOutline
              label="Scroll down"
              icon={"arrow_downward"}
              onClick={handleScrollToAbout}
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-emerald-500 via-25% via-emerald-500/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/hero-banner.png"
              width={656}
              height={800}
              alt=""
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
