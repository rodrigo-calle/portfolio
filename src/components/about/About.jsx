import React from 'react';

import './About.css';

const About = () => {
    return(
        <div className="about-container">
            <h1 className="title-about">SOBRE<span> MI</span></h1>
            <div className="content-container-about">
                <div className="presentation profile-section">
                    <p className="presentation__title">!HOLA¡ SOY <span>RODRIGO CALLE</span></p>
                    <p className="presentation__content">Lorem Ipsum is simply dummy text of the printing
                     and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                     ever since the 1500s, when an unknown print</p>

                     <button className="btn-download-cv" >DESCARGAR MI CV</button>
                </div>
                <div className="profile-data profile-section" >
                    <div className="profile__column-one ">
                        <p className="about-item">Nombre:<span> Rodrigo Calle</span></p>
                        <p className="about-item">Cumpleaños:<span> 29 abril</span></p>
                        <p className="about-item">Nacimiento:<span> Cerro de Pasco - Perú</span></p>
                        <p className="about-item">Linkedin:<span> Rodrigo Calle</span></p>
                    </div>
                    <div className="profile__column-two ">
                        <p className="about-item">Twitter:<span> @rodcode</span></p>
                        <p className="about-item">Correo:<span> rodrigoc_0@hotmail.com</span></p>
                        <p className="about-item">Idiomas:<span> Español, Ingles</span></p>
                        <p className="about-item">Sitio Web:<span> rodrigocalle.dev</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;