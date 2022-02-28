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
                        src="/images/presentacion-kusqi.png" 
                        className="card-video-container__image" 
                        alt="video face"
                    />
                    <p className="card-video-container__title">Presentación de KusqiApp</p>
                    <a 
                        href="https://www.youtube.com/watch?v=05oNiehzu0I&t=2s"
                        target="_blank"
                        rel="noreferrer"
                        style={{textDecoration: "none"}}
                        >
                    <p className="card-video-container__link">      
                   <img 
                        src="https://icongr.am/feather/plus.svg?size=128&color=64bd00" 
                        alt="go to video" />
                    VER VIDEO
                    </p>
                    </a> 
                </div>    
                <div className="card-video-container">
                    <img 
                        src="/images/random-numbers.png" 
                        className="card-video-container__image" 
                        alt="video face"
                    />
                    <p className="card-video-container__title">Número aleatorios en JS</p>
                    <a 
                        href="https://www.youtube.com/watch?v=rVe7funrdtg&t=184s"
                        target="_blank"
                        rel="noreferrer"
                        style={{textDecoration: "none"}}
                        >
                    <p className="card-video-container__link">      
                   <img 
                        src="https://icongr.am/feather/plus.svg?size=128&color=64bd00" 
                        alt="go to video" />
                    VER VIDEO
                    </p>
                    </a> 
                </div>   
                <div className="card-video-container">
                    <img 
                        src="/images/video-1.png" 
                        className="card-video-container__image" 
                        alt="video face"
                    />
                    <p className="card-video-container__title">Conexión Ruby on Rails con MySQL</p>
                    <a 
                        href="https://www.youtube.com/watch?v=FouEZsRAegA&t=2s"
                        target="_blank"
                        rel="noreferrer"
                        style={{textDecoration: "none"}}
                        >
                    <p className="card-video-container__link">      
                   <img 
                        src="https://icongr.am/feather/plus.svg?size=128&color=64bd00" 
                        alt="go to video" />
                    VER VIDEO
                    </p>
                    </a> 
                </div>   
            </div>
            <div className="contact-container" id="contact-section">
                <p className="contact-container__title">¿Interesado en mi Trabajo?</p>
                <p className="contact-container__subtitle">No dudes en enviar un mensaje</p>
                <a 
                    href= "mailto:rodrigoc_0@hotmail.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{textDecoration: "none", cursor: "pointer"}}
                    >
                   <button type="button">Enviar mensaje</button>
                </a>  
            </div>
            <div className="social-container__footer" target="_blank" rel="noreferrer">
                <a href="https://twitter.com/Rodrigo_CesarC">
                    <BsTwitter className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/rodrigocallecastillo/" target="_blank" rel="noreferrer">
                    <BsInstagram className="social-icon"/>
                </a>
                <a href="https://www.linkedin.com/in/rodrigocallecastillo/" target="_blank" rel="noreferrer">
                    <AiFillLinkedin className="social-icon"/>
                </a>
                <a href="https://github.com/rodrigo-calle" target="_blank" rel="noreferrer">
                    <BsGithub  className="social-icon"/>
                </a>         
            </div>
            <footer className="footer-title">Hecho por Rodrigo Calle - 2022</footer>
        </div>
    );
}

export default Videos;