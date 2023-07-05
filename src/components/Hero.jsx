import React from "react";
import { Typewriter } from "react-simple-typewriter";

const CornerEmoji = ({ emoji, position }) => {
  return (
    <div className={`corner-emoji corner-emoji-${position}`}>
      <span role="img" aria-label="emoji">
        {emoji}
      </span>
    </div>
  );
};

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <CornerEmoji emoji="🌟" position="top-left" />
        <CornerEmoji emoji="🎉" position="top-right" />
        <CornerEmoji emoji="🎮" position="bottom-left" />
        <CornerEmoji emoji="🕹️" position="bottom-right" />
        <h1 className="heading">
          <Typewriter
              words={["Unleash the Fun with Google Arcade."]}
              typeSpeed={60}
          />
        </h1>
      </div>
    </div>
  );
};

export default HeroBanner;
