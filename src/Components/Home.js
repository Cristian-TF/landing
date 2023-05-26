import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Comunidad de emprendedores del rubro gastronómico
          </h1>
          <p className="primary-text">
             "No pares hasta cumplir tus metas".
          </p>
          <button className="secondary-button">
            <iframe width="200" height="150" src="https://www.youtube.com/embed/vHA4naE1hCE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <FiArrowRight />{"Encuéntranos en redes sociales"}
          </button>

          

        </div>
        <div className="home-image-section">
          
          <img src={BannerImage} alt="https://youtu.be/zUhLG7Gb7WY" />

          
        
        </div>
      </div>
    </div>
  );
};

export default Home;
