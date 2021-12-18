import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";
export default function AboutMe(props) {
  
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription =ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "I'm a Web Developer and a Competative Programmer, currently living in Chennai,Tamil Nadu. I'm a SRMIST class of 2023 undergraduate majoring in Computer Science and Engineering. My primary interest and inspiration for my studies is Web Development. Apart from above ambition and vision, I also working towards Java Development. I'm both driven and self-motivated and constantly experimenting with new technologies and techniques.",
    highlights: {
      bullets: [
        "Full Stack Web development",
        "Interactive Front End as per the design",
        "React and React Native",
        "Building REST API",
        "Managing database",
        "Java Development",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"}  />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn"> Hire Me </button>
              <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}