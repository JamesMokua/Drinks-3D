import React, { useEffect } from "react";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Scroll } from "@react-three/drei";
const Overlay = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const Section = (props) => {
    return <div className="section">{props.children}</div>;
  };
  return (
    <Scroll html>
      <Section>
        <div id="hero">
          <h1
            className="main-title"
            data-aos="slide-left"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out-back"
            data-aos-delay="50"
          >
            REFRESHING
          </h1>
          <div className="sub-text">
            <p className="textone" data-aos="fade-up" data-aos-duration="2000">
              Our varieties of sodas will leave you wanting more, no reason not
              to try it!
            </p>
            <button className="btn" data-aos="fade-up" data-aos-duration="2000">
              Try It Now!
            </button>
          </div>
        </div>
      </Section>
      <Section>
        <div id="hangover">
          <h1
            className="second-main-title"
            
          >
            QUENCH YOUR THIRST
          </h1>
        </div>
      </Section>
      <Section>
        <div id="end">
         
          
        </div>
      </Section>
    </Scroll>
  );
};

export default Overlay;
