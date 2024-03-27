import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/mern.jpg" alt="mern" />

      <div className="item">
        <h3>Welcome To My Portfolio</h3>
        <div>
          <h1>Mern Stack Developer</h1>
          <p>I will be your mern stack web developer.</p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
