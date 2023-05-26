import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Contacto</span>
          
          <span>Trabaja con nosotros</span>             
        </div>
        <div className="footer-section-columns">
          <span>+569 44 25 2128</span>
         
          <span>trabajo@gmail.com</span>
          
        </div>
        <div className="footer-section-columns">
          <span>Términos y condiciones</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
