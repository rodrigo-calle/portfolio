import React from 'react'
import './Videos.scss';
import { AiFillLinkedin } from "react-icons/ai";
import {
    BsTwitter,
    BsInstagram,
    BsGithub,
  } from "react-icons/bs";

const Videos = () => {
    return (
        <div className="videos-container">
            <h1 className="title-portfolio">ÚLTIMOS<span> VIDEOS</span></h1>
            <div className="videos-list-container">
                <div className="card-video-container">
                    <img 
                        src="/images/banner-image.jpeg" 
                        className="card-video-container__image" 
                        alt="video face"
                    />
                    <p className="card-video-container__title">titulo</p>
                    <p className="card-video-container__link">
                    <img 
                        src="https://icongr.am/feather/plus.svg?size=128&color=64bd00" 
                        alt="go to video" />
                    VER VIDEO
                    </p>
                </div>    
                <div className="card-video-container">
                    <img 
                        src="/images/banner-image.jpeg" 
                        className="card-video-container__image" 
                        alt="video face"
                    />
                    <p className="card-video-container__title">titulo</p>
                    <p className="card-video-container__link">
                    <img 
                        src="https://icongr.am/feather/plus.svg?size=128&color=64bd00" 
                        alt="go to video" />
                    VER VIDEO
                    </p>
                </div>   
                <div className="card-video-container">
                    <img 
                        src="/images/banner-image.jpeg" 
                        className="card-video-container__image" 
                        alt="video face"
                    />
                    <p className="card-video-container__title">titulo</p>
                    <p className="card-video-container__link">
                    <img 
                        src="https://icongr.am/feather/plus.svg?size=128&color=64bd00" 
                        alt="go to video" />
                    VER VIDEO
                    </p>
                </div>   
            </div>
            <div className="contact-container">
                <p className="contact-container__title">¿Interesado en mi Trabajo?</p>
                <p className="contact-container__subtitle">No dudes en enviar un mensaje</p>
                <button type="button">Enviar mensaje</button>
            </div>
            <div className="social-container__footer">
              <BsTwitter className="social-icon" />
              <BsInstagram className="social-icon"/>
              <AiFillLinkedin className="social-icon"/>
              <BsGithub  className="social-icon"/>
            </div>
            <footer className="footer-title">Hecho por Rodrigo Calle - 2022</footer>
        </div>
    );
}

export default Videos;