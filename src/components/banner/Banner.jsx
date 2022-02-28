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
// import { BiRocket } from "react-icons/bi";

import "./Banner.scss";

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
          <ul className="main-menu-container">
            <li className="main-menu__item item-active">
              {" "}
              <AiFillHome className="icon-menu" />
              <p className="title-menu">Inicio</p>
            </li>
          <a 
            href="#about-section"
            style={{textDecoration: "none", color: "white"}}
            >
           <li className="main-menu__item">
              {" "}
              <BsFillPersonFill className="icon-menu" />
              <p className="title-menu">Sobre mi</p>
            </li>
            </a>
{/*             <li className="main-menu__item">
              {" "}
              <BiRocket className="icon-menu" />
              <p className="title-menu">Servicios</p>
            </li> */}
            <a 
            href="#portfolio-section"
            style={{textDecoration: "none", color: "white"}}
            >
            <li className="main-menu__item">
              {" "}
              <BsFillBriefcaseFill className="icon-menu" />
              <p className="title-menu">Portafolio</p>
            </li>
            </a>
            <a 
            href="https://www.youtube.com/channel/UCQTu0e9VvdyH_rAtfsrdStQ" 
            target="_blank" 
            rel="noreferrer"
            style={{textDecoration: "none", color: "white"}}
            >
            <li className="main-menu__item">
              {" "}
              <BsYoutube className="icon-menu" />
              <p className="title-menu">Canal</p>
            </li>
            </a>
            <a 
            href="#contact-section"
            style={{textDecoration: "none", color: "white"}}
            >
            <li className="main-menu__item">
              {" "}
              <BsPersonSquare className="icon-menu" />
              <p className="title-menu">Contacto</p>
            </li>
            </a>
          </ul>            
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
            <a 
            href="#about-section"
            style={{textDecoration: "none", color: "white"}}
            >
              <button type="button" className="about-btn">
                <BsFillPersonFill /> Más sobre mi
              </button>
            </a>
            <a 
            href="#portfolio-section"
            style={{textDecoration: "none", color: "white"}}
            >
              <button type="button" className="portfolio-btn">
                <BsFillBriefcaseFill /> Mi Portafolio
              </button>
            </a>
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
