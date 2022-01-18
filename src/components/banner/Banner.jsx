import React from "react";
import { AiFillHome, AiFillLinkedin } from "react-icons/ai";
import {
  BsFillPersonFill,
  BsFillBriefcaseFill,
  BsYoutube,
  BsPersonSquare,
  BsTwitter,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";
import { BiRocket } from "react-icons/bi";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <img
        src="/images/image-portfolio.png"
        className="banner-container__image"
        alt="baner-background"
      />
      <div className="continer-header-container">
        <div className="banner-container__header">
          <div className="logo">RODRIGO</div>
          <div className="main-menu">
            <li className="main-menu__item item-active">
              {" "}
              <AiFillHome className="icon-menu" /> Home
            </li>
            <li className="main-menu__item">
              {" "}
              <BsFillPersonFill className="icon-menu" />
              About
            </li>
            <li className="main-menu__item">
              {" "}
              <BiRocket className="icon-menu" />
              Servicios{" "}
            </li>
            <li className="main-menu__item">
              {" "}
              <BsFillBriefcaseFill className="icon-menu" />
              Portafolio
            </li>
            <li className="main-menu__item">
              {" "}
              <BsYoutube className="icon-menu" />
              Canal
            </li>
            <li className="main-menu__item">
              {" "}
              <BsPersonSquare className="icon-menu" />
              Contacto
            </li>
          </div>
        </div>
        <div className="banner-content">
          <div className="banner-content__image">
            <div className="banner-content__image--photo"> 
              <img className="profile-photo" src="/images/profile-photo.jpeg"  alt="rodrigo-calle" />
            </div>
          </div>
          <div className="banner-content__info">
            <p className="info__regard">¡HOLA MUNDO!</p>
            <p className="info__presentation">
              SOY <span>DESARROLLADOR WEB</span>
            </p>
            <p className="info__description">
              Soy desarrollador web full stack e Ingeniero de Sistemas
              apasionado por el aprendizaje y el desarrollo de aplicaciones web.
            </p>

            <div className="info__social">
              <BsTwitter />
              <BsInstagram />
              <AiFillLinkedin />
              <BsGithub />
            </div>
            <div className="info__buttons">
              <button type="button" className="about-btn">
                <BsFillPersonFill /> Más sobre mi
              </button>
              <button type="button" className="portfolio-btn">
                <BsFillBriefcaseFill /> Mi Portafolio
              </button>
            </div>
          </div>
        </div>
        <div className="scroll-container">
          <div className="scroll-contianer__animate">
            <div className="scroll-point"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
