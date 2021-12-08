// Generated with util/create-component.js
import * as React from "react";

import { HeroProps } from "./Hero.types";

import "./Hero.scss";

const Hero: React.FC<HeroProps> = ({ bgImg, overlayColour, children }) => (
  <div data-testid="Hero" className="hero">
    <div className="hero-inner">
      {overlayColour && (
        <div
          className="hero-overlay"
          style={{ backgroundColor: overlayColour }}
        />
      )}
      {bgImg && (
        <div
          className="hero-img"
          style={{
            backgroundImage: `url("${bgImg}")`,
          }}
        />
      )}
      <div className="hero-content">{children}</div>
    </div>
  </div>
);

export default Hero;
