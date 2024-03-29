import React from "react";

import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="title-about">
        SOBRE<span> MI</span>
      </h1>
      <div className="content-container-about">
        <div className="presentation profile-section" id="about-section">
          <p className="presentation__title">
            !HOLA¡ SOY <span>RODRIGO CALLE</span>
          </p>
          <p className="presentation__content">
            Soy una persona que gusta mucho de programar aplicaciones web y
            siempre esta está abierta a nuevos aprendizajes. Cuento con
            experiencia en soporte TI además de conocimientos de desarrollo
            cuento con condiciones técnicas para desenvolverme en entorno de
            redes y comunicaciones y formar parte de equipos de proyectos que
            trabajen con metodologías ágiles como SCRUM y tradicionales.
            Actualmente estoy en búsqueda de mi primer empleo como desarrollador
            web profesional.
          </p>
          <a
            href="Rodrigo-Calle- cv.pdf"
            download="rodrigo-calle-cv"
            style={{ textDecoration: "none" }}
          >
            <button className="btn-download-cv">DESCARGAR MI CV</button>
          </a>
        </div>
        <div className="profile-data profile-section"></div>
      </div>
    </div>
  );
};
export default About;
