import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up")
    elements.forEach((element) => {
      gsap.to(element, {

        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      })
    })
  })
  return (
    <ReactLenis root>
      <Header></Header>
      <main>
        <Hero></Hero>
        <About></About>
        <Skill></Skill>
        <Work></Work>
        <Review></Review>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </ReactLenis>
  );
};

export default App;
