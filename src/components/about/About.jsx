import React from 'react';

import './About.scss';

const About = () => {
    return(
        <div className="about-container">
            <h1 className="title-about">SOBRE<span> MI</span></h1>
            <div className="content-container-about">
                <div className="presentation profile-section" id="about-section">
                    <p className="presentation__title">!HOLA¡ SOY <span>RODRIGO CALLE</span></p>
                    <p className="presentation__content">Soy una persona que gusta mucho de programar
                     aplicaciones web y siempre esta está abierta a nuevos aprendizajes. Cuento con
                      experiencia en soporte TI además de conocimientos de desarrollo cuento con condiciones 
                      técnicas para desenvolverme en entorno de redes y comunicaciones y formar parte de equipos
                       de proyectos que trabajen con metodologías ágiles como SCRUM y tradicionales. 
                       Actualmente estoy en búsqueda de mi primer empleo como desarrollador web profesional.</p>
                    <a 
                        href="rodrigo-calle-castillo-cv.pdf"
                        download="rodrigo-calle-cv"
                        style={{textDecoration: "none"}}
                        >
                        <button className="btn-download-cv" >DESCARGAR MI CV</button>
                    </a>
                     
                </div>
                <div className="profile-data profile-section" >
                    <div className="profile__column-one ">
                        <p className="about-item">Nombre:<span> Rodrigo Calle</span></p>
                        <p className="about-item">Cumpleaños:<span> 29 abril</span></p>
                        <p className="about-item">Nacimiento:<span> Pasco - Perú</span></p>
                        <p className="about-item">Linkedin:<span> Rodrigo Calle</span></p>
                    </div>
                    <div className="profile__column-two ">
                        <p className="about-item">Twitter:<span> @rodcode</span></p>
                        <p className="about-item">Correo:<span> rodrigoc_0@hotmail.com</span></p>
                        <p className="about-item">Idiomas:<span> Español, Ingles</span></p>
                        <p className="about-item">Sitio Web:<span> https://rodrigocalle-dev.web.app/</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;