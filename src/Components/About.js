import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        
        <h1 className="primary-heading">
          ¿Quiénes somos y como lo logramos?
        </h1>
        <p className="primary-text">
          Somos un punto de encuentro entre quienes buscan suministros para los restaurantes y quienes los ofrecen.

        </p>
        <p className="primary-text">
          El mejor precio y falta de stock no volverán a ser un problema, facilitamos el encuentro. Subscríbete para consejos y encuentros.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Ir a buscador de suministros</button>
          <button className= "watch-video-button">
            <BsFillPlayCircleFill /> Mira nuestros encuentros en YouTube
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
