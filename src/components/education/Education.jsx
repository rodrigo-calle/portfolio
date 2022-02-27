import React from 'react';
import './Education.scss';

const Education = () => {
 return (
    <div className="education-container">
        <h1 className="title-education">EDUCACIÓN Y<span> EXPERIENCIA</span></h1>
        <div className="subtitles-education-experience">
            <p className="subtitles-education-experience__education">Educación</p>
            <p className="subtitles-education-experience__experience">Experiencia</p>
        </div>
        <div className="experience-and-education-container">
            <div className="education-container-section">
                <div className="education-container__card">
                    <p className="education-container__card--title">Desarrollador Web Full Stack JS</p>
                    <p className="education-container__card--subtitle"><span>2021-2022</span> Make It Real Bootcamp</p>
                    <p className="education-container__card--description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                     the industry's standard dummy text ever since the 1500s, when an unknown print
                    </p>
                </div>
                <div className="education-container__card">
                    <p className="education-container__card--title">Desarrollador Web Full Stack JS</p>
                    <p className="education-container__card--subtitle"><span>2021-2022</span> Make It Real Bootcamp</p>
                    <p className="education-container__card--description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                     the industry's standard dummy text ever since the 1500s, when an unknown print
                    </p>
                </div>
                <div className="education-container__card">
                    <p className="education-container__card--title">Desarrollador Web Full Stack JS</p>
                    <p className="education-container__card--subtitle"><span>2021-2022</span> Make It Real Bootcamp</p>
                    <p className="education-container__card--description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                     the industry's standard dummy text ever since the 1500s, when an unknown print
                    </p>
                </div>
            </div>
            <div className="experience-container-section">
                <div className="experience-container__card">
                    <p className="experience-container__card--title">Desarrollador Web Full Stack JS</p>
                    <p className="experience-container__card--subtitle"><span>2021-2022</span>  Make It Real Bootcamp</p>
                    <p className="experience-container__card--description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                     the industry's standard dummy text ever since the 1500s, when an unknown print
                    </p>
                </div>
            </div>
        </div>
    </div>
 );
}

export default Education;